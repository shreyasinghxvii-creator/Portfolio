import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';

function App() {
  const scrollRef = useRef(null);
  const locoInstance = useRef(null); 
  
  // Projects are now hardcoded so they show up on the live website
  const [projects] = useState([
    {
      _id: "1",
      title: "PriceScraper Pro",
      description: "An automated price comparison tool engineered during my Infosys internship. It uses Selenium and Tesseract OCR to scrape and analyze pricing data, helping users identify the best deals across various web platforms.",
      techStack: ["Python", "Flask", "Selenium", "Tesseract OCR"],
      repoLink: "https://github.com/shreyasinghxvii-creator/price-comparison-web-app"
    }
    // Add more projects here following the same structure
  ]);

  const [selectedCert, setSelectedCert] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // 1. Initialize Locomotive Scroll
    locoInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.05, 
    });

    // 2. Scroll Listeners
    locoInstance.current.on('scroll', (args) => {
      const percentage = (args.scroll.y / args.limit.y) * 100;
      setProgress(percentage);
      setShowBackToTop(percentage > 50);

      document.querySelectorAll('.cert-row-item, .project-card-v2').forEach(el => {
        const position = el.getBoundingClientRect();
        if(position.top < window.innerHeight * 0.85) {
            el.classList.add('is-inview');
        }
      });
    });

    // 3. Entrance Animations
    gsap.fromTo(".reveal-text", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );

    return () => {
      if (locoInstance.current) locoInstance.current.destroy();
    };
  }, []);

  const handleBackToTop = () => {
    locoInstance.current.scrollTo(0);
  };

  const certificateData = [
    {
      category: "🏆 Internship & Special Honors",
      certs: [
        { name: "Infosys Internship: PriceScraper Pro", date: "Oct-Dec 2025", img: "/certificates/Intership Infosys certificate_page-0001 (1).jpg" },
        { name: "IIRS ISRO: Ecological Modelling (A+, 100%)", date: "May 2025", img: "/certificates/IISRO certificate_page-0001.jpg" }
      ]
    },
    {
      category: "💻 Core Tech & Programming",
      certs: [
        { name: "Programming using Java", date: "March 2026", img: "/certificates/Programming using Java.jpg" },
        { name: "Data Structures & Algorithms (Java)", date: "March 2026", img: "/certificates/Data Structures and Algorithms using Java.jpg" },
        { name: "Object Oriented Programming (Python)", date: "July 2025", img: "/certificates/OOPs Python certificate_page-0001.jpg" },
        { name: "Python Foundation Certification", date: "July 2025", img: "/certificates/Python foundation Certificate_page-0001.jpg" },
        { name: "Programming using Python (P1)", date: "July 2025", img: "/certificates/Python P-1 certificate_page-0001.jpg" },
        { name: "Programming using Python (P2)", date: "July 2025", img: "/certificates/Python P-2 certificate_page-0001.jpg" },
        { name: "Basics of Python", date: "June 2025", img: "/certificates/Basic of python certificate_page-0001.jpg" }
      ]
    },
    {
      category: "🤖 AI & Modern Tech",
      certs: [
        { name: "Introduction to OpenAI GPT Models", date: "Dec 2025", img: "/certificates/Introduction to OpenAI GPT Models_page-0001.jpg" },
        { name: "Ethical AI Certification", date: "Dec 2025", img: "/certificates/Ethical AI_page-0001.jpg" },
      ]
    },
    {
      category: "🗄️ Database & Systems",
      certs: [
        { name: "DBMS Part 1", date: "July 2025", img: "/certificates/DBMS P-1 certificate_page-0001.jpg" },
        { name: "DBMS Part 2", date: "July 2025", img: "/certificates/DBMS P-2 certificate_page-0001.jpg" },
        { name: "Introduction to NoSQL Databases", date: "July 2025", img: "/certificates/NOSQL certificate_page-0001.jpg" }
      ]
    },
    {
      category: "⚙️ Software & Professional Skills",
      certs: [
        { name: "Agile Scrum in Practice", date: "June 2025", img: "/certificates/Agile scrum certificate_page-0001.jpg" },
        { name: "Software Engineering & Agile", date: "June 2025", img: "/certificates/soft engin & aiglie certificate_page-0001.jpg" },
        { name: "High Impact Presentations", date: "June 2025", img: "/certificates/Presentation certificate_page-0001.jpg" },
        { name: "Professional Email Writing", date: "June 2025", img: "/certificates/Email certificate_page-0001.jpg" },
        { name: "Time Management", date: "June 2025", img: "/certificates/Time-management certificate_page-0001.jpg" }
      ]
    }
  ];

  return (
    <div ref={scrollRef} data-scroll-container className="app-smooth-container">
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={handleBackToTop}
            className="back-to-top-btn"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
      
      <section className="hero-section-v2" data-scroll-section>
        <div className="hero-grid">
          <div className="hero-text-block">
            <h1 className="reveal-text">Shreya Singh</h1>
            <p className="reveal-text subtitle-v2">BSc IT Student | Infosys Externship Alum</p>
            <div className="hero-links-v2 reveal-text">
               <a href="mailto:shreyasinghxvii@gmail.com" className="action-btn-primary">✉️ Email Me</a>
               <a href="https://linkedin.com/in/shreya-singh-935239361" target="_blank" rel="noreferrer" className="action-btn-secondary">🔗 LinkedIn</a>
            </div>
          </div>
          <div className="hero-media-block" data-scroll data-scroll-speed="-0.8">
            <img src="/certificates/Shreya.jpg" alt="Shreya Singh" className="portrait-full-color" />
          </div>
        </div>
      </section>

      <section className="impact-summary" data-scroll-section>
        <div className="summary-wrapper" data-scroll data-scroll-speed="1.2">
          <p className="impact-text">
            I am a dedicated <span className="text-accent">BSc IT Student</span> at Thakur College (2024-2027). 
            Specializing in <span className="text-accent">Python & Flask</span>, I build high-performance 
            automation tools like PriceScraper Pro—a project engineered during my <span className="text-accent">Infosys Internship</span> using Selenium and Tesseract OCR.
          </p>
        </div>
      </section>

      <section className="vault-vertical-section" data-scroll-section>
        <h2 className="vault-label">Professional Vault</h2>
        <div className="vault-stack">
          {certificateData.map((group, idx) => (
            <div key={idx} className="vault-group-vertical">
              <h3 className="group-header">{group.category}</h3>
              <div className="cert-rows-container">
                {group.certs.map((cert, i) => (
                  <div key={i} className="cert-row-item" onClick={() => setSelectedCert(cert)}>
                    <div className="cert-main-info">
                      <span className="cert-title-v">{cert.name}</span>
                      <span className="cert-meta-v">{cert.date}</span>
                    </div>
                    <div className="view-action">View Document →</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project-vertical-section" data-scroll-section>
        <h2 className="vault-label">Featured Projects</h2>
        <div className="project-vertical-stack">
          {projects.map(project => (
            <div key={project._id} className="project-card-v2">
              <div className="p-header">
                <h3>{project.title}</h3>
                <div className="p-tags">
                  {project.techStack?.map(tech => <span key={tech} className="p-badge">{tech}</span>)}
                </div>
              </div>
              <p className="p-body">{project.description}</p>
              <a href={project.repoLink} target="_blank" rel="noreferrer" className="p-repo">View Repository</a>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCert(null)} className="lightbox-v2-overlay">
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} className="lightbox-v2-container" onClick={e => e.stopPropagation()}>
              <img src={selectedCert.img} alt={selectedCert.name} className="lightbox-v2-img" />
              <div className="lightbox-v2-footer">
                <h4>{selectedCert.name}</h4>
                <button onClick={() => setSelectedCert(null)} className="close-v2-btn">Close View</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="simple-footer" data-scroll-section>
        <p>© 2026 Shreya Singh • BSc IT Thakur College • Portfolio v2.0</p>
      </footer>
    </div>
  );
}

export default App;