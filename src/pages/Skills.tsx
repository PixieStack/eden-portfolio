import {
  BarChart3,
  Blocks,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Handshake,
  Lightbulb,
  MessageCircleMore,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";
import SkillCard from "../components/SkillCard";
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
  { value: stats.programmingLanguages, label: "Programming Languages" },
  { value: stats.databaseSystems, label: "Database Systems" },
];

const professionalSkillGroups = [
  {
    eyebrow: "Think & solve",
    title: "Turn ambiguity into direction",
    description: "I break complex needs into clear, testable decisions.",
    icon: <Lightbulb size={21} />,
    skills: ["Analytical Thinking", "Attention to Detail", "Requirements Analysis", "Structured Problem-Solving"],
    accent: "primary",
  },
  {
    eyebrow: "Communicate & align",
    title: "Keep people in the loop",
    description: "I make technical work understandable and feedback useful.",
    icon: <MessageCircleMore size={21} />,
    skills: ["Constructive Feedback", "Knowledge Sharing", "Stakeholder Communication", "Technical Communication"],
    accent: "purple",
  },
  {
    eyebrow: "Collaborate & deliver",
    title: "Move work forward together",
    description: "I adapt, prioritise and contribute reliably within a team.",
    icon: <Handshake size={21} />,
    skills: ["Adaptability", "Learning Agility", "Team Collaboration", "Time and Priority Management"],
    accent: "emerald",
  },
];

export default function Skills() {
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

      <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-surface p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-purple/25 to-primary/15 text-purple shadow-lg shadow-purple/10">
              <Users size={25} />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple">Professional Skills</span>
              <h2 className="mt-2 max-w-2xl font-display text-2xl font-bold text-white md:text-4xl">The human skills behind dependable delivery</h2>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted lg:justify-self-end">
            Strong technical work also depends on how I listen, frame problems, share context and help a team move from ideas to outcomes.
          </p>
        </div>

        <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
          {professionalSkillGroups.map((group, index) => {
            const styles = group.accent === "primary"
              ? "border-primary/20 bg-primary/[0.06] text-primary"
              : group.accent === "emerald"
                ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                : "border-purple/20 bg-purple/[0.06] text-purple";

            return (
              <article key={group.title} className={`relative overflow-hidden rounded-2xl border p-5 ${styles}`}>
                <span className="absolute right-4 top-3 font-display text-5xl font-bold text-white/[0.04]">0{index + 1}</span>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/10">{group.icon}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{group.eyebrow}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.filter((skill) => softSkills.includes(skill)).map((skill) => (
                    <span key={skill} className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
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

    </section>
  );
}
