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
    title: "Software Engineer",
    location: "TP ICAP",
    description: "Core team member of the development team working on the Axiom trading platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2024 - Present",
    position: "right",
  },
  {
    title: "Master of Science in Advanced Computer Science",
    location: "University of Manchester",
    title: "Master of Science in Advanced Computer Science",
    location: "University of Manchester",
    description:
      "Graduated with a distinction in Master of Science in Advanced Computer Science, with specialisaiton in Computer Security.",
      "Graduated with a distinction in Master of Science in Advanced Computer Science, with specialisaiton in Computer Security.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2023 - Sept 2024",
    date: "Sept 2023 - Sept 2024",
    position: "left",
  },
  {
    title: "Software Engineer",
    location: "Commvault",
    title: "Software Engineer",
    location: "Commvault",
    description:
      "Promoted to Software Engineer, where I developed automation frameworks and contributed to Kubernetes-related development, leading multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Aug 2023",
    position: "right",
      "Promoted to Software Engineer, where I developed automation frameworks and contributed to Kubernetes-related development, leading multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Aug 2023",
    position: "right",
  },
  {
    title: "Associate Software Engineer",
    location: "Commvault",
    title: "Associate Software Engineer",
    location: "Commvault",
    description:
      "Joined full-time to work as a Q/A Engineer on the Kubernetes team, handling testing and customer escalations for critical projects.",
      "Joined full-time to work as a Q/A Engineer on the Kubernetes team, handling testing and customer escalations for critical projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Jan 2022",
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
    title: "Internship, Machine Learning",
    location: "HighRadius Technologies",
    description:
      "Worked on predicting partial payments for B2B transactions using machine learning models and developed a full-stack invoice management application.",
      "Worked on predicting partial payments for B2B transactions using machine learning models and developed a full-stack invoice management application.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 - Oct 2020",
    date: "Jul 2020 - Oct 2020",
    position: "right",
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
    title: "High School Degree",
    location: "Ryan International School, Raipur",
    description:
      "Scored 93.4% in the Central Board of Secondary Education (CBSE), which is the A-level equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
    position: "left",
      "Scored 93.4% in the Central Board of Secondary Education (CBSE), which is the A-level equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
    position: "left",
  },
  {
    title: "Matriculation Degree",
    location: "St. Xavier's High School, Raipur",
    title: "Matriculation Degree",
    location: "St. Xavier's High School, Raipur",
    description:
      "Completed my matriculation degree with 94.4% in the Indian Certificate School Examination (ICSE), which is the GCSE equivalent in India.",
      "Completed my matriculation degree with 94.4% in the Indian Certificate School Examination (ICSE), which is the GCSE equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2015",
    date: "2013 - 2015",
    position: "left",
  },
] as const;
export const projectsData = [
  {
    title: "Adaptive Streaming",
    description:
      "Investigated the impact of snapshot streaming on QEMU QCoW2 disk images, and developed a novel 'adaptive streaming' algorithm to efficiently stream snapshots during low I/O periods.",
    tags: ["C", "QEMU", "QCoW2", "Linux", "KVM"],
    imageUrl: "/Qemu-logo.png",
    viewUrl: "https://github.com/triii10/qemu-adaptive-streaming",
    downloadUrl: "/Trilok_Bhattacharya_MSc_Dissertation.pdf"
  },
  {
    title: "CDCL with C++",
    description:
      "Implemented the CDCL algorithm in C++ for the course 'Advanced Algorithms and Data Structures'.",
    tags: ["C++", "CDCL", "Automated Reasoning"],
    imageUrl: "",
    viewUrl: "https://github.com/triii10/cdcl",
    downloadUrl: "",
  },
  {
    title: "CounterStrike",
    description:
      "Group effort to design and develop a CLI to automatically collect complex outputs from the Java Bytecode Model Checking (JBMC) tool and generate compilable counter-examples, using Rust.",
    tags: ["JMBC", "Java", "Rust"],
    imageUrl: "",
    viewUrl: "https://github.com/karaolidis/comp63342-project",
    downloadUrl: "",
  },
  {
    title: "Kubernetes Issues",
    description:
      "Reported several issues in the Kubernetes project over the course of my employment at Commvault.",
    tags: ["Kubernetes", "Go", "Python"],
    imageUrl: "/k8slogo.png",
    viewUrl: "https://github.com/issues?q=is%3Aissue+author%3Atriii10+archived%3Afalse+is%3Aclosed",
    downloadUrl: "",
  },
  {
    title: "SGO Based Cluster Head Identification in Underwater Acoustic Sensor Networks",
    description:
      "Application of population-based Social Group Optimization algorithm on the NP-Hard problem of Path Planning. Accepted as a conference paper in The 5th International Conference on Future Networks & Distributed Systems, 2022.",
    tags: ["Python", "SGO"],
    imageUrl: "",
    viewUrl: "https://dl.acm.org/doi/abs/10.1145/3508072.3508219",
    downloadUrl: "",
  },
  {
    title: "AI-Enabled FinTech B2B Invoice Management Application",
    description:
      "A full-stack Invoice Management Application using ReactJS, JDBC, Java, and JSP. Integrated with a Machine Learning Model to predict partial payments, and Dialogflow digital assistant to provide insightful answers.",
    tags: ["Python", "Java", "JDBC", "ReactJS", "Dialogflow"],
    imageUrl: "",
    viewUrl: null,
    downloadUrl: "",
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
