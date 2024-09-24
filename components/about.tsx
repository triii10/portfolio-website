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
      I am a proactive and results-oriented software engineer with over 3 years of combined experience in software development, testing, and automation. I have a strong foundation in programming languages such as Python and C++, with expertise in developing robust, fault-tolerant systems and optimizing automation frameworks. My academic journey includes a Bachelor's degree in Computer Science and Engineering, where I graduated with a GPA of 9.68/10, and I am currently pursuing a Master's in Advanced Computer Science from the University of Manchester, with an expected Distinction.
      </p>
      <p className="mb-3">
      In my previous roles, I have worked on complex projects ranging from developing automation frameworks for Kubernetes backup and recovery to implementing customer-facing APIs. I have experience working across diverse technologies, including Docker, Kubernetes, Selenium, MSSQL, and cloud platforms like Azure and AWS. My contributions have consistently improved operational efficiency, reduced manual testing efforts, and enhanced user experiences.
      </p>
      <p className="mb-3">
      Additionally, I have strong experience collaborating with cross-functional teams, mentoring junior developers, and adhering to agile methodologies to deliver high-quality solutions on time. My passion for problem-solving, coupled with my experience in designing secure and maintainable code, makes me well-suited for dynamic environments where innovation and efficiency are key.
      </p>
      <p className="mb-3">
        Currently, I am looking for <span className="font-medium">full-time positions</span> as a software developer in the UK.
      </p>
    </motion.section>
  );
}
