import attorneysImg from "../assets/projects/thwala-attorneys-logo.jpeg";
import budgetProImg from "../assets/projects/budgetpro-logo.png";
import minnieVerseImg from "../assets/projects/minnie-verse-logo.png";

export type ProjectStatus = "live" | "development";

export interface Project {
  category: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  image: string;
  status: ProjectStatus;
  github?: string;
  live?: string;
  stack?: Record<string, string[]>;
  imageFit?: "cover" | "contain" | "cover-padded";
  imageScale?: number;
  imagePosition?: string;
}

const publicImage = (fileName: string): string =>
  `${import.meta.env.BASE_URL}${fileName}`;

export const projects: Project[] = [
  {
    category: "Finance Tech",
    title: "BudgetPro",
    period: "Personal Finance Platform",
    status: "live",
    description:
      "A personal finance platform designed to help users track income, manage budgets, monitor expenses, and make clearer day-to-day financial decisions.",
    achievements: [
      "Built a focused budgeting workflow for tracking income, expenses, and spending categories",
      "Designed a responsive interface for clear financial summaries across devices",
      "Structured the application for maintainable frontend, backend, and data-layer integration",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "JWT Authentication",
      "Docker",
    ],
    stack: {
      Frontend: ["React", "TypeScript", "Tailwind CSS"],
      Backend: ["ASP.NET Core", "C#", "Entity Framework Core"],
      Database: ["SQL Server"],
      Security: ["JWT Authentication"],
      Deployment: ["Docker", "Render"],
    },
    image: budgetProImg,
    imageFit: "cover",
    imageScale: 1.13,
    imagePosition: "center",
    github: "https://github.com/PixieStack/budget-pro",
    live: "https://budgetpro-afq2.onrender.com",
  },
  {
    category: "Legal Tech",
    title: "Thwala Attorneys Web Application",
    period: "Legal Practice Platform",
    status: "live",
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
    stack: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["ASP.NET Core 8", "C#"],
      Data: ["Entity Framework Core", "SQL Server 2022"],
      Security: ["JWT Authentication", "Role-Based Access Control"],
      Infrastructure: ["Docker", "Docker Compose", "SMTP", "Render"],
    },
    image: attorneysImg,
    imageFit: "cover",
    imageScale: 1,
    imagePosition: "center",
    github: "https://github.com/PixieStack/thwala-attorneys-inc",
    live: "https://thwala-attorneys-web-ougs.onrender.com",
  },
  {
    category: "Creative Web",
    title: "MinnieVerse",
    period: "Creative Landing Experience",
    status: "live",
    description:
      "A playful, responsive landing experience created as a personalized digital universe for Minnie, combining expressive visual design, storytelling, and an engaging presentation across screen sizes.",
    achievements: [
      "Created a themed landing experience with custom visual identity and responsive layouts",
      "Built an engaging presentation focused on storytelling, polish, and accessibility",
      "Deployed the experience as a fast, lightweight web application on Render",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "Render",
    ],
    stack: {
      Frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design",
      ],
      Backend: ["Not required — static landing experience"],
      Deployment: ["Render"],
      Assets: ["Custom MinnieVerse branding and imagery"],
    },
    image: minnieVerseImg,
    imageFit: "cover",
    imageScale: 1.17,
    imagePosition: "center",
    github: "https://github.com/PixieStack/minnie-verse",
    live: "https://minnieverse-landing.onrender.com",
  },
  {
    category: "Transport Tech",
    title: "ShuttleBee",
    period: "School Transport Management Platform",
    status: "development",
    description:
      "A role-based school transport management platform designed for South African families and transport providers. It connects parents, children, drivers and operators through trip tracking, pickup and drop-off confirmations, route management, payments and support workflows.",
    achievements: [
      "Created dedicated dashboards for parents, children, drivers and transport providers",
      "Implemented JWT authentication, child login codes and role-based platform access",
      "Built trip management, route tracking and dual pickup and drop-off confirmation workflows",
      "Structured the platform for future live maps, payment processing and real-time notifications",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "FastAPI",
      "Python",
      "MongoDB",
      "JWT Authentication",
    ],
    stack: {
      Frontend: [
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      Backend: ["FastAPI", "Python"],
      Database: ["MongoDB", "Motor"],
      Security: [
        "JWT Authentication",
        "Role-Based Access Control",
        "Child Login Codes",
      ],
      Integrations: [
        "Google Maps — in progress",
        "PayFast — in progress",
        "Yoco — in progress",
      ],
    },
    image: publicImage("shuttle-bee.jpeg"),
    imageFit: "cover",
    imageScale: 1,
    imagePosition: "center",
    github: "https://github.com/PixieStack/shuttle-bee",
    live: "https://shuttle-bee.onrender.com/",
  },
  {
    category: "Mobility Tech",
    title: "Luna Rides",
    period: "Luxury E-Hailing Platform",
    status: "development",
    description:
      "A premium luxury e-hailing platform designed for riders, corporate travellers and professional chauffeurs. The current application delivers the full customer and driver experience while backend services, payments and real-time ride operations are still being developed.",
    achievements: [
      "Designed a premium dark navy and platinum interface for luxury transport services",
      "Created a multi-step ride-booking flow with vehicle selection, fare estimates and maps",
      "Built detailed customer and chauffeur dashboards for rides, earnings, schedules and profiles",
      "Added Leaflet and OpenStreetMap support without requiring a paid map API key",
    ],
    technologies: [
      "React 19",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Leaflet",
      "OpenStreetMap",
      "shadcn/ui",
    ],
    stack: {
      Frontend: [
        "React 19",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "shadcn/ui",
      ],
      Experience: [
        "Framer Motion",
        "Responsive Dashboards",
        "Multi-Step Booking",
      ],
      Maps: ["Leaflet", "React Leaflet", "OpenStreetMap"],
      Backend: ["FastAPI — in development"],
      Database: ["MongoDB — planned", "Mock data currently used"],
    },
    image: publicImage("luna-rides.jpeg"),
    imageFit: "cover",
    imageScale: 1,
    imagePosition: "center",
    github: "https://github.com/PixieStack/luna-rides",
    live: "https://luna-rides.onrender.com/",
  },
  {
    category: "Hospitality Tech",
    title: "Nkhensani Hospitality",
    period: "Hospitality and Booking Experience",
    status: "development",
    description:
      "A premium multi-brand hospitality website bringing together Nkhensani Hospitality, FoodByNkhensani and CoffeeByNkhensani. It presents services, curated experiences and a guided booking journey through one cohesive digital platform.",
    achievements: [
      "Created a cohesive multi-brand experience for food, coffee and hospitality services",
      "Built a searchable services catalogue with category-based filtering",
      "Developed a four-step booking prototype with validation, review and confirmation",
      "Designed a responsive premium interface using a custom crimson and cream visual system",
    ],
    technologies: [
      "React 19",
      "JavaScript",
      "React Router 7",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    stack: {
      Frontend: [
        "React 19",
        "JavaScript",
        "React Router 7",
        "Tailwind CSS",
      ],
      Experience: [
        "Multi-Brand Navigation",
        "Service Filtering",
        "Four-Step Booking Flow",
      ],
      Backend: ["Backend booking persistence — in development"],
      Integrations: [
        "Payments — planned",
        "Email confirmations — planned",
        "Live availability — planned",
      ],
      Deployment: ["Render"],
    },
    image: publicImage("nkhensani.jpeg"),
    imageFit: "cover",
    imageScale: 1,
    imagePosition: "center",
    github: "https://github.com/PixieStack/nkhensani",
    live: "https://nkhensani.onrender.com/",
  },
];