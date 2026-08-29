import type { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  items: string[];
  color: string;
  index: number;
}

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  purple: {
    bg: "bg-purple/10",
    text: "text-purple",
    border: "border-purple/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
  },
};

export default function SkillCard({
  title,
  icon,
  items,
  color,
  index,
}: SkillCardProps) {
  const colors = colorClasses[color] || colorClasses.primary;

  return (
    <div
      className="card p-8 card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`skill-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-4 py-2 rounded-lg ${colors.bg} ${colors.text} text-sm font-medium border ${colors.border} hover:scale-105 transition-transform cursor-default`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Skill count */}
      <div className="mt-6 pt-4 border-t border-white/5">
        <span className="text-muted text-sm">{items.length} skills</span>
      </div>
    </div>
  );
}
