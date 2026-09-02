import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Eye,
  FileCheck2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import BadgeGroupCard from "../components/BadgeGroupCard";
import PdfViewerModal from "../components/PdfViewerModal";
import { badgeGroups } from "../data/badges";
import {
  academicDocuments,
  professionalDocuments,
  type PortfolioDocument,
} from "../data/credentials";

const sectionLinks = [
  { label: "All", target: "education-overview" },
  { label: "Academic Foundation", target: "academic-documents" },
  { label: "Professional Development", target: "professional-development" },
  { label: "Verified Learning", target: "digital-badges" },
];

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const documentIcon = (document: PortfolioDocument) => {
  if (document.type === "Certification Programme") return BookOpenCheck;
  if (document.type === "Academic Record") return FileCheck2;
  if (document.type === "Academic Achievement") return GraduationCap;
  if (document.type === "Professional Membership") return ShieldCheck;
  return Award;
};

const renderDocumentIcon = (document: PortfolioDocument, size: number) => {
  if (document.type === "Certification Programme") return <BookOpenCheck size={size} />;
  if (document.type === "Academic Record") return <FileCheck2 size={size} />;
  if (document.type === "Academic Achievement") return <GraduationCap size={size} />;
  if (document.type === "Professional Membership") return <ShieldCheck size={size} />;
  return <Award size={size} />;
};

