import { FlipHorizontal2, RotateCcw } from "lucide-react";
import type { KeyboardEvent, ReactNode } from "react";
import type { SkillExperience } from "../data/skills";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  items: string[];
  color: string;
  index: number;
  experience: SkillExperience;
  isFlipped: boolean;
  onFlip: () => void;
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
  experience,
  isFlipped,
  onFlip,
}: SkillCardProps) {
  const colors = colorClasses[color] || colorClasses.primary;

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onFlip();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${isFlipped ? "Show skills for" : "Show experience for"} ${title}`}
      onClick={onFlip}
      onKeyDown={handleKeyDown}
      className="min-w-0 rounded-3xl outline-none [perspective:1400px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`skill-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className={`grid h-full transform-gpu transition-transform duration-500 [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] [will-change:transform] motion-reduce:transition-none ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
        <div aria-hidden={isFlipped} className="card flex h-full min-h-[22rem] flex-col p-5 transition-[border-color,box-shadow] duration-300 [backface-visibility:hidden] [grid-area:1/1] hover:border-white/15 hover:shadow-xl hover:shadow-black/20 sm:p-8">
          <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:items-center sm:gap-4">
            <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${colors.bg} ${colors.text}`}>
              {icon}
            </div>
            <h3 className="min-w-0 break-words font-display text-lg font-semibold leading-snug text-white sm:text-xl">
              {title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className={`max-w-full cursor-default break-words rounded-lg border px-3 py-2 text-xs font-medium transition-transform hover:scale-105 sm:px-4 sm:text-sm ${colors.bg} ${colors.text} ${colors.border}`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-sm">
            <span className="text-muted">{items.length} skills</span>
            <span className={`inline-flex items-center gap-1.5 font-medium ${colors.text}`}>
              {experience.overall} overall <FlipHorizontal2 size={15} />
            </span>
          </div>
        </div>

        <div aria-hidden={!isFlipped} className="card flex h-full min-h-[22rem] flex-col border border-white/10 p-5 [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)] sm:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className={`grid h-11 w-11 flex-none place-items-center rounded-xl ${colors.bg} ${colors.text}`}>
                {icon}
              </span>
              <div className="min-w-0">
                <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${colors.text}`}>Experience view</p>
                <h3 className="mt-1 break-words font-display text-lg font-semibold leading-snug text-white">{title}</h3>
              </div>
            </div>
            <span className={`inline-flex min-h-8 flex-none items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${colors.bg} ${colors.text} ${colors.border}`}>
              {experience.overall}
            </span>
          </div>

          <div className="flex-1 space-y-5 py-5">
            {experience.groups.map((group) => (
              <div key={group.label}>
                <h4 className={`text-xs font-semibold uppercase tracking-[0.14em] ${colors.text}`}>{group.label}</h4>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 min-[430px]:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex min-w-0 items-start gap-2 text-sm leading-snug text-white/75">
                      <span className={`mt-[0.42rem] h-1.5 w-1.5 flex-none rounded-full bg-current opacity-75 ${colors.text}`} />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end border-t border-white/5 pt-4">
            <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text}`}>
              <RotateCcw size={15} /> Return to skills
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
