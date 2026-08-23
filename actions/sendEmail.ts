"use client";

import { validateString, getErrorMessage } from "@/lib/utils";
export const runtime = 'edge';

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderEmail: senderEmail,
        message: message,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.error || "Failed to send email",
      };
    }

    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

};
