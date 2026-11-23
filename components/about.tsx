"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I enjoy working on systems where reliability and performance matter. At TP ICAP,
        I worked on the Axiom trading platform, modernising its C++ codebase and building
        tools for logging, audit trails, and production diagnostics.
      </p>
      <p className="mb-3">
        Before moving into trading technology, I worked on Kubernetes backup and recovery at
        Commvault. That work took me from test automation to developing C++ components and
        investigating customer issues across Linux and Kubernetes environments.
      </p>
      <p>
        I earned an MSc in Advanced Computer Science with Distinction from the University
        of Manchester, where I specialised in Computer Security and researched how QEMU
        can stream disk images with less impact on running virtual machines.
      </p>
    </motion.section>
  );
}
