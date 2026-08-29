import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BadgeGroupCard from "../components/BadgeGroupCard";
import CredentialCard from "../components/CredentialCard";
import PdfViewerModal from "../components/PdfViewerModal";
import { badgeGroups } from "../data/badges";
import {
  academicDocuments,
  professionalDocuments,
  type PortfolioDocument,
} from "../data/credentials";

export default function Education() {
  const location = useLocation();
  const [selectedDocument, setSelectedDocument] = useState<PortfolioDocument | null>(null);
  const closePdf = useCallback(() => setSelectedDocument(null), []);

  useEffect(() => {
    if (!location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <section className="section" data-testid="education-section">
      <div
        id="professional-development"
        className="scroll-mt-28"
        data-testid="education-certifications-and-credentials"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-purple">Professional Development</span>
          <h1 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl lg:text-6xl" data-testid="education-title">
            Certifications & <span className="text-gradient-purple">Professional Credentials</span>
          </h1>
          <p className="mt-5 text-muted">
            Industry certifications, professional recognition and active membership supporting my technical practice. Newest credentials appear first.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {professionalDocuments.map((document) => (
            <CredentialCard key={document.title} document={document} onView={setSelectedDocument} />
          ))}
        </div>
      </div>

      <div id="academic-documents" className="mt-24 scroll-mt-28">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Academic Foundation</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
            Qualifications & <span className="text-gradient">Academic Documents</span>
          </h2>
          <p className="mt-5 text-muted">
            Cum Laude qualifications and the supporting academic record. Sensitive personal identifiers are removed from public copies.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {academicDocuments.map((document) => (
            <CredentialCard key={document.title} document={document} onView={setSelectedDocument} />
          ))}
        </div>
      </div>

      <div id="digital-badges" className="mt-24 scroll-mt-28">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">Verified Learning</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
            Digital <span className="text-gradient">Badges</span>
          </h2>
          <p className="mt-5 text-muted">
            Verified learning achievements grouped by issuer, with every badge linked to its official credential record. Newest badges appear first.
          </p>
        </div>

        <div className="grid gap-4">
          {badgeGroups.map((group) => <BadgeGroupCard key={group.issuer} group={group} />)}
        </div>
      </div>

      {selectedDocument && selectedDocument.documentPath && (
        <PdfViewerModal
          title={selectedDocument.title}
          src={`${import.meta.env.BASE_URL}${selectedDocument.documentPath}`}
          onClose={closePdf}
        />
      )}
    </section>
  );
}
