import { useState } from "react";
import QualificationCard from "../components/QualificationCard";
import { qualifications } from "../data/education";
import { GraduationCap, Award, Filter } from "lucide-react";

type FilterType = "All" | "Certification" | "Education";

const filters: { label: FilterType; icon: typeof GraduationCap }[] = [
  { label: "All", icon: Filter },
  { label: "Education", icon: GraduationCap },
  { label: "Certification", icon: Award },
];

export default function Education() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filtered =
    filter === "All"
      ? qualifications
      : qualifications.filter((q) => q.type === filter);

  const educationCount = qualifications.filter(
    (q) => q.type === "Education",
  ).length;
  const certCount = qualifications.filter(
    (q) => q.type === "Certification",
  ).length;

  return (
    <section className="section" data-testid="education-section">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary uppercase tracking-widest text-sm font-medium">
          Learning Journey
        </span>
        <h2
          className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          data-testid="education-title"
        >
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          A commitment to continuous learning and professional development,
          validated by industry-recognized certifications.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="card px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="text-primary" size={20} />
          </div>
          <div>
            <div className="text-xl font-display font-bold text-white">
              {educationCount}
            </div>
            <div className="text-muted text-xs">Degrees</div>
          </div>
        </div>
        <div className="card px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
            <Award className="text-purple" size={20} />
          </div>
          <div>
            <div className="text-xl font-display font-bold text-white">
              {certCount}
            </div>
            <div className="text-muted text-xs">Certifications</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div
        className="flex justify-center gap-3 mb-12"
        data-testid="education-filters"
      >
        {filters.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            data-testid={`filter-${label.toLowerCase()}`}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              filter === label
                ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-glow"
                : "bg-surface border border-white/10 text-muted hover:text-white hover:border-primary/30"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6" data-testid="education-grid">
        {filtered.map((item, index) => (
          <QualificationCard key={item.title} item={item} index={index} />
        ))}
      </div>

      {/* Highlight - Cum Laude */}
      <div className="mt-16 text-center">
        <div className="card p-8 max-w-2xl mx-auto border border-primary/20">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white mb-4">
            <GraduationCap size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Graduated Cum Laude
          </h3>
          <p className="text-muted">
            Both degrees from Nelson Mandela University completed with
            distinction, demonstrating academic excellence and dedication to the
            craft of software development.
          </p>
        </div>
      </div>
    </section>
  );
}
