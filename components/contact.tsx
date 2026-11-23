"use client";

import { useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

const deliveryError = "Unable to send your message. Please try again or email me directly.";

export default function Contact() {
  const sending = useRef(false);
  const [pending, setPending] = useState(false);

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    sending.current = true;
    setPending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderEmail: fields.get("senderEmail"),
          message: fields.get("message"),
        }),
      });
      const data = await response.json();

      if (!response.ok || data.success !== true) {
        toast.error(response.status === 400 && typeof data.error === "string" ? data.error : deliveryError);
        return;
      }

      form.reset();
      toast.success("Message sent.");
    } catch {
      toast.error(deliveryError);
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return (
    <section id="contact" className="mb-20 w-full max-w-[38rem] scroll-mt-28 text-center sm:mb-28">
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-gray-300">
        Email me at <a className="underline" href="mailto:hi@trilok.dev">hi@trilok.dev</a>{" "}
        or send a message below.
      </p>

      <form
        action="/api/send"
        method="post"
        onSubmit={submitMessage}
        aria-busy={pending}
        className="mt-8 text-left"
      >
        <fieldset disabled={pending} className="flex min-w-0 flex-col gap-2">
          <label htmlFor="senderEmail" className="text-sm font-medium">Your email</label>
          <input
            id="senderEmail"
            className="h-14 w-full rounded-lg borderBlack bg-white px-4 dark:border-white/20 dark:bg-white/10"
            name="senderEmail"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
          />
          <label htmlFor="message" className="mt-3 text-sm font-medium">Your message</label>
          <textarea
            id="message"
            className="h-52 w-full rounded-lg borderBlack bg-white p-4 dark:border-white/20 dark:bg-white/10"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitBtn pending={pending} />
        </fieldset>
      </form>
    </section>
  );
}
