import { sendContactInquiry } from "@/app/lib/email/resend";

const requiredFields = ["name", "email", "phone", "type", "segment", "message"];

function cleanValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const payload = await request.json();

    const inquiry = {
      name: cleanValue(payload.name),
      email: cleanValue(payload.email),
      phone: cleanValue(payload.phone),
      type: cleanValue(payload.type),
      segment: cleanValue(payload.segment),
      message: cleanValue(payload.message),
    };

    const missingField = requiredFields.find((field) => !inquiry[field]);

    if (missingField) {
      return Response.json(
        { error: `Please provide ${missingField}.` },
        { status: 400 }
      );
    }

    if (!isValidEmail(inquiry.email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await sendContactInquiry(inquiry);

    return Response.json({
      message: "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact inquiry failed:", error);

    return Response.json(
      {
        error:
          error.message ||
          "Unable to send your inquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
