import { useId, useState } from "react";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import type { BadgeGroup } from "../data/badges";

interface BadgeGroupCardProps {
  group: BadgeGroup;
}

export default function BadgeGroupCard({ group }: BadgeGroupCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const previewBadges = group.badges.slice(0, 4);

  return (
    <article className={`education-badge-group overflow-hidden rounded-3xl border transition ${isOpen ? "is-open border-purple/30 bg-surface shadow-2xl shadow-purple/5" : "border-white/10 bg-surface/80 hover:border-white/20"}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group flex w-full flex-col gap-5 bg-gradient-to-r from-purple/10 via-transparent to-primary/5 p-5 text-left transition hover:from-purple/15 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="flex min-w-0 items-start gap-4">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-purple/20 bg-purple/15 text-purple shadow-lg shadow-purple/10">
            <Sparkles size={21} />
          </span>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple">Verified issuer</span>
            <h3 className="mt-1 break-words font-display text-xl font-semibold text-white sm:text-2xl">{group.issuer}</h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted">{group.summary}</p>
          </div>
        </div>

        <div className="flex w-full flex-none items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <div className="hidden -space-x-2 sm:flex" aria-hidden="true">
            {previewBadges.map((badge) => (
              <span key={badge.name} className="grid h-10 w-10 overflow-hidden rounded-full border-2 border-surface bg-white p-1 shadow-lg">
                <img src={`${import.meta.env.BASE_URL}${badge.image}`} alt="" className="h-full w-full object-contain" loading="lazy" />
              </span>
            ))}
          </div>
          <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white">
            {group.badges.length} {group.badges.length === 1 ? "badge" : "badges"}
          </span>
          <span className={`grid h-10 w-10 flex-none place-items-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 group-hover:border-purple/30 group-hover:text-purple ${isOpen ? "rotate-180 border-purple/30 text-purple" : ""}`}>
            <ChevronDown size={19} />
          </span>
        </div>
      </button>

      {isOpen && (
        <div id={panelId}>
          <div className="border-t border-white/5 p-4 sm:p-6">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {group.badges.map((badge) => (
                <a
                  key={`${group.issuer}-${badge.name}`}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/badge flex min-h-24 min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3 transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/5"
                  aria-label={`Open ${badge.name} badge credential`}
                >
                  <div className="grid h-16 w-16 flex-none place-items-center overflow-hidden rounded-xl bg-white p-1.5">
                    <img src={`${import.meta.env.BASE_URL}${badge.image}`} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="break-words font-display text-sm font-semibold leading-snug text-white">{badge.name}</h4>
                    <p className="mt-1 text-xs text-muted">Completed {badge.completed}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      View credential <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {group.profileUrl && (
              <a
                href={group.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex max-w-full items-center gap-2 break-words rounded-xl border border-purple/20 bg-purple/10 px-4 py-3 text-sm font-semibold text-purple transition hover:border-purple/40 hover:bg-purple/15 hover:text-white"
              >
                {group.profileLabel} <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
