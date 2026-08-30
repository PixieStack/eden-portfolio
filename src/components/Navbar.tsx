import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const scrollToPageStart = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const scrollHomeAfterNavigation = useRef(false);
  const resumeUrl = `${import.meta.env.BASE_URL}cv/Thembinkosi-Eden-Thwala-Resume.pdf`;

  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname === "/") scrollToPageStart();
    else scrollHomeAfterNavigation.current = true;
  };

  const handleNavigation = () => {
    setIsOpen(false);
    window.requestAnimationFrame(scrollToPageStart);
  };

  useEffect(() => {
    if (location.pathname === "/" && scrollHomeAfterNavigation.current) {
      scrollHomeAfterNavigation.current = false;
      window.requestAnimationFrame(scrollToPageStart);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className={`site-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-navbar-shell">
        <Link to="/" onClick={handleLogoClick} className="site-navbar-brand" aria-label="Go to the Home hero section">
          <span>Thembinkosi</span><strong>.dev</strong>
        </Link>

        <nav className="site-navbar-links" aria-label="Primary navigation">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={handleNavigation} className={({ isActive }) => `site-navbar-link ${isActive ? "is-active" : ""}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <a href={resumeUrl} download="Thembinkosi-Eden-Thwala-Resume.pdf" className="site-navbar-resume">
          <Download size={16} /> Download CV
        </a>

        <button type="button" className="site-navbar-toggle" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`site-navbar-mobile ${isOpen ? "is-open" : ""}`}>
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={handleNavigation} className={({ isActive }) => isActive ? "is-active" : ""}>
            {label}
          </NavLink>
        ))}
        <a href={resumeUrl} download="Thembinkosi-Eden-Thwala-Resume.pdf" onClick={() => setIsOpen(false)}><Download size={17} /> Download CV</a>
      </div>
    </header>
  );
}
