import attorneysImg from "../assets/projects/thwala-attorneys-logo.jpeg";
import budgetProImg from "../assets/projects/budgetpro-logo.png";
import minnieVerseImg from "../assets/projects/minnie-verse-logo.png";

export interface Project {
  category: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  stack?: Record<string, string[]>;
  imageFit?: "cover" | "contain" | "cover-padded";
}

export const projects: Project[] = [
  {
    category: "Finance Tech",
    title: "BudgetPro",
    period: "Personal Finance Platform",
    description: "A personal finance platform designed to help users track income, manage budgets, monitor expenses, and make clearer day-to-day financial decisions.",
    achievements: [
      "Built a focused budgeting workflow for tracking income, expenses, and spending categories",
      "Designed a responsive interface for clear financial summaries across devices",
      "Structured the application for maintainable frontend, backend, and data-layer integration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "JWT Authentication", "Docker"],
    stack: {
      Frontend: ["React", "TypeScript", "Tailwind CSS"],
      Backend: ["ASP.NET Core", "C#", "Entity Framework Core"],
      Database: ["SQL Server"],
      Security: ["JWT Authentication"],
      Deployment: ["Docker"],
    },
    image: budgetProImg,
    github: "https://github.com/PixieStack/budget-pro",
    live: "https://budgetpro-afq2.onrender.com",
  },
  {
    category: "Legal Tech",
    title: "Thwala Attorneys Web Application",
    period: "",
    description:
      "A full-stack legal case and client management platform for Thwala Attorneys Inc., combining a responsive React frontend with an ASP.NET Core backend. The system streamlines client intake, case workflows, secure authentication, communications, and legal practice administration.",
    achievements: [
      "Built responsive React and Tailwind CSS interfaces for legal service discovery and client interactions",
      "Implemented ASP.NET Core APIs with Entity Framework Core and SQL Server persistence",
      "Added JWT authentication, role-based access control, validation, and secure client workflows",
      "Integrated reliable email notifications, logging, and production-ready error handling",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server 2022",
      "Docker",
      "Docker Compose",
      "SMTP",
    ],
    image: attorneysImg,
    imageFit: "cover-padded",
    github: "https://github.com/PixieStack/thwala-attorneys-inc",
    live: "https://thwala-attorneys-web-ougs.onrender.com",
    stack: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["ASP.NET Core 8", "C#"],
      Data: ["Entity Framework Core", "SQL Server 2022"],
      Security: ["JWT Authentication", "Role-Based Access Control"],
      Infrastructure: ["Docker", "Docker Compose", "SMTP"],
    },
  },
  {
    category: "Creative Web",
    title: "MinnieVerse",
    period: "Creative Landing Experience",
    description: "A playful, responsive landing experience created as a personalized digital universe for Minnie, combining expressive visual design, storytelling, and an engaging presentation across screen sizes.",
    achievements: [
      "Created a themed landing experience with custom visual identity and responsive layouts",
      "Built an engaging presentation focused on storytelling, polish, and accessibility",
      "Deployed the experience as a fast, lightweight web application on Render",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Render"],
    stack: {
      Frontend: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
      Backend: ["Not required — static landing experience"],
      Deployment: ["Render"],
      Assets: ["Custom MinnieVerse branding and imagery"],
    },
    image: minnieVerseImg,
    github: "https://github.com/PixieStack/minnie-verse",
    live: "https://minnieverse-landing.onrender.com",
  },
];
