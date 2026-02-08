export type QualificationType = "Certification" | "Education";

export interface Qualification {
  title: string;
  institution: string;
  description?: string;
  year: string;
  type: QualificationType;
  credentialUrl?: string;
}

export const qualifications: Qualification[] = [
  // Education First
  {
    title: "Advanced Diploma in Information Technology (NQF 7)",
    institution: "Nelson Mandela University",
    description:
      "Currently pursuing. Core modules: Information Security, Applied Project, Project Management. Electives: Operating Systems, Application Security, Enterprise Networks, Development Software, Advanced Development Software.",
    year: "2026 - Present",
    type: "Education",
  },
  {
    title: "Diploma in Information Technology - Software Development",
    institution: "Nelson Mandela University",
    description:
      "Graduated Cum Laude. Comprehensive program covering software engineering principles, database design, web development, and enterprise application development.",
    year: "2021 - 2023",
    type: "Education",
  },
  {
    title: "Higher Certificate in Information Technology - Support Services",
    institution: "Nelson Mandela University",
    description:
      "Graduated Cum Laude. Foundation in IT infrastructure, technical support, networking fundamentals, and system administration.",
    year: "2020",
    type: "Education",
  },
  // Certifications
  {
    title: "Databricks Data Analyst Associate",
    institution: "Databricks",
    description:
      "Data analytics certification covering SQL, data visualization, dashboards, and Databricks workspace for data-driven insights.",
    year: "2026",
    type: "Certification",
  },
  {
    title: "Certified Java Developer",
    institution: "W3Schools",
    description:
      "Professional certification validating expertise in Java programming, OOP concepts, and application development.",
    year: "2025",
    type: "Certification",
  },
  {
    title: "Cisco CCNA v7: Introduction to Networks",
    institution: "Cisco",
    description:
      "Network fundamentals including Ethernet, IP addressing, routing protocols, and network security basics.",
    year: "2022",
    type: "Certification",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    institution: "Cisco",
    description:
      "Cybersecurity fundamentals, threat landscape, security best practices, and protection mechanisms.",
    year: "2022",
    type: "Certification",
  },
  {
    title: "120-Hour TEFL Certificate",
    institution: "TEFL Institute",
    description:
      "Teaching English as a Foreign Language certification, demonstrating communication and instructional skills.",
    year: "2021",
    type: "Certification",
  },
];
