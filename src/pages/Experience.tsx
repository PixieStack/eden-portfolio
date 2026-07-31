import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";
import { Briefcase, TrendingUp } from "lucide-react";

export default function Experience() {
  return (
    <section className="section" data-testid="experience-section">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary uppercase tracking-widest text-sm font-medium">
          Career Journey
        </span>
        <h2
          className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          data-testid="experience-title"
        >
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          A journey through roles that shaped my expertise, from cloud
          engineering to full-stack development.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        <div className="card px-8 py-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="text-primary" size={24} />
          </div>
          <div>
            <div className="text-2xl font-display font-bold text-white">3+</div>
            <div className="text-muted text-sm">Years of Experience</div>
          </div>
        </div>
        <div className="card px-8 py-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
            <TrendingUp className="text-purple" size={24} />
          </div>
          <div>
            <div className="text-2xl font-display font-bold text-white">3</div>
            <div className="text-muted text-sm">Companies</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="timeline-line" />

        <div className="space-y-8" data-testid="experience-timeline">
          {experience.map((item, index) => (
            <TimelineItem key={item.role} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-16 text-center">
        <p className="text-muted">
          Each role has been a stepping stone, building the skills and
          experience needed to tackle complex challenges.
        </p>
      </div>
    </section>
  );
}
