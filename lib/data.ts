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
    name: "Experiences",
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
    title: "Matriculation Degree",
    location: "St. Xavier's High School, Raipur",
    description:
      "Completed my matriculation degree with 94.4% in the Indian Certificate School Examination, which is the GCSE equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2015",
    position: "left",
  },

  {
    title: "High School Degree",
    location: "Ryan International School, Raipur",
    description:
      "Scored 93.4% in the Central Board of Secondary Education, which is the A-level equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
    position: "left",
  },
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    location: "KIIT University, Bhubaneswar",
    description:
      "Graduated with a CGPA of 9.68, which is equivalent to a first-class honours degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
    position: "left",
  },
  {
    title: "Internship, Machine Learning",
    location: "HighRadius Technologies",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 - Oct 2020",
    position: "right",
  },
  {
    title: "Internship, Software Development Engineer in Test",
    location: "Commvault",
    description:
      "Worked on automating backup and recovery validation of Linux backup agents.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 - Jul 2021",
    position: "right",
  },
  {
    title: "Associate Software Engineer",
    location: "Commvault",
    description:
      "Joined as a full-time employee after my internship. I worked as a Q/A Engineer in the Kubernetes team.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Jan 2022",
    position: "right",
  },
  {
    title: "Software Engineer",
    location: "Commvault",
    description:
      "Quickly got promoted, with additional responsibilities. Worked both, as a Q/A Automation Engineer, and as a Developer in the Kubernetes team.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Aug 2023",
    position: "right",
  },
  {
    title: "Master of Science in Advanced Computer Science",
    location: "University of Manchester",
    description:
      "Pursuing a Master's degree in Advanced Computer Science. I am specializing in Computer Security.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2023 - Sept 2024",
    position: "left",
  },
] as const;

export const projectsData = [
  {
    title: "Adaptive Streaming",
    description:
      "Investigated the impact of snapshot streaming on QEMU QCoW2 disk images, and developed a novel 'adaptive streaming' algorithm to efficiently stream snapshots during low I/O periods.",
    tags: ["C", "QEMU", "QCoW2", "Linux", "KVM"],
    imageUrl: "",
    viewUrl: "https://github.com/triii10/qemu-adaptive-streaming",
  },
  {
    title: "CDCL with C++",
    description:
      "Implemented the CDCL algorithm in C++ for the course 'Advanced Algorithms and Data Structures'.",
    tags: ["C++", "CDCL", "Automated Reasoning"],
    imageUrl: "",
    viewUrl: "https://github.com/triii10/cdcl",
  },
  {
    title: "Kubernetes Issues",
    description:
      "Reported several issues in the Kubernetes project over the course of my employment at Commvault.",
    tags: ["Kubernetes", "Go", "Python"],
    imageUrl: "",
    viewUrl: "https://github.com/issues?q=is%3Aissue+author%3Atriii10+archived%3Afalse+is%3Aclosed",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Python",
  "Rust",
  "Java",
  "Docker",
  "Kubernetes",
  "Linux",
  "Bash",
  "Git",
  "React",
  "QEMU",
  "MySQL",
  "MSSQL",
  "Shopify Liquid",
] as const;
