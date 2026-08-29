export interface DigitalBadge {
  name: string;
  completed: string;
  image: string;
  credentialUrl: string;
}

export interface BadgeGroup {
  issuer: string;
  summary: string;
  profileUrl?: string;
  profileLabel?: string;
  badges: DigitalBadge[];
  featured?: boolean;
}

const databricksBadges: DigitalBadge[] = [
  {
    name: "Generative AI Application Evaluation and Governance",
    completed: "27 March 2026",
    image: "badges/databricks/generative-ai-evaluation-governance.png",
    credentialUrl: "https://www.credential.net/5fd9546a-b43e-4a1b-a79d-6509bc863f87",
  },
  {
    name: "Building Single-Agent Applications on Databricks",
    completed: "27 March 2026",
    image: "badges/databricks/building-single-agent-applications.png",
    credentialUrl: "https://www.credential.net/0a3b5f10-90b3-4699-bca6-555f82ec0722",
  },
  {
    name: "Generative AI Application Deployment and Monitoring",
    completed: "27 March 2026",
    image: "badges/databricks/generative-ai-deployment-monitoring.png",
    credentialUrl: "https://www.credential.net/899e63d1-0b6d-4863-b5d0-32a702cd85a1",
  },
  {
    name: "Building Retrieval Agents on Databricks",
    completed: "27 March 2026",
    image: "badges/databricks/building-retrieval-agents.png",
    credentialUrl: "https://www.credential.net/c01a30e9-ce01-4f7b-a574-67ad830ae2e1",
  },
  {
    name: "Generative AI Fundamentals",
    completed: "26 March 2026",
    image: "badges/databricks/generative-ai-fundamentals.png",
    credentialUrl: "https://www.credential.net/de978e6d-e55b-43d4-b003-b9bb55ee9b94",
  },
  {
    name: "Data Preparation for Machine Learning",
    completed: "19 February 2026",
    image: "badges/databricks/data-preparation-machine-learning.png",
    credentialUrl: "https://www.credential.net/0790b3f0-4fd1-4468-a064-dd1bf6d3f50e",
  },
  {
    name: "Machine Learning Operations",
    completed: "19 February 2026",
    image: "badges/databricks/machine-learning-operations.png",
    credentialUrl: "https://www.credential.net/5c258271-2248-4a08-8bc5-ae38830178a8",
  },
  {
    name: "Data Ingestion with Lakeflow Connect",
    completed: "19 February 2026",
    image: "badges/databricks/lakeflow-connect.png",
    credentialUrl: "https://www.credential.net/63bc81e9-78b8-4134-8ada-c47f56ba7086",
  },
  {
    name: "Build Data Pipelines with Lakeflow Spark Declarative Pipelines",
    completed: "19 February 2026",
    image: "badges/databricks/lakeflow-pipelines.png",
    credentialUrl: "https://www.credential.net/71cdcd7d-3eef-459b-bc2b-32b155354ff6",
  },
  {
    name: "Advanced Machine Learning Operations",
    completed: "19 February 2026",
    image: "badges/databricks/advanced-machine-learning-operations.png",
    credentialUrl: "https://www.credential.net/7dc2206e-c9e2-4c98-b20c-ca9d79fadd28",
  },
  {
    name: "Machine Learning Model Deployment",
    completed: "19 February 2026",
    image: "badges/databricks/model-deployment.png",
    credentialUrl: "https://www.credential.net/85fd3e3e-6399-4ec9-8d37-f6770f1d41aa",
  },
  {
    name: "Machine Learning Model Development",
    completed: "19 February 2026",
    image: "badges/databricks/model-development.png",
    credentialUrl: "https://www.credential.net/8bebabe2-ba06-4960-894c-8497b45bb87a",
  },
  {
    name: "Machine Learning at Scale",
    completed: "19 February 2026",
    image: "badges/databricks/machine-learning-at-scale.png",
    credentialUrl: "https://www.credential.net/d9140624-a504-4af4-b56b-0a565e4d552d",
  },
  {
    name: "AI/BI for Data Analysts",
    completed: "22 January 2026",
    image: "badges/databricks/ai-bi-data-analysts.png",
    credentialUrl: "https://www.credential.net/2ac3465e-526e-4cc7-b82f-e2999b4b712d",
  },
  {
    name: "SQL Analytics on Databricks",
    completed: "19 January 2026",
    image: "badges/databricks/sql-analytics.png",
    credentialUrl: "https://www.credential.net/87d41a42-b950-43c2-8d15-46bab71387b2",
  },
];

export const badgeGroups: BadgeGroup[] = [
  {
    issuer: "ServiceNow University",
    summary: "Platform learning badges and micro-certifications.",
    profileUrl: "https://nowlearning.servicenow.com/lxp/en/credentials/servicenow-badges?id=learning_badges",
    profileLabel: "View all ServiceNow University badges",
    badges: [
      {
        name: "Welcome to ServiceNow",
        completed: "16 April 2026",
        image: "badges/servicenow-welcome.png",
        credentialUrl: "https://www.credly.com/badges/9b1de1fe-c999-41e8-9bbe-d57b03cff1c8",
      },
      {
        name: "Dot-walking in the ServiceNow Platform",
        completed: "15 April 2026",
        image: "badges/servicenow-welcome.png",
        credentialUrl: "https://nowlearning.servicenow.com/lxp/en/credentials/servicenow-badges?id=learning_badges",
      },
    ],
  },
  {
    issuer: "Databricks Academy",
    summary: "15 verified knowledge badges and academy accreditations across GenAI, machine learning, data engineering and analytics.",
    profileUrl: "https://credentials.databricks.com/profile/thembinkosiedenthwala336029/wallet",
    profileLabel: "Open Databricks credential wallet",
    badges: databricksBadges,
    featured: true,
  },
  {
    issuer: "Cisco Networking Academy",
    summary: "Verified networking and cybersecurity foundation badges.",
    badges: [
      {
        name: "CCNA: Introduction to Networks",
        completed: "14 December 2021",
        image: "badges/cisco-introduction-to-networks.png",
        credentialUrl: "https://www.credly.com/badges/68130832-a9d4-47e5-a8ee-1c3b03a69567",
      },
      {
        name: "Introduction to Cybersecurity",
        completed: "17 June 2021",
        image: "badges/cisco-introduction-to-cybersecurity.png",
        credentialUrl: "https://www.credly.com/badges/0f69610f-9de4-425f-b621-875f0eabc14a",
      },
    ],
  },
];
