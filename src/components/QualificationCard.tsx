import { GraduationCap, Award, ExternalLink } from "lucide-react";
import type { Qualification } from "../data/education";

interface QualificationCardProps {
  item: Qualification;
  index: number;
}

export default function QualificationCard({
  item,
  index,
}: QualificationCardProps) {
  const isEducation = item.type === "Education";
  const Icon = isEducation ? GraduationCap : Award;

  const gradientClass = isEducation
    ? "from-primary to-primary-dark"
    : "from-purple to-purple-dark";

  const bgClass = isEducation ? "bg-primary/10" : "bg-purple/10";

  const textClass = isEducation ? "text-primary" : "text-purple";

  return (
    <div
      className="card p-6 card-hover group"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`qualification-card-${index}`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
        >
          <Icon size={24} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-white leading-tight">
                {item.title}
              </h3>
              <p className={`${textClass} font-medium mt-1`}>
                {item.institution}
              </p>
            </div>

            {/* Type badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${bgClass} ${textClass} flex-shrink-0`}
            >
              {item.type}
            </span>
          </div>

          {item.description && (
            <p className="mt-3 text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-muted text-sm">{item.year}</span>

            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm ${textClass} hover:underline`}
              >
                View Credential
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
