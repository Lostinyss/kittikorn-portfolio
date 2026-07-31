const projects = [
  {
    number: "01", title: "Pinminder", type: "Desktop productivity app",
    summary: "A sticky-note inspired reminder app for people who stay focused on their computer and need a friendly nudge to finish everyday tasks.",
    contribution: "Solo project — responsible for the complete design and development. I built it to solve a personal problem: spending long hours at the computer and forgetting assignments when phone reminders were easy to miss.",
    stack: ["Python", "PySide6", "Windows Notifications", "Local Storage"],
    image: "/projects/pinminder-1.png", video: "/projects/pinminder-demo.mp4",
    github: "https://github.com/Lostinyss/Pinminder",
  },
  {
    number: "02", title: "Pak Chong Pocket", type: "Local travel planner",
    summary: "A dark, minimal travel guide that helps visitors discover places around Pak Chong and collect them into a simple personal trip plan.",
    contribution: "Solo project — created to challenge and test my web development skills. I designed and built the responsive interface, search, filters, and trip planner to bring Pak Chong attractions together in one convenient place.",
    stack: ["Next.js", "TypeScript", "Responsive UI", "Local Data"],
    image: "/projects/pak-chong-pocket.png", video: "/projects/pak-chong-pocket-demo.mp4",
    github: "https://github.com/Lostinyss/pak-chong-pocket",
  },
  {
    number: "03", title: "TrashTrack", type: "AI waste detection",
    summary: "A web demonstration that detects waste objects from an uploaded image and presents the model result in a recruiter-friendly interface.",
    contribution: "Team project — contributed to programming and interface design. The concept helps reduce manual inspection: staff can check waste conditions remotely from a phone or browser instead of walking to every location.",
    stack: ["Python", "YOLO", "FastAPI", "Next.js"],
    image: "/projects/trashtrack.png", video: "/projects/trashtrack-demo.mp4",
    github: "https://github.com/Lostinyss/Trashtrack",
  },
];

