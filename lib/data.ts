import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "TP ICAP",
    description:
      "Core team member of the development team working on the Axiom trading platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2024 - Present",
    position: "right",
  },
  {
    title: "Master of Science in Advanced Computer Science",
    location: "University of Manchester",
    description:
      "Graduated with a distinction in Master of Science in Advanced Computer Science, with specialisation in Computer Security.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2023 - Sept 2024",
    position: "left",
  },
  {
    title: "Software Engineer",
    location: "Commvault",
    description:
      "Promoted to Software Engineer, where I developed automation frameworks and contributed to Kubernetes-related development, leading multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Aug 2023",
    position: "right",
  },
  {
    title: "Associate Software Engineer",
    location: "Commvault",
    description:
      "Joined full-time to work as a Q/A Engineer on the Kubernetes team, handling testing and customer escalations for critical projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Jan 2022",
    position: "right",
  },
  {
    title: "Internship, Software Development Engineer in Test",
    location: "Commvault",
    description:
      "Automated testing for Linux Filesystem backups and Kubernetes workloads, ensuring robustness in cloud and on-prem environments.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 - Jul 2021",
    position: "right",
  },
  {
    title: "Internship, Machine Learning",
    location: "HighRadius Technologies",
    description:
      "Worked on predicting partial payments for B2B transactions using machine learning models and developed a full-stack invoice management application.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 - Oct 2020",
    position: "right",
  },
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    location: "KIIT University, Bhubaneswar",
    description: "Graduated with a CGPA of 9.68, which is equivalent to a first-class honours degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
    position: "left",
  },
  {
    title: "High School Degree",
    location: "Ryan International School, Raipur",
    description:
      "Scored 93.4% in the Central Board of Secondary Education (CBSE), which is the A-level equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
    position: "left",
  },
  {
    title: "Matriculation Degree",
    location: "St. Xavier's High School, Raipur",
    description:
      "Completed my matriculation degree with 94.4% in the Indian Certificate School Examination (ICSE), which is the GCSE equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2015",
    position: "left",
  },
] as const;
export const projectsData = [
  {
    title: "Adaptively Streaming QCoW2 Disks in QEMU",
    description:
      "Investigated performance drops during QEMU QCoW2 snapshot streaming and implemented a novel adaptive streaming method to reduce runtime impact.",
    tags: ["C", "QEMU", "QCoW2", "Linux", "KVM"],
    imageUrl: "/Qemu-logo.png",
    viewUrl: "https://github.com/triii10/adaptive-streaming",
    downloadUrl: "/Trilok_Bhattacharya_MSc_Dissertation.pdf",
  },
  {
    title: "Conflict Driven Clause Learning Using C++",
    description:
      "Implemented the CDCL algorithm in C++, including clause learning and backtracking, to solve SAT problems.",
    tags: ["C++", "CDCL", "Automated Reasoning"],
    imageUrl: "",
    viewUrl: "https://github.com/triii10/cdcl",
    downloadUrl: "",
  },
  {
    title: "Feature Testing Kubernetes Release Versions",
    description:
      "Reported Kubernetes issues affecting pod sandbox creation with long names and StatefulSet naming validation.",
    tags: ["Kubernetes", "Go", "Python"],
    imageUrl: "/k8slogo.png",
    viewUrl: "https://github.com/issues?q=is%3Aissue+author%3Atriii10+archived%3Afalse+is%3Aclosed",
    downloadUrl: "",
  },
] as const;

export const skillsData = [
  "C++17",
  "Python (NumPy, Pandas)",
  "SQL (MySQL, T-SQL)",
  "C#",
  "Bash",
  "Shopify Liquid",
  "MFC",
  "STL/COM",
  "Boost",
  "C++/CLI",
  "TDD",
  "MS Test",
  "Catch2",
  "WinDbg",
  "Tracy",
  "Spy++",
  "Docker",
  "Kubernetes",
  "KVM/QEMU",
  "Git",
  "GitLab CI",
  "KIRO/Amazon Q",
] as const;
