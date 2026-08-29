import { Award, BadgeCheck, BookOpenCheck, CalendarDays, ExternalLink, Eye, FileCheck2 } from "lucide-react";
import type { PortfolioDocument } from "../data/credentials";

interface CredentialCardProps {
  document: PortfolioDocument;
  onView: (document: PortfolioDocument) => void;
}

export default function CredentialCard({ document, onView }: CredentialCardProps) {
  const isAcademic = document.type === "Academic Achievement" || document.type === "Academic Record";
  const isStudy = document.type === "Certification Programme";
  const Icon = isStudy ? BookOpenCheck : isAcademic ? Award : BadgeCheck;
  const statusClass = document.status === "Expired"
    ? "border-amber-500/20 bg-amber-500/10 text-amber-300"
    : document.status === "In Progress"
      ? "border-blue-500/20 bg-blue-500/10 text-blue-300"
      : "border-emerald-500/20 bg-emerald-500/10 text-emerald-300";

  return (
    <article className="card card-hover flex h-full min-w-0 flex-col border border-white/10 p-5 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-purple to-primary text-white shadow-lg shadow-purple/15 sm:h-14 sm:w-14">
          <Icon size={24} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-purple/20 bg-purple/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-purple">
              {document.type}
            </span>
            {document.status && (
              <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${statusClass}`}>
                {document.status}
              </span>
            )}
          </div>
          <h3 className="mt-3 break-words font-display text-lg font-semibold leading-snug text-white sm:text-xl">
            {document.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-purple">{document.issuer}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">{document.description}</p>

      <dl className="mt-5 grid grid-cols-1 gap-x-5 gap-y-4 border-t border-white/5 pt-5 sm:grid-cols-2">
        <div>
          <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted">
            <CalendarDays size={13} /> {document.issuedLabel ?? "Issued"}
          </dt>
          <dd className="mt-1 text-sm font-semibold text-white">{document.issued}</dd>
        </div>
        {document.expires && (
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted">Expires</dt>
            <dd className="mt-1 text-sm font-semibold text-white">{document.expires}</dd>
          </div>
        )}
        {document.details?.map((detail) => (
          <div key={detail.label}>
            <dt className="text-[11px] uppercase tracking-wider text-muted">{detail.label}</dt>
            <dd className="mt-1 break-words text-sm font-semibold text-white">{detail.value}</dd>
          </div>
        ))}
      </dl>

      {document.documentPath && (
        <div className="mt-auto pt-7 sm:pt-8">
          <button
            type="button"
            onClick={() => onView(document)}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-purple/25 bg-purple/10 px-3 py-3 text-center text-sm font-semibold leading-snug text-white transition hover:border-purple/50 hover:bg-purple/15 focus:outline-none focus:ring-2 focus:ring-purple sm:px-4"
          >
            <FileCheck2 size={17} className="flex-none text-purple" />
            <span>View PDF on this page</span>
            <Eye size={16} className="flex-none" />
          </button>
        </div>
      )}

      {!document.documentPath && document.actionUrl && (
        <div className="mt-auto pt-7 sm:pt-8">
          <a
            href={document.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-blue-400/25 bg-blue-400/10 px-3 py-3 text-center text-sm font-semibold leading-snug text-white transition hover:border-blue-300/50 hover:bg-blue-400/15 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:px-4"
            aria-label={`${document.actionLabel ?? "Learn more"} (opens in a new tab)`}
          >
            <BookOpenCheck size={17} className="flex-none text-blue-300" />
            <span>{document.actionLabel ?? "Learn more"}</span>
            <ExternalLink size={16} className="flex-none" />
          </a>
        </div>
      )}
    </article>
  );
}
