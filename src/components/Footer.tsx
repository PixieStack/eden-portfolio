import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";
import profile from "../assets/profile.jpeg";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/thembinkosi-eden-thwala-69083a1a4",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/PixieStack", label: "GitHub" },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-20 border-t border-white/5"
      data-testid="footer"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 mb-6"
              data-testid="footer-logo"
            >
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={profile}
                  alt="Thembinkosi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-white">
                  Thembinkosi
                </span>
                <span className="text-muted text-sm">Eden Thwala</span>
              </div>
            </Link>
            <p className="text-muted leading-relaxed">
              Junior Full Stack Developer & Data Analyst passionate about
              building scalable applications and transforming data into
              insights.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all hover:scale-105"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    data-testid={`footer-link-${label.toLowerCase()}`}
                    className="text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:thwalathembinkosi16@gmail.com"
                  data-testid="footer-email"
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">thwalathembinkosi16@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+27648023069"
                  data-testid="footer-phone"
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  <span className="text-sm">064 802 3069</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-sm">
                  Ennerdale, Johannesburg
                  <br />
                  South Africa, 1830
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">
              Let's Work Together
            </h4>
            <p className="text-muted mb-6 text-sm leading-relaxed">
              Open to exciting opportunities in Full Stack Development and Data
              Analytics.
            </p>
            <Link
              to="/contact"
              data-testid="footer-cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm shadow-glow hover:scale-105 transition-transform"
            >
              Get In Touch
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Thembinkosi Eden Thwala. Built with
            <Heart size={14} className="text-primary" />
            and lots of code.
          </p>
          <p className="text-muted/60 text-xs">
            Junior Full Stack Developer • Data Analyst • Problem Solver
          </p>
        </div>
      </div>
    </footer>
  );
}