export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["C#", "Java", "JavaScript", "Python", "Ruby", "SQL", "TypeScript"],
  },
  {
    title: "Frontend Development",
    items: ["Angular", "Bootstrap", "CSS3", "HTML5", "React.js", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend Development",
    items: ["ASP.NET Core", "FastAPI", "Flask", "Node.js", "Ruby on Rails", "Spring Boot"],
  },
  {
    title: "APIs & System Integration",
    items: [
      "Asynchronous Processing", "Background Jobs", "GraphQL", "RESTful APIs",
      "SOAP Services", "Third-Party API Integration",
    ],
  },
  {
    title: "Databases",
    items: [
      "Microsoft SQL Server", "MySQL", "Oracle SQL", "PostgreSQL", "Redis", "SQLite", "Supabase",
    ],
  },
  {
    title: "Cloud & Enterprise Platforms",
    items: ["AWS", "Databricks", "Docker", "Kubernetes", "Microsoft Azure", "ServiceNow"],
  },
  {
    title: "Algorithms & Problem-Solving",
    items: [
      "Algorithmic Thinking", "Data Structures", "Logical Reasoning", "Performance Optimisation",
      "Problem Decomposition", "Root-Cause Analysis",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    items: ["Data Validation", "Data Visualisation", "ETL Pipelines", "NumPy", "Pandas", "Python", "SQL"],
  },
  {
    title: "Software Engineering",
    items: [
      "Agile Scrum", "Application Support", "Design Patterns", "Object-Oriented Programming",
      "Procedural Programming", "SDLC", "System Design", "Technical Documentation",
    ],
  },
  {
    title: "Testing & Reliability",
    items: [
      "API Testing", "Debugging", "Error Handling", "Integration Testing", "Logging",
      "Root-Cause Analysis", "RSpec", "Test-Driven Development", "Troubleshooting", "Unit Testing",
    ],
  },
  {
    title: "Security",
    items: [
      "Access Control Lists", "Authentication and Authorisation", "Column-Level Encryption",
      "JWT Authentication", "OAuth 2.0", "Role-Based Access Control", "Row-Level Security",
      "SAML 2.0", "Session-Based Authentication",
    ],
  },
  {
    title: "DevOps & Version Control",
    items: [
      "Actions", "Branching Strategies", "CI/CD", "Code Reviews", "Events", "Git", "Git Commands",
      "GitHub", "GitHub Actions", "GitHub Pages", "Jobs", "Least-Privilege Workflow Permissions",
      "OpenID Connect", "Runners", "Workflows",
    ],
  },
  {
    title: "Tools & IDEs",
    items: [
      "Anaconda", "Confluence", "DBeaver", "Eclipse / NetBeans", "Jira", "Miro", "Notion",
      "Postman", "Visual Studio", "Visual Studio Code",
    ],
  },
];

export const softSkills = [
  "Adaptability", "Analytical Thinking", "Attention to Detail", "Constructive Feedback", "Knowledge Sharing",
  "Learning Agility", "Requirements Analysis", "Stakeholder Communication", "Structured Problem-Solving",
  "Team Collaboration", "Technical Communication", "Time and Priority Management",
];

const uniqueSkills = new Set(skillCategories.flatMap((category) => category.items));

export const stats = {
  programmingLanguages: String(skillCategories[0].items.length),
  frameworksAndTools: `${uniqueSkills.size}+`,
  databaseSystems: String(skillCategories[4].items.length),
  certifications: "9",
  badges: "19",
};
