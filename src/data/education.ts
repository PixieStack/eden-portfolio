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
    title: "Associate System Administrator (NQF Equivalent)",
    institution: "ServiceNow University",
    description:
      "Currently pursuing. Core modules: ServiceNow Platform Overview, Instance Configuration, User and Group Management, Self-Service and Automation. Working towards hands-on administration skills including UI policies, business rules, service catalog configuration and access control.",
    year: "2026 - Present",
    type: "Certification",
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
    title: "Databricks Certified Data Engineer Professional",
    institution: "Databricks",
    description:
      "Professional certification validating advanced data engineering skills including ETL pipeline development, Delta Lake, Apache Spark, data modeling, lakehouse architecture, and deploying secure and monitored data pipelines on the Databricks platform.",
    year: "March 2026",
    credentialUrl: "https://credentials.databricks.com/de0ccae3-5818-4fde-9c34-0a8115d149eb#acc.Oy7Jp9Ne",
    type: "Certification",
  },
  {
    title: "Databricks Data Analyst Associate",
    institution: "Databricks",
    description:
      "Data analytics certification covering SQL, data visualization, dashboards, and Databricks workspace for data-driven insights.",
    year: "March 2026",
    credentialUrl: "https://credentials.databricks.com/1469291d-914b-458a-b703-ba4e815a9a73#acc.luMRjA8W",
    type: "Certification",
  },
  {
    title: "Certified Java Developer",
    institution: "W3Schools",
    description:
      "Professional certification validating expertise in Java programming, OOP concepts, and application development.",
    year: "September 2025",
    credentialUrl: "https://verify.w3schools.com/1QC1OY6WL0",
    type: "Certification",
  },
  {
    title: "Cisco CCNA v7: Introduction to Networks",
    institution: "Cisco",
    description:
      "Network fundamentals including Ethernet, IP addressing, routing protocols, and network security basics.",
    year: "December 2021",
    credentialUrl: "https://www.netacad.com/certificates/?issuanceId=c4a11973-01d3-4914-a587-fbfcd1865a75",
    type: "Certification",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    institution: "Cisco",
    description:
      "Cybersecurity fundamentals, threat landscape, security best practices, and protection mechanisms.",
    year: "June 2021",
    credentialUrl: "https://www.netacad.com/certificates/?issuanceId=f69297a0-1df7-4844-9b39-22dac2ca3605",
    type: "Certification",
  },
];