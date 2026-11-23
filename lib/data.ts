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

type TimelineEntry = {
  kind: "work" | "education";
  title: string;
  organisation: string;
  description: string;
  date: string;
  project?: { label: string; href: string };
};

export const currentRole = {
  kind: "work",
  title: "Backend Software Engineer",
  organisation: "Smarkets",
  description: "Developing exchange systems in Rust on the Exchange team.",
  date: "Nov 2026 – Present",
} as const;

export const timelineData: readonly TimelineEntry[] = [
  currentRole,
  {
    kind: "work",
    title: "Software Engineer",
    organisation: "TP ICAP",
    description:
      "Modernised the C++ Axiom trading platform, migrating more than 50,000 lines of code from 32-bit to 64-bit. Built a reusable Boost.Log library with runtime configuration, diagnosed production crashes with WinDbg, and cut CI build times by 30%.",
    date: "Dec 2024 – Nov 2026",
  },
  {
    kind: "education",
    title: "MSc Advanced Computer Science",
    organisation: "University of Manchester",
    description:
      "After working on Kubernetes backups at Commvault, I took a closer look at how virtual machines handle storage. I graduated with Distinction, specialising in Computer Security, and researched adaptive disk streaming in QEMU for my dissertation.",
    date: "Sep 2023 – Sep 2024",
    project: { label: "See the QEMU dissertation project", href: "#qemu-adaptive-streaming" },
  },
  {
    kind: "work",
    title: "Software Engineer",
    organisation: "Commvault",
    description:
      "Moved from test automation into C++ development for Kubernetes backup and recovery. Led three projects from design through testing and mentored five colleagues in Python and Kubernetes.",
    date: "Jan 2022 – Aug 2023",
  },
  {
    kind: "work",
    title: "Associate Software Engineer",
    organisation: "Commvault",
    description:
      "Joined full-time after my internship. Built Python and Selenium automation for Kubernetes backup and recovery, contributed to the open-source cvpysdk library, and investigated customer escalations.",
    date: "Jul 2021 – Jan 2022",
  },
  {
    kind: "work",
    title: "Software Development Engineer in Test Intern",
    organisation: "Commvault",
    description:
      "Automated Linux file system and Kubernetes backup tests across on-premises and cloud environments.",
    date: "Oct 2020 – Jul 2021",
  },
  {
    kind: "work",
    title: "Machine Learning Intern",
    organisation: "HighRadius Technologies",
    description:
      "Built a full-stack invoice management application with an embedded machine learning model for predicting partial B2B payments.",
    date: "Jul 2020 – Oct 2020",
  },
  {
    kind: "education",
    title: "BTech Computer Science & Engineering",
    organisation: "KIIT University, Bhubaneswar",
    description:
      "Graduated with a CGPA of 9.68/10 and co-authored a paper on underwater sensor networks presented at ICFNDS 2021. I interned at HighRadius and Commvault while studying.",
    date: "2017 – 2021",
  },
];

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: string;
  links: readonly { label: string; href: string; download?: boolean }[];
};

export const projectsData: readonly PortfolioProject[] = [
  {
    id: "qemu-adaptive-streaming",
    title: "Adaptive QCOW2 Disk Streaming in QEMU",
    description:
      "Built a QEMU streaming strategy that pauses background copying during bursts of VM I/O. Compared with standard streaming, it improved bandwidth by 8.1% on YCSB with RocksDB and by 37% in an fio microbenchmark, with a longer total streaming time.",
    tags: ["C", "QEMU", "QCOW2", "Linux", "KVM"],
    imageUrl: "/Qemu-logo.png",
    links: [
      { label: "Source code", href: "https://github.com/triii10/adaptive-streaming" },
      { label: "Dissertation (PDF)", href: "/Trilok_Bhattacharya_MSc_Dissertation.pdf", download: true },
    ],
  },
  {
    id: "cdcl-sat-solver",
    title: "Conflict-Driven Clause Learning in C++",
    description:
      "Implemented a SAT solver in C++ using conflict-driven clause learning and non-chronological backtracking.",
    tags: ["C++", "CDCL", "Automated Reasoning"],
    links: [{ label: "Source code", href: "https://github.com/triii10/cdcl" }],
  },
  {
    id: "kubernetes-release-testing",
    title: "Kubernetes Release Testing",
    description:
      "Reported two upstream issues affecting pod sandbox creation with long names and inconsistent name validation for StatefulSets and their pods.",
    tags: ["Kubernetes", "Release Testing"],
    imageUrl: "/k8slogo.png",
    links: [
      { label: "Pod sandbox issue", href: "https://github.com/kubernetes/kubernetes/issues/104288" },
      { label: "StatefulSet issue", href: "https://github.com/kubernetes/kubernetes/issues/104195" },
    ],
  },
];

export const skillsData = [
  "C++17",
  "Rust",
  "C",
  "Python",
  "C#",
  "SQL",
  "Bash",
  "Boost",
  "C++/CLI",
  "MFC and COM",
  "WinDbg",
  "GDB",
  "Linux",
  "Docker",
  "Kubernetes",
  "QEMU and KVM",
  "Git",
  "GitLab CI/CD",
] as const;
