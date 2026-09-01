import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  MapPin,
  MessageCircle,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  UserRound,
} from "lucide-react";
import { experience, type Experience as ExperienceItem } from "../data/experience";

type Accent = "orange" | "purple" | "blue" | "pink";
type IconComponent = ComponentType<{ size?: number; className?: string }>;
type Strength = { title: string; description: string; icon: IconComponent; accent: Accent };

const roleMeta: Array<{ accent: Accent; icon: IconComponent; label?: string; strengths: Strength[] }> = [
  {
    accent: "orange", icon: Rocket, label: "Current role",
    strengths: [
      { title: "Enterprise engineering", description: "Gained exposure to enterprise systems, best practices, and scalable solution design.", icon: BriefcaseBusiness, accent: "purple" },
      { title: "API and database work", description: "Strengthened skills in building and consuming APIs and working with relational databases.", icon: Database, accent: "purple" },
      { title: "Cloud and platform exposure", description: "Hands-on experience with AWS, Microsoft Azure, and ServiceNow in enterprise environments.", icon: Cloud, accent: "purple" },
    ],
  },
  {
    accent: "purple", icon: Code2,
    strengths: [
      { title: "Full-stack delivery", description: "Built end-to-end features across frontend and backend using modern tech stacks and best practices.", icon: Code2, accent: "purple" },
      { title: "Production debugging", description: "Troubleshot real-world issues, traced root causes, and delivered reliable, long-term fixes.", icon: Sparkles, accent: "orange" },
      { title: "Cloud-backed applications", description: "Leveraged AWS services to build, deploy, and optimize secure, scalable enterprise solutions.", icon: Cloud, accent: "purple" },
    ],
  },
  {
    accent: "orange", icon: Cloud,
    strengths: [
      { title: "AWS foundations", description: "Built strong hands-on experience with core AWS services and monitoring tools that power reliable cloud environments.", icon: Cloud, accent: "blue" },
      { title: "DevOps mindset", description: "Embraced automation, collaboration, and continuous improvement to ship faster and more reliably.", icon: Code2, accent: "purple" },
      { title: "Operational reliability", description: "Focused on system health, performance, and security to ensure resilient and production-ready systems.", icon: ShieldCheck, accent: "orange" },
    ],
  },
];

const journeyStrengths: Strength[] = [
  { title: "Cloud foundations", description: "Built and supported cloud infrastructure on AWS with a strong grasp of services, security, and operational best practices.", icon: Cloud, accent: "blue" },
  { title: "Full-stack delivery", description: "Designed and delivered web applications across frontend, backend, APIs, and integrations using modern, production-ready technologies.", icon: Code2, accent: "purple" },
  { title: "Broader engineering ownership", description: "Tackled complex systems, automation, AI prototypes, and end-to-end delivery in enterprise environments.", icon: Rocket, accent: "orange" },
];

const hireQualities: Strength[] = [
  { title: "Fast Learner", description: "I adapt quickly, understand unfamiliar systems fast, and turn feedback into better execution.", icon: Rocket, accent: "orange" },
  { title: "End-to-End Builder", description: "From interface to backend logic, integrations and data, I can contribute across the full delivery cycle.", icon: Code2, accent: "purple" },
  { title: "Professional Mindset", description: "I value structure, ownership, communication and doing things properly — not just quickly.", icon: UserRound, accent: "blue" },
  { title: "Growth-Driven", description: "I am intentional about improving my craft and bringing more value with every opportunity.", icon: TrendingUp, accent: "pink" },
];

function StrengthList({ items, compact = false }: { items: Strength[]; compact?: boolean }) {
  return <div className={`experience-strength-list ${compact ? "is-compact" : ""}`}>
    {items.map(({ title, description, icon: Icon, accent }) => <article key={title} className="experience-strength-item">
      <span className={`experience-icon experience-icon--${accent}`}><Icon size={compact ? 21 : 26} /></span>
      <div><h3>{title}</h3><p>{description}</p></div>
    </article>)}
  </div>;
}

