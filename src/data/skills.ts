export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProfessionalSkillCategory {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}

export interface SkillExperienceGroup {
  label: string;
  items: string[];
}

export interface SkillExperience {
  overall: string;
  groups: SkillExperienceGroup[];
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
      "Microsoft SQL Server", "MySQL", "PostgreSQL", "Redis", "SQLite", "Supabase",
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
    items: [
      "Apache Spark (PySpark)", "Data Catalogs", "Data Lakes", "Data Validation", "Data Visualisation",
      "ETL Pipelines", "NumPy", "Pandas", "Pydantic", "Python", "SQL",
    ],
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
    title: "AI & Intelligent Automation",
    items: [
      "AI API Integration", "AI Application Deployment & Monitoring",
      "AI Chatbot Development", "Conversational AI", "Prompt Engineering", "Retrieval Agents",
      "Single-Agent Applications", "Website Chatbot Integration",
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
    title: "Mobile Development",
    items: [
      ".NET MAUI", "Android Studio", "API Integration", "Biometric Authentication", "Expo",
      "Firebase", "Flutter", "Local Data Storage", "Mobile UI Design", "MVVM Architecture",
      "Platform Lifecycles", "Push Notifications", "React Native",
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
    title: "Architecture & Design",
    items: [
      "Event-Driven Architecture", "Microservices", "Monolithic Architecture",
      "MVC (Model-View-Controller)", "Serverless Architecture",
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

export const professionalSkillCategories: ProfessionalSkillCategory[] = [
  {
    eyebrow: "Think & solve",
    title: "Turn ambiguity into direction",
    description: "Turn complex requirements into clear, testable decisions.",
    items: [
      "Analytical Thinking", "Attention to Detail", "Critical Thinking", "Decision-Making",
      "Requirements Analysis", "Structured Problem-Solving",
    ],
  },
  {
    eyebrow: "Communicate & align",
    title: "Keep people in the loop",
    description: "Make technical work understandable and feedback actionable.",
    items: [
      "Active Listening", "Constructive Feedback", "Knowledge Sharing", "Presentation Skills",
      "Stakeholder Communication", "Technical Communication",
    ],
  },
  {
    eyebrow: "Collaborate & deliver",
    title: "Move work forward together",
    description: "Contribute reliably across teams, roles and changing priorities.",
    items: [
      "Adaptability", "Cross-Functional Collaboration", "Learning Agility",
      "Ownership and Accountability", "Team Collaboration", "Time and Priority Management",
    ],
  },
  {
    eyebrow: "Organise & execute",
    title: "Create momentum with discipline",
    description: "Protect quality while moving important work forward.",
    items: [
      "Delivery Focus", "Initiative", "Prioritisation", "Quality Focus", "Risk Awareness",
      "Self-Management",
    ],
  },
  {
    eyebrow: "Learn & improve",
    title: "Keep getting better",
    description: "Turn feedback, curiosity and reflection into stronger practice.",
    items: [
      "Coachability", "Continuous Improvement", "Curiosity", "Growth Mindset",
      "Reflective Practice", "Resilience",
    ],
  },
  {
    eyebrow: "Understand & support",
    title: "Design with the user in view",
    description: "Balance user needs, operational context and ownership.",
    items: [
      "Customer Focus", "Documentation Discipline", "Empathy", "Incident Communication",
      "Problem Ownership", "User-Centred Thinking",
    ],
  },
];

export const skillExperience: Record<string, SkillExperience> = {
  "Programming Languages": {
    overall: "3+ Years",
    groups: [
      { label: "3+ Years Experience", items: ["Python", "SQL", "TypeScript"] },
      { label: "2+ Years Experience", items: ["C#", "Java", "JavaScript", "Ruby"] },
    ],
  },
  "Frontend Development": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: ["Angular", "Bootstrap", "CSS3", "HTML5", "React.js", "Tailwind CSS", "Vue.js"],
      },
    ],
  },
  "Backend Development": {
    overall: "3+ Years",
    groups: [
      { label: "3+ Years Experience", items: ["FastAPI", "Flask", "Node.js"] },
      { label: "2+ Years Experience", items: ["ASP.NET Core", "Ruby on Rails", "Spring Boot"] },
    ],
  },
  "APIs & System Integration": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: ["Asynchronous Processing", "Background Jobs", "RESTful APIs"],
      },
      {
        label: "2+ Years Experience",
        items: ["GraphQL", "SOAP Services", "Third-Party API Integration"],
      },
    ],
  },
  Databases: {
    overall: "3+ Years",
    groups: [
      { label: "3+ Years Experience", items: ["PostgreSQL", "Redis", "SQLite", "Supabase"] },
      { label: "2+ Years Experience", items: ["Microsoft SQL Server", "MySQL"] },
    ],
  },
  "Cloud & Enterprise Platforms": {
    overall: "2+ Years",
    groups: [
      { label: "2+ Years Experience", items: ["Docker", "Kubernetes"] },
      { label: "1+ Year Experience", items: ["AWS", "Databricks", "Microsoft Azure", "ServiceNow"] },
    ],
  },
  "Algorithms & Problem-Solving": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: [
          "Algorithmic Thinking", "Data Structures", "Logical Reasoning", "Performance Optimisation",
          "Problem Decomposition", "Root-Cause Analysis",
        ],
      },
    ],
  },
  "Data Engineering & Analytics": {
    overall: "1+ Year",
    groups: [
      {
        label: "1+ Year Experience",
        items: [
          "Apache Spark (PySpark)", "Data Catalogs", "Data Lakes", "Data Validation",
          "Data Visualisation", "ETL Pipelines", "NumPy", "Pandas", "Pydantic", "Python", "SQL",
        ],
      },
    ],
  },
  "Software Engineering": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: [
          "Agile Scrum", "Application Support", "Design Patterns", "Object-Oriented Programming",
          "Procedural Programming", "SDLC", "System Design", "Technical Documentation",
        ],
      },
    ],
  },
  "Testing & Reliability": {
    overall: "2+ Years",
    groups: [
      {
        label: "2+ Years Experience",
        items: [
          "API Testing", "Debugging", "Error Handling", "Integration Testing", "Logging",
          "Root-Cause Analysis", "RSpec", "Test-Driven Development", "Troubleshooting", "Unit Testing",
        ],
      },
    ],
  },
  "AI & Intelligent Automation": {
    overall: "1+ Year",
    groups: [
      {
        label: "1+ Year Experience",
        items: [
          "AI API Integration", "AI Application Deployment & Monitoring", "AI Chatbot Development",
          "Conversational AI", "Prompt Engineering", "Retrieval Agents", "Single-Agent Applications",
          "Website Chatbot Integration",
        ],
      },
    ],
  },
  Security: {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: [
          "Access Control Lists", "Authentication and Authorisation", "Column-Level Encryption",
          "JWT Authentication", "OAuth 2.0", "Role-Based Access Control", "Row-Level Security",
          "SAML 2.0", "Session-Based Authentication",
        ],
      },
    ],
  },
  "Mobile Development": {
    overall: "1+ Year",
    groups: [
      {
        label: "1+ Year Experience",
        items: [
          ".NET MAUI", "Android Studio", "API Integration", "Biometric Authentication", "Expo",
          "Firebase", "Flutter", "Local Data Storage", "Mobile UI Design", "MVVM Architecture",
          "Platform Lifecycles", "Push Notifications", "React Native",
        ],
      },
    ],
  },
  "DevOps & Version Control": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: [
          "Actions", "Branching Strategies", "CI/CD", "Code Reviews", "Events", "Git", "Git Commands",
          "GitHub", "GitHub Actions", "GitHub Pages", "Jobs", "Least-Privilege Workflow Permissions",
          "OpenID Connect", "Runners", "Workflows",
        ],
      },
    ],
  },
  "Architecture & Design": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: [
          "Event-Driven Architecture", "Microservices", "Monolithic Architecture",
          "MVC (Model-View-Controller)", "Serverless Architecture",
        ],
      },
    ],
  },
  "Tools & IDEs": {
    overall: "3+ Years",
    groups: [
      {
        label: "3+ Years Experience",
        items: ["Confluence", "Jira", "Visual Studio", "Visual Studio Code"],
      },
      {
        label: "2+ Years Experience",
        items: ["Eclipse / NetBeans", "Miro", "Postman"],
      },
      { label: "1+ Year Experience", items: ["Anaconda", "DBeaver", "Notion"] },
    ],
  },
};

const uniqueSkills = new Set(skillCategories.flatMap((category) => category.items));

export const stats = {
  programmingLanguages: String(skillCategories[0].items.length),
  frameworksAndTools: `${uniqueSkills.size}+`,
  databaseSystems: String(skillCategories[4].items.length),
  certifications: "8",
};
