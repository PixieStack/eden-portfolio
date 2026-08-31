import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Boxes,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Gamepad2,
  Github,
  Globe2,
  GraduationCap,
  Headphones,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  Network,
  Puzzle,
  Rocket,
  ShieldCheck,
  Star,
  TerminalSquare,
  Users,
} from "lucide-react";
import profilePortrait from "../assets/gallery/Profile.jpeg";
import currentReadImage from "../assets/gallery/CurrentRead.jpg";
import gameNightVideo from "../assets/gallery/Game night.mp4";
import taskManagerVideo from "../assets/projects/taskmanager-demo.mp4";
import attorneysVideo from "../assets/projects/thwala-attorneys-demo.mp4";
import budgetProVideo from "../assets/projects/budgetpro-demo.mp4";
import { professionalCredentials } from "../data/professionalCredentials";

const designation = professionalCredentials.find((item) => item.type === "Professional Designation")!;
const membership = professionalCredentials.find((item) => item.type === "Professional Membership")!;

const engineeringPrinciples = [
  {
    number: "01",
    eyebrow: "Systems thinking",
    lead: "I connect decisions across the build.",
    copy: "I look at the whole system—product, platform, data, and people—so every choice fits the bigger picture.",
    tags: ["Architecture", "Trade-offs", "Context"],
    icon: <Puzzle size={34} />,
    tone: "orange",
  },
  {
    number: "02",
    eyebrow: "Production mindset",
    lead: "“It works” is where the conversation starts.",
    copy: "I think about reliability, observability, and operability from day one—so what I build lasts.",
    tags: ["Reliability", "Observability", "Maintainability"],
    icon: <Rocket size={34} />,
    tone: "purple",
  },
  {
    number: "03",
    eyebrow: "Proof over claims",
    lead: "I build first. Then I validate what I know.",
    copy: "I instrument, test, and measure—turning assumptions into evidence you can trust.",
    tags: ["Tests", "Instrumentation", "Validation"],
    icon: <ShieldCheck size={34} />,
    tone: "blue",
  },
];

const experienceChapters = [
  {
    number: "01",
    role: "Software Engineer",
    company: "Zensar Technologies",
    period: "July 2025 – Present",
    location: "Sandton, Johannesburg",
    copy: "Enterprise engineering, APIs, AI prototypes, SQL, cloud platforms, debugging and Agile delivery.",
    icon: <Rocket size={25} />,
    tone: "blue",
    current: true,
  },
  {
    number: "02",
    role: "Junior Full-Stack Developer",
    company: "AgrigateOne",
    period: "February 2024 – April 2025",
    location: "Johannesburg, South Africa",
    copy: "Designed, developed, tested and maintained enterprise web applications with Ruby on Rails, Angular, TypeScript, Python, GraphQL, PostgreSQL and Redis.",
    icon: <Code2 size={25} />,
    tone: "purple",
  },
  {
    number: "03",
    role: "Graduate Cloud & DevOps Engineer",
    company: "Disraptor",
    period: "November 2022 – October 2023",
    location: "Johannesburg, South Africa",
    copy: "Supported AWS cloud infrastructure across development and testing environments and strengthened cloud operations foundations.",
    icon: <Cloud size={25} />,
    tone: "orange",
  },
];

const chapterImpact = [
  { title: "Cloud foundations", copy: "Built a strong base in AWS, infrastructure support and cloud operations.", icon: <Cloud size={25} />, tone: "blue" },
  { title: "Full-stack delivery", copy: "Delivered real-world web applications across frontend, backend, APIs and integrations.", icon: <Code2 size={25} />, tone: "purple" },
  { title: "Broader engineering ownership", copy: "Taken on more complex systems, automation, AI prototypes and end-to-end delivery in enterprise environments.", icon: <Rocket size={25} />, tone: "orange" },
];

