import { Link } from "react-router-dom";
import {
  ArrowDown,
  Github,
  Linkedin,
  Code2,
  Database,
  Cloud,
  Sparkles,
  ChevronRight,
  MapPin,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";
import profile from "../assets/profile.jpeg";
import { stats as skillStats } from "../data/skills";
import { professionalCredentials } from "../data/professionalCredentials";

const stats = [
  { value: skillStats.programmingLanguages, label: "Programming Languages" },
  { value: skillStats.frameworksAndTools, label: "Frameworks & APIs" },
  { value: skillStats.certifications, label: "Certifications & Credentials" },
  { value: "3+", label: "Years of Experience" },
];

const highlights = [
  "Full Stack Development",
  "Data Engineering",
  "Data Analytics",
  "API Development",
  "ServiceNow Administration",
  "Cloud and DevOps",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] flex items-center overflow-hidden"
        data-testid="hero-section"
      >
        <div className="section grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Content */}
          <div className="animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="text-primary" size={18} />
                <span className="text-primary font-medium text-sm">
                  Available for Opportunities
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <MapPin className="text-emerald-400" size={18} />
                <span className="text-emerald-400 font-medium text-sm">
                  Willing to Relocate — SA & Internationally
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              data-testid="hero-title"
            >
              Hi, I am <br />
              <span className="text-gradient">Thembinkosi</span>{" "}
              <span className="text-white">Eden</span>{" "}
              <span className="text-gradient-purple">Thwala</span>
            </h1>

            {/* Role */}
            <p
              className="mt-6 text-2xl md:text-3xl font-medium text-muted-light"
              data-testid="hero-role"
            >
              Junior Full-Stack Developer, Data Analyst, and Aspiring
              ServiceNow Administrator
            </p>

            {/* Bio */}
            <p
              className="mt-6 text-lg text-muted leading-relaxed max-w-xl"
              data-testid="hero-bio"
            >
              A passionate{" "}
              <strong className="text-white">Cum Laude</strong> graduate from
              Nelson Mandela University with hands-on experience building
              full-stack applications and working with data. Currently pursuing
              a Certified System Administrator (CSA) certification
              through ServiceNow University, I am committed to continuous growth
              across software development, data engineering and the ServiceNow
              platform.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-surface border border-white/5 text-sm text-muted-light"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid="hero-cta-connect"
                className="btn-primary flex items-center gap-2"
              >
                Let's Connect
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/projects"
                data-testid="hero-cta-work"
                className="btn-outline flex items-center gap-2"
              >
                View My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-muted text-sm">Find me on</span>
              <a
                href="https://github.com/PixieStack"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-github"
                className="w-11 h-11 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/thembinkosi-eden-thwala-69083a1a4"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-linkedin"
                className="w-11 h-11 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Scroll indicator - clickable */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
              className="mt-16 flex items-center gap-2 text-muted animate-bounce cursor-pointer hover:text-primary transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={18} />
            </button>
          </div>

          {/* RIGHT - Profile Image - Moved up more */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right -mt-20 lg:-mt-32">
            {/* Background glow */}
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-purple/20 blur-3xl" />

            {/* Profile container */}
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin"
                style={{ animationDuration: "20s" }}
              />

              {/* Main profile ring */}
              <div className="profile-ring border-4 border-primary shadow-glow animate-pulse-glow">
                <img
                  src={profile}
                  alt="Thembinkosi Eden Thwala"
                  data-testid="hero-profile-image"
                  className="w-full h-full rounded-full object-cover"
                />

                {/* Floating icons */}
                <div className="absolute -right-4 top-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-glow animate-float">
                  <Code2 size={24} />
                </div>

                <div className="absolute -left-4 top-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center text-white shadow-glow-purple animate-float-delayed">
                  <Database size={24} />
                </div>

                <div
                  className="absolute -bottom-2 right-1/4 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Cloud size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section pt-0" data-testid="stats-section">
        <div className="card px-8 py-10 md:px-16 md:py-12 flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                {value}
              </div>
              <div className="mt-2 text-muted text-sm md:text-base">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Memberships */}
      <section
        className="section pt-0"
        data-testid="professional-memberships-section"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-purple uppercase tracking-widest text-sm font-medium">
            Professional Recognition
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white">
            Memberships &{" "}
            <span className="text-gradient-purple">Professional Credentials</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            Recognised professional standing and an active commitment to
            accountable, continuously developing IT practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {professionalCredentials.map((credential) => (
            <article
              key={credential.title}
              className="card p-7 card-hover border border-purple/15"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center text-white flex-shrink-0 shadow-glow-purple">
                  <BadgeCheck size={27} />
                </div>
                <div>
                  <span className="text-purple text-xs font-semibold uppercase tracking-wider">
                    {credential.type}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {credential.title}
                  </h3>
                  <p className="mt-1 text-muted-light text-sm">
                    {credential.organization}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-muted leading-relaxed">
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
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
          >
            View All Certifications & Skills
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="section" data-testid="about-section">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            About Me
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white">
            Turning Vision Into{" "}
            <span className="text-gradient">Reality</span>
          </h2>
          <p className="mt-8 text-lg text-muted leading-relaxed">
            With a strong foundation in software development and data analytics,
            I bring a unique blend of technical expertise and creative
            problem-solving to every project. My journey from graduating{" "}
            <strong className="text-white">
              Cum Laude at Nelson Mandela University, twice over
            </strong>
            , to gaining{" "}
            <strong className="text-white">
              3+ years of professional experience
            </strong>{" "}
            has shaped me into a developer who does not just write code but
            builds solutions that are clean, scalable and made to serve real
            people with real needs.
          </p>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            I am passionate about user-centric design, continuous learning and
            the kind of problem-solving that requires you to sit with a challenge
            until it truly makes sense. Whether it is building full-stack
            applications from the ground up, analyzing data to uncover meaningful
            insights, designing and optimizing database queries, or
            containerizing services for production, I approach each task with the
            same level of care and commitment regardless of its size or
            visibility.
          </p>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            I chose this field not because it was the practical option but
            because it has been my passion since childhood. From watching my
            sister assemble computers from scratch in her shop, to receiving my
            very first Windows XP machine in Grade 4, to writing my first lines
            of pseudocode during a pandemic, technology has always been the
            thread running through every chapter of my life. That thread
            eventually became a career and I have never looked back.
          </p>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            But there is a lot more to me than what fits in a few paragraphs. My
            story starts in Giyani, Limpopo, runs through Ennerdale, George and
            Gqeberha, and is still being written one project and one
            certification at a time. If you want the full picture, the kind of
            developer I am, the kind of person I am, and the journey that shaped
            both, you will find it all on my About page.
          </p>

          <div className="mt-10">
            <Link
              to="/about"
              data-testid="about-cta"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
            >
              Read My Full Story
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
