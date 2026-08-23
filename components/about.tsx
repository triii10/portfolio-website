"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a proactive and results-oriented software engineer with more than four years of combined experience in software development, testing, and automation. I have a strong foundation in Python, C++, and C#, with a focus on developing robust, fault-tolerant systems and improving the tools around them. I&apos;m currently a Software Engineer at TP ICAP, where I work on high-throughput applications and developer tooling.
      </p>
      <p className="mb-3">
        At TP ICAP, I have worked on modernising a large C++ codebase, developing reusable logging and audit-trail systems, investigating production issues, and optimising CI/CD pipelines. My work has included a 32-bit to 64-bit migration spanning more than 50,000 lines of code and build-pipeline improvements that reduced build times by 30%.
      </p>
      <p className="mb-3">
        In previous roles at Commvault, I worked across Kubernetes backup and recovery, automation frameworks, Linux diagnostics, and customer escalations. I enjoy collaborating with cross-functional teams, mentoring junior developers, and using agile ways of working to deliver practical, high-quality solutions.
      </p>
      <p className="mb-3">
        I hold an MSc in Advanced Computer Science from the University of Manchester, graduating with Distinction and specialising in Computer Security. I care about clear, maintainable code and enjoy solving difficult systems problems where reliability, performance, and developer experience all matter.
      </p>
    </motion.section>
  );
}
