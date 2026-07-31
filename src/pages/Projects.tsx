import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

const projectOrder = ["Thwala Attorneys Web Application", "BudgetPro", "MinnieVerse"];
const orderedProjects = [...projects].sort((a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title));

export default function Projects() {
  return (
    <section className="section" data-testid="projects-section">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary uppercase tracking-widest text-sm font-medium">
          Portfolio
        </span>
        <h2
          className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          data-testid="projects-title"
        >
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          Delivering innovative solutions across EdTech, LegalTech, Healthcare,
          and Productivity domains. Each project represents real-world impact
          and technical excellence.
        </p>
      </div>

      {/* Project Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {["EdTech", "Legal Tech", "Healthcare", "Productivity"].map((cat) => (
          <span
            key={cat}
            className="px-4 py-2 rounded-full bg-surface border border-white/10 text-muted text-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-20" data-testid="projects-grid">
        {orderedProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reversed={index % 2 === 1}
            index={index}
          />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-20 text-center">
        <div className="card p-10 max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Want to see more?
          </h3>
          <p className="text-muted mb-6">
            Check out my GitHub for more projects, code samples, and
            contributions to open source.
          </p>
          <a
            href="https://github.com/PixieStack"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="projects-github-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            <i className="fab fa-github text-xl" />
            View GitHub Profile
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
