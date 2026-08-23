import { getErrorMessage, validateString } from '@/lib/utils';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const { senderEmail, message } = await request.json();

    if (
      !validateString(senderEmail, 254) ||
      !emailPattern.test(senderEmail) ||
      !validateString(message, 5000)
    ) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "The contact form is not configured yet." },
        { status: 500 }
      );
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'hi@trilok.dev',
          subject: 'Message from contact form',
          html: `<html>
            <head>
            <title>New message from your portfolio site</title>
            </head>
            <body style="background-color: #f7fafc; color: #000000;">
            <div style="max-width: 600px; margin: 0 auto;">
                <div style="background-color: #ffffff; border: 1px solid #000000; margin: 40px 0; padding: 20px; border-radius: 8px;">
                <h1 style="line-height: 1.25;">
                You received the following message from the contact form
                </h1>
                <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
                <hr />
                <p>The sender's email is: ${escapeHtml(senderEmail)}</p>
                </div>
            </div>
            </body>
            </html>`,
        }),
      });


      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return Response.json(
          { error: data?.message || "Unable to send the email." },
          { status: response.status }
        );
      }

      return Response.json(data, { status: 200 });
    } catch (error) {
      return Response.json({ error: getErrorMessage(error) }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
