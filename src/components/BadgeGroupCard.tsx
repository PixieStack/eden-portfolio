import { ExternalLink, Sparkles } from "lucide-react";
import type { BadgeGroup } from "../data/badges";

interface BadgeGroupCardProps {
  group: BadgeGroup;
}

export default function BadgeGroupCard({ group }: BadgeGroupCardProps) {
  return (
    <article className={`card overflow-hidden border border-white/10 ${group.featured ? "lg:col-span-2" : ""}`}>
      <div className="flex flex-col gap-4 border-b border-white/5 bg-gradient-to-r from-purple/10 to-transparent p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <div className="flex items-center gap-2 text-purple">
            <Sparkles size={17} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Verified badges</span>
          </div>
          <h3 className="mt-2 break-words font-display text-xl font-semibold text-white sm:text-2xl">{group.issuer}</h3>
          <p className="mt-1 max-w-3xl text-sm text-muted">{group.summary}</p>
        </div>
        <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white">
          {group.badges.length} {group.badges.length === 1 ? "badge" : "badges"}
        </span>
      </div>

      <div className={`grid gap-3 p-4 sm:p-6 ${group.featured ? "md:grid-cols-2" : ""}`}>
        {group.badges.map((badge) => (
          <a
            key={`${group.issuer}-${badge.name}`}
            href={badge.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-24 min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3 transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/5 sm:gap-4"
            aria-label={`Open ${badge.name} badge credential`}
          >
            <div className="grid h-16 w-16 flex-none place-items-center overflow-hidden rounded-xl bg-white p-1.5 sm:h-20 sm:w-20">
              <img
                src={`${import.meta.env.BASE_URL}${badge.image}`}
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="break-words font-display text-sm font-semibold leading-snug text-white sm:text-base">
                {badge.name}
              </h4>
              <p className="mt-1 text-xs text-muted">Completed {badge.completed}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Open badge <ExternalLink size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>

      {group.profileUrl && (
        <div className="border-t border-white/5 px-5 py-4 sm:px-6">
          <a
            href={group.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-2 break-words text-sm font-semibold text-purple transition hover:text-white"
          >
            {group.profileLabel} <ExternalLink size={15} />
          </a>
        </div>
      )}
    </article>
  );
}
