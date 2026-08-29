import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  BarChart3,
  Blocks,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";
import BadgeGroupCard from "../components/BadgeGroupCard";
import CredentialCard from "../components/CredentialCard";
import PdfViewerModal from "../components/PdfViewerModal";
import SkillCard from "../components/SkillCard";
import { badgeGroups } from "../data/badges";
import {
  academicDocuments,
  professionalDocuments,
  type PortfolioDocument,
} from "../data/credentials";
import { skillCategories, softSkills, stats } from "../data/skills";

const presentations = [
  { icon: <Code2 size={24} />, color: "primary" },
  { icon: <Monitor size={24} />, color: "purple" },
  { icon: <Server size={24} />, color: "emerald" },
  { icon: <Network size={24} />, color: "blue" },
  { icon: <Database size={24} />, color: "cyan" },
  { icon: <Cloud size={24} />, color: "indigo" },
  { icon: <Brain size={24} />, color: "violet" },
  { icon: <BarChart3 size={24} />, color: "cyan" },
  { icon: <Blocks size={24} />, color: "amber" },
  { icon: <TestTube2 size={24} />, color: "rose" },
  { icon: <ShieldCheck size={24} />, color: "red" },
  { icon: <GitBranch size={24} />, color: "blue" },
  { icon: <Boxes size={24} />, color: "violet" },
  { icon: <Wrench size={24} />, color: "emerald" },
];

const statsArray = [
  { value: `${skillCategories.length}`, label: "Technical Categories" },
  { value: stats.frameworksAndTools, label: "Skills & Technologies" },
  { value: stats.certifications, label: "Certifications & Credentials" },
  { value: stats.badges, label: "Verified Digital Badges" },
];

export default function Skills() {
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
    <section className="section" data-testid="skills-section">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Technical Expertise
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl" data-testid="skills-title">
          Skills & <span className="text-gradient">Technologies</span>
        </h1>
        <p className="mt-6 text-lg text-muted">
          A structured view of the languages, platforms and engineering practices I use to build reliable software and data solutions.
        </p>
      </div>

      <div className="card mb-16 flex flex-wrap justify-center gap-8 px-8 py-8 md:gap-16">
        {statsArray.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{value}</div>
            <div className="mt-1 text-sm text-muted">{label}</div>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Skills Summary</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Technical capabilities</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2" data-testid="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            title={category.title}
            icon={presentations[index].icon}
            items={category.items}
            color={presentations[index].color}
            index={index}
          />
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-purple/10 via-surface to-primary/5 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-purple/15 text-purple">
            <Users size={25} />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple">Professional Skills</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">How I work with people and problems</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              The communication, collaboration and problem-solving habits that support my technical delivery.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {softSkills.map((skill) => (
            <span key={skill} className="rounded-xl border border-purple/20 bg-purple/10 px-4 py-2 text-sm font-medium text-purple">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div id="professional-development" className="mt-24 scroll-mt-28" data-testid="skills-certifications-and-credentials">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-purple">Professional Development</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
            Certifications & <span className="text-gradient-purple">Professional Credentials</span>
          </h2>
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
        <div className="grid gap-6 lg:grid-cols-2">
          {badgeGroups.map((group) => <BadgeGroupCard key={group.issuer} group={group} />)}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="mb-6 text-muted">Always learning, always growing. This toolkit evolves with every project and credential.</p>
        <a
          href="https://github.com/PixieStack"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="skills-github-cta"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-6 py-3 font-medium text-white transition-all hover:border-primary/30"
        >
          <i className="fab fa-github" /> See My Work on GitHub
        </a>
      </div>

      {selectedDocument && (
        <PdfViewerModal
          title={selectedDocument.title}
          src={`${import.meta.env.BASE_URL}${selectedDocument.documentPath}`}
          onClose={closePdf}
        />
      )}
    </section>
  );
}
