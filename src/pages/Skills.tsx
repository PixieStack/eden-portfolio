import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode, type RefObject } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Blocks,
  Bot,
  Boxes,
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
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
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TestTube2,
  TrendingUp,
  Trophy,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { professionalSkillCategories, skillCategories, skillExperience } from "../data/skills";
import profilePortrait from "../assets/gallery/Profile.jpeg";

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
    panelTitle: "Engineering Range",
    story: "I work across the application—from the experience people use to the logic, APIs, data and infrastructure that carry it into production.",
    workItems: [
      { title: "I connect the layers", copy: "Interface, backend, APIs and data are engineered as one system.", icon: <Boxes size={17} /> },
      { title: "I catch gaps earlier", copy: "A wider view exposes hand-off risks before they become delivery problems.", icon: <Sparkles size={17} /> },
      { title: "I design for production", copy: "Security, testing and maintainability shape the build from the start.", icon: <ShieldCheck size={17} /> },
    ],
    evidence: [
      { name: "Full-stack", detail: "Core practice" },
      { name: "APIs", detail: "Integration" },
      { name: "Cloud", detail: "Delivery" },
      { name: "Data", detail: "Connected systems" },
    ],
    quote: "One feature should feel like one system.",
    icon: <Layers3 size={22} />,
  },
  {
    eyebrow: "Applied AI",
    navLabel: "Building with what’s next",
    panelTitle: "Applied AI",
    story: "I explore emerging AI capabilities by asking where they genuinely improve the product, then learn through practical building and integration.",
    workItems: [
      { title: "I build to understand", copy: "Experiments become working prototypes, not notes left in a course.", icon: <Bot size={17} /> },
      { title: "I integrate with purpose", copy: "AI belongs where it makes an experience clearer, faster or more useful.", icon: <Sparkles size={17} /> },
      { title: "I evaluate responsibly", copy: "Useful capability still needs testing, monitoring and sound judgement.", icon: <ShieldCheck size={17} /> },
    ],
    evidence: [
      { name: "AI APIs", detail: "Integration" },
      { name: "Chatbots", detail: "Web products" },
      { name: "Agents", detail: "Applied learning" },
      { name: "Automation", detail: "Prototypes" },
    ],
    quote: "Emerging capability matters when it improves the product.",
    icon: <Bot size={22} />,
  },
  {
    eyebrow: "Professional standing",
    navLabel: "Ambition with accountability",
    panelTitle: "Professional Standing",
    story: "I want the engineer behind the work to be as credible as the work itself—accountable, developing continuously and working to a higher standard.",
    workItems: [
      { title: "I work to standards", copy: "Professional responsibility extends beyond completing the next ticket.", icon: <Award size={17} /> },
      { title: "I keep earning trust", copy: "Competence is strengthened through delivery, reflection and continued development.", icon: <TrendingUp size={17} /> },
      { title: "I own the outcome", copy: "I put my name behind work that is considered, supportable and responsible.", icon: <ShieldCheck size={17} /> },
    ],
    evidence: [
      { name: "AMICITP-SA", detail: "Designation" },
      { name: "Java & .NET", detail: "Competencies" },
      { name: "SAQA", detail: "Recognised" },
      { name: "Active", detail: "Development" },
    ],
    quote: "Credibility is something I intend to keep earning.",
    icon: <Award size={22} />,
  },
  {
    eyebrow: "Continuous growth",
    navLabel: "Learning with evidence",
    panelTitle: "Continuous Growth",
    story: "I treat learning as part of the job. I don’t collect certifications—I use them to go deeper, build smarter and stay ahead of what’s next.",
    workItems: [
      { title: "I learn with intention", copy: "Focused on skills that solve real problems and create real impact.", icon: <Lightbulb size={17} /> },
      { title: "I apply immediately", copy: "New knowledge gets tested in projects, systems and daily engineering decisions.", icon: <Sparkles size={17} /> },
      { title: "I share & strengthen", copy: "Teaching, documenting and collaborating forces me to grow—and helps others.", icon: <TrendingUp size={17} /> },
    ],
    evidence: [
      { name: "databricks", detail: "Data Engineering" },
      { name: "serviceNow", detail: "CSA Candidate" },
      { name: "CISCO", detail: "Networking" },
      { name: "& More", detail: "Always Learning" },
    ],
    quote: "Growth isn’t a phase. It’s my standard. I build better by learning better.",
    icon: <Database size={22} />,
  },
];

