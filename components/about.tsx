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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a BTech degree in{" "}
        <span className="font-bold">Computer Science & Engineering</span>, I joined{" "}
        <span className="font-bold">Commvault</span> as a Q/A Engineer, and quickly progressed
        though the Kubernetes team, soon working as a Developer as well. In 2023, I set out 
        to pursue a Master's degree in Advanced Computer Science from The University of Manchester, in the UK.
        My core stack includes languages such as{" "}<span className="font-medium">Python, C, C++</span>{" "} 
        and virtualisation technologies like{" "} <span className="font-medium">Docker, Kubernetes</span>. 
        I am also familiar with Rust and Java. I am always looking to learn new technologies. 
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>I also enjoy{" "}
        <span className="font-medium">contributing to open-source projects</span>. I am currently
        contributing to{" "} <span className="font-medium">projects with 6k+ stars</span>.
        <span className="italic">When I'm not coding</span>, I enjoy playing Chess and watching Football. 
      </p>
    </motion.section>
  );
}
