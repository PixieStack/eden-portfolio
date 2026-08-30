import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
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
    navLabel: "Full-stack to cloud",
    centreTitle: "I Build Across the System",
    centreLead: "I don’t stop where one layer ends.",
    centreStory: "I work across the application—shaping the experience people use, engineering the logic behind it, connecting systems and data, and understanding the infrastructure that carries it into production.",
    headline: "One feature.",
    headlineAccent: "Every layer considered.",
    story: "My strongest advantage is seeing the connections others can miss between interface, logic, APIs, data and deployment. That wider view helps me make better decisions earlier—before gaps become problems.",
    icon: <Layers3 size={22} />,
  },
  {
    eyebrow: "Applied AI",
    navLabel: "Applied intelligence",
    centreTitle: "I Learn What Changes the Build",
    centreLead: "AI is changing how software is designed, built and experienced.",
    centreStory: "I don’t want to watch that shift from the sidelines—I want to understand it well enough to build with it responsibly.",
    headline: "Curiosity becomes",
    headlineAccent: "capability.",
    story: "I experiment with emerging AI capabilities by asking the question that matters to an engineer: where does this genuinely make the product better? I learn through building, integration and practical use—not hype.",
    icon: <Bot size={22} />,
  },
  {
    eyebrow: "Professional standing",
    navLabel: "Credibility earned",
    centreTitle: "I Hold My Work to a Higher Standard",
    centreLead: "I want the engineer behind the work to be as credible as the work itself.",
    centreStory: "That means accountability, professional growth and standards that extend beyond completing the next ticket.",
    headline: "Recognition follows",
    headlineAccent: "the standard.",
    story: "My AMICITP-SA professional designation reflects something I intend to keep earning: credibility built through competence, continued development and responsibility for the work I put my name behind.",
    icon: <Award size={22} />,
  },
  {
    eyebrow: "Continuous growth",
    navLabel: "Learning with evidence",
    centreTitle: "Learning With Evidence",
    centreLead: "I don’t learn to collect technologies. I learn to expand what I can solve.",
    centreStory: "Courses and credentials can mark progress, but the real measure is whether new knowledge becomes better judgement, stronger engineering and more capable software.",
    headline: "Knowledge should",
    headlineAccent: "compound.",
    story: "From data engineering and analytics to cloud, platforms and emerging technologies, I keep widening the knowledge around my core development experience—then bring what matters back into the way I build.",
    icon: <Database size={22} />,
  },
];

const proofPointPositions = [
  "left-1/2 top-0 -translate-x-1/2 text-center",
  "right-0 top-1/2 -translate-y-1/2 text-right",
  "left-0 top-1/2 -translate-y-1/2 text-left",
  "bottom-0 left-1/2 -translate-x-1/2 text-center",
];

const proofIndicatorRotations = [0, 90, -90, 180];

