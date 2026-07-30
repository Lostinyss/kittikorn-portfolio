const projects = [
  {
    number: "01",
    title: "Pocket Tasks",
    type: "Productivity app",
    copy: "A cheerful task manager concept designed around focus, momentum, and tiny wins.",
    stack: ["Next.js", "TypeScript", "UI Design"],
    theme: "lime",
  },
  {
    number: "02",
    title: "Local Table",
    type: "Restaurant discovery",
    copy: "A fast local guide concept that helps people discover good food without the endless scroll.",
    stack: ["Laravel", "JavaScript", "MySQL"],
    theme: "orange",
  },
  {
    number: "03",
    title: "Weather Mood",
    type: "Weather experience",
    copy: "A playful weather dashboard that turns forecasts into a clear plan for your day.",
    stack: ["Next.js", "API", "CSS"],
    theme: "blue",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectMockup({ theme, title }: { theme: string; title: string }) {
  return (
    <div className={`mockup mockup-${theme}`} aria-label={`${title} interface mockup`}>
      <div className="browser-bar">
        <div className="dots"><i /><i /><i /></div>
        <span>{title.toLowerCase().replace(" ", "")}.dev</span>
      </div>
      <div className="mock-body">
        <div className="mock-sidebar">
          <b>km.</b>
          <i /><i /><i />
        </div>
        <div className="mock-content">
          <span className="mock-label">TODAY’S FOCUS</span>
          <strong>{theme === "lime" ? "Make it happen." : theme === "orange" ? "Find your table." : "Hello, sunshine."}</strong>
          <div className="mock-grid">
            <div className="mock-main">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-stat"><b>{theme === "lime" ? "82%" : theme === "orange" ? "4.9" : "28°"}</b><small>Looking good</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Kittikorn home">KM<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="mini-cta" href="mailto:Imator92@gmail.com">Let’s talk <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" /> Available for opportunities</div>
        <h1>I build things<br />for the <span>web.</span></h1>
        <p className="hero-copy">Hi, I’m Kittikorn — a computer science student and web developer turning ideas into fast, friendly digital experiences.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">See my work <span>↓</span></a>
          <a className="text-link" href="#about">More about me <Arrow /></a>
        </div>
        <div className="hero-sticker" aria-hidden="true">
          <span>CODE</span><b>+</b><span>CREATE</span>
        </div>
        <div className="scribble" aria-hidden="true">✦</div>
      </section>

      <section className="marquee" aria-label="Skills">
        <div>JAVASCRIPT <span>✦</span> NEXT.JS <span>✦</span> LARAVEL <span>✦</span> PYTHON <span>✦</span> HTML & CSS <span>✦</span> JAVASCRIPT <span>✦</span> NEXT.JS</div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div><span className="eyebrow">SELECTED WORK</span><h2>Things I’ve<br />been building.</h2></div>
          <p>Concept projects for now — real case studies, live demos, and source links can drop right into these spaces later.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <ProjectMockup theme={project.theme} title={project.title} />
              <div className="project-info">
                <span className="project-number">{project.number} / 03</span>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <span className="coming-soon">Case study coming soon <Arrow /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-title">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>Curious mind.<br />Clean code.<br /><em>Good energy.</em></h2>
        </div>
        <div className="about-copy">
          <p>I’m <strong>กิตติกร มานิมนต์ (Kittikorn Manimon)</strong>, a Computer Science student at Bangkok University, based in Pak Chong, Thailand.</p>
          <p>I enjoy learning by building. Right now, I’m exploring how thoughtful design and modern web technology can make everyday tools simpler and more enjoyable.</p>
          <div className="facts">
            <div><span>BASED IN</span><b>Pak Chong, Thailand</b></div>
            <div><span>STUDYING</span><b>Computer Science</b></div>
            <div><span>FOCUS</span><b>Web Development</b></div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-star" aria-hidden="true">✳</span>
        <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
        <h2>Let’s make something<br /><em>great together.</em></h2>
        <a className="button button-light" href="mailto:Imator92@gmail.com">Say hello <Arrow /></a>
      </section>

      <footer>
        <div><a className="logo footer-logo" href="#top">KM<span>.</span></a><p>Web developer in progress.<br />Always learning, always building.</p></div>
        <div className="footer-links"><span>CONNECT</span><a href="mailto:Imator92@gmail.com">Email <Arrow /></a><span className="placeholder-link">GitHub — add link</span><span className="placeholder-link">LinkedIn — add link</span></div>
        <p className="copyright">© 2026 Kittikorn Manimon</p>
      </footer>
    </main>
  );
}
