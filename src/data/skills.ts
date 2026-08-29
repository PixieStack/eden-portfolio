export const skills = {
  programming: ["C#", "Java", "Python", "JavaScript", "TypeScript", "Ruby", "SQL"],
  frameworks: [
    "ASP.NET Core MVC", ".NET", "Spring Boot", "Ruby on Rails", "FastAPI", "Flask", "Node.js",
    "Angular", "React.js", "Tailwind CSS", "Bootstrap", "GraphQL", "RESTful APIs",
  ],
  web: ["HTML5", "CSS3"],
  databases: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "Supabase", "SQLite", "Redis"],
  devops: ["Docker", "Kubernetes", "Git and GitHub", "CI/CD Pipelines", "Postman", "Jira", "Confluence"],
  platforms: ["ServiceNow", "Databricks", "AWS"],
  dataAnalytics: ["Python Data Analytics", "SQL Queries", "Data Visualization", "Pandas", "NumPy"],
  algorithms: [
    "Algorithmic Problem-Solving", "Data Structures", "Algorithm Design", "Complexity Analysis",
    "Procedural Programming", "Problem Decomposition", "System Integration", "Performance Optimisation",
    "Scalability and Maintainability", "Asynchronous Processing", "Concurrency Fundamentals",
    "Task Sequencing", "Data Consistency", "Failure and Alternate Flow Handling", "Root-Cause Analysis",
  ],
  practices: [
    "Object-Oriented Programming", "Procedural Programming", "Algorithmic Problem-Solving",
    "Software Development Life Cycle", "Agile and Scrum", "System Design Fundamentals", "Software Testing",
    "Unit Testing", "Integration Testing", "Code Reviews", "Technical Documentation",
    "Debugging and Troubleshooting", "Root-Cause Analysis", "Performance Optimisation",
    "Error Handling and Logging", "Secure Software Development", "Software Delivery Coordination",
    "Continuous Learning and Knowledge Sharing",
  ],
  security: [
    "Authentication and Authorisation", "JWT Authentication", "OAuth 2.0", "Role-Based Access Control",
    "AWS IAM", "Secure System Integration", "Error Handling", "Logging and Monitoring", "Retry Handling",
    "Data Validation", "Application Reliability", "Root-Cause Analysis",
  ],
};

export const stats = {
  programmingLanguages: String(skills.programming.length),
  frameworksAndTools: `${skills.frameworks.length}+`,
  databaseSystems: String(skills.databases.length),
  certifications: "8+",
};

export const softSkills = [
  "Analytical Thinking", "Structured Problem-Solving", "Technical Communication", "Team Collaboration",
  "Learning Agility", "Adaptability", "Attention to Detail", "Requirements Analysis", "Knowledge Sharing",
  "Constructive Feedback", "Stakeholder Communication", "Time and Priority Management",
];
