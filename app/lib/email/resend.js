const RESEND_API_URL = "https://api.resend.com/emails";

const fieldLabels = {
  name: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  type: "Inquiry Type",
  segment: "Therapeutic Segment",
  message: "Message",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatInquiryRows(inquiry) {
  return Object.entries(fieldLabels)
    .map(([key, label]) => {
      const value = inquiry[key] || "Not provided";

      return `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f766e;font-weight:700;width:180px;">${label}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
        </tr>
      `;
    })
    .join("");
}

function buildInquiryEmail(inquiry) {
  const subject = `New ${inquiry.type} inquiry from ${inquiry.name}`;

  const html = `
    <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
        <div style="padding:28px 32px;background:#020617;color:#ffffff;">
          <p style="margin:0 0 10px;color:#5eead4;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Nova Bio-Pharma Pvt Ltd</p>
          <h1 style="margin:0;font-size:28px;line-height:1.25;">New website inquiry</h1>
          <p style="margin:12px 0 0;color:#cbd5e1;line-height:1.6;">A visitor submitted the contact form on the Nova Bio-Pharma website.</p>
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tbody>${formatInquiryRows(inquiry)}</tbody>
        </table>
      </div>
    </div>
  `;

  const text = Object.entries(fieldLabels)
    .map(([key, label]) => `${label}: ${inquiry[key] || "Not provided"}`)
    .join("\n");

  return { subject, html, text };
}

export async function sendContactInquiry(inquiry) {
  const apiKey = process.env.RESEND_API_KEY || process.env.MAILSEND_API_KEY;
  const from =
    process.env.RESEND_FROM_EMAIL ||
    process.env.MAILSEND_FROM_EMAIL ||
    "Nova Bio-Pharma <onboarding@resend.dev>";
  const to =
    process.env.CONTACT_TO_EMAIL ||
    process.env.MAILSEND_TO_EMAIL ||
    "novabiopharmajdr@gmail.com";

  if (!apiKey) {
    throw new Error(
      "Missing RESEND_API_KEY or MAILSEND_API_KEY environment variable."
    );
  }

  const { subject, html, text } = buildInquiryEmail(inquiry);

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: inquiry.email,
      subject,
      html,
      text,
    }),
  });

  const responseText = await response.text();
  let data = {};

  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }
  }

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      `Resend email request failed with status ${response.status}.`;
    throw new Error(message);
  }

  return data;
}
