import clsx from "clsx";
import { timelineData } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section id="experience" className="mb-28 w-full max-w-3xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience &amp; education</SectionHeading>
      <ol className="space-y-6 border-l border-gray-300 pl-5 sm:pl-8 dark:border-white/20">
        {timelineData.map(({ kind, title, organisation, description, date, project }) => (
          <li key={`${organisation}-${title}`} className="relative">
            <span
              aria-hidden="true"
              className={clsx(
                "absolute -left-[1.6rem] top-7 h-3 w-3 rounded-full ring-4 ring-gray-50 sm:-left-[2.35rem] dark:ring-gray-900",
                kind === "education"
                  ? "border-2 border-indigo-600 bg-gray-50 dark:border-indigo-300 dark:bg-gray-900"
                  : "bg-gray-500 dark:bg-gray-400"
              )}
            />
            <div className="rounded-xl border border-black/5 bg-gray-100 p-5 dark:bg-white/5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{date}</p>
              </div>
              <p className="mt-1 font-medium">
                {organisation}
                {kind === "education" && (
                  <span className="ml-2 inline-block text-sm text-indigo-700 dark:text-indigo-300">
                    Education
                  </span>
                )}
              </p>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                {description}
              </p>
              {project && (
                <a
                  href={project.href}
                  className="mt-3 inline-block text-sm font-medium text-indigo-800 underline underline-offset-4 dark:text-indigo-200"
                >
                  {project.label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
