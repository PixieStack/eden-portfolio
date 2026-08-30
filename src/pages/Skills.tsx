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
    impact: "One connected view from interface to infrastructure.",
    icon: <Layers3 size={22} />,
  },
  {
    eyebrow: "Applied AI",
    title: "Chatbots to automation",
    detail: "AI experiences integrated into real web products.",
    impact: "Intelligence designed into real workflows—not added for show.",
    icon: <Bot size={22} />,
  },
  {
    eyebrow: "Data credentials",
    title: "Databricks certified",
    detail: "Professional engineering and associate analytics credentials.",
    impact: "Certified depth where dependable products meet trustworthy data.",
    icon: <Database size={22} />,
  },
  {
    eyebrow: "Professional standing",
    title: "AMICITP-SA",
    detail: "SAQA-recognised designation with Java and .NET competencies.",
    impact: "Assessed capability backed by recognised professional practice.",
    icon: <Award size={22} />,
  },
];

const proofPointPositions = [
  "left-1/2 top-0 -translate-x-1/2 text-center",
  "right-0 top-1/2 -translate-y-1/2 text-right",
  "bottom-0 left-1/2 -translate-x-1/2 text-center",
  "left-0 top-1/2 -translate-y-1/2 text-left",
];

const teamBenefits = [
  {
    title: "Fewer gaps between disciplines",
    detail: "I carry context from the interface through APIs, data and delivery—helping teams make faster, better-connected decisions.",
  },
  {
    title: "Production thinking from the start",
    detail: "Testing, security, reliability and support shape how I build, not what gets added after the feature is finished.",
  },
  {
    title: "Capability you can verify",
    detail: "Databricks certifications and an SAQA-recognised professional designation reinforce the practical work behind the toolkit.",
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
    <section id={id} ref={sectionRef} className={`scroll-mt-24 overflow-hidden rounded-3xl border bg-surface/90 transition ${isOpen ? (isPrimary ? "border-primary/30 shadow-xl shadow-primary/5" : "border-purple/30 shadow-xl shadow-purple/5") : "border-white/10 hover:border-white/20"}`}>
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
  const [activeProofPoint, setActiveProofPoint] = useState(0);
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

  const activeProof = proofPoints[activeProofPoint];

  return (
    <section className="section" data-testid="skills-section">
      <section aria-labelledby="skills-title" className="relative mb-16 overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-24 h-72 w-72 rounded-full bg-primary/[0.055] blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 xl:gap-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Technical Expertise</span>
              <span className="h-px w-14 bg-primary/50" />
            </div>
            <h1 id="skills-title" className="mt-5 font-display text-5xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl" data-testid="skills-title">
              Skills & <span className="relative inline-block text-white">Technologies<span className="absolute -bottom-2 left-0 h-0.5 w-16 bg-primary" /></span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-muted-light/80 sm:text-xl sm:leading-9">
              Not a checklist of tools. A working range built to turn ambitious ideas into dependable products—from the interface people touch to the data, cloud and intelligence behind it.
            </p>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              I work across the whole product: shaping interfaces, engineering APIs, moving and validating data, integrating AI and supporting what reaches production. That breadth means clearer decisions, fewer hand-offs and reliable delivery from the first question to the final release.
            </p>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-[34rem] lg:block" aria-label="Interactive four pillars of my practice">
            <div className="absolute left-0 top-3 w-44">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">Four pillars of my practice</span>
              <p className="mt-1 text-[10px] leading-4 text-white/35">Range, innovation, verified depth and professional accountability.</p>
            </div>
            <span className="absolute right-0 top-3 text-[9px] uppercase tracking-[0.16em] text-white/25">Select to explore</span>
            <div className="pointer-events-none absolute inset-[4.5rem] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute inset-[6.25rem] rounded-full border border-dashed border-white/[0.08] [animation:spin_28s_linear_infinite] motion-reduce:animate-none" />
            <div className="pointer-events-none absolute bottom-16 left-1/2 top-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute left-16 right-16 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="absolute left-1/2 top-1/2 grid h-60 w-60 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-dark/95 p-7 text-center shadow-2xl shadow-black/40">
              <div key={activeProof.title} className="animate-fade-in motion-reduce:animate-none">
                <span className="mx-auto block w-fit text-primary [&>svg]:h-7 [&>svg]:w-7">{activeProof.icon}</span>
                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">{activeProof.eyebrow}</p>
                <h2 className="mt-2 font-display text-xl font-semibold leading-tight text-white">{activeProof.title}</h2>
                <p className="mt-3 text-xs leading-5 text-muted">{activeProof.impact}</p>
              </div>
            </div>

            {proofPoints.map((point, index) => {
              const isActive = activeProofPoint === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveProofPoint(index)}
                  onMouseEnter={() => setActiveProofPoint(index)}
                  onFocus={() => setActiveProofPoint(index)}
                  className={`absolute z-10 w-40 bg-dark/90 px-3 py-2 transition-colors ${proofPointPositions[index]} ${isActive ? "text-white" : "text-white/40 hover:text-white/75"}`}
                >
                  <span className={`block text-[9px] font-semibold uppercase tracking-[0.16em] ${isActive ? "text-primary" : ""}`}>{point.eyebrow}</span>
                  <span className="mt-1 block font-display text-sm font-semibold leading-snug">{point.title}</span>
                </button>
              );
            })}

            <span className="pointer-events-none absolute left-1/2 top-[4.25rem] h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(249,115,22,0.65)] [animation:pulse_2.8s_ease-in-out_infinite] motion-reduce:animate-none" />
          </div>
        </div>

        <div className="relative mt-12 border-y border-white/10 lg:hidden">
          <div className="py-5">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">Four pillars of my practice</span>
              <p className="mt-1 text-sm text-white/65">Range, innovation, verified depth and professional accountability.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
            {proofPoints.map((point, index) => {
              const isActive = activeProofPoint === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveProofPoint(index)}
                  onFocus={() => setActiveProofPoint(index)}
                  className={`group relative min-w-0 border-b border-white/10 px-3 py-5 text-left transition-colors sm:px-5 ${isActive ? "text-white" : "text-white/45 hover:text-white/75"}`}
                >
                  <span className={`absolute inset-x-3 bottom-0 h-px origin-left bg-primary transition-transform duration-300 sm:inset-x-5 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em]">{point.eyebrow}</span>
                  <span className="mt-2 block font-display text-sm font-semibold leading-snug sm:text-base">{point.title}</span>
                </button>
              );
            })}
          </div>

          <div key={activeProof.title} className="relative grid min-h-64 gap-8 overflow-hidden border-t border-white/10 py-9 animate-fade-in motion-reduce:animate-none sm:grid-cols-[0.8fr_1.2fr] sm:items-center sm:gap-12">
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.025] [&>svg]:h-52 [&>svg]:w-52" aria-hidden="true">
              {activeProof.icon}
            </span>

            <div className="relative flex items-start gap-5">
              <span className="mt-1 text-primary [&>svg]:h-8 [&>svg]:w-8">{activeProof.icon}</span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{activeProof.eyebrow}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">{activeProof.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{activeProof.detail}</p>
              </div>
            </div>

            <p className="relative max-w-2xl font-display text-2xl font-medium leading-snug text-white/85 sm:text-3xl">
              {activeProof.impact}
            </p>
          </div>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">What a team gains</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-2 grid md:grid-cols-3">
            {teamBenefits.map((benefit, index) => (
              <article key={benefit.title} className={`border-b border-white/10 py-7 md:border-b-0 ${index > 0 ? "md:border-l md:pl-7" : ""} ${index < teamBenefits.length - 1 ? "md:pr-7" : ""}`}>
                <h2 className="font-display text-lg font-semibold text-white">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{benefit.detail}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setOpenSection("technical");
              window.requestAnimationFrame(() => technicalSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
            }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-light"
          >
            Explore the technical evidence <ChevronDown size={16} />
          </button>
        </div>
      </section>

      <div className="space-y-5">
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
