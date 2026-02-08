import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import type { Experience } from "../data/experience";

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const [open, setOpen] = useState(index === 0); // First item open by default

  return (
    <div
      className="relative pl-10 md:pl-14"
      data-testid={`timeline-item-${index}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-purple shadow-glow z-10" />

      {/* Connector line to dot */}
      <div className="absolute left-2 top-8 w-6 md:w-10 h-px bg-gradient-to-r from-primary/50 to-transparent" />

      {/* Card */}
      <div className="card p-6 md:p-8 card-hover">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left"
          data-testid={`timeline-toggle-${index}`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                {item.role}
              </h3>
              <p className="text-primary font-semibold text-lg mt-1">
                {item.company}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-muted text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {item.period}
                </span>
                {item.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                )}
              </div>
            </div>

            <ChevronDown
              size={24}
              className={`text-muted transition-transform duration-300 flex-shrink-0 ${
                open ? "rotate-180 text-primary" : ""
              }`}
            />
          </div>
        </button>

        {/* Description - always visible */}
        <p className="mt-4 text-muted leading-relaxed">{item.description}</p>

        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}
        >
          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-primary mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-purple/10 text-purple text-sm border border-purple/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
