export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Python", "C#", "Java", "TypeScript", "JavaScript", "Ruby", "SQL"],
  },
  {
    title: "Frontend Development",
    items: ["Angular", "React.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    items: ["ASP.NET Core", "Spring Boot", "Ruby on Rails", "Node.js", "FastAPI", "Flask"],
  },
  {
    title: "APIs & System Integration",
    items: [
      "RESTful APIs", "GraphQL", "SOAP Services", "Third-Party API Integration",
      "Asynchronous Processing", "Background Jobs",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL", "Microsoft SQL Server", "MySQL", "Oracle SQL", "Redis", "SQLite", "Supabase",
    ],
  },
  {
    title: "Cloud & Enterprise Platforms",
    items: ["AWS", "Microsoft Azure", "ServiceNow", "Databricks", "Docker", "Kubernetes"],
  },
  {
    title: "Algorithms & Problem-Solving",
    items: [
      "Algorithmic Thinking", "Data Structures", "Problem Decomposition", "Logical Reasoning",
      "Root-Cause Analysis", "Performance Optimisation",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    items: ["Python", "Pandas", "NumPy", "SQL", "ETL Pipelines", "Data Validation", "Data Visualisation"],
  },
  {
    title: "Software Engineering",
    items: [
      "Object-Oriented Programming", "Procedural Programming", "Design Patterns", "SDLC",
      "Agile Scrum", "System Design", "Application Support", "Technical Documentation",
    ],
  },
  {
    title: "Testing & Reliability",
    items: [
      "Unit Testing", "Integration Testing", "API Testing", "Debugging", "Troubleshooting",
      "Error Handling", "Logging", "Root-Cause Analysis",
    ],
  },
  {
    title: "Security",
    items: ["JWT Authentication", "OAuth 2.0", "Role-Based Access Control", "Authentication and Authorisation"],
  },
  {
    title: "DevOps & Version Control",
    items: [
      "Git", "GitHub", "GitHub Actions", "CI/CD", "Docker", "Branching Strategies",
      "Pull Requests", "Code Reviews",
    ],
  },
  {
    title: "Tools & IDEs",
    items: ["Visual Studio", "Visual Studio Code", "Postman", "Jira", "Confluence", "Anaconda"],
  },
];

export const softSkills = [
  "Analytical Thinking", "Structured Problem-Solving", "Technical Communication", "Team Collaboration",
  "Learning Agility", "Adaptability", "Attention to Detail", "Requirements Analysis", "Knowledge Sharing",
  "Constructive Feedback", "Stakeholder Communication", "Time and Priority Management",
];

const uniqueSkills = new Set(skillCategories.flatMap((category) => category.items));

export const stats = {
  programmingLanguages: String(skillCategories[0].items.length),
  frameworksAndTools: `${uniqueSkills.size}+`,
  databaseSystems: String(skillCategories[4].items.length),
  certifications: "9",
  badges: "19",
};
