import Image from "next/image";
import type { PortfolioProject } from "@/lib/data";

export default function Project({
  id,
  title,
  description,
  tags,
  imageUrl,
  links,
}: PortfolioProject) {
  return (
    <article
      aria-labelledby={id}
      className="rounded-xl border border-black/5 bg-gray-100 p-5 sm:p-7 dark:bg-white/5"
    >
      <div className="flex flex-wrap items-center gap-4">
        {imageUrl && (
          <Image
            src={imageUrl}
            width={56}
            height={56}
            alt=""
            className="h-14 w-14 rounded-lg bg-white object-contain p-2"
          />
        )}
        <h3 id={id} className="scroll-mt-28 text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-800 dark:bg-white/10 dark:text-gray-200"
          >
            {tag}
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        {links.map(({ label, href, download }) => (
          <li key={href}>
            <a
              href={href}
              download={download}
              className="underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label={`${label} for ${title}`}
              data-umami-event={`${download ? "download" : "click"}-project-${id}`}
              data-umami-event-link={label}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