function EducationNav({ active }: { active: string }) {
  return (
    <nav className="education-section-nav" aria-label="Education page sections">
      {sectionLinks.map((item) => (
        <button key={item.target} type="button" className={active === item.target ? "is-active" : ""} onClick={() => scrollToSection(item.target)}>
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default function Education() {
  const location = useLocation();
  const [selectedDocument, setSelectedDocument] = useState<PortfolioDocument | null>(null);
  const [selectedCredentialIndex, setSelectedCredentialIndex] = useState(0);
  const closePdf = useCallback(() => setSelectedDocument(null), []);
  const selectedCredential = professionalDocuments[selectedCredentialIndex];
  const badgeCount = useMemo(() => badgeGroups.reduce((total, group) => total + group.badges.length, 0), []);

  useEffect(() => {
    if (!location.hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <section className="education-redesign" data-testid="education-section">
      <section id="education-overview" className="education-hero education-panel scroll-mt-28">
        <div className="education-hero-copy">
          <p className="education-kicker"><span><Sparkles size={13} /></span> Education</p>
          <h1 data-testid="education-title">Verified Knowledge.<br /><span>Academic Foundation.</span><br /><em>Continuous Growth.</em></h1>
          <p className="education-lead">A verified view of my academic qualifications, professional credentials and ongoing learning—backed by trusted issuers and applied in the software I build.</p>
          <EducationNav active="education-overview" />
          <div className="education-hero-stats">
            <article><span><GraduationCap size={20} /></span><strong>2</strong><p>Qualifications<small>Both Cum Laude</small></p></article>
            <article><span><ShieldCheck size={20} /></span><strong>{professionalDocuments.length}</strong><p>Credentials<small>Professional records</small></p></article>
            <article><span><BadgeCheck size={20} /></span><strong>{badgeCount}</strong><p>Badges<small>Verified learning</small></p></article>
            <article><span><CheckCircle2 size={20} /></span><strong>100%</strong><p>Evidence-led<small>Trusted &amp; authentic</small></p></article>
          </div>
        </div>
        <div className="education-hero-art" aria-hidden="true">
          <div className="education-orbit education-orbit-one" /><div className="education-orbit education-orbit-two" />
          <div className="education-diploma-card"><GraduationCap size={28} /><span>Academic qualification</span><strong>Diploma</strong><small>Cum Laude</small></div>
          <div className="education-credential-card-art"><ShieldCheck size={27} /><span>Professional standing</span><strong>AMICITP-SA</strong><small>Verified designation</small></div>
          <div className="education-badge-card-art"><BadgeCheck size={27} /><span>Verified learning</span><strong>{badgeCount} digital badges</strong><small>ServiceNow · Databricks · Cisco</small></div>
          <div className="education-art-platform"><i /><i /><i /></div>
        </div>
      </section>

      <section id="academic-documents" className="education-section-block education-panel scroll-mt-28">
        <header className="education-section-heading education-section-heading--center">
          <p><GraduationCap size={15} /> Academic Foundation</p>
          <h2>Qualifications with <span>proof.</span></h2>
          <small>Cum Laude qualifications, current study and the supporting academic record. Sensitive personal identifiers are removed from public copies.</small>
          <EducationNav active="academic-documents" />
        </header>
        <div className="education-academic-timeline">
          {academicDocuments.map((document, index) => {
            const Icon = documentIcon(document);
            return (
              <article key={document.title} className={`education-academic-row education-tone-${index % 4}`}>
                <span className="education-row-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="education-row-icon"><Icon size={25} /></div>
                <div className="education-row-main">
                  <div className="education-document-labels"><span>{document.type}</span>{document.status && <b>{document.status}</b>}</div>
                  <h3>{document.title}</h3><strong>{document.issuer}</strong><p>{document.description}</p>
                </div>
                <dl className="education-row-meta">
                  <div><dt><CalendarDays size={14} /> {document.issuedLabel ?? "Issued"}</dt><dd>{document.issued}</dd></div>
                  {document.details?.slice(0, 2).map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}
                  {document.title.includes("Diploma") && <div><dt>Duration</dt><dd>3 Years</dd></div>}
                  {document.title.includes("Higher Certificate") && <div><dt>Duration</dt><dd>1 Year</dd></div>}
                </dl>
                <div className="education-row-action">
                  {document.documentPath ? <button type="button" onClick={() => setSelectedDocument(document)}><Eye size={15} /> View PDF</button> : document.actionUrl ? <a href={document.actionUrl} target="_blank" rel="noopener noreferrer">View Course <ExternalLink size={14} /></a> : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="professional-development" className="education-section-block education-panel scroll-mt-28" data-testid="education-certifications-and-credentials">
        <div className="education-professional-hero">
          <div><p className="education-kicker"><span><ShieldCheck size={13} /></span> Professional Development</p><h2>Credentials<br /><span>that carry weight.</span></h2><small>Industry-recognised certifications, professional memberships and verified learning that strengthen my expertise and professional standing.</small></div>
          <div className="education-professional-art" aria-hidden="true"><ShieldCheck size={72} /><div><span>Verified professional</span><strong>{selectedCredential.type}</strong><small>{selectedCredential.issuer}</small></div><i /><i /><i /></div>
        </div>
        <EducationNav active="professional-development" />
        <div className="education-credential-stats">
          <article><CalendarDays size={20} /><strong>{professionalDocuments.length}</strong><span>Credentials recorded</span></article>
          <article><ShieldCheck size={20} /><strong>{professionalDocuments.filter((item) => item.status === "Active" || item.status === "Awarded").length}</strong><span>Active or awarded</span></article>
          <article><TrendingUp size={20} /><strong>2026</strong><span>Most recent activity</span></article>
          <article><BadgeCheck size={20} /><strong>Verified</strong><span>Documents available</span></article>
        </div>
        <div className="education-credentials-workspace">
          <div className="education-credential-list" role="listbox" aria-label="Professional credentials">
            <h3>All Credentials ({professionalDocuments.length})</h3>
            {professionalDocuments.map((document, index) => {
              const Icon = documentIcon(document);
              return <button key={document.title} type="button" className={selectedCredentialIndex === index ? "is-active" : ""} onClick={() => setSelectedCredentialIndex(index)} role="option" aria-selected={selectedCredentialIndex === index}><span><Icon size={17} /></span><span><strong>{document.title}</strong><small>{document.issuer} · {document.type}</small></span><b>{document.status ?? "Verified"}</b><ChevronRight size={15} /></button>;
            })}
          </div>
          <article className="education-credential-detail" aria-live="polite">
            <div className="education-credential-detail-copy">
              <div className="education-credential-detail-head"><span>{renderDocumentIcon(selectedCredential, 25)}</span><div><small>{selectedCredential.type}</small><h3>{selectedCredential.title}</h3><strong>{selectedCredential.issuer}</strong></div>{selectedCredential.status && <b>{selectedCredential.status}</b>}</div>
              <p>{selectedCredential.description}</p>
              <dl><div><dt>{selectedCredential.issuedLabel ?? "Issued"}</dt><dd>{selectedCredential.issued}</dd></div>{selectedCredential.expires && <div><dt>Expires</dt><dd>{selectedCredential.expires}</dd></div>}{selectedCredential.details?.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl>
              <div className="education-credential-proof"><BadgeCheck size={30} /><div><strong>Verified credential evidence</strong><p>The public document can be reviewed directly on this page. Sensitive identifiers are excluded.</p></div></div>
              <div className="education-credential-actions">{selectedCredential.documentPath && <button type="button" onClick={() => setSelectedDocument(selectedCredential)}><FileCheck2 size={16} /> View Credential <Eye size={15} /></button>}{selectedCredential.actionUrl && <a href={selectedCredential.actionUrl} target="_blank" rel="noopener noreferrer">Open issuer page <ExternalLink size={15} /></a>}</div>
            </div>
            <div className="education-credential-visual" aria-hidden="true">
              <span>{selectedCredential.issuer}</span>
              {renderDocumentIcon(selectedCredential, 42)}
              <small>Verified {selectedCredential.type}</small>
              <strong>{selectedCredential.title}</strong>
              <i /><i /><i />
              <em><BadgeCheck size={15} /> {selectedCredential.status ?? "Verified"}</em>
            </div>
          </article>
        </div>
      </section>

      <section id="digital-badges" className="education-section-block education-panel education-badges-section scroll-mt-28">
        <EducationNav active="digital-badges" />
        <header className="education-badges-heading"><div><p><BadgeCheck size={15} /> Verified Learning</p><h2>Digital <span>Badges</span></h2><small>Verified learning achievements grouped by issuer, with every badge linked to its official credential record.</small></div><div className="education-badge-emblem" aria-hidden="true"><Sparkles size={38} /></div></header>
        <div className="education-badge-groups">{badgeGroups.map((group) => <BadgeGroupCard key={group.issuer} group={group} />)}</div>
        <p className="education-badges-note"><ShieldCheck size={14} /> All badges are issued by verified organisations and link to official credential records.</p>
      </section>

      {selectedDocument?.documentPath && <PdfViewerModal title={selectedDocument.title} src={`${import.meta.env.BASE_URL}${selectedDocument.documentPath}`} onClose={closePdf} />}
    </section>
  );
}