const proofPointPositions = ["top", "right", "left", "bottom"];

const proofIndicatorRotations = [0, 90, -90, 180];

const heroValues = [
  {
    title: "Full-Stack Perspective",
    copy: "I see the whole system—design, code, data, APIs, infrastructure and the experience in between.",
    icon: <Boxes size={25} />,
  },
  {
    title: "Clean. Scalable. Maintainable.",
    copy: "I write code that’s easy to understand, easy to extend and built to survive beyond the first release.",
    icon: <ShieldCheck size={25} />,
  },
  {
    title: "Human-Centered Engineering",
    copy: "I build for people, not just for specs. Usability, clarity and impact guide every decision I make.",
    icon: <Users size={25} />,
  },
  {
    title: "Impact > Output",
    copy: "I care less about how much I build, and more about the difference it makes.",
    icon: <Rocket size={25} />,
  },
];

const engineeringPrinciples = [
  {
    number: "01",
    eyebrow: "Systems thinking",
    title: "I connect decisions across the build.",
    copy: "Frontend, backend, APIs and data aren’t separate problems to me. I follow how one decision travels through the system, catch the gaps between layers and build with the whole product in view.",
    tags: ["Full-Stack Awareness", "Data Flow", "Integration Mindset"],
    icon: <Network size={48} />,
    tone: "orange",
  },
  {
    number: "02",
    eyebrow: "Production mindset",
    title: "“It works” is where the conversation starts.",
    copy: "I think past the happy path — validation, security, failure states, maintainability, debugging and the developer who may inherit the code after me.",
    tags: ["Quality First", "Security Aware", "Future Developer"],
    icon: <ShieldCheck size={54} />,
    tone: "purple",
  },
  {
    number: "03",
    eyebrow: "Proof over claims",
    title: "I build first. Then I validate what I know.",
    copy: "Certifications strengthen my foundation, but working software is the standard I measure myself against. I learn, apply, test, refine — and let the result carry the claim.",
    tags: ["Build", "Test", "Refine", "Deliver"],
    icon: <Boxes size={50} />,
    tone: "orange",
  },
];

const capabilityDescriptions = [
  "Languages I use to build and solve problems.",
  "Building responsive, accessible and polished user experiences.",
  "Building robust APIs and server-side logic that powers applications.",
  "Connecting systems and services to automate real-world workflows.",
  "Designing schemas and working with data that drives decisions.",
  "Deploying, monitoring and scaling applications with confidence.",
  "Breaking complex requirements into clear, efficient solutions.",
  "Turning raw data into trusted, useful insight.",
  "Writing clean, maintainable code that stands the test of time.",
  "Building quality in, catching issues early and ensuring reliability.",
  "Building intelligent features and automating real work.",
  "Protecting systems, identities and data from the start.",
  "Building cross-platform mobile experiences that deliver.",
  "Automating delivery and keeping codebases healthy.",
  "Designing systems that are scalable, maintainable and future-ready.",
  "The tools that help me build, debug and ship.",
];

const capabilityImpactTitles = [
  "Strong foundations for every build.",
  "Clean interfaces people can use.",
  "Reliable logic behind the experience.",
  "Better connections. Bigger possibilities.",
  "Data the product can rely on.",
  "From working locally to working in production.",
  "Complexity turned into clear decisions.",
  "Raw data turned into trusted direction.",
  "Code that remains useful after release.",
  "Confidence built into every change.",
  "Emerging capability made practical.",
  "Trust designed into the system.",
  "Useful experiences beyond the browser.",
  "A healthier path from code to release.",
  "Structure that supports what comes next.",
  "A focused environment for better delivery.",
];

