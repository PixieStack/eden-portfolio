import { Award, BadgeCheck, CalendarDays, Eye, FileCheck2 } from "lucide-react";
import type { PortfolioDocument } from "../data/credentials";

interface CredentialCardProps {
  document: PortfolioDocument;
  onView: (document: PortfolioDocument) => void;
}

export default function CredentialCard({ document, onView }: CredentialCardProps) {
  const isAcademic = document.type === "Academic Achievement" || document.type === "Academic Record";
  const Icon = isAcademic ? Award : BadgeCheck;
  const statusClass = document.status === "Expired"
    ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
    : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";

  return (
    <article className="card card-hover flex h-full flex-col border border-white/10 p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-purple to-primary text-white shadow-lg shadow-purple/15">
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
          <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-white">
            {document.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-purple">{document.issuer}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">{document.description}</p>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/5 pt-5">
        <div>
          <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted">
            <CalendarDays size={13} /> Issued
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

      <button
        type="button"
        onClick={() => onView(document)}
        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple/25 bg-purple/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-purple/50 hover:bg-purple/15 focus:outline-none focus:ring-2 focus:ring-purple"
      >
        <FileCheck2 size={17} className="text-purple" />
        View PDF on this page
        <Eye size={16} />
      </button>
    </article>
  );
}
