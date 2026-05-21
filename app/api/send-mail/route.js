import { sendContactInquiry } from "@/app/lib/email/resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await sendContactInquiry({
      name,
      email,
      phone,
      message,
      type: body.type || "General inquiry",
      segment: body.segment || "Not specified",
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Send mail failed:", error);

    return Response.json(
      { error: error.message || "Unable to send email right now." },
      { status: 500 }
    );
  }
}
