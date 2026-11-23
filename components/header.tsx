"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "@/lib/data";
import clsx from "clsx";

type SectionName = (typeof links)[number]["name"];

export default function Header() {
  const header = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  useEffect(() => {
    const sections = links.map(({ hash, name }) => ({
      element: document.getElementById(hash.slice(1)),
      name,
    }));
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const navBottom = header.current?.getBoundingClientRect().bottom ?? 0;
      const marker = Math.min(navBottom + 80, window.innerHeight / 2);
      const lastSection = sections.at(-1);
      const nearBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      let nextSection: SectionName = "Home";
      for (const { element, name } of sections) {
        if (element && element.getBoundingClientRect().top <= marker) {
          nextSection = name;
        }
      }
      setActiveSection(nearBottom && lastSection?.element ? lastSection.name : nextSection);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      ref={header}
      className="fixed inset-x-0 top-0 z-50 mx-auto border border-white/40 bg-white/80 px-2 py-1 shadow-lg shadow-black/5 backdrop-blur-md sm:top-6 sm:w-fit sm:rounded-full sm:px-3 sm:py-2 dark:border-black/40 dark:bg-gray-950/80"
    >
      <nav aria-label="Primary navigation">
        <ul className="grid grid-cols-3 gap-x-1 text-center text-sm font-medium sm:flex">
          {links.map(({ name, hash }) => (
            <li key={hash}>
              <a
                href={hash}
                aria-current={activeSection === name ? "location" : undefined}
                className={clsx(
                  "block rounded-full px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeSection === name
                    ? "bg-gray-200 text-gray-950 dark:bg-gray-800 dark:text-gray-50"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
