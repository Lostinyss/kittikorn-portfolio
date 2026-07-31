const projects = [
  {
    number: "01",
    title: "Pinminder",
    type: "Desktop Productivity App",
    summary: "แอป Todo และ Reminder ในสไตล์ Sticky Note สำหรับคนที่ใช้เวลาอยู่หน้าคอมพิวเตอร์นาน จนบางครั้งลืมการบ้านหรืองานที่ต้องทำ",
    contribution: "Solo Project — รับผิดชอบทั้งการออกแบบและเขียนโปรแกรม พัฒนาระบบ Task, Preset, Deadline, Theme, Streak และ Windows Notification โดยใช้ AI ช่วยค้นคว้าแนวทาง แก้ Debug และปรับปรุงโค้ดระหว่างการพัฒนา",
    stack: ["Python", "PySide6", "Windows Notifications", "Local Storage", "AI-assisted"],
    image: "/projects/pinminder-1.png",
    video: "/projects/pinminder-demo.mp4",
    github: "https://github.com/Lostinyss/Pinminder",
  },
  {
    number: "02",
    title: "Pak Chong Pocket",
    type: "Local Travel Planner",
    summary: "เว็บรวมสถานที่ท่องเที่ยวในปากช่องไว้ในที่เดียว ช่วยให้ผู้ใช้ค้นหาสถานที่และจัดแผนการเดินทางส่วนตัวได้สะดวกขึ้น",
    contribution: "Solo Project — สร้างเพื่อทดสอบและพัฒนา Web Development Skill ของตนเอง รับผิดชอบการออกแบบ Responsive UI, Search, Filter และ Trip Planner พร้อมใช้ AI ช่วยวางโครงสร้างข้อมูล สร้างต้นแบบ และแก้ปัญหาระหว่างพัฒนา",
    stack: ["Next.js", "TypeScript", "Responsive UI", "Local Data", "AI-assisted"],
    image: "/projects/pak-chong-pocket.png",
    video: "/projects/pak-chong-pocket-demo.mp4",
    github: "https://github.com/Lostinyss/pak-chong-pocket",
  },
  {
    number: "03",
    title: "TrashTrack",
    type: "AI Waste Detection",
    summary: "Web Demo สำหรับตรวจจับขยะจากรูปภาพด้วย AI และแสดงผลลัพธ์ให้ผู้ใช้ตรวจสอบผ่าน Browser ได้อย่างชัดเจน",
    contribution: "Team Project — รับผิดชอบด้านการเขียนโปรแกรมและออกแบบ Interface แนวคิดช่วยลดการเดินตรวจพื้นที่ โดยผู้ดูแลสามารถเปิดมือถือหรือเว็บเพื่อตรวจสอบสภาพขยะจากระยะไกล ใช้ YOLO AI Model เป็นหัวใจของระบบตรวจจับ",
    stack: ["Python", "YOLO AI", "FastAPI", "Next.js"],
    image: "/projects/trashtrack.png",
    video: "/projects/trashtrack-demo.mp4",
    github: "https://github.com/Lostinyss/Trashtrack",
  },
];

