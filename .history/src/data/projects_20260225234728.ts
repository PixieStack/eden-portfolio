import enrollifyImg from "../assets/projects/enrollify.svg";
import attorneysImg from "../assets/projects/thwala-attorneys.svg";
import taskManagerImg from "../assets/projects/task-manager.svg";
import healthcareImg from "../assets/projects/healthcare.svg";
import yardAppImg from "../assets/projects/yard-app.svg";

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
}

export const projects: Project[] = [
  {
    category: "EdTech",
    title: "Enrollify – School Application Platform",
    period: "In Development - MVP Target: Q4 2026",
    description:
      "A comprehensive EdTech solution designed to streamline and digitize the school application process for South African primary and high schools. The platform addresses the fragmented, paper-based admission system by enabling parents to submit applications online, track progress in real-time, and facilitating seamless learner transfers across provinces.",
    achievements: [
      "Targeting 80% reduction in paper-based applications within the first year",
      "Partnering with 50+ schools across multiple provinces for nationwide rollout",
      "Aligned with Department of Basic Education digital transformation goals",
      "Secure document uploads, real-time application tracking, and mobile-friendly design",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "JWT",
    ],
    image: enrollifyImg,
  },
  {
    category: "PropTech",
    title: "My-Yard – Rental Management Platform",
    period: "In Development - Target: Q2 2026",
    description:
      "A web-based rental management platform designed to simplify the process of renting out backrooms, backyard dwellings, and small residential units. Targets individual property owners and landlords in South Africa who want a digital, accessible, and transparent way to list rental spaces, manage tenants, and handle inquiries.",
    achievements: [
      "Digitizing informal rental market for better visibility and record keeping",
      "Mobile-responsive design for low digital literacy users",
      "Landlord dashboard for managing listings, inquiries, and tenant information",
      "Tenant features: browse listings, filter by location/price, submit inquiries",
      "Planned: online rental applications, payment tracking, location-based search",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "SCSS",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "JWT",
      "REST API",
      "Docker",
    ],
    image: yardAppImg,
    github: "https://github.com/PixieStack",
  },
  {
    category: "Legal Tech",
    title: "Thwala Attorneys Web Application",
    period: "March 2025 - June 2025",
    description:
      "A full-stack legal case and client management system with MVC architecture and Entity Framework Core for reliable data persistence. This solution automates workflows, client communications, and provides comprehensive case tracking for law firm operations.",
    achievements: [
      "Automated database migrations, SMTP client notifications, and application logging",
      "Fully containerized with Docker and Docker Compose for improved deployment",
      "Enabled secure case management workflows and role-based access for law firm staff",
      "Integrated email notifications for case updates and client communications",
    ],
    technologies: [
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server 2022",
      "Docker",
      "Docker Compose",
      "SMTP",
    ],
    image: attorneysImg,
    live: "https://thwala-attorneys-dcgsejckgmfjbxdn.southafricanorth-01.azurewebsites.net",
  },
  {
    category: "Productivity",
    title: "Task Management Application",
    period: "December 2024 - March 2025",
    description:
      "A full-stack productivity platform featuring JWT authentication, user profile management, and comprehensive task management capabilities. The application includes analytics dashboards, email notifications, and a responsive design that works seamlessly across all devices.",
    achievements: [
      "Implemented task CRUD operations, prioritization, tagging, status tracking, and time tracking",
      "Designed a personal productivity dashboard with analytics and overdue task alerts",
      "Delivered a responsive, mobile-friendly UI/UX with dark/light mode toggle",
      "Integrated drag-and-drop functionality for intuitive task organization",
    ],
    technologies: [
      "Angular 17+",
      "TypeScript",
      "SCSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "JWT",
      "SMTP",
    ],
    image: taskManagerImg,
    github: "https://github.com/PixieStack",
  },
  {
    category: "Healthcare",
    title: "Primary Healthcare Management System",
    period: "March 2023 - November 2023",
    description:
      "A capstone project developed at Nelson Mandela University - a comprehensive healthcare management system enabling secure scheduling, patient records management, and provider interactions. Built to serve underserved communities with accessible healthcare technology.",
    achievements: [
      "Implemented role-based access control and centralized patient database",
      "Built modules for registration, family planning, prenatal care, and chronic medication management",
      "Ensured security, scalability, and patient-centered functionality",
      "Responsive design supporting multiple devices for healthcare workers in the field",
    ],
    technologies: [
      "ASP.NET MVC 7",
      "C#",
      "Microsoft SQL Server",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    image: healthcareImg,
  },
];