const teamValues = [
  { title: "Curiosity Valued", copy: "I ask thoughtful questions, explore better ideas and enjoy solving problems that push the team forward.", icon: <Lightbulb size={31} />, tone: "orange" },
  { title: "Open Communication", copy: "I communicate clearly, listen actively and share context early so the team stays aligned and moves with confidence.", icon: <MessageCircleMore size={31} />, tone: "purple" },
  { title: "Structure & Trust", copy: "I bring structure without rigidity, own outcomes and build systems the team can rely on and build upon.", icon: <ShieldCheck size={31} />, tone: "blue" },
  { title: "Real Diversity", copy: "I value different backgrounds, perspectives and experiences—because diverse teams build stronger solutions.", icon: <Users size={31} />, tone: "pink" },
];

const scrollToPageStart = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

export default function Home() {
  return (
    <div className="home-redesign">
      <section className="home-chapter home-hero" data-testid="hero-section" aria-labelledby="home-hero-title">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker"><span /> Intermediate full-stack software developer</p>
            <h1 id="home-hero-title" data-testid="hero-title">Hi, I am<br /><span>Thembinkosi</span><br /><strong>Eden Thwala</strong></h1>
            <p className="home-hero-role" data-testid="hero-role">Full-stack software engineer building across frontend, backend, APIs, integrations and data.</p>
            <div className="home-experience-pill"><Award size={14} /> 3+ years experience</div>
            <p className="home-hero-bio" data-testid="hero-bio">I build software from interface to infrastructure—responsive experiences, backend services, APIs, integrations and the data behind them. My strongest ground is full-stack engineering, with Python at the core of much of my backend work and TypeScript across modern web applications.</p>

            <div className="home-skill-pills" aria-label="Core engineering strengths">
              <span><Code2 size={16} /> Full-Stack Engineering</span>
              <span><TerminalSquare size={16} /> Python Backend</span>
              <span><Network size={16} /> API & Integrations</span>
              <span><Boxes size={16} /> Modern Frontend</span>
              <span><Database size={16} /> Data & SQL</span>
              <span><Cloud size={16} /> Cloud-Aware Delivery</span>
            </div>

            <div className="home-hero-actions">
              <Link to="/contact" onClick={scrollToPageStart} data-testid="hero-cta-connect">Let’s Talk <ArrowRight size={18} /></Link>
              <Link to="/projects" onClick={scrollToPageStart} data-testid="hero-cta-work">View My Work <ArrowRight size={18} /></Link>
            </div>

            <div className="home-social-row">
              <span>Find me on</span>
              <a href="https://github.com/PixieStack" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/thembinkosi-eden-thwala-69083a1a4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:thwalathembinkosi16@gmail.com" aria-label="Email"><Mail size={18} /></a>
              <a href="https://wa.me/27648023069" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircleMore size={18} /></a>
            </div>
          </div>

          <article className="home-recognition-panel">
            <header><span><Star size={22} /></span><div><p>Professional recognition</p><h2>Engineering backed by professional standing.</h2></div></header>
            <div className="home-portrait-stage">
              <div className="home-portrait-orbit" aria-hidden="true"><i /><i /><i /></div>
              <img src={profilePortrait} alt="Thembinkosi Eden Thwala" data-testid="hero-profile-image" />
              <span className="home-portrait-node home-portrait-node--left"><Code2 size={22} /></span>
              <span className="home-portrait-node home-portrait-node--right"><Database size={22} /></span>
              <span className="home-portrait-node home-portrait-node--lower-left"><Cloud size={22} /></span>
              <span className="home-portrait-node home-portrait-node--lower-right"><Boxes size={22} /></span>
            </div>
            <div className="home-recognition-credentials" data-testid="hero-professional-credentials">
              <div><span><BadgeCheck size={25} /></span><div><h3>{designation.shortTitle}</h3><p>Associate Member · Professional Designation</p></div><aside><small>{designation.credentialNumberLabel}</small><strong>{designation.credentialNumber}</strong></aside></div>
              <div><span><Award size={25} /></span><div><h3>{membership.shortTitle}</h3><p>Institute of Chartered IT Professionals<br />South Africa</p></div></div>
            </div>
          </article>
        </div>
      </section>

      <section className="home-chapter home-engineering" aria-labelledby="home-engineering-title">
        <div className="home-chapter-inner">
          <header className="home-section-heading">
            <p className="home-kicker"><span /> How I engineer</p>
            <h2 id="home-engineering-title">The stack tells you what I use.<br /><span>This is how I use it.</span></h2>
            <p>Technology gives us options. Engineering judgement decides what matters.<br />I design for clarity, build for reliability, and ship with intent.</p>
          </header>

          <div className="home-principles-grid">
            {engineeringPrinciples.map((principle) => (
              <article key={principle.number} className={`home-principle-card home-tone-${principle.tone}`}>
                <small>{principle.number}</small>
                <span className="home-principle-icon">{principle.icon}</span>
                <div><p>{principle.eyebrow}</p><h3>{principle.lead}</h3><div>{principle.copy}</div></div>
                <footer>{principle.tags.map((tag) => <span key={tag}><CheckCircle2 size={12} /> {tag}</span>)}</footer>
              </article>
            ))}
          </div>

          <Link to="/skills" onClick={scrollToPageStart} className="home-capability-link">
            <span><Code2 size={23} /></span><div><strong>Explore Technical Expertise</strong><small>See the toolkit behind the thinking.</small></div><ArrowRight size={21} />
          </Link>
        </div>
      </section>

      <section className="home-chapter home-experience" aria-labelledby="home-experience-title">
        <div className="home-chapter-inner home-experience-layout">
          <div className="home-experience-main">
            <header className="home-section-heading home-section-heading--compact">
              <p className="home-kicker"><span /> Professional experience</p>
              <h2 id="home-experience-title">Three chapters. <span>One direction.</span></h2>
              <p>Each role has expanded my engineering range, deepened my problem-solving approach and increased my ownership of outcomes.</p>
            </header>

            <div className="home-experience-timeline">
              {experienceChapters.map((chapter) => (
                <article key={chapter.number} className={`home-experience-card home-tone-${chapter.tone}`}>
                  <span className="home-experience-number">{chapter.number}</span>
                  <span className="home-experience-icon">{chapter.icon}</span>
                  <div><h3>{chapter.role}</h3><strong>{chapter.company}</strong><p><CalendarDays size={13} /> {chapter.period}<i /> <MapPin size={13} /> {chapter.location}</p><small>{chapter.copy}</small></div>
                  {chapter.current && <em>Current role <i /></em>}
                  <ArrowRight className="home-experience-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>

          <aside className="home-experience-impact">
            <header><span><Star size={20} /></span><p>What each chapter added</p></header>
            <div>
              {chapterImpact.map((item) => <article key={item.title} className={`home-tone-${item.tone}`}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}
            </div>
            <p className="home-experience-summary">From foundations to full-stack impact—<br />each step builds toward greater influence.</p>
            <Link to="/experience" onClick={scrollToPageStart}>Follow My Experience <ArrowRight size={18} /></Link>
          </aside>
        </div>
      </section>

      <section className="home-chapter home-education" aria-labelledby="home-education-title">
        <div className="home-chapter-inner home-education-layout">
          <div className="home-education-intro">
            <p className="home-kicker"><span /> Continuous development</p>
            <h2 id="home-education-title">Experience built<br />my foundation.<br /><span>Curiosity keeps<br />extending it.</span></h2>
            <p>I invest in disciplined upskilling and pursue recognised credentials that sharpen my edge, expand my range, and consistently translate into better outcomes for the teams and projects I work with.</p>
            <Link to="/education" onClick={scrollToPageStart}><GraduationCap size={20} /> Explore Education & Credentials <ArrowRight size={18} /></Link>
            <div className="home-learning-impact"><small>Learning drives impact</small><div><span><Star size={17} /> Stronger solutions</span><span><Code2 size={17} /> Clean, scalable code</span><span><ShieldCheck size={17} /> Trusted delivery</span></div></div>
          </div>

          <div className="home-education-track">
            <article className="home-education-card home-tone-orange"><small>01 <span>Foundation</span></small><i /><div className="home-education-card-icon"><GraduationCap size={28} /></div><h3>Academic Foundation</h3><p>Built on structured learning, discipline, and consistency—the foundation behind every solution I build.</p><ul><li>Diploma in Information Technology<small>Software Development</small></li><li>Higher Certificate in<small>IT Support Services</small></li></ul><strong><Star size={14} /> Cum Laude <b>×2</b></strong></article>
            <article className="home-education-card home-tone-purple"><small>02 <span>Recognised standing</span></small><i /><div className="home-education-card-icon"><ShieldCheck size={28} /></div><h3>Professional Standing</h3><p>Recognised by the profession.<br />Accountable to standards.<br />Committed to ethical, reliable impact.</p><ul><li>AMICITP-SA<small>Associate Member</small></li><li>ICITP-SA Member<small>Institute of Chartered IT Professionals SA</small></li></ul><strong>Practice Number <b>ITP2023465</b></strong></article>
            <article className="home-education-card home-tone-blue"><small>03 <span>Active upskilling</span></small><i /><div className="home-education-card-icon"><BarChart3 size={28} /></div><h3>Active Upskilling</h3><p>Continuously expanding my toolkit across data, platforms, and infrastructure to stay future-ready.</p><ul><li>Databricks<small>Data Engineer Professional</small></li><li>Databricks<small>Data Analyst Associate</small></li><li>ServiceNow<small>Learning Path</small></li><li>Cisco<small>Networking & Cybersecurity</small></li></ul></article>
            <footer><ShieldCheck size={21} /><p>I don’t just collect credentials—I apply them.<br /><span>Every course, certification, and skill I pursue is intentional and shows up in the quality of my work.</span></p></footer>
          </div>
        </div>
      </section>

      <section className="home-chapter home-projects" aria-labelledby="home-projects-title">
        <div className="home-chapter-inner">
          <header className="home-projects-header">
            <div><p className="home-kicker"><span /> Selected builds</p><h2 id="home-projects-title">Don’t just read the claims.<br /><span>Open the software.</span></h2><small>Real problems. Real users. Real code—built for scale and built to last.</small></div>
            <Link to="/projects" onClick={scrollToPageStart}>Explore All Projects <ArrowRight size={18} /></Link>
          </header>

          <div className="home-project-grid">
            <article className="home-project-card">
              <div className="home-project-preview"><video src={taskManagerVideo} autoPlay muted loop playsInline preload="metadata" /></div>
              <span className="home-project-status">Live</span><h3>Task Manager</h3><p>A collaborative task-management app with real-time updates, planning tools, and productivity-focused workflows.</p>
              <div className="home-project-tech"><span>Angular</span><span>FastAPI</span><span>PostgreSQL</span><span>JWT Auth</span><span>Analytics</span></div>
              <footer><a href="https://pixiestack-task-management-app-20260814.onrender.com/" target="_blank" rel="noopener noreferrer">Live App <ExternalLink size={15} /></a><Link to="/projects" onClick={scrollToPageStart}>View Stack</Link></footer>
            </article>
            <article className="home-project-card">
              <div className="home-project-preview"><video src={budgetProVideo} autoPlay muted loop playsInline preload="metadata" /></div>
              <span className="home-project-status">Live</span><h3>BudgetPro</h3><p>A personal finance platform for tracking income, spending, budgets, cash flow and savings insights.</p>
              <div className="home-project-tech"><span>React</span><span>TypeScript</span><span>Tailwind CSS</span><span>SQL Server</span><span>Docker</span></div>
              <footer><a href="https://budgetpro-afq2.onrender.com" target="_blank" rel="noopener noreferrer">Live App <ExternalLink size={15} /></a><Link to="/projects" onClick={scrollToPageStart}>View Stack</Link></footer>
            </article>
            <article className="home-project-card">
              <div className="home-project-preview"><video src={attorneysVideo} autoPlay muted loop playsInline preload="metadata" /></div>
              <span className="home-project-status">Live</span><h3>Thwala Attorneys</h3><p>A professional legal-services platform with enquiry flows, service information and a refined client-facing experience.</p>
              <div className="home-project-tech"><span>React</span><span>TypeScript</span><span>ASP.NET Core</span><span>SQL Server</span><span>Docker</span></div>
              <footer><a href="https://thwala-attorneys-web-ougs.onrender.com" target="_blank" rel="noopener noreferrer">Live App <ExternalLink size={15} /></a><Link to="/projects" onClick={scrollToPageStart}>View Stack</Link></footer>
            </article>
          </div>
        </div>
      </section>

      <section className="home-chapter home-person" aria-labelledby="home-person-title">
        <div className="home-chapter-inner home-person-layout">
          <div className="home-person-intro">
            <p className="home-kicker"><span /> Beyond the code</p>
            <h2 id="home-person-title">There’s a person<br /><span>behind the<br />pull requests.</span></h2>
            <p>Curiosity, discipline, and life outside work shape how I think, lead, and build. These are a few of the things that inspire how I create.</p>
            <div><Link to="/about" onClick={scrollToPageStart}>Meet Eden <ArrowRight size={18} /></Link><Link to="/about" onClick={scrollToPageStart}>View full story <ArrowRight size={14} /></Link></div>
          </div>

          <div className="home-person-cards">
            <article className="home-person-card home-tone-orange"><header><span>01</span><BookOpen size={22} /></header><div className="home-person-media"><img src={currentReadImage} alt="The Alchemist by Paulo Coelho" /></div><h3>Currently Reading</h3><p>The Alchemist by Paulo Coelho. Curiosity, reflection, and reading beyond tech keep me grounded and growing.</p><footer><span>Curiosity</span><span>Reflection</span><span>Growth</span></footer></article>
            <article className="home-person-card home-tone-pink"><header><span>02</span><Gamepad2 size={22} /></header><div className="home-person-media"><video src={gameNightVideo} autoPlay muted loop playsInline preload="metadata" /></div><h3>Gaming Reset</h3><p>Call of Duty is my reset. Strategy, focus, and pattern recognition in high-stakes environments.</p><footer><span>Strategy</span><span>Focus</span><span>Read Patterns</span></footer></article>
            <article className="home-person-card home-tone-purple"><header><span>03</span><Headphones size={22} /></header><div className="home-person-media home-person-media--sound"><Headphones size={76} /><i /><i /><i /><i /><i /></div><h3>Always Listening</h3><p>Coding with soundtracks, focus playlists, and deep-work music. The right sound unlocks my best work.</p><footer><span>Focus</span><span>Flow</span><span>Deep Work</span></footer></article>
            <article className="home-person-card home-tone-blue"><header><span>04</span><Globe2 size={22} /></header><div className="home-person-media home-person-media--world"><Globe2 size={92} /><i /><i /><i /></div><h3>More Than One World Shaped Me</h3><p>Every culture, conversation, and challenge adds a layer to how I see the world—and how I build for it.</p><footer><span>Perspective</span><span>Culture</span><span>Humanity</span></footer></article>
          </div>
        </div>
      </section>

      <section className="home-chapter home-team" aria-labelledby="home-team-title">
        <div className="home-chapter-inner">
          <header className="home-team-header"><p className="home-kicker"><span /> Team fit</p><h2 id="home-team-title">The best <span>work happens</span><br />where <span>curiosity, trust</span><br />and <span>standards meet.</span></h2><p>I thrive in teams that value learning, open communication, structure, ownership and real diversity—where everyone has a voice and the work speaks for itself.</p><div className="home-team-orbit" aria-hidden="true"><i /><i /><i /></div></header>
          <div className="home-team-values">{teamValues.map((value) => <article key={value.title} className={`home-team-card home-tone-${value.tone}`}><span>{value.icon}</span><h3>{value.title}</h3><i /><p>{value.copy}</p></article>)}</div>
          <div className="home-team-cta"><p>If that sounds like your team, we’ll likely work well together.</p><Link to="/contact" onClick={scrollToPageStart}>Let’s Talk About Your Team <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </div>
  );
}
