import { useState, type ReactNode } from "react";
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
import { professionalSkillCategories, skillCategories } from "../data/skills";

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
    style: "from-primary/15 to-transparent text-primary",
  },
  {
    eyebrow: "Applied AI",
    title: "Chatbots to automation",
    detail: "AI experiences integrated into real web products.",
    icon: <Bot size={22} />,
    style: "from-purple/15 to-transparent text-purple",
  },
  {
    eyebrow: "Data credentials",
    title: "Databricks certified",
    detail: "Professional engineering and associate analytics credentials.",
    icon: <Database size={22} />,
    style: "from-cyan-500/15 to-transparent text-cyan-300",
  },
  {
    eyebrow: "Professional standing",
    title: "AMICITP-SA",
    detail: "SAQA-recognised designation with Java and .NET competencies.",
    icon: <Award size={22} />,
    style: "from-emerald-500/15 to-transparent text-emerald-300",
  },
];

const professionalPresentations = [
  {
    icon: <Lightbulb size={21} />,
    card: "border-primary/20 bg-primary/[0.06]",
    accent: "text-primary",
  },
  {
    icon: <MessageCircleMore size={21} />,
    card: "border-purple/20 bg-purple/[0.06]",
    accent: "text-purple",
  },
  {
    icon: <Handshake size={21} />,
    card: "border-emerald-400/20 bg-emerald-400/[0.06]",
    accent: "text-emerald-300",
  },
  {
    icon: <ListChecks size={21} />,
    card: "border-blue-400/20 bg-blue-400/[0.06]",
    accent: "text-blue-300",
  },
  {
    icon: <RefreshCw size={21} />,
    card: "border-amber-400/20 bg-amber-400/[0.06]",
    accent: "text-amber-300",
  },
  {
    icon: <HeartHandshake size={21} />,
    card: "border-rose-400/20 bg-rose-400/[0.06]",
    accent: "text-rose-300",
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
  defaultOpen?: boolean;
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
  defaultOpen = false,
  children,
}: SkillSectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = `${id}-panel`;
  const isPrimary = accent === "primary";

  return (
    <section className={`overflow-hidden rounded-3xl border bg-surface/90 transition ${isOpen ? (isPrimary ? "border-primary/30 shadow-xl shadow-primary/5" : "border-purple/30 shadow-xl shadow-purple/5") : "border-white/10 hover:border-white/20"}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
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

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/20">
        <div className="grid gap-px sm:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point) => (
            <article key={point.title} className={`relative min-h-48 bg-gradient-to-br ${point.style} bg-surface p-6`}>
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-black/20">
                  {point.icon}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Proof point</span>
              </div>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em]">{point.eyebrow}</p>
              <h2 className="mt-2 font-display text-xl font-bold text-white">{point.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-5 text-center lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:text-left">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Skills Summary</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Built to contribute across the whole product</h2>
        </div>
        <p className="text-base leading-relaxed text-muted">
          More than a list of technologies, this is the toolkit I use to move from an ambiguous problem to a reliable product. I work across interfaces, APIs, data pipelines, cloud services and AI-powered experiences, with the testing, security and communication discipline needed to support what I build.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <SkillSectionAccordion
          id="technical-capabilities"
          eyebrow="Technical Capabilities"
          title="The engineering toolkit behind my work"
          description="Explore the technologies, platforms and engineering practices I use across the product lifecycle."
          summary={`${skillCategories.length} capability areas`}
          icon={<Code2 size={25} />}
          accent="primary"
          defaultOpen
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
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {professionalSkillCategories.map((group, index) => {
                const presentation = professionalPresentations[index];

                return (
                  <article key={group.title} className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 ${presentation.card}`}>
                    <span className="absolute right-4 top-3 font-display text-5xl font-bold text-white/[0.04]">0{index + 1}</span>
                    <div className={`flex items-center gap-3 ${presentation.accent}`}>
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/10">{presentation.icon}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{group.eyebrow}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted">{group.description}</p>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="flex min-h-14 items-start gap-2 rounded-xl border border-white/10 bg-black/20 p-3 text-xs font-medium leading-snug text-white/80">
                          <Check size={14} className={`mt-0.5 flex-none ${presentation.accent}`} />
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