const certificates = [
  { title: "Cybersecurity Foundation Course", issuer: "National Cyber Security Agency (NCSA)", detail: "21-hour foundational cybersecurity training", date: "December 2025", image: "/certificates/certificate-1.png" },
  { title: "Software Development with ChatGPT", issuer: "Coursera Project Network", detail: "Generating Code with AI", date: "March 2025", image: "/certificates/certificate-2.png", verify: "https://coursera.org/verify/IDIKP9RAGL2X" },
  { title: "AI Governance & Ethics", issuer: "Thailand Digital Government Academy", detail: "Ethics, governance, and law in applied AI", date: "December 2025", image: "/certificates/certificate-3.png" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Kittikorn home">KM<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#certificates">Certificates</a></div>
        <a className="mini-cta" href="mailto:Imator92@gmail.com">Contact <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" /> Open to web developer opportunities</div>
        <h1>Ideas into<br /><span>working products.</span></h1>
        <p className="hero-copy">Hi, I&apos;m Kittikorn Manimon, a Computer Science student and web developer based in Pak Chong, Thailand. I learn by building practical, thoughtful software.</p>
        <div className="hero-actions"><a className="button button-dark" href="#projects">Explore projects <span>↓</span></a><a className="text-link" href="#about">About me <Arrow /></a></div>
        <div className="hero-sticker" aria-hidden="true"><span>BUILD</span><b>+</b><span>LEARN</span></div>
      </section>

      <section className="marquee" aria-label="Technical skills"><div>JAVASCRIPT <span>✦</span> NEXT.JS <span>✦</span> PYTHON <span>✦</span> FASTAPI <span>✦</span> LARAVEL <span>✦</span> HTML & CSS <span>✦</span> YOLO <span>✦</span></div></section>

      <section className="about section" id="about">
        <div className="about-title">
          <span className="eyebrow">ABOUT ME</span>
          <div className="portrait"><img src="/kittikorn-manimon.jpg" alt="Kittikorn Manimon at Pak Chong" /></div>
          <h2>Curious mind.<br />Practical code.<br /><em>Always learning.</em></h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m <strong>กิตติกร มานิมนต์ (Kittikorn Manimon)</strong>, a Computer Science student entering my fourth year who enjoys turning ideas into usable software.</p>
          <p>Web development has given me a practical foundation for building complete products, from interface design to application logic and APIs. I am also increasingly interested in game development, where I hope to apply the same problem-solving mindset to interactive experiences.</p>
          <p>My strengths are learning new tools independently and adapting when a project changes. Each project helps me become more confident in planning, communicating, and improving through feedback.</p>
          <div className="facts">
            <div><span>LOCATION</span><b>Pak Chong, Nakhon Ratchasima, Thailand</b></div>
            <div><span>EDUCATION</span><b>Bangkok University</b></div>
            <div><span>PROGRAM</span><b>Information Technology and Innovation — Computer Science</b></div>
            <div><span>ACADEMIC</span><b>Entering fourth year · Current GPA 3.53</b></div>
            <div><span>INTERESTS</span><b>Web Development · Game Development</b></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading"><div><span className="eyebrow">SELECTED PROJECTS</span><h2>Built to solve<br />real problems.</h2></div><p>Three projects showing desktop development, responsive web design, API integration, and applied machine learning.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-media">
                <img src={project.image} alt={`${project.title} application preview`} />
                <video controls preload="metadata" poster={project.image} aria-label={`${project.title} demonstration video`}><source src={project.video} type="video/mp4" /></video>
              </div>
              <div className="project-info">
                <div className="project-meta"><span className="project-number">{project.number} / 03</span><span className="project-type">{project.type}</span></div>
                <h3>{project.title}</h3><p>{project.summary}</p><h4>My contribution</h4><p>{project.contribution}</p>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View source on GitHub <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading"><div><span className="eyebrow">TECHNICAL SKILLS</span><h2>Tools I build<br />with.</h2></div><p>Skills demonstrated through coursework and personal projects. I am continuing to deepen each area through hands-on practice.</p></div>
        <div className="skill-grid">
          <article><span>01</span><h3>Languages</h3><p>JavaScript, TypeScript, Python, HTML, CSS, PHP</p></article>
          <article><span>02</span><h3>Frameworks</h3><p>Next.js, React, Laravel, FastAPI, PySide6</p></article>
          <article><span>03</span><h3>Data & AI</h3><p>YOLO object detection, REST APIs, SQL fundamentals, local storage</p></article>
          <article><span>04</span><h3>Tools</h3><p>Git, GitHub, VS Code, npm, Figma fundamentals, responsive design</p></article>
        </div>
      </section>

      <section className="certificates section" id="certificates">
        <div className="section-heading"><div><span className="eyebrow">CERTIFICATIONS</span><h2>Learning beyond<br />the classroom.</h2></div><p>Selected training in cybersecurity, AI-assisted development, and responsible artificial intelligence.</p></div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <div className="certificate-image"><img src={certificate.image} alt={`${certificate.title} certificate awarded to Kittikorn Manimon`} /></div>
              <span>{certificate.date}</span><h3>{certificate.title}</h3><p>{certificate.issuer}<br />{certificate.detail}</p>
              {certificate.verify && <a href={certificate.verify} target="_blank" rel="noreferrer">Verify certificate <Arrow /></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-star" aria-hidden="true">✳</span><span className="eyebrow">LET&apos;S CONNECT</span><h2>Ready to learn.<br /><em>Ready to contribute.</em></h2>
        <div className="contact-actions"><a className="button button-light" href="mailto:Imator92@gmail.com">Email me <Arrow /></a><a className="button button-outline" href="https://github.com/Lostinyss" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
      </section>

      <footer>
        <div><a className="logo footer-logo" href="#top">KM<span>.</span></a><p>Computer Science student and aspiring web developer<br />in Pak Chong, Thailand.</p></div>
        <div className="footer-links"><span>CONNECT</span><a href="mailto:Imator92@gmail.com">Imator92@gmail.com <Arrow /></a><a href="https://github.com/Lostinyss" target="_blank" rel="noreferrer">github.com/Lostinyss <Arrow /></a></div>
        <p className="copyright">© 2026 Kittikorn Manimon</p>
      </footer>
    </main>
  );
}
