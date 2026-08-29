import { Link } from "react-router-dom";
import {
  ArrowDown,
  Github,
  Linkedin,
  Code2,
  Database,
  Cloud,
  ChevronRight,
  BadgeCheck,
  Award,
  ShieldCheck,
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

const designationCredential = professionalCredentials.find(
  (credential) => credential.type === "Professional Designation",
)!;
const membershipCredential = professionalCredentials.find(
  (credential) => credential.type === "Professional Membership",
)!;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] flex items-start overflow-hidden"
        data-testid="hero-section"
      >
        <div className="section hero-layout grid lg:grid-cols-[1.08fr_0.92fr] gap-14 xl:gap-20 items-start">
          {/* LEFT - Content */}
          <div className="animate-fade-in">
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

          {/* RIGHT - Portrait and professional recognition */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-purple/10 to-transparent blur-3xl" />

            <div className="relative w-full max-w-[31rem] overflow-hidden rounded-[2rem] border border-white/10 bg-dark-card/75 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-purple/15 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

              <div className="relative mb-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple">
                    Professional Recognition
                  </span>
                  <p className="mt-1 text-sm text-muted-light">
                    SAQA-recognised professional standing
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple to-primary shadow-glow-purple">
                  <Award size={22} />
                </div>
              </div>

              <div className="relative flex justify-center py-2">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                  <div className="profile-ring hero-profile-ring border-4 border-primary shadow-glow animate-pulse-glow">
                    <img
                      src={profile}
                      alt="Thembinkosi Eden Thwala"
                      data-testid="hero-profile-image"
                      className="h-full w-full rounded-full object-cover"
                    />

                    <div className="absolute -right-3 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow animate-float sm:h-14 sm:w-14">
                      <Code2 size={23} />
                    </div>
                    <div className="absolute -left-3 top-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple to-purple-dark text-white shadow-glow-purple animate-float-delayed sm:h-14 sm:w-14">
                      <Database size={23} />
                    </div>
                    <div
                      className="absolute -bottom-2 right-1/4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg animate-float sm:h-14 sm:w-14"
                      style={{ animationDelay: "1s" }}
                    >
                      <Cloud size={23} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative mt-5 grid gap-2.5"
                data-testid="hero-professional-credentials"
              >
                <div className="group rounded-2xl border border-purple/25 bg-purple/10 p-3.5 transition-all hover:border-purple/50 hover:bg-purple/15">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-purple/20 text-purple">
                      <BadgeCheck size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="font-display font-bold text-white">
                          {designationCredential.shortTitle}
                        </h2>
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-400">
                          Awarded
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-light">
                        Associate Member · {designationCredential.type}
                      </p>
                      <p className="mt-2 text-xs text-muted">
                        {designationCredential.credentialNumberLabel}{" "}
                        {designationCredential.credentialNumber} · Issued 30 Jul
                        2026
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-primary/25 bg-primary/10 p-3.5 transition-all hover:border-primary/50 hover:bg-primary/15">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="font-display font-bold text-white">
                          {membershipCredential.shortTitle}
                        </h2>
                        <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-primary-light">
                          Active
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-light">
                        {membershipCredential.organization}
                      </p>
                      <p className="mt-2 text-xs text-muted">
                        {membershipCredential.credentialNumberLabel}{" "}
                        {membershipCredential.credentialNumber} · Jul 2026 – Jul
                        2027
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to={{
                    pathname: "/skills",
                    hash: "#professional-development",
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm font-semibold text-white transition-all hover:border-primary/40 hover:text-primary"
                >
                  Explore My Credentials
                  <ChevronRight size={17} />
                </Link>
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
