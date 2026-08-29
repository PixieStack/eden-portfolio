export interface ProfessionalCredential {
  title: string;
  shortTitle: string;
  organization: string;
  type: "Professional Designation" | "Professional Membership";
  period: string;
  description: string;
  credentialNumberLabel: "Practice Number" | "Membership ID";
  credentialNumber: string;
  issuedDate?: string;
  validFrom?: string;
  expiryDate?: string;
  documentPath: string;
  designation?: string;
  competencies?: string[];
}

export const professionalCredentials: ProfessionalCredential[] = [
  {
    title: "Associate Member (AMICITP-SA)",
    shortTitle: "AMICITP-SA",
    organization:
      "Institute of Chartered IT Professionals South Africa (ICITP-SA)",
    type: "Professional Designation",
    period: "Issued 30 July 2026",
    credentialNumberLabel: "Practice Number",
    credentialNumber: "ITP2023465",
    issuedDate: "30 July 2026",
    documentPath:
      "certificates/amicitp-sa-professional-certification.pdf",
    designation: "SAQA Designation ID 1043",
    description:
      "Professional title awarded after the required board assessment of competency, experience and skills.",
    competencies: ["Java", ".NET"],
  },
  {
    title: "ICITP-SA Professional Membership",
    shortTitle: "ICITP-SA Member",
    organization:
      "Institute of Chartered IT Professionals South Africa (ICITP-SA)",
    type: "Professional Membership",
    period: "Valid 1 July 2026 - 1 July 2027",
    credentialNumberLabel: "Membership ID",
    credentialNumber: "A0001349",
    validFrom: "1 July 2026",
    expiryDate: "1 July 2027",
    documentPath: "certificates/icitp-sa-professional-membership.pdf",
    description:
      "Active membership with an information technology professional body recognised by SAQA in terms of the NQF Act.",
  },
];
