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
    role: "Java Reactive Intern",
    company: "Zensar Technologies",
    period: "July 2025 - Present",
    location: "Sandton, Johannesburg",
    description:
      "Currently gaining hands-on experience in enterprise Java development, building reactive applications and learning industry best practices in a multinational IT services environment.",
    achievements: [
      "Completed the W3Schools Java Professional Certification",
      "Gained proficiency in DevOps practices including version control (Git) and CI/CD fundamentals",
      "Built foundational knowledge in databases and SQL for enterprise application development",
      "Preparing for Work Integrated Learning (WIL) to apply technical and professional skills in real-world projects",
    ],
    technologies: ["Java", "C#", ".NET", "Git", "SQL", "DevOps", "CI/CD"],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Agrigate One",
    period: "February 2024 - October 2024",
    location: "Illovo, South Africa",
    description:
      "Developed and maintained scalable backend services for agricultural technology solutions, working in a fast-paced startup environment with a focus on delivering high-quality, production-ready code.",
    achievements: [
      "Developed and maintained scalable backend services using Ruby on Rails, Python, and Flask",
      "Optimized PostgreSQL queries for secure and efficient data handling, improving query performance by 40%",
      "Implemented background job processing with Redis and Sidekiq, improving task efficiency",
      "Built responsive frontend interfaces using Angular and TypeScript with Tailwind CSS",
      "Troubleshot and debugged full-stack application issues, ensuring system stability",
      "Participated in code reviews and pair programming following Agile Scrum methodologies",
    ],
    technologies: [
      "Ruby on Rails",
      "Python",
      "Flask",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Sidekiq",
      "Tailwind CSS",
      "Postman",
      "GitHub",
      "Jira",
      "Confluence",
      "Agile Scrum",
    ],
  },
  {
    role: "Graduate Cloud & DevOps Engineer",
    company: "Disraptor",
    period: "November 2022 - March 2023",
    location: "Illovo, South Africa",
    description:
      "Completed intensive training in cloud technologies, gaining foundational experience in cloud architecture and DevOps practices.",
    achievements: [
      "Assisted with web development tasks and explored solutions architecture concepts",
      "Participated in simulated cloud migration and workload architecture reviews",
      "Gained hands-on experience with cloud services and best practices",
    ],
    technologies: [
      "Cloud Architecture",
      "DevOps",
      "Web Development",
      "Solutions Architecture",
    ],
  },
];