const capabilityMatters = [
  { title: "Whole System Thinking", copy: "I design with the whole system in mind, not just isolated features.", icon: <Network size={20} /> },
  { title: "Better Engineering Decisions", copy: "Understanding each layer helps me choose what improves the entire product.", icon: <Sparkles size={20} /> },
  { title: "Reliable, Scalable Solutions", copy: "Performance, security and maintainability shape the work from day one.", icon: <ShieldCheck size={20} /> },
  { title: "Always Evolving", copy: "I keep learning, adapting and applying what matters.", icon: <TrendingUp size={20} /> },
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
  const [openSection, setOpenSection] = useState<"professional" | null>(null);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState<number | null>(null);
  const [activeProofPoint, setActiveProofPoint] = useState(3);
  const [displayedProofPoint, setDisplayedProofPoint] = useState(3);
  const [isProofTransitioning, setIsProofTransitioning] = useState(false);
  const proofTransitionTimeout = useRef<number | null>(null);
  const technicalSectionRef = useRef<HTMLElement>(null);
  const professionalSectionRef = useRef<HTMLElement>(null);

  useEffect(() => () => {
    if (proofTransitionTimeout.current !== null) {
      window.clearTimeout(proofTransitionTimeout.current);
    }
  }, []);

  const toggleSection = (section: "professional") => {
    const isOpening = openSection !== section;
    setOpenSection((current) => current === section ? null : section);

    if (isOpening) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          professionalSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  };

  useEffect(() => {
    if (activeCapabilityIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCapabilityIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeCapabilityIndex]);

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

  const handlePillarPointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--pillar-x", `${x}%`);
    event.currentTarget.style.setProperty("--pillar-y", `${y}%`);
  };

  const activeProof = proofPoints[displayedProofPoint];
  const activeCapability = activeCapabilityIndex === null ? null : skillCategories[activeCapabilityIndex];
  const activeCapabilityExperience = activeCapability ? skillExperience[activeCapability.title] : null;

  const scrollToCapabilities = () => {
    technicalSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="section skills-page-section" data-testid="skills-section">
      <section aria-labelledby="skills-title" className="skills-showcase-hero relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#080a0f]" data-testid="skills-hero">
        <div className="skills-showcase-grid relative z-10">
          <section className="skills-identity-panel relative min-w-0 overflow-hidden" aria-label="Technical expertise introduction">
            <div className="relative z-20">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.21em] text-primary">Technical expertise</span>
                <span className="h-px w-10 bg-gradient-to-r from-primary/70 to-transparent" />
                <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              </div>
              <h1 id="skills-title" className="mt-4 font-display text-[2.55rem] font-bold leading-[0.92] text-white sm:text-5xl xl:text-[3.1rem]" data-testid="skills-title">
                Skills &
                <span className="skills-gradient-title mt-1 block">Technologies</span>
              </h1>
              <p className="mt-5 max-w-[19rem] font-display text-lg leading-6 text-white/80">I don’t just work across the stack &mdash;<br />I <span className="font-semibold text-primary">connect it.</span></p>
              <p className="mt-4 max-w-[19rem] text-[11px] leading-[1.1rem] text-white/50">Strong software isn’t built by knowing more technologies &mdash; it’s built by understanding how each piece influences the next.</p>
              <p className="mt-2 text-[11px] font-medium text-white/55">That’s where I operate.</p>
            </div>

            <div className="skills-signature relative z-20 mt-8 w-fit">
              <p className="font-serif text-base italic">Thembinkosi Eden Thwala</p>
              <span className="mt-1 block text-[7px] font-semibold uppercase tracking-[0.18em] text-white/45">Full-stack developer</span>
            </div>

            <div className="skills-portrait-wrap pointer-events-none absolute inset-x-0 bottom-12 z-0 h-[58%]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(249,115,22,0.22),transparent_54%)]" />
              <img src={profilePortrait} alt="Thembinkosi Eden Thwala" className="skills-portrait h-full w-full object-cover" />
            </div>

            <div className="skills-builder-card absolute bottom-[4.25rem] left-0 z-20 max-w-[13rem] rounded-xl border border-primary/35 bg-[#101117]/90 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.48)] backdrop-blur-md">
              <div className="flex items-start gap-2.5">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-primary/35 bg-primary/10 text-primary"><Star size={15} /></span>
                <div>
                  <p className="text-[10px] font-semibold leading-4 text-primary">Builder. Problem-solver.<br />System thinker.</p>
                  <p className="mt-1 text-[8px] leading-3.5 text-white/50">I turn ideas, data and logic into software that solves real problems for real people.</p>
                </div>
              </div>
            </div>

            <div className="skills-stat-strip absolute inset-x-0 bottom-0 z-20 grid grid-cols-4 border-y border-white/[0.08] bg-[#0e1016]/90 backdrop-blur-md">
              {[
                { value: "3+", label: "Years of experience", icon: <Code2 size={14} /> },
                { value: "100+", label: "Technologies & tools", icon: <Wrench size={14} /> },
                { value: "20+", label: "Projects delivered", icon: <Rocket size={14} /> },
                { value: "8", label: "Certifications earned", icon: <Trophy size={14} /> },
              ].map((stat) => (
                <div key={stat.label} className="flex min-w-0 gap-1.5 border-r border-white/[0.07] px-2 py-2.5 last:border-r-0">
                  <span className="mt-0.5 text-purple">{stat.icon}</span>
                  <span className="min-w-0"><span className="block font-display text-sm font-semibold leading-none text-primary">{stat.value}</span><span className="mt-1 block text-[6px] uppercase leading-2.5 tracking-[0.08em] text-white/40">{stat.label}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="skills-wheel-panel relative min-w-0" aria-label="Interactive engineering pillars">
            <div onMouseMove={handlePillarPointerMove} className="skills-orbit-wheel relative mx-auto" style={{ "--active-angle": `${proofIndicatorRotations[activeProofPoint]}deg` } as CSSProperties}>
              <div className="skills-orbit-glow pointer-events-none absolute inset-0" />
              <div className="skills-orbit-ticks pointer-events-none absolute inset-[12%] rounded-full" />
              <div className="skills-orbit-ring skills-orbit-ring--outer pointer-events-none absolute rounded-full" />
              <div className="skills-orbit-ring skills-orbit-ring--middle pointer-events-none absolute rounded-full" />
              <div className="skills-orbit-ring skills-orbit-ring--inner pointer-events-none absolute rounded-full" />
              <div className="skills-orbit-cross pointer-events-none absolute inset-[18%]" />
              <div className="skills-orbit-active-arc pointer-events-none absolute inset-[14%] rounded-full" />

              <div className={`skills-orbit-core absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center text-center transition duration-150 ${isProofTransitioning ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
                <span className="grid h-9 w-9 place-items-center text-primary [&>svg]:h-6 [&>svg]:w-6">{activeProof.icon}</span>
                <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.18em] text-primary">Active pillar</p>
                <h2 className="mt-1.5 font-display text-lg font-semibold leading-5 text-white">{activeProof.panelTitle}</h2>
                <p className="mt-2 max-w-[8rem] text-[9px] leading-3.5 text-white/55">{activeProof.navLabel}</p>
              </div>

              {proofPoints.map((point, index) => {
                const isActive = activeProofPoint === index;
                const position = proofPointPositions[index];

                return (
                  <button
                    key={point.eyebrow}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectProofPoint(index)}
                    onMouseEnter={() => selectProofPoint(index)}
                    onFocus={() => selectProofPoint(index)}
                    className={`skills-orbit-node skills-orbit-node--${position} ${isActive ? "is-active" : ""}`}
                  >
                    <span className="skills-orbit-node-icon">{point.icon}</span>
                    <span className="skills-orbit-node-copy">
                      <span className="skills-orbit-node-label">{point.eyebrow}</span>
                      <span className="skills-orbit-node-detail">{point.navLabel}</span>
                    </span>
                  </button>
                );
              })}

              <p className="skills-orbit-hint absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] text-white/35">Hover or focus a pillar to explore how it shapes my work</p>
            </div>
          </section>

          <article className={`skills-evidence-panel relative min-w-0 rounded-2xl border border-primary/35 bg-[#111319]/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.48),0_0_35px_rgba(249,115,22,0.08)] transition duration-150 ${isProofTransitioning ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100"}`} aria-live="polite">
            <div key={activeProof.panelTitle}>
              <p className="pillar-story-kicker text-[8px] font-semibold uppercase tracking-[0.18em] text-primary">Active pillar</p>
              <h2 className="pillar-story-heading mt-2 font-display text-2xl font-semibold leading-tight text-white">{activeProof.panelTitle}</h2>
              <p className="mt-1 text-sm text-white/75">{activeProof.navLabel}</p>
              <p className="pillar-story-copy mt-4 text-[11px] leading-[1.1rem] text-white/48">{activeProof.story}</p>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-primary">How this shows up in my work</p>
                <div className="mt-3 space-y-3">
                  {activeProof.workItems.map((item) => (
                    <div key={item.title} className="group flex gap-3">
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-primary/30 bg-primary/[0.06] text-primary transition group-hover:bg-primary/10">{item.icon}</span>
                      <div><h3 className="text-[11px] font-semibold text-white/90">{item.title}</h3><p className="mt-0.5 text-[9px] leading-3.5 text-white/45">{item.copy}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-primary">Evidence in progress</p>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {activeProof.evidence.map((item) => (
                    <div key={item.name} className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-1.5 py-2 text-center">
                      <span className="block text-[8px] font-semibold text-white/75">{item.name}</span>
                      <span className="mt-1 block text-[6px] leading-2.5 text-white/35">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="mt-5 flex gap-3 rounded-xl border border-primary/10 bg-[linear-gradient(105deg,rgba(249,115,22,0.08),rgba(255,255,255,0.025))] p-4">
                <span className="font-serif text-3xl leading-none text-primary">&ldquo;</span>
                <p className="text-xs leading-5 text-white/60">{activeProof.quote}</p>
              </blockquote>
            </div>
          </article>
        </div>

        <div className="skills-value-strip relative z-10 grid border-t border-white/[0.08] bg-[linear-gradient(90deg,rgba(249,115,22,0.07),rgba(255,255,255,0.018),rgba(249,115,22,0.05))] sm:grid-cols-2 xl:grid-cols-4">
          {heroValues.map((value) => (
            <article key={value.title} className="group flex gap-3 border-b border-r border-white/[0.07] p-5 transition hover:bg-white/[0.025] last:border-r-0 xl:border-b-0">
              <span className="mt-0.5 flex-none text-primary transition group-hover:scale-110">{value.icon}</span>
              <div><h2 className="font-display text-sm font-semibold text-white/90">{value.title}</h2><p className="mt-2 text-[9px] leading-4 text-white/45">{value.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="engineering-method-section" aria-labelledby="engineering-method-title">
        <div className="engineering-method-top">
          <div className="engineering-method-intro">
            <div className="engineering-section-kicker"><span>How I engineer</span><i /></div>
            <h2 id="engineering-method-title">The stack tells you what I use.<br /><span>This is how I use it.</span></h2>
            <p>Technology gives me options. Engineering judgement tells me which ones matter. Across the stack, three principles shape the way I turn requirements into software that can survive beyond the demo.</p>
          </div>

          <div className="engineering-stack-stage" aria-hidden="true">
            <div className="engineering-stack-layers">
              <span className="engineering-stack-sparks" />
              <div className="engineering-stack-layer engineering-stack-layer--top"><Cloud size={34} /></div>
              <div className="engineering-stack-layer engineering-stack-layer--middle"><ShieldCheck size={32} /></div>
              <div className="engineering-stack-layer engineering-stack-layer--bottom"><Code2 size={34} /></div>
            </div>
            <div className="engineering-stack-notes">
              <div><Cloud size={20} /><span><strong>Production ready</strong><small>Built to scale and endure.</small></span></div>
              <div><ShieldCheck size={20} /><span><strong>Engineering judgement</strong><small>Choosing what matters.</small></span></div>
              <div><Code2 size={20} /><span><strong>Intent to impact</strong><small>Solving real problems.</small></span></div>
            </div>
          </div>
        </div>

        <div className="engineering-principle-grid">
          {engineeringPrinciples.map((principle) => (
            <article key={principle.number} className={`engineering-principle-card engineering-principle-card--${principle.tone}`}>
              <span className="engineering-principle-number">{principle.number}</span>
              <div className="engineering-principle-body">
                <div className="engineering-principle-graphic">{principle.icon}</div>
                <div>
                  <p className="engineering-principle-eyebrow">{principle.eyebrow}</p>
                  <h3>{principle.title}</h3>
                  <i />
                  <p className="engineering-principle-copy">{principle.copy}</p>
                </div>
              </div>
              <div className="engineering-principle-tags">
                {principle.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="engineering-result-strip">
          <span className="engineering-result-icon"><Rocket size={27} /></span>
          <div><p>The result</p><h3>Principles in practice. Impact in the product.</h3><span>Now let’s look at the technical capabilities behind the work.</span></div>
          <button type="button" onClick={scrollToCapabilities}>Explore Technical Capabilities <ArrowRight size={18} /></button>
        </div>
      </section>

      <section id="technical-capabilities" ref={technicalSectionRef} className="technical-capabilities-section scroll-mt-24" aria-labelledby="technical-capabilities-title">
        <div className="technical-capabilities-layout">
          <div className="technical-capabilities-main">
            <div className="technical-capabilities-header">
              <div className="technical-capabilities-heading">
                <div className="engineering-section-kicker"><span>Technical capabilities</span><i /></div>
                <h2 id="technical-capabilities-title">The capabilities<br />behind <span>the build.</span></h2>
                <p>This is the toolkit I work with across the stack — the technologies, platforms and engineering practices I use to design, build, integrate and deliver software that solves real problems.</p>
              </div>

              <div className="capability-system-map" aria-label="My full-stack capability connects four parts of the product">
                <div className="capability-system-map-orbit" aria-hidden="true">
                  <span className="capability-system-map-ring" />
                  <span className="capability-system-map-core"><Boxes size={25} /></span>
                  <span className="capability-system-map-node capability-system-map-node--top"><Monitor size={17} /></span>
                  <span className="capability-system-map-node capability-system-map-node--right"><Server size={17} /></span>
                  <span className="capability-system-map-node capability-system-map-node--bottom"><Database size={17} /></span>
                  <span className="capability-system-map-node capability-system-map-node--left"><Cloud size={17} /></span>
                </div>
                <div className="capability-system-map-copy">
                  <p>Connected capability</p>
                  <h3>One product.<br />Four connected layers.</h3>
                  <div><span>Interface</span><span>Logic</span><span>Data</span><span>Delivery</span></div>
                </div>
              </div>
            </div>

            <div className="capability-card-grid" data-testid="skills-grid">
              {skillCategories.map((category, index) => (
                <button
                  key={category.title}
                  type="button"
                  className={`capability-card capability-tone-${presentations[index].color}`}
                  onClick={() => setActiveCapabilityIndex(index)}
                  aria-label={`Open ${category.title} skills grouped by experience`}
                  data-testid={`skill-card-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="capability-card-icon">{presentations[index].icon}</span>
                  <span className="capability-card-copy"><strong>{category.title}</strong><small>{capabilityDescriptions[index]}</small></span>
                  <ChevronRight className="capability-card-arrow" size={19} />
                </button>
              ))}

              <div className="capability-workflow-card">
                <div className="capability-workflow-copy">
                  <p>Working environment</p>
                  <h3>The tools support the flow. They never become the process.</h3>
                  <span>I move from idea to implementation with a workflow that keeps context, quality and delivery connected.</span>
                </div>
                <div className="capability-workflow-track" aria-hidden="true">
                  <span><Lightbulb size={16} /><small>Think</small></span><i />
                  <span><Code2 size={16} /><small>Build</small></span><i />
                  <span><TestTube2 size={16} /><small>Test</small></span><i />
                  <span><Rocket size={16} /><small>Ship</small></span>
                </div>
              </div>
            </div>

            <div className="capability-toolkit-note">
              <span><Star size={22} /></span>
              <div><small>These tools are powerful.</small><strong>What matters is how I use them together.</strong></div>
              <i />
              <p>I connect interfaces, logic, APIs, data and cloud to build products that are reliable, useful and made to grow.</p>
            </div>
          </div>

          <aside className="technical-capabilities-aside">
            <article className="capability-perspective-card">
              <span><Boxes size={34} /></span>
              <div><h3>Full-Stack Perspective</h3><p>I understand how each layer works — and how they connect. That wider view helps me build solutions that are scalable, secure and ready for real-world use.</p></div>
            </article>

            <article className="capability-matters-card">
              <p className="capability-aside-kicker">Why this matters</p>
              <div>
                {capabilityMatters.map((item) => (
                  <div key={item.title} className="capability-matter-item">
                    <span>{item.icon}</span>
                    <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  </div>
                ))}
              </div>
            </article>

            <a className="capability-project-card" href="https://github.com/PixieStack" target="_blank" rel="noopener noreferrer">
              <span><Award size={28} /></span>
              <div><h3>Curious about how I use these?</h3><p>See the projects where these technologies come together to solve real problems.</p></div>
              <strong>See My Engineering in Action <ArrowRight size={16} /></strong>
            </a>

          </aside>
        </div>
      </section>

      <div className="mt-24">
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

      {activeCapability && activeCapabilityExperience && activeCapabilityIndex !== null && (
        <div
          className="capability-modal-backdrop"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveCapabilityIndex(null);
          }}
        >
          <article
            className={`capability-modal capability-tone-${presentations[activeCapabilityIndex].color}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="capability-modal-title"
          >
            <button type="button" className="capability-modal-back" onClick={() => setActiveCapabilityIndex(null)}>
              <ArrowRight size={13} /> Back to Technical Capabilities
            </button>
            <button type="button" className="capability-modal-close" onClick={() => setActiveCapabilityIndex(null)} aria-label="Close capability details">
              <X size={20} />
            </button>

            <div className="capability-modal-header">
              <span className="capability-modal-icon">{presentations[activeCapabilityIndex].icon}</span>
              <div>
                <p>Technical capability</p>
                <h2 id="capability-modal-title">{activeCapability.title}</h2>
                <span>{capabilityDescriptions[activeCapabilityIndex]}</span>
              </div>
              <span className="capability-modal-overall"><strong>{activeCapabilityExperience.overall}</strong><small>Overall experience</small></span>
            </div>

            <div className="capability-modal-groups">
              {activeCapabilityExperience.groups.map((group) => (
                <section key={group.label}>
                  <div className="capability-modal-group-heading"><h3>{group.label}</h3><span>{group.items.length} {group.items.length === 1 ? "skill" : "skills"}</span></div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="capability-skill-mark">{item.split(/[\s&/.()-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase()}</span>
                        <span className="capability-skill-name">{item}</span>
                        <small>{group.label.replace(" Experience", "").replace("Years", "yrs").replace("Year", "yr")}</small>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="capability-modal-impact">
              <span><Lightbulb size={22} /></span>
              <div><p>Why it matters</p><h3>{capabilityImpactTitles[activeCapabilityIndex]}</h3><small>{capabilityDescriptions[activeCapabilityIndex]} Together with the rest of the stack, it helps me deliver software that is useful, dependable and ready to grow.</small></div>
              <div className="capability-modal-impact-visual" aria-hidden="true"><i /><i /><i /><Code2 size={26} /></div>
            </div>

            <div className="capability-modal-footer">
              <span>{activeCapability.items.length} skills represented</span>
              <button type="button" onClick={() => setActiveCapabilityIndex(null)}>Return to capabilities</button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
