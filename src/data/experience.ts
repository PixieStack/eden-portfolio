export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Zensar Technologies",
    period: "July 2025 - Present",
    location: "Sandton, Johannesburg",
    description:
      "Participating in enterprise technology training focused on SQL, cloud technologies, software engineering best practices, and Agile methodologies.",
    achievements: [
      "Developing backend solutions while applying object-oriented programming principles and software design patterns",
      "Building and consuming RESTful APIs and integrating applications with relational databases",
      "Developing AI-powered chatbot solutions and intelligent automation prototypes using modern AI tools and APIs",
      "Participating in internal innovation initiatives and hackathons, collaborating with multidisciplinary teams to design and deliver proof-of-concept solutions within tight deadlines",
      "Working with Jira for sprint planning, backlog management, issue tracking, task estimation, and Agile project execution",
      "Using Git and GitHub for version control, branching strategies, pull requests, and collaborative software development",
      "Gaining practical experience with enterprise cloud platforms including AWS, Microsoft Azure, and ServiceNow",
      "Performing debugging, troubleshooting, testing, and application support to improve software quality and reliability",
      "Working with SQL databases to query, manipulate, and validate application data",
    ],
    technologies: [
      "SQL",
      "RESTful APIs",
      "AI Tools",
      "Jira",
      "Git",
      "GitHub",
      "AWS",
      "Microsoft Azure",
      "ServiceNow",
      "Object-Oriented Programming",
      "Software Design Patterns",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "AgrigateOne",
    period: "February 2024 - April 2025",
    location: "Johannesburg, South Africa",
    description:
      "Designed, developed, tested, and maintained enterprise web applications using Ruby on Rails, Angular, TypeScript, Python, GraphQL, PostgreSQL, and Redis.",
    achievements: [
      "Developed the Bulk Finance Rule Management module, implementing CSV import/export, validation, bulk create/update functionality, and automated error handling",
      "Optimized PostgreSQL queries and backend services to improve application performance and scalability",
      "Developed responsive user interfaces using Angular, Tailwind CSS, HTML5, and TypeScript",
      "Worked extensively with AWS services including ECS, EC2, RDS, SES, SNS, and Textract to support cloud-hosted enterprise applications",
      "Used Docker for containerized development and deployment across multiple environments",
      "Developed and maintained asynchronous background jobs using Celery and Redis",
      "Debugged production issues, investigated root causes, and implemented permanent software fixes",
      "Collaborated with product owners, QA engineers, and developers using Agile Scrum methodologies, Jira, GitHub, and code reviews",
      "Participated in sprint planning, backlog refinement, daily stand-ups, sprint reviews, and production deployments",
    ],
    technologies: [
      "Ruby on Rails",
      "Angular",
      "TypeScript",
      "Python",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Celery",
      "AWS (ECS, EC2, RDS, SES, SNS, Textract)",
      "Docker",
      "Tailwind CSS",
      "HTML5",
      "Jira",
      "GitHub",
      "Agile Scrum",
    ],
  },
  {
    role: "Graduate Cloud & DevOps Engineer",
    company: "Disraptor",
    period: "November 2022 - October 2023",
    location: "Johannesburg, South Africa",
    description:
      "Supported cloud infrastructure hosted on Amazon Web Services (AWS) across development and testing environments.",
    achievements: [
      "Provisioned, configured, and monitored AWS resources including EC2, RDS, IAM, S3, SES, Lambda, and CloudWatch",
      "Assisted with deploying and maintaining cloud-native applications while following DevOps best practices",
      "Automated deployment and operational tasks using scripting and cloud management tools",
      "Configured IAM users, roles, and permissions following security best practices",
      "Monitored application health, cloud resources, and system performance using AWS monitoring services",
      "Assisted with troubleshooting cloud infrastructure, application deployments, networking, and production incidents",
      "Supported CI/CD processes using Git, GitHub, Docker, and GitHub Actions",
    ],
    technologies: [
      "AWS (EC2, RDS, IAM, S3, SES, Lambda, CloudWatch)",
      "DevOps",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Cloud Infrastructure",
      "Scripting",
      "Cloud Management Tools",
    ],
  },
];
