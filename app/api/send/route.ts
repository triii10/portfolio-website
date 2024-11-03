export const runtime = 'edge';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      const data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['hi@trilok.dev'],
        subject: 'Message from contact form',
        react: React.createElement(ContactFormEmail, { message, senderEmail }),
      });

      return Response.json(data);
    } catch (error) {
      return Response.json({ error: getErrorMessage(error) }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}