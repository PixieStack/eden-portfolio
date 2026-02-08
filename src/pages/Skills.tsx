import {
  Code2,
  Layers,
  Database,
  GitBranch,
  BarChart3,
  Wrench,
  Brain,
} from "lucide-react";
import SkillCard from "../components/SkillCard";
import { skills, softSkills } from "../data/skills";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={24} />,
    items: skills.programming,
    color: "primary",
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={24} />,
    items: skills.frameworks,
    color: "purple",
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    items: skills.databases,
    color: "emerald",
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch size={24} />,
    items: skills.devops,
    color: "blue",
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 size={24} />,
    items: skills.dataAnalytics,
    color: "cyan",
  },
  {
    title: "Engineering Practices",
    icon: <Wrench size={24} />,
    items: skills.practices,
    color: "amber",
  },
  {
    title: "Soft Skills",
    icon: <Brain size={24} />,
    items: softSkills,
    color: "rose",
  },
];

const stats = [
  { value: "9+", label: "Programming Languages" },
  { value: "11+", label: "Frameworks & Tools" },
  { value: "6+", label: "Database Systems" },
  { value: "5+", label: "Certifications" },
];

export default function Skills() {
  return (
    <section className="section" data-testid="skills-section">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary uppercase tracking-widest text-sm font-medium">
          Technical Expertise
        </span>
        <h2
          className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          data-testid="skills-title"
        >
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          A comprehensive toolkit built through 2+ years of hands-on experience
          in building modern, scalable applications.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="card px-8 py-8 mb-16 flex flex-wrap justify-center gap-8 md:gap-16">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
              {value}
            </div>
            <div className="mt-1 text-muted text-sm">{label}</div>
          </div>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6" data-testid="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            title={category.title}
            icon={category.icon}
            items={category.items}
            color={category.color}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted mb-6">
          Always learning, always growing. These skills continue to evolve with
          every project.
        </p>
        <a
          href="https://github.com/PixieStack"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="skills-github-cta"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-white/10 text-white font-medium hover:border-primary/30 transition-all"
        >
          <i className="fab fa-github" />
          See My Work on GitHub
        </a>
      </div>
    </section>
  );
}
