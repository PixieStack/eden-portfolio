import { ChevronDown, Code2, Globe } from "lucide-react";
import { useState } from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reversed: boolean;
  index: number;
}

const categoryColors: Record<string, string> = {
  EdTech: "from-blue-500 to-cyan-500",
  "Finance Tech": "from-emerald-500 to-teal-500",
  "Legal Tech": "from-purple to-pink-500",
  Healthcare: "from-emerald-500 to-teal-500",
  Productivity: "from-primary to-amber-500",
  Marketplace: "from-green-500 to-emerald-500",
  PropTech: "from-green-500 to-emerald-500",
  "Creative Web": "from-pink-500 to-purple",
  "Transport Tech": "from-amber-400 to-yellow-500",
  "Mobility Tech": "from-slate-400 to-cyan-500",
  "Hospitality Tech": "from-rose-500 to-amber-500",
};

export default function ProjectCard({
  project,
  reversed,
  index,
}: ProjectCardProps) {
  const [showStack, setShowStack] = useState(false);

  const gradientClass =
    categoryColors[project.category] || "from-primary to-purple";

  const imageScale = project.imageScale ?? 1;
  const imagePosition = project.imagePosition ?? "center";

  const imageFitClass =
    project.imageFit === "contain"
      ? "object-contain"
      : project.imageFit === "cover-padded"
        ? "object-cover p-2"
        : "object-cover";

  const websiteButtonText =
    project.status === "development" ? "View Preview" : "Visit Website";

  return (
    <div
      id={project.slug}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      data-testid={`project-card-${index}`}
    >
      {/* Project image */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-dark-card to-dark border border-white/10 shadow-card group">
          {/*
           * The outer wrapper applies each project's permanent zoom.
           * The image itself applies the additional hover zoom.
           */}
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${imageScale})`,
              transformOrigin: imagePosition,
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              style={{
                objectPosition: imagePosition,
              }}
              className={`block w-full h-full ${imageFitClass} transition-transform duration-500 ease-out group-hover:scale-105`}
            />
          </div>

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

      {/* Project content */}
      <div className={`${reversed ? "lg:order-1 lg:text-right" : ""}`}>
        <div
          className={`flex flex-wrap items-center gap-3 mb-4 ${
            reversed ? "lg:justify-end" : ""
          }`}
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${gradientClass} text-white text-sm font-medium`}
          >
            {project.category}
          </span>

          {project.status === "development" && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-light text-xs font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              In Development
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>

        {project.period && (
          <p className="text-muted text-sm mb-4">{project.period}</p>
        )}

        <p className="text-lg text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Achievements */}
        {project.achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-light uppercase tracking-wider mb-3">
              Key Achievements
            </h4>

            <ul className={`space-y-2 ${reversed ? "lg:ml-auto" : ""}`}>
              {project.achievements.slice(0, 3).map((achievement) => (
                <li
                  key={achievement}
                  className={`flex items-start gap-2 text-muted ${
                    reversed ? "lg:flex-row-reverse lg:text-right" : ""
                  }`}
                >
                  <span
                    className="text-primary mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ▸
                  </span>

                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology stack */}
        {showStack && project.stack && (
          <div className="mb-6 grid sm:grid-cols-2 gap-3">
            {Object.entries(project.stack).map(([layer, technologies]) => (
              <div
                key={layer}
                className="rounded-xl bg-surface/70 border border-white/5 p-3"
              >
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {layer}
                </p>

                <p className="text-sm text-muted-light">
                  {technologies.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div
          className={`flex flex-wrap items-center gap-4 ${
            reversed ? "lg:justify-end" : ""
          }`}
        >
          {project.stack && (
            <button
              type="button"
              onClick={() => setShowStack((visible) => !visible)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-white/10 text-white font-medium text-sm hover:border-primary/40 transition-colors"
              aria-expanded={showStack}
              aria-label={`${showStack ? "Hide" : "Show"} ${
                project.title
              } technology stack`}
            >
              <Code2 size={16} />

              {showStack ? "Hide Stack" : "View Stack"}

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showStack ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm shadow-glow hover:scale-105 transition-transform w-fit"
              aria-label={`${websiteButtonText}: ${project.title}`}
            >
              <Globe size={16} />
              {websiteButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
