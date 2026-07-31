import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Mail } from "lucide-react";

const projectOrder = ["Thwala Attorneys Web Application", "BudgetPro", "MinnieVerse"];
const orderedProjects = [...projects].sort((a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title));
const liveProjects = orderedProjects.filter((project) => Boolean(project.live));
const projectsInDevelopment = orderedProjects.filter((project) => !project.live);

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
          <span className="text-gradient">Application Portfolio</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          Delivering innovative solutions across EdTech, LegalTech, Healthcare,
          and Productivity domains. Each project represents real-world impact
          and technical excellence.
        </p>
      </div>

      <div className="space-y-16" data-testid="projects-grid">
        <section aria-labelledby="live-applications-heading">
          <div className="mb-8">
            <h3 id="live-applications-heading" className="font-display text-3xl md:text-4xl font-bold text-white">
              Live <span className="text-gradient">Applications</span>
            </h3>
            <p className="mt-3 text-lg text-muted">Launched and ready to explore.</p>
            <p className="mt-2 text-muted">These are completed applications that are deployed, publicly accessible and running in production.</p>
          </div>
          <div className="space-y-20">
            {liveProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} reversed={index % 2 === 1} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="in-development-heading" className="pt-8 border-t border-white/10">
          <div className="mb-8">
            <h3 id="in-development-heading" className="font-display text-3xl md:text-4xl font-bold text-white">
              In <span className="text-gradient">Development</span>
            </h3>
            <p className="mt-3 text-lg text-muted">Currently taking shape.</p>
            <p className="mt-2 text-muted">The core interface is complete, while backend development, integrations and testing are still in progress. Final designs may change before launch.</p>
          </div>
          {projectsInDevelopment.length > 0 && (
            <div className="space-y-20">
              {projectsInDevelopment.map((project, index) => (
                <ProjectCard key={project.title} project={project} reversed={index % 2 === 1} index={liveProjects.length + index} />
              ))}
            </div>
          )}
        </section>
      </div>
      {/* Project Access CTA */}
      <div className="mt-20 text-center">
        <div className="card p-10 max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Interested in the code behind the work?
          </h3>
          <p className="text-muted mb-6">
            All of my project repositories are private, but source code,
            technical samples and project walkthroughs are available upon
            request for recruitment or collaboration purposes.
          </p>
          <a
            href="#/contact"
            data-testid="projects-access-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            <Mail size={18} />
            Request Project Access
          </a>
        </div>
      </div>
    </section>
  );
}
