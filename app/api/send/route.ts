const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const deliveryError = "Unable to send your message. Please try again or email me directly.";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const senderEmail = "senderEmail" in body && typeof body.senderEmail === "string"
    ? body.senderEmail.trim()
    : "";
  const message = "message" in body && typeof body.message === "string"
    ? body.message.trim()
    : "";

  if (senderEmail.length > 254 || !emailPattern.test(senderEmail)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return Response.json({ error: "Enter a message of up to 5,000 characters." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form is missing RESEND_API_KEY.");
    return Response.json({ error: deliveryError }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>",
        to: ["hi@trilok.dev"],
        reply_to: senderEmail,
        subject: "Message from trilok.dev",
        text: `From: ${senderEmail}\n\n${message}`,
      }),
    });

    if (response.ok) {
      return Response.json({ success: true });
    }

    console.error("Resend rejected the contact message with status", response.status);
  } catch {
    console.error("Could not reach Resend from the contact form.");
  }

  return Response.json({ error: deliveryError }, { status: 502 });
}