function JourneyPanel({ action }: { action?: React.ReactNode }) {
  return <aside className="experience-journey-panel">
    <header><span className="experience-icon experience-icon--orange"><Star size={21} /></span><p>What this journey built</p></header>
    <StrengthList items={journeyStrengths} compact />
    {action}
  </aside>;
}

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [selectedRole]);

  useEffect(() => {
    document.body.classList.toggle("experience-detail-open", selectedRole !== null);
    return () => document.body.classList.remove("experience-detail-open");
  }, [selectedRole]);

  if (selectedRole !== null) {
    return <ExperienceDetail item={experience[selectedRole]} index={selectedRole} onBack={() => setSelectedRole(null)} />;
  }

  return <div className="experience-page" data-testid="experience-section">
    <section className="experience-hero" aria-labelledby="experience-hero-title">
      <div className="experience-hero-copy">
        <p className="experience-eyebrow">Career journey</p>
        <h1 id="experience-hero-title">Professional<br /><span>Experience</span></h1>
        <h2>Three roles. One direction.</h2>
        <p className="experience-lead">From cloud infrastructure and DevOps foundations to full-stack delivery and enterprise software engineering, each role expanded how I build, solve and contribute.</p>
        <div className="experience-hero-stats" aria-label="Career summary">
          <article><span className="experience-icon experience-icon--orange"><BriefcaseBusiness size={21} /></span><div><strong>3+</strong><small>Years of Experience</small></div></article>
          <article><span className="experience-icon experience-icon--purple"><TrendingUp size={21} /></span><div><strong>3</strong><small>Companies</small></div></article>
          <article className="experience-direction-stat"><span className="experience-icon experience-icon--pink"><GitBranch size={21} /></span><strong>Cloud → Full-Stack → Enterprise</strong></article>
        </div>
        <button type="button" className="experience-gradient-button" onClick={() => journeyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>Explore My Experience <ArrowRight size={19} /></button>
      </div>
      <JourneyPanel />
    </section>

    <section ref={journeyRef} className="experience-roles-section" aria-labelledby="experience-roles-title">
      <header className="experience-centered-heading">
        <p className="experience-eyebrow">Career journey</p>
        <h2 id="experience-roles-title">Professional <span>Experience</span></h2>
        <p>Three roles. One growing engineering range — from cloud foundations<br />to full-stack delivery and enterprise software development.</p>
      </header>
      <div className="experience-roles-layout">
        <div className="experience-role-timeline">
          {experience.map((item, index) => {
            const meta = roleMeta[index]; const Icon = meta.icon;
            return <button key={item.role} type="button" className={`experience-role-card experience-role-card--${meta.accent}`} onClick={() => setSelectedRole(index)}>
              <span className="experience-role-number">{String(index + 1).padStart(2, "0")}</span>
              <span className={`experience-role-icon experience-role-icon--${meta.accent}`}><Icon size={25} /></span>
              <span className="experience-role-copy">
                <strong>{item.role}</strong><b>{item.company}</b>
                <small><CalendarDays size={13} /> {item.period}<i /> <MapPin size={13} /> {item.location}</small>
                <em>{item.description}</em>
              </span>
              <span className="experience-role-link">View role details <ArrowRight size={16} /></span>
            </button>;
          })}
        </div>
        <JourneyPanel action={<Link className="experience-panel-button" to="/projects"><BarChart3 size={18} /> Explore Projects <ArrowRight size={18} /></Link>} />
      </div>
    </section>

    <section className="experience-hire-section" aria-labelledby="experience-hire-title">
      <div className="experience-hire-top">
        <div className="experience-hire-copy">
          <p className="experience-eyebrow">Why I’d be a strong hire</p>
          <h2 id="experience-hire-title">I bring more than skills —<br />I bring <span>momentum.</span></h2>
          <p>I am the kind of engineer who combines curiosity, discipline and follow-through. I learn quickly, communicate clearly, and care deeply about building work that is reliable, thoughtful and genuinely useful. Across full-stack delivery, APIs, integrations, data and cloud-minded systems, I bring both technical range and a professional mindset. I do not just want to join a team — I want to contribute meaningfully, raise the standard, and grow with the people building alongside me.</p>
        </div>
        <aside className="experience-contact-card">
          <span className="experience-icon experience-icon--purple"><MessageCircle size={25} /></span>
          <h3>Let’s build something<br /><span>impactful together.</span></h3><i />
          <p>If you need an engineer who can grow fast, contribute well, and take the work seriously, I would love to hear from you.</p>
          <Link to="/contact"><ArrowRight size={20} /> Let’s Talk</Link>
        </aside>
      </div>
      <div className="experience-hire-grid">
        {hireQualities.map(({ title, description, icon: Icon, accent }) => <article key={title} className={`experience-hire-card experience-hire-card--${accent}`}>
          <span className={`experience-icon experience-icon--${accent}`}><Icon size={29} /></span><div><h3>{title}</h3><p>{description}</p></div>
        </article>)}
      </div>
      <div className="experience-capability-strip">
        <span><GraduationCap size={25} /> Full-Stack Engineering</span>
        <span><Network size={25} /> APIs &amp; Integrations</span>
        <span><Database size={25} /> Data-Aware Delivery</span>
        <span><ShieldCheck size={25} /> Professional Ownership</span>
      </div>
    </section>
  </div>;
}

function ExperienceDetail({ item, index, onBack }: { item: ExperienceItem; index: number; onBack: () => void }) {
  const meta = roleMeta[index]; const Icon = meta.icon;
  return <section className={`experience-detail experience-detail--${meta.accent} experience-detail--role-${index}`} data-testid={`experience-detail-${index}`}>
    <button type="button" className="experience-back-button" onClick={onBack}><ArrowLeft size={16} /> Back to Experience</button>
    <div className="experience-detail-layout">
      <article className="experience-detail-card">
        <div className="experience-detail-rail"><span>{String(index + 1).padStart(2, "0")}</span><i /><b><Icon size={28} /></b></div>
        <header className="experience-detail-header">
          <span className="experience-detail-mobile-icon"><Icon size={29} /></span>
          <div>{meta.label && <small>{meta.label}</small>}<h1>{item.role}</h1><h2>{item.company}</h2><p><CalendarDays size={14} /> {item.period}<i /> <MapPin size={14} /> {item.location}</p><div>{item.description}</div></div>
        </header>
        <section className="experience-detail-achievements">
          <h3><Trophy size={19} /> Key Achievements</h3>
          <ul>{item.achievements?.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
        </section>
        <section className="experience-detail-technologies">
          <h3><Code2 size={19} /> Technologies Used</h3>
          <div>{item.technologies?.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>
      </article>
      <aside className="experience-detail-strengths">
        <header><span className="experience-icon experience-icon--orange"><Star size={20} /></span><h2>What this role strengthened</h2></header>
        <StrengthList items={meta.strengths} />
        {index === 1 && <Link to="/projects" className="experience-related-projects"><Rocket size={18} /> Explore related projects <ArrowRight size={18} /></Link>}
      </aside>
    </div>
  </section>;
}