const teamBenefits = [
  {
    microLabel: "End-to-end thinking",
    title: "I connect decisions across the build.",
    titleLead: "I connect decisions across the ",
    titleAccent: "build.",
    detail: "Frontend, backend, APIs and data aren’t separate problems to me. I think about how one decision travels through the system—and catch the gaps that appear between layers.",
    icon: <Network size={23} />,
  },
  {
    microLabel: "Production mindset",
    title: "Working is the baseline.",
    titleLead: "Working is the ",
    titleAccent: "baseline.",
    detail: "I think about what happens next: maintainability, validation, security, failure states and the developer who inherits the code after me.",
    icon: <ShieldCheck size={23} />,
  },
  {
    microLabel: "Proven + progressing",
    title: "I build first. I validate what I know.",
    titleLead: "I build first. I validate ",
    titleAccent: "what I know.",
    detail: "Production experience proves the practice; professional recognition and certifications reinforce the depth behind it. I use both to keep raising my standard.",
    icon: <Award size={23} />,
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
  const [displayedProofPoint, setDisplayedProofPoint] = useState(0);
  const [isProofTransitioning, setIsProofTransitioning] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const proofTransitionTimeout = useRef<number | null>(null);
  const technicalSectionRef = useRef<HTMLElement>(null);
  const professionalSectionRef = useRef<HTMLElement>(null);

  useEffect(() => () => {
    if (proofTransitionTimeout.current !== null) {
      window.clearTimeout(proofTransitionTimeout.current);
    }
  }, []);

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

  const selectProofPoint = (index: number) => {
    if (index === activeProofPoint) return;

    if (proofTransitionTimeout.current !== null) {
      window.clearTimeout(proofTransitionTimeout.current);
    }

    setActiveProofPoint(index);
    setIsProofTransitioning(true);
    proofTransitionTimeout.current = window.setTimeout(() => {
      setDisplayedProofPoint(index);
      setIsProofTransitioning(false);
      proofTransitionTimeout.current = null;
    }, 140);
  };

  const activeProof = proofPoints[displayedProofPoint];
  const activeTeamBenefit = teamBenefits[activePrinciple];

  return (
    <section className="section" data-testid="skills-section">
      <section aria-labelledby="skills-title" className="relative mb-8 overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-24 h-72 w-72 rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="relative grid gap-10 xl:grid-cols-[0.7fr_1.3fr] xl:gap-8 2xl:gap-10">
          <div className="min-w-0">
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">Technical Expertise</span>
            <span className="h-px w-12 bg-primary/50" />
          </div>
          <h1 id="skills-title" className="mt-4 font-display text-4xl font-bold leading-[0.98] text-white sm:text-5xl xl:text-5xl" data-testid="skills-title">
            Skills & <span className="relative inline-block text-white">Technologies<span className="absolute -bottom-2 left-0 h-0.5 w-14 bg-primary" /></span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-light/85">
            With 3+ years of hands-on development experience, I’ve learned that strong software is not defined by how many technologies sit behind it, but by how well the pieces work together. My strongest ground is full-stack development: connecting interfaces, backend logic, APIs, data and cloud services into software that is useful, maintainable and ready for the realities beyond development.
          </p>
          <p className="mt-3.5 max-w-3xl text-sm leading-6 text-muted">
            I work across the build with an end-to-end mindset &mdash; understanding how decisions travel through a system, anticipating what can break, and engineering beyond &ldquo;it works.&rdquo; <span className="text-white/85">The technologies below are the toolkit. The real skill is knowing how to make them work as one.</span>
          </p>
        </div>

          </div>

        <section aria-labelledby="pillar-philosophy-title" className="relative min-w-0 xl:border-l xl:border-white/[0.06] xl:pl-8 2xl:pl-10">
          <div className="max-w-3xl">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">The engineer behind the toolkit</span>
            <h2 id="pillar-philosophy-title" className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">Four things shape how I build.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Range to see the system. Curiosity to keep evolving. Standards that hold me accountable. And a habit of turning learning into better work.</p>
            <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/35">Explore the four pillars ↓</p>
          </div>

          <div className="mt-3 grid gap-6 md:grid-cols-[1.42fr_0.58fr] md:items-center md:gap-5">
            <div>
              <div className="relative -ml-2 hidden aspect-square w-full max-w-[32rem] sm:block" aria-label="Interactive pillar navigation">
                <div className="pointer-events-none absolute inset-16 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute inset-[5.5rem] rounded-full border border-dashed border-white/[0.07] [animation:spin_32s_linear_infinite] motion-reduce:animate-none" />
                <div className="pointer-events-none absolute bottom-14 left-1/2 top-14 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="pointer-events-none absolute left-14 right-14 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="pointer-events-none absolute inset-16 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none" style={{ transform: `rotate(${proofIndicatorRotations[activeProofPoint]}deg)` }}>
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(249,115,22,0.65)]" />
                </div>

                <div className="absolute left-1/2 top-1/2 grid h-60 w-60 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-dark/95 p-5 text-center shadow-2xl shadow-black/40">
                  <div className={`transition duration-150 ${isProofTransitioning ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
                    <span className="mx-auto block w-fit text-primary [&>svg]:h-6 [&>svg]:w-6">{activeProof.icon}</span>
                    <p className="mt-2 text-[6px] font-semibold uppercase tracking-[0.18em] text-primary/80">Pillar 0{displayedProofPoint + 1} &mdash; {activeProof.eyebrow}</p>
                    <h3 className="mt-2 font-display text-sm font-semibold leading-tight text-white">{activeProof.centreTitle}</h3>
                    <p className="mt-2 text-[10px] font-semibold leading-[0.9rem] text-white/85">{activeProof.centreLead}</p>
                    <p className="mt-1.5 text-[9px] leading-[0.85rem] text-muted">{activeProof.centreStory}</p>
                  </div>
                </div>

                {proofPoints.map((point, index) => {
                  const isActive = activeProofPoint === index;

                  return (
                    <button
                      key={point.eyebrow}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => selectProofPoint(index)}
                      onMouseEnter={() => selectProofPoint(index)}
                      onFocus={() => selectProofPoint(index)}
                      className={`absolute z-10 w-36 bg-dark/90 px-2 py-2 transition-colors ${proofPointPositions[index]} ${isActive ? "text-white" : "text-white/40 hover:text-white/75"}`}
                    >
                      <span className={`block text-[8px] font-semibold uppercase tracking-[0.14em] ${isActive ? "text-primary" : ""}`}>{point.eyebrow}</span>
                      <span className="mt-1 block font-display text-xs font-semibold leading-snug">{point.navLabel}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 border-y border-white/10 sm:hidden">
                {proofPoints.map((point, index) => {
                  const isActive = activeProofPoint === index;

                  return (
                    <button key={point.eyebrow} type="button" aria-pressed={isActive} onClick={() => selectProofPoint(index)} onFocus={() => selectProofPoint(index)} className={`relative min-w-0 border-b border-white/10 px-3 py-4 text-left transition-colors ${isActive ? "text-white" : "text-white/45"}`}>
                      <span className={`absolute inset-x-3 bottom-0 h-px bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                      <span className="block text-[8px] font-semibold uppercase tracking-[0.14em]">{point.eyebrow}</span>
                      <span className="mt-1.5 block font-display text-xs font-semibold">{point.navLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <article className={`relative min-h-[22rem] overflow-hidden border-t border-white/10 py-6 transition duration-150 md:border-l md:border-t-0 md:py-4 md:pl-5 ${isProofTransitioning ? "translate-y-1 scale-[0.99] opacity-0" : "translate-y-0 scale-100 opacity-100"}`} aria-live="polite">
              <div key={activeProof.eyebrow}>
                <span className="pillar-story-icon pointer-events-none absolute right-0 top-0 -rotate-6 text-white/[0.1] [&>svg]:h-32 [&>svg]:w-32 sm:[&>svg]:h-40 sm:[&>svg]:w-40" aria-hidden="true">{activeProof.icon}</span>
                <div className="relative max-w-xl pt-24 sm:pt-28">
                  <p className="pillar-story-kicker text-[8px] font-semibold uppercase tracking-[0.18em] text-primary">Pillar 0{displayedProofPoint + 1} &mdash; {activeProof.eyebrow}</p>
                  <h3 className="pillar-story-heading mt-2.5 font-display text-2xl font-semibold leading-[1.04] text-white">
                    {activeProof.headline}<span className="block text-white/55">{activeProof.headlineAccent}</span>
                  </h3>
                  <p className="pillar-story-copy mt-3.5 text-xs leading-5 text-muted-light/75">{activeProof.story}</p>
                </div>
              </div>
            </article>
          </div>

        </section>
        </div>
      </section>

      <section aria-labelledby="engineering-principles-title" className="relative mb-8 border-y border-white/[0.07] py-5 sm:py-6">
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-10">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">Engineering principles</span>
            <h2 id="engineering-principles-title" className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">More Than a Stack. A Way of Engineering.</h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-3" role="tablist" aria-label="Engineering principles">
            {teamBenefits.map((benefit, index) => {
              const isActive = activePrinciple === index;

              return (
                <button
                  key={benefit.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="active-principle-panel"
                  onClick={() => setActivePrinciple(index)}
                  onMouseEnter={() => setActivePrinciple(index)}
                  onFocus={() => setActivePrinciple(index)}
                  className={`principle-card group relative min-h-[4.75rem] overflow-hidden rounded-xl border px-3 py-3 text-left transition duration-300 hover:-translate-y-0.5 ${isActive ? "border-primary/35 bg-primary/[0.07] shadow-lg shadow-primary/[0.04]" : "border-white/10 bg-white/[0.018] hover:border-white/20 hover:bg-white/[0.03]"}`}
                >
                  <span className={`absolute inset-x-3 bottom-0 h-px origin-left bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                  <div className="relative flex items-start gap-2.5">
                    <span className={`principle-icon grid h-8 w-8 flex-none place-items-center rounded-lg border transition-colors [&>svg]:h-4 [&>svg]:w-4 ${isActive ? "border-primary/30 bg-primary/10 text-primary" : "border-white/10 text-white/45 group-hover:text-primary"}`}>{benefit.icon}</span>
                    <span className="min-w-0">
                      <span className={`block text-[6px] font-semibold uppercase tracking-[0.16em] transition-colors ${isActive ? "text-primary" : "text-white/35"}`}>{benefit.microLabel}</span>
                      <span className="mt-1.5 block font-display text-[13px] font-semibold leading-[1.15] text-white">{benefit.title}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div id="active-principle-panel" role="tabpanel" className="relative mt-3 overflow-hidden border-t border-white/[0.06] pt-3">
          <div key={activeTeamBenefit.title} className="pillar-story-copy">
            <p className="max-w-5xl text-xs leading-5 text-muted"><span className="mr-2 font-semibold text-white/85">{activeTeamBenefit.title}</span>{activeTeamBenefit.detail}</p>
          </div>
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
