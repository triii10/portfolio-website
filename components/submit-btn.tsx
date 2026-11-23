import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 flex h-12 items-center justify-center gap-2 self-start rounded-full bg-gray-900 px-5 text-white transition-colors hover:bg-gray-700 disabled:opacity-60 dark:bg-white/15 dark:hover:bg-white/25"
      data-umami-event="submit-contact"
    >
      {pending ? "Sending…" : "Send message"}
      <FaPaperPlane className="text-xs opacity-70" aria-hidden="true" />
    </button>
  );
}
