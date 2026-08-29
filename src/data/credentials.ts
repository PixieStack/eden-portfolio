export interface PortfolioDocument {
  title: string;
  issuer: string;
  type: "Professional Designation" | "Professional Membership" | "Certification" | "Certification Programme" | "Academic Achievement" | "Academic Record";
  issued: string;
  issuedLabel?: "Issued" | "Started";
  expires?: string;
  status?: "Active" | "Awarded" | "Expired" | "In Progress";
  description: string;
  documentPath?: string;
  actionUrl?: string;
  actionLabel?: string;
  details?: { label: string; value: string }[];
}

export const professionalDocuments: PortfolioDocument[] = [
  {
    title: "Associate Member (AMICITP-SA)",
    issuer: "Institute of Chartered IT Professionals South Africa",
    type: "Professional Designation",
    issued: "30 July 2026",
    status: "Awarded",
    description: "SAQA-recognised professional designation awarded after assessment of competency, experience and skills.",
    documentPath: "certificates/amicitp-sa-professional-certification.pdf",
    details: [
      { label: "Practice Number", value: "ITP2023465" },
      { label: "Competencies", value: "Java & .NET" },
      { label: "SAQA Designation ID", value: "1043" },
    ],
  },
  {
    title: "ICITP-SA Professional Membership",
    issuer: "Institute of Chartered IT Professionals South Africa",
    type: "Professional Membership",
    issued: "1 July 2026",
    expires: "1 July 2027",
    status: "Active",
    description: "Active membership with an IT professional body recognised by SAQA in terms of the NQF Act.",
    documentPath: "certificates/icitp-sa-professional-membership.pdf",
    details: [{ label: "Membership ID", value: "A0001349" }],
  },
  {
    title: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    type: "Certification",
    issued: "25 March 2026",
    expires: "25 March 2028",
    status: "Active",
    description: "Professional certification in production-grade data engineering solutions on the Databricks platform.",
    documentPath: "certificates/databricks-data-engineer-professional.pdf",
    details: [{ label: "Credential ID", value: "177909603" }],
  },
  {
    title: "Databricks Certified Data Analyst Associate",
    issuer: "Databricks",
    type: "Certification",
    issued: "1 March 2026",
    expires: "1 March 2028",
    status: "Active",
    description: "Associate certification in Databricks SQL analytics, dashboards and data-driven business insights.",
    documentPath: "certificates/databricks-data-analyst-associate.pdf",
    details: [{ label: "Credential ID", value: "175798881" }],
  },
  {
    title: "Welcome to ServiceNow",
    issuer: "ServiceNow University",
    type: "Certification",
    issued: "16 April 2026",
    status: "Awarded",
    description: "Micro-certification demonstrating foundational knowledge of the ServiceNow platform and learning ecosystem.",
    documentPath: "certificates/servicenow-welcome-micro-certification.pdf",
  },
  {
    title: "Certified Java Developer Professional",
    issuer: "W3Schools",
    type: "Certification",
    issued: "22 September 2025",
    status: "Awarded",
    description: "Professional certification validating practical Java programming knowledge.",
    documentPath: "certificates/w3schools-certified-java-developer.pdf",
    details: [{ label: "Verification ID", value: "1QC1OY6WL0" }],
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    type: "Certification",
    issued: "14 December 2021",
    status: "Awarded",
    description: "Foundational networking certification covering network architectures, protocols and IP connectivity.",
    documentPath: "certificates/cisco-introduction-to-networks.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    type: "Certification",
    issued: "17 June 2021",
    status: "Awarded",
    description: "Foundational credential covering cyber threats, vulnerabilities and security practices.",
    documentPath: "certificates/cisco-introduction-to-cybersecurity.pdf",
  },
];

export const academicDocuments: PortfolioDocument[] = [
  {
    title: "ServiceNow Administration Fundamentals",
    issuer: "ServiceNow University",
    type: "Certification Programme",
    issued: "June 2026",
    issuedLabel: "Started",
    status: "In Progress",
    description: "Currently studying remotely through ServiceNow University to prepare for the ServiceNow Certified System Administrator (CSA) certification.",
    actionUrl: "https://learninguat.servicenow.com/lxp?id=learning_course_prev&course_id=fbb6cc4847f5dd505cbdaf44846d436a",
    actionLabel: "View course on ServiceNow",
    details: [
      { label: "Study Mode", value: "Remote / Online" },
      { label: "Target Credential", value: "Certified System Administrator (CSA)" },
    ],
  },
  {
    title: "Diploma in Information Technology — Software Development",
    issuer: "Nelson Mandela University",
    type: "Academic Achievement",
    issued: "23 April 2024",
    status: "Awarded",
    description: "Three-year Diploma in Information Technology, awarded Cum Laude.",
    documentPath: "certificates/diploma-information-technology-cum-laude.pdf",
    details: [{ label: "Certificate Number", value: "20245438" }],
  },
  {
    title: "Higher Certificate in IT — User Support Services",
    issuer: "Nelson Mandela University",
    type: "Academic Achievement",
    issued: "26 April 2021",
    status: "Awarded",
    description: "Higher Certificate in Information Technology in User Support Services, awarded Cum Laude.",
    documentPath: "certificates/higher-certificate-it-cum-laude.pdf",
    details: [{ label: "Certificate Number", value: "20215849" }],
  },
  {
    title: "Academic Transcript",
    issuer: "Nelson Mandela University",
    type: "Academic Record",
    issued: "18 March 2024",
    description: "Official academic results for the Higher Certificate and Diploma programmes. Personal identifiers are redacted for public viewing.",
    documentPath: "certificates/academic-transcript-redacted.pdf",
  },
];
