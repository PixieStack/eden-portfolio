import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Home,
  GraduationCap,
  Code,
  Briefcase,
  Trophy,
  Mail,
  Menu,
  X,
  Download,
  User,
} from "lucide-react";
import profile from "../assets/profile.jpeg";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/skills", label: "Skills", icon: Code },
  { to: "/experience", label: "Experience", icon: Trophy },
  { to: "/education", label: "Education", icon: GraduationCap },
  { to: "/projects", label: "Projects", icon: Briefcase },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resumeUrl = `${import.meta.env.BASE_URL}cv/Thembinkosi-Eden-Thwala-Resume.pdf`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-glow transition-transform group-hover:scale-105">
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
            <span className="text-muted text-sm">.dev</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-pill flex items-center gap-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-glow"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}

          <a
            href={resumeUrl}
            download="Thembinkosi-Eden-Thwala-Resume.pdf"
            className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple to-purple-dark text-white font-medium text-sm shadow-glow-purple hover:scale-105 transition-transform"
          >
            <Download size={16} />
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-primary transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass border-t border-white/5 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="px-6 py-6 space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}

          <a
            href={resumeUrl}
            download="Thembinkosi-Eden-Thwala-Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple to-purple-dark text-white font-medium"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}