import { useRef, useState, type ReactNode, type RefObject } from "react";
import {
  Award,
  BarChart3,
  Blocks,
  Bot,
  Boxes,
  Brain,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Handshake,
  HeartHandshake,
  Layers3,
  Lightbulb,
  ListChecks,
  MessageCircleMore,
  Monitor,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";
import SkillCard from "../components/SkillCard";
import { professionalSkillCategories, skillCategories, skillExperience } from "../data/skills";

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
  { icon: <Bot size={24} />, color: "purple" },
  { icon: <ShieldCheck size={24} />, color: "red" },
  { icon: <Smartphone size={24} />, color: "emerald" },
  { icon: <GitBranch size={24} />, color: "blue" },
  { icon: <Boxes size={24} />, color: "violet" },
  { icon: <Wrench size={24} />, color: "emerald" },
];

const proofPoints = [
  {
    eyebrow: "Engineering range",
    title: "Full-stack to cloud",
    detail: "Frontend, backend, APIs, data and cloud delivery.",
    icon: <Layers3 size={22} />,
    iconStyle: "border-primary/30 bg-primary/10 text-primary shadow-primary/20",
    accent: "text-primary",
    marker: "bg-primary shadow-primary/50",
    rule: "from-primary/70",
  },
  {
    eyebrow: "Applied AI",
    title: "Chatbots to automation",
    detail: "AI experiences integrated into real web products.",
    icon: <Bot size={22} />,
    iconStyle: "border-purple/30 bg-purple/10 text-purple shadow-purple/20",
    accent: "text-purple",
    marker: "bg-purple shadow-purple/50",
    rule: "from-purple/70",
  },
  {
    eyebrow: "Data credentials",
    title: "Databricks certified",
    detail: "Professional engineering and associate analytics credentials.",
    icon: <Database size={22} />,
    iconStyle: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-cyan-500/20",
    accent: "text-cyan-300",
    marker: "bg-cyan-300 shadow-cyan-400/50",
    rule: "from-cyan-400/70",
  },
  {
    eyebrow: "Professional standing",
    title: "AMICITP-SA",
    detail: "SAQA-recognised designation with Java and .NET competencies.",
    icon: <Award size={22} />,
    iconStyle: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-emerald-500/20",
    accent: "text-emerald-300",
    marker: "bg-emerald-300 shadow-emerald-400/50",
    rule: "from-emerald-400/70",
  },
];

const professionalIcons = [
  <Lightbulb size={21} />,
  <MessageCircleMore size={21} />,
  <Handshake size={21} />,
  <ListChecks size={21} />,
  <RefreshCw size={21} />,
  <HeartHandshake size={21} />,
];

const professionalThemes = [
  {
    accent: "text-primary",
    icon: "border-primary/20 bg-primary/[0.08]",
    hover: "hover:border-primary/25",
    line: "via-primary/65",
  },
  {
    accent: "text-purple",
    icon: "border-purple/20 bg-purple/[0.08]",
    hover: "hover:border-purple/25",
    line: "via-purple/65",
  },
  {
    accent: "text-emerald-300",
    icon: "border-emerald-400/20 bg-emerald-400/[0.07]",
    hover: "hover:border-emerald-400/25",
    line: "via-emerald-400/65",
  },
  {
    accent: "text-blue-300",
    icon: "border-blue-400/20 bg-blue-400/[0.07]",
    hover: "hover:border-blue-400/25",
    line: "via-blue-400/65",
  },
  {
    accent: "text-amber-300",
    icon: "border-amber-400/20 bg-amber-400/[0.07]",
    hover: "hover:border-amber-400/25",
    line: "via-amber-400/65",
  },
  {
    accent: "text-rose-300",
    icon: "border-rose-400/20 bg-rose-400/[0.07]",
    hover: "hover:border-rose-400/25",
    line: "via-rose-400/65",
  },
];

interface SkillSectionAccordionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  icon: ReactNode;
  accent: "primary" | "purple";
  isOpen: boolean;
  onToggle: () => void;
  sectionRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}

function SkillSectionAccordion({
  id,
  eyebrow,
  title,
  description,
  summary,
  icon,
  accent,
  isOpen,
  onToggle,
  sectionRef,
  children,
}: SkillSectionAccordionProps) {
  const panelId = `${id}-panel`;
  const isPrimary = accent === "primary";

  return (
    <section ref={sectionRef} className={`scroll-mt-24 overflow-hidden rounded-3xl border bg-surface/90 transition ${isOpen ? (isPrimary ? "border-primary/30 shadow-xl shadow-primary/5" : "border-purple/30 shadow-xl shadow-purple/5") : "border-white/10 hover:border-white/20"}`}>
      <button
        type="button"
        onClick={onToggle}
        className={`group flex w-full flex-col gap-5 bg-gradient-to-r p-5 text-left transition sm:p-7 lg:flex-row lg:items-center lg:justify-between ${isPrimary ? "from-primary/10 via-transparent to-purple/5 hover:from-primary/15" : "from-purple/10 via-transparent to-primary/5 hover:from-purple/15"}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        data-testid={`${id}-toggle`}
      >
        <div className="flex min-w-0 items-start gap-4">
          <span className={`grid h-14 w-14 flex-none place-items-center rounded-2xl border shadow-lg ${isPrimary ? "border-primary/20 bg-primary/15 text-primary shadow-primary/10" : "border-purple/20 bg-purple/15 text-purple shadow-purple/10"}`}>
            {icon}
          </span>
          <div className="min-w-0">
            <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${isPrimary ? "text-primary" : "text-purple"}`}>{eyebrow}</span>
            <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{description}</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-end">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80">
            {summary}
          </span>
          <span className={`grid h-11 w-11 flex-none place-items-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 group-hover:border-white/25 ${isOpen ? `rotate-180 ${isPrimary ? "text-primary" : "text-purple"}` : ""}`}>
            <ChevronDown size={20} />
          </span>
        </div>
      </button>

      {isOpen && (
        <div id={panelId} className="border-t border-white/5 p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      )}
    </section>
  );
}

export default function Skills() {
  const [openSection, setOpenSection] = useState<"technical" | "professional" | null>("technical");
  const [flippedSkills, setFlippedSkills] = useState<Set<string>>(() => new Set());
  const technicalSectionRef = useRef<HTMLElement>(null);
  const professionalSectionRef = useRef<HTMLElement>(null);

  const toggleSection = (section: "technical" | "professional") => {
    const isOpening = openSection !== section;
    setFlippedSkills(new Set<string>());
    setOpenSection((current) => current === section ? null : section);

    if (isOpening) {
      const targetRef = section === "technical" ? technicalSectionRef : professionalSectionRef;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  };

  return (
    <section className="section" data-testid="skills-section">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Technical Expertise</span>
        <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl" data-testid="skills-title">
          Skills & <span className="text-gradient">Technologies</span>
        </h1>
        <p className="mt-6 text-lg text-muted">
          A structured view of the languages, platforms and engineering practices I use to build reliable software and data solutions.
        </p>
      </div>

      <section aria-label="Professional proof points" className="relative mt-2">
        <div className="pointer-events-none absolute left-6 right-6 top-[1.4rem] hidden h-px bg-gradient-to-r from-primary/60 via-purple/50 to-emerald-400/60 xl:block" />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point, index) => (
            <article
              key={point.title}
              className="group relative min-w-0"
            >
              <div className="relative flex items-center gap-4">
                <span className={`relative z-10 grid h-11 w-11 flex-none place-items-center rounded-full border shadow-lg ring-8 ring-dark transition duration-300 group-hover:scale-110 ${point.iconStyle}`}>
                  {point.icon}
                </span>
                <span className={`h-px flex-1 bg-gradient-to-r to-transparent xl:opacity-0 ${point.rule}`} />
                <span className="font-display text-4xl font-bold leading-none text-white/[0.07] transition group-hover:text-white/[0.12]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-6 border-l border-white/10 pl-4">
                <span className={`absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full shadow-[0_0_12px_currentColor] ${point.marker}`} />
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Proof point</p>
                <p className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${point.accent}`}>{point.eyebrow}</p>
                <h2 className="mt-2 font-display text-xl font-bold leading-snug text-white transition group-hover:translate-x-1">{point.title}</h2>
                <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-muted">{point.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-summary-title" className="relative mt-20 py-10 sm:py-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-primary/60 via-purple/35 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative pl-6 sm:pl-8">
            <span className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-primary via-primary/70 to-purple/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Skills Summary</span>
            <h2 id="skills-summary-title" className="mt-3 max-w-xl font-display text-3xl font-bold leading-[1.12] text-white sm:text-4xl">
              Built to contribute across <span className="text-gradient">the whole product</span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
              More than a list of technologies, this is the toolkit I use to move from an ambiguous problem to a reliable product. I work across interfaces, APIs, data pipelines, cloud services and AI-powered experiences, with the testing, security and communication discipline needed to support what I build.
            </p>

            <div className="mt-7 flex items-center gap-2 overflow-hidden" aria-hidden="true">
              <span className="flex-none text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">Ambiguous problem</span>
              <span className="h-px min-w-5 flex-1 bg-gradient-to-r from-primary/70 via-purple/60 to-cyan-400/60" />
              <span className="h-2 w-2 flex-none rotate-45 border-r border-t border-cyan-300/70" />
              <span className="flex-none text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">Reliable product</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5 space-y-5">
        <SkillSectionAccordion
          id="technical-capabilities"
          eyebrow="Technical Capabilities"
          title="The engineering toolkit behind my work"
          description="Explore the technologies, platforms and engineering practices I use across the product lifecycle."
          summary={`${skillCategories.length} capability areas`}
          icon={<Code2 size={25} />}
          accent="primary"
          isOpen={openSection === "technical"}
          onToggle={() => toggleSection("technical")}
          sectionRef={technicalSectionRef}
        >
          <div className="grid gap-6 md:grid-cols-2" data-testid="skills-grid">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                icon={presentations[index].icon}
                items={category.items}
                color={presentations[index].color}
                index={index}
                experience={skillExperience[category.title]}
                isFlipped={flippedSkills.has(category.title)}
                onFlip={() => setFlippedSkills((current) => {
                  const next = new Set(current);
                  if (next.has(category.title)) {
                    next.delete(category.title);
                  } else {
                    next.add(category.title);
                  }
                  return next;
                })}
              />
            ))}
          </div>
        </SkillSectionAccordion>

        <SkillSectionAccordion
          id="professional-skills"
          eyebrow="Professional Skills"
          title="The human skills behind dependable delivery"
          description="How I think, communicate, collaborate, organise work, improve and support the people using what I build."
          summary="6 ways I add value"
          icon={<Users size={25} />}
          accent="purple"
          isOpen={openSection === "professional"}
          onToggle={() => toggleSection("professional")}
          sectionRef={professionalSectionRef}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {professionalSkillCategories.map((group, index) => {
                const theme = professionalThemes[index];

                return (
                  <article key={group.title} className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:bg-white/[0.04] ${theme.hover}`}>
                    <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${theme.line}`} />
                    <span className="absolute right-4 top-3 font-display text-5xl font-bold text-white/[0.035]">0{index + 1}</span>
                    <div className={`flex items-center gap-3 ${theme.accent}`}>
                      <span className={`grid h-10 w-10 place-items-center rounded-xl border ${theme.icon}`}>{professionalIcons[index]}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{group.eyebrow}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted">{group.description}</p>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="flex min-h-14 items-start gap-2 rounded-xl border border-white/10 bg-black/20 p-3 text-xs font-medium leading-snug text-white/80">
                          <Check size={14} className={`mt-0.5 flex-none ${theme.accent}`} />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </SkillSectionAccordion>
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
    </section>
  );
}