const certificates = [
  { title: "Cybersecurity Foundation Course", issuer: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (NCSA)", detail: "หลักสูตรพื้นฐานด้าน Cybersecurity ระยะเวลา 21 ชั่วโมง", date: "ธันวาคม 2025", image: "/certificates/certificate-1.png" },
  { title: "Software Development with ChatGPT", issuer: "Coursera Project Network", detail: "การพัฒนา Software และสร้าง Code ด้วย AI", date: "มีนาคม 2025", image: "/certificates/certificate-2.png", verify: "https://coursera.org/verify/IDIKP9RAGL2X" },
  { title: "AI Governance & Ethics", issuer: "Thailand Digital Government Academy", detail: "จริยธรรม ธรรมาภิบาล และกฎหมายในการประยุกต์ใช้ AI", date: "ธันวาคม 2025", image: "/certificates/certificate-3.png" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="เมนูหลัก">
        <a className="logo" href="#top" aria-label="กลับหน้าหลัก">KM<span>.</span></a>
        <div className="nav-links">
          <a href="#about">ประวัติ</a><a href="#projects">ผลงาน</a><a href="#skills">ทักษะ</a><a href="#certificates">ใบรับรอง</a>
        </div>
        <a className="mini-cta" href="mailto:Imator92@gmail.com">ติดต่อ <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" /> ยินดีต้อนรับสู่ Portfolio ของผม</div>
        <h1>ยินดีต้อนรับ<br /><span>สู่ Portfolio</span></h1>
        <p className="hero-copy">สวัสดีครับ ผมกิตติกร มานิมนต์ นักศึกษา Computer Science ที่มหาวิทยาลัยกรุงเทพ วิทยาเขตรังสิต สนุกกับการเรียนรู้ผ่านการลงมือสร้าง Software และพัฒนาไอเดียให้กลายเป็น Project ที่ใช้งานได้จริง</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">ชมผลงาน <span>↓</span></a>
          <a className="text-link" href="#about">รู้จักผมเพิ่มเติม <Arrow /></a>
        </div>
        <div className="hero-sticker" aria-hidden="true"><span>BUILD</span><b>+</b><span>LEARN</span></div>
      </section>

      <section className="marquee" aria-label="ทักษะทางเทคนิค"><div>JAVASCRIPT <span>✦</span> NEXT.JS <span>✦</span> PYTHON <span>✦</span> FASTAPI <span>✦</span> LARAVEL <span>✦</span> HTML & CSS <span>✦</span> YOLO AI <span>✦</span></div></section>

      <section className="about section" id="about">
        <div className="about-title">
          <span className="eyebrow">ประวัติ</span>
          <div className="portrait"><img src="/kittikorn-manimon.jpg" alt="กิตติกร มานิมนต์ ที่ปากช่อง" /></div>
          <h2 className="name-heading">Kie Kittikorn<br /><em>Maimon</em><small>กี้, กิตติกร มานิมนต์</small></h2>
        </div>
        <div className="about-copy">
          <p>ผมเป็นนักศึกษา <strong>Computer Science ที่กำลังขึ้นชั้นปีที่ 4</strong> ชอบเปลี่ยนไอเดียให้กลายเป็น Software ที่ใช้งานได้จริง</p>
          <p>Web Development ทำให้ผมได้เรียนรู้การสร้าง Product ตั้งแต่การออกแบบ Interface ไปจนถึง Application Logic และ API ปัจจุบันผมสนใจ Game Development มากขึ้น และอยากนำทักษะด้านการแก้ปัญหาไปสร้าง Interactive Experience ที่สนุกและน่าสนใจ</p>
          <p>จุดแข็งของผมคือการเรียนรู้ Tool ใหม่ด้วยตนเองและปรับตัวเมื่อ Project เปลี่ยนแปลง ผมใช้ทุก Project เป็นโอกาสฝึกวางแผน สื่อสาร และพัฒนางานจาก Feedback</p>
          <div className="facts">
            <div><span>ที่อยู่</span><b>ปากช่อง, นครราชสีมา, ประเทศไทย</b></div>
            <div><span>การศึกษา</span><b>มหาวิทยาลัยกรุงเทพ วิทยาเขตรังสิต</b></div>
            <div><span>หลักสูตร</span><b>เทคโนโลยีสารสนเทศและนวัตกรรม — Computer Science</b></div>
            <div><span>ผลการเรียน</span><b>กำลังขึ้นชั้นปีที่ 4 · GPA ปัจจุบัน 3.53</b></div>
            <div><span>ความสนใจ</span><b>Web Development · Game Development · AI</b></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <div><span className="eyebrow">PROJECT SHOWCASE</span><h2 className="single-line-heading">ผลงานที่ผ่านมา</h2></div>
          <p>3 Project ที่แสดงทักษะด้าน Desktop Development, Responsive Web Design, API Integration และการประยุกต์ใช้ AI</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-media">
                <img src={project.image} alt={`ภาพตัวอย่าง Project ${project.title}`} />
                <video controls preload="metadata" poster={project.image} aria-label={`วิดีโอสาธิต ${project.title}`}><source src={project.video} type="video/mp4" /></video>
              </div>
              <div className="project-info">
                <div className="project-meta"><span className="project-number">{project.number} / 03</span><span className="project-type">{project.type}</span></div>
                <h3>{project.title}</h3><p>{project.summary}</p><h4>ส่วนที่รับผิดชอบ</h4><p>{project.contribution}</p>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">ดู Source Code บน GitHub <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <div><span className="eyebrow">TECHNICAL SKILLS</span><h2>ทักษะและ<br />Technology</h2></div>
          <p>ทักษะที่ได้ใช้จริงจากงานในรายวิชาและ Personal Project พร้อมเรียนรู้และพัฒนาเพิ่มเติมผ่านการลงมือทำ</p>
        </div>
        <div className="skill-grid">
          <article><span>01</span><h3>ภาษาโปรแกรม</h3><p>JavaScript, TypeScript, Python, HTML, CSS, PHP</p></article>
          <article><span>02</span><h3>Framework</h3><p>Next.js, React, Laravel, FastAPI, PySide6</p></article>
          <article><span>03</span><h3>Data & AI</h3><p>YOLO Object Detection, REST API, พื้นฐาน SQL และ Local Storage</p></article>
          <article><span>04</span><h3>เครื่องมือ</h3><p>Git, GitHub, VS Code, npm, พื้นฐาน Figma และ Responsive Design</p></article>
        </div>
      </section>

      <section className="certificates section" id="certificates">
        <div className="section-heading">
          <div><span className="eyebrow">CERTIFICATES</span><h2 className="single-line-heading">การเรียนรู้นอกห้องเรียน</h2></div>
          <p>การอบรมเพิ่มเติมด้าน Cybersecurity, AI-assisted Development และการใช้ AI อย่างมีความรับผิดชอบ</p>
        </div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <div className="certificate-image"><img src={certificate.image} alt={`ใบรับรอง ${certificate.title} ของกิตติกร มานิมนต์`} /></div>
              <span>{certificate.date}</span><h3>{certificate.title}</h3><p>{certificate.issuer}<br />{certificate.detail}</p>
              {certificate.verify && <a href={certificate.verify} target="_blank" rel="noreferrer">ตรวจสอบใบรับรอง <Arrow /></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-star" aria-hidden="true">✳</span><span className="eyebrow">ติดต่อผม</span>
        <h2>พร้อมเรียนรู้<br /><em>พร้อมพัฒนาไปด้วยกัน</em></h2>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:Imator92@gmail.com">ส่ง Email <Arrow /></a>
          <a className="button button-outline" href="https://github.com/Lostinyss" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </section>

      <footer>
        <div><a className="logo footer-logo" href="#top">KM<span>.</span></a><p>นักศึกษา Computer Science<br />จากปากช่อง ประเทศไทย</p></div>
        <div className="footer-links"><span>ช่องทางติดต่อ</span><a href="mailto:Imator92@gmail.com">Imator92@gmail.com <Arrow /></a><a href="https://github.com/Lostinyss" target="_blank" rel="noreferrer">github.com/Lostinyss <Arrow /></a></div>
        <p className="copyright">© 2026 Kittikorn Manimon</p>
      </footer>
    </main>
  );
}
