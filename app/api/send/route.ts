export const runtime = 'edge';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const { senderEmail, message } = await request.json();

    // Validate the senderEmail and message
    if (!senderEmail || !message) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
      return Response.json({ error: "Invalid input length" }, { status: 400 });
    }

    try {
      const data = await fetch('https://api.resend.com/emails', {
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
            <body style={{ backgroundColor: "#f7fafc", color: "#000000" }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #000000", margin: "40px 0", padding: "20px", borderRadius: "8px" }}>
                <h1 style={{ lineHeight: "1.25" }}>
                You received the following message from the contact form
                </h1>
                <p>${message}</p>
                <hr />
                <p>The sender's email is: ${senderEmail}</p>
                </div>
            </div>
            </body>
            </html>`,
        }),
      });


      const response = await data.json();
      console.log(response);
      return Response.json(response, { status: 200 });
    } catch (error) {
      return Response.json({ error: getErrorMessage(error) }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}