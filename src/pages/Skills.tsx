import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Code2,
  Layers,
  Database,
  GitBranch,
  BarChart3,
  Wrench,
  Brain,
  Cloud,
  Cpu,
  ShieldCheck,
  Globe2,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";
import SkillCard from "../components/SkillCard";
import QualificationCard from "../components/QualificationCard";
import { skills, softSkills, stats } from "../data/skills";
import { qualifications } from "../data/education";
import { professionalCredentials } from "../data/professionalCredentials";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={24} />,
    items: skills.programming,
    color: "primary",
  },
  {
    title: "Frameworks, APIs & Libraries",
    icon: <Layers size={24} />,
    items: skills.frameworks,
    color: "purple",
  },
  {
    title: "Web Technologies",
    icon: <Globe2 size={24} />,
    items: skills.web,
    color: "cyan",
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
    title: "Platforms",
    icon: <Cloud size={24} />,
    items: skills.platforms,
    color: "indigo",
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 size={24} />,
    items: skills.dataAnalytics,
    color: "cyan",
  },
  {
    title: "Algorithms & Systems Engineering",
    icon: <Cpu size={24} />,
    items: skills.algorithms,
    color: "violet",
  },
  {
    title: "Engineering Practices",
    icon: <Wrench size={24} />,
    items: skills.practices,
    color: "amber",
  },
  {
    title: "Security & Reliability",
    icon: <ShieldCheck size={24} />,
    items: skills.security,
    color: "red",
  },
  {
    title: "Professional Skills",
    icon: <Brain size={24} />,
    items: softSkills,
    color: "rose",
  },
];

const statsArray = [
  { value: stats.programmingLanguages, label: "Programming Languages" },
  { value: stats.frameworksAndTools, label: "Frameworks & APIs" },
  { value: stats.databaseSystems, label: "Database Systems" },
  { value: stats.certifications, label: "Certifications & Credentials" },
];

const certifications = qualifications.filter(
  (qualification) => qualification.type === "Certification",
);

export default function Skills() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#professional-development") return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("professional-development")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

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
          A comprehensive toolkit developed through 3+ years of hands-on
          experience building modern, scalable applications.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="card px-8 py-8 mb-16 flex flex-wrap justify-center gap-8 md:gap-16">
        {statsArray.map(({ value, label }) => (
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

      {/* Certifications and professional credentials */}
      <div
        id="professional-development"
        className="mt-24 scroll-mt-28"
        data-testid="skills-certifications-and-credentials"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-purple uppercase tracking-widest text-sm font-medium">
            Professional Development
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white">
            Certifications &{" "}
            <span className="text-gradient-purple">Professional Credentials</span>
          </h2>
          <p className="mt-5 text-muted">
            Industry certifications, professional recognition and active
            membership supporting my technical practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {professionalCredentials.map((credential) => (
            <article
              key={credential.title}
              className="card p-6 card-hover border border-purple/15"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center text-white flex-shrink-0">
                  <BadgeCheck size={26} />
                </div>
                <div className="min-w-0">
                  <span className="inline-flex px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-medium">
                    {credential.type}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {credential.title}
                  </h3>
                  <p className="mt-1 text-purple font-medium">
                    {credential.organization}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-muted text-sm leading-relaxed">
                {credential.description}
              </p>

              {credential.competencies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {credential.competencies.map((competency) => (
                    <span
                      key={competency}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="inline-flex items-center gap-2 text-muted-light">
                  <CalendarDays size={16} className="text-purple" />
                  {credential.period}
                </span>
                {credential.designation && (
                  <span className="text-muted">{credential.designation}</span>
                )}
              </div>
            </article>
          ))}

          {certifications.map((certification, index) => (
            <QualificationCard
              key={certification.title}
              item={certification}
              index={professionalCredentials.length + index}
            />
          ))}
        </div>
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
