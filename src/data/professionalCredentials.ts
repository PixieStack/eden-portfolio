export interface ProfessionalCredential {
  title: string;
  organization: string;
  type: "Professional Designation" | "Professional Membership";
  period: string;
  description: string;
  designation?: string;
  competencies?: string[];
}

export const professionalCredentials: ProfessionalCredential[] = [
  {
    title: "Associate Member (AMICITP-SA)",
    organization:
      "Institute of Chartered IT Professionals South Africa (ICITP-SA)",
    type: "Professional Designation",
    period: "Issued 30 July 2026",
    designation: "SAQA Designation ID 1043",
    description:
      "Professional title awarded after the required board assessment of competency, experience and skills.",
    competencies: ["Java", ".NET"],
  },
  {
    title: "ICITP-SA Professional Membership",
    organization:
      "Institute of Chartered IT Professionals South Africa (ICITP-SA)",
    type: "Professional Membership",
    period: "Valid 1 July 2026 - 1 July 2027",
    description:
      "Active membership with an information technology professional body recognised by SAQA in terms of the NQF Act.",
  },
];
