import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reversed: boolean;
  index: number;
}

const categoryColors: Record<string, string> = {
  EdTech: "from-blue-500 to-cyan-500",
  "Legal Tech": "from-purple to-pink-500",
  Healthcare: "from-emerald-500 to-teal-500",
  Productivity: "from-primary to-amber-500",
  Marketplace: "from-green-500 to-emerald-500",
  PropTech: "from-green-500 to-emerald-500",
};

export default function ProjectCard({
  project,
  reversed,
  index,
}: ProjectCardProps) {
  const gradientClass =
    categoryColors[project.category] || "from-primary to-purple";

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reversed ? "lg:direction-rtl" : ""}`}
      data-testid={`project-card-${index}`}
    >
      {/* Image */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-dark-card to-dark border border-white/10 shadow-card group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <span
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${gradientClass} text-white font-medium text-sm`}
            >
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${reversed ? "lg:order-1 lg:text-right" : ""}`}>
        <span
          className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${gradientClass} text-white text-sm font-medium mb-4`}
        >
          {project.category}
        </span>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-muted text-sm mb-4">{project.period}</p>

        <p className="text-lg text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-light uppercase tracking-wider mb-3">
              Key Achievements
            </h4>
            <ul className={`space-y-2 ${reversed ? "lg:ml-auto" : ""}`}>
              {project.achievements.slice(0, 3).map((achievement, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-muted ${reversed ? "lg:flex-row-reverse lg:text-right" : ""}`}
                >
                  <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${reversed ? "lg:justify-end" : ""}`}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-surface border border-white/5 text-muted-light text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex gap-4 ${reversed ? "lg:justify-end" : ""}`}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-white/10 text-white font-medium text-sm hover:border-primary/30 transition-all"
            >
              <Github size={18} />
              View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm shadow-glow hover:scale-105 transition-transform"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
