import { useEffect, useRef, useState } from "react";

/* ============================================
   Scroll-reveal helper
   ============================================ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "", as = "div", delay = 0 }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

/* ============================================
   Nav
   ============================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "https://bdasp.iiita.ac.in/modest/index.html", label: "Welcome" },
    { href: "https://bdasp.iiita.ac.in/modest/about.html", label: "About" },
    { href: "https://bdasp.iiita.ac.in/modest/research.html", label: "Research & Publications" },
    { href: "https://bdasp.iiita.ac.in/modest/framework.html", label: "The MODEST Framework" },
  ];

  const teamLinks = [
    { href: "https://bdasp.iiita.ac.in/modest/members.html", label: "Members" },
    { href: "https://bdasp.iiita.ac.in/modest/students.html", label: "Students" },
  ];

  const tailLinks = [
    { href: "https://bdasp.iiita.ac.in/modest/services.html", label: "Services" },
    { href: "https://bdasp.iiita.ac.in/modest/news.html", label: "News & Events" },
    { href: "https://bdasp.iiita.ac.in/modest/contact.html", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF8F3]/90 backdrop-blur-md shadow-[0_1px_0_rgba(43,42,40,0.08)] py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        <a href="https://bdasp.iiita.ac.in/modest/index.html" className="flex items-center gap-3">
          <img
            src="https://bdasp.iiita.ac.in/modest_logo.png"
            alt="IIITA Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="font-serif text-xl font-medium tracking-wide text-[#2B2A28]">
            MODEST
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C564E]">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="relative group py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setTeamOpen(true)}
            onMouseLeave={() => setTeamOpen(false)}
          >
            <button className="flex items-center gap-1 py-1">
              Team
              <span className="text-xs">▾</span>
            </button>
            <div
              className={`absolute left-0 top-full mt-2 min-w-[160px] rounded-xl bg-white shadow-lg border border-[#E7DCC9] overflow-hidden transition-all duration-200 ${
                teamOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
              }`}
            >
              {teamLinks.map((t) => (
                <a
                  key={t.label}
                  href={t.href}
                  className="block px-4 py-2.5 text-sm hover:bg-[#FBF8F3] hover:text-[#8B5E3C] transition-colors"
                >
                  {t.label}
                </a>
              ))}
            </div>
          </div>

          {tailLinks.map((l) => (
            <a key={l.label} href={l.href} className="relative group py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-6 h-[2px] bg-[#2B2A28] rounded-full" />
          <span className="w-6 h-[2px] bg-[#2B2A28] rounded-full" />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#FBF8F3]/97 backdrop-blur-sm ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        {[...links, ...teamLinks, ...tailLinks].map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            className="block px-6 py-3 text-sm font-medium border-t border-[#E7DCC9] text-[#5C564E]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ============================================
   Hero — signal-fusion motif (visual + linguistic + behavioral
   signals converging into one humble core)
   ============================================ */
function Hero() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-[#243B33] via-[#2E4A40] to-[#1C2F29] overflow-hidden pt-28 pb-16">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <Reveal>
          <p className="text-[0.78rem] tracking-[0.18em] uppercase font-semibold text-[#C9B79A] mb-5">
            BDA Lab · IIIT Allahabad
          </p>
          <h1 className="font-serif text-white text-[2.4rem] sm:text-[3.1rem] leading-[1.15] font-medium tracking-tight mb-6">
            MODEST
          </h1>
          <p className="text-[#E9E3D8] text-lg sm:text-xl leading-relaxed max-w-[42ch] mb-8">
            Multimodal Analysis for Mental Disorder Recognition to Improve
            Well-being.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://bdasp.iiita.ac.in/modest/framework.html"
              className="rounded-full bg-[#FBF8F3] text-[#6B4226] px-7 py-3.5 font-semibold text-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_36px_-10px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore the framework
            </a>
            <a
              href="https://bdasp.iiita.ac.in/modest/about.html"
              className="rounded-full border border-white/35 text-white/90 px-7 py-3.5 font-semibold text-sm hover:border-white/70 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              About the project
            </a>
          </div>
        </Reveal>

        {/* Signal fusion visual */}
        <div className="relative h-[340px] flex items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 320 320" className="w-full max-w-[320px]">
            <defs>
              <linearGradient id="strandVisual" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C9B79A" stopOpacity="0" />
                <stop offset="100%" stopColor="#C9B79A" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="strandLinguistic" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8FA89A" stopOpacity="0" />
                <stop offset="100%" stopColor="#8FA89A" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="strandBehavioral" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#D89A6E" stopOpacity="0" />
                <stop offset="100%" stopColor="#D89A6E" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <path
              d="M 10 70 Q 100 40, 150 100 T 160 160"
              fill="none"
              stroke="url(#strandVisual)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-[strandFlow_5s_ease-in-out_infinite]"
            />
            <path
              d="M 10 160 Q 100 150, 150 160 T 160 160"
              fill="none"
              stroke="url(#strandLinguistic)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-[strandFlow_5s_ease-in-out_infinite_-1.4s]"
            />
            <path
              d="M 10 250 Q 100 280, 150 220 T 160 160"
              fill="none"
              stroke="url(#strandBehavioral)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-[strandFlow_5s_ease-in-out_infinite_-2.8s]"
            />

            <circle cx="160" cy="160" r="34" fill="#FBF8F3" opacity="0.95" />
            <circle
              cx="160"
              cy="160"
              r="34"
              fill="none"
              stroke="#FBF8F3"
              strokeWidth="1"
              opacity="0.4"
              className="animate-[corePulse_3.6s_ease-in-out_infinite]"
            />
          </svg>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-5 text-[0.7rem] tracking-wide text-[#C9B79A]/80 font-medium">
            <span>visual</span>
            <span className="text-[#8FA89A]/80">linguistic</span>
            <span className="text-[#D89A6E]/80">behavioral</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes strandFlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes corePulse {
          0%, 100% { r: 34; opacity: 0.4; }
          50% { r: 42; opacity: 0; }
        }
      `}</style>
    </header>
  );
}

/* ============================================
   The MODEST Initiative
   ============================================ */
function Initiative() {
  return (
    <section className="px-6 py-24 bg-[#FBF8F3]">
      <div className="max-w-[820px] mx-auto">
        <Reveal
          as="h2"
          className="font-serif text-[#2B2A28] text-[2rem] sm:text-[2.5rem] leading-[1.25] font-medium max-w-[20ch] mb-7"
        >
          The MODEST Initiative
        </Reveal>
        <Reveal delay={160} className="space-y-5 text-[#5C564E] text-[1.05rem] leading-[1.8] max-w-[64ch]">
          <p>
            The <strong className="text-[#2B2A28] font-semibold">MODEST</strong>{" "}
            project addresses the critical need for early and accurate mental
            disorder recognition. By leveraging state-of-the-art{" "}
            <strong className="text-[#2B2A28] font-semibold">Multimodal Fusion</strong>,
            our research combines visual expressions, linguistic patterns from
            textual data, and subtle user interaction behaviors.
          </p>
          <p>
            Our objective is to create a robust Electronic Health framework
            that assists clinicians in the early identification of conditions
            such as Depression and ADHD, moving beyond traditional
            survey-based diagnostics into the era of Intelligent Healthcare.
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex justify-center">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-mental-health-brain-awareness-channel-design-template-60ffa5df23767b837d6c156abc652e53_screen.jpg?ts=1654194078"
            alt="Mental Health Awareness Logo"
            className="max-h-48 w-auto rounded-2xl shadow-[0_1px_0_rgba(43,42,40,0.06)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================
   Principal Investigator
   ============================================ */
function PrincipalInvestigator() {
  return (
    <section className="px-6 py-24 bg-[#F2E9D8]">
      <div className="max-w-[920px] mx-auto">
        <Reveal className="bg-[#FBF8F3] rounded-[28px] p-8 sm:p-10 flex flex-col sm:flex-row gap-9 items-center sm:items-start shadow-[0_1px_0_rgba(43,42,40,0.06)]">
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <img
              src="https://crmi.iiita.ac.in/workshop/img/dsa.jpg"
              alt="Prof. Sonali Agarwal"
              className="w-32 h-32 rounded-full object-cover ring-4 ring-[#E7DCC9]"
            />
            <a
              href="https://profile.iiita.ac.in/sonali/"
              className="text-xs font-semibold text-[#8B5E3C] hover:underline"
            >
              View Full Profile
            </a>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-[0.78rem] tracking-[0.16em] uppercase font-semibold text-[#4A6B5C] mb-2">
              Principal Investigator
            </p>
            <h3 className="font-serif text-2xl font-medium text-[#2B2A28] mb-1">
              Prof. Sonali Agarwal
            </h3>
            <p className="text-sm font-semibold text-[#8B5E3C] mb-4">
              Professor, Dept. of Information Technology, IIIT Allahabad
            </p>
            <p className="text-[#5C564E] leading-[1.75] max-w-[56ch] mb-3">
              Prof. Sonali Agarwal brings over two decades of expertise in{" "}
              <strong className="text-[#2B2A28] font-semibold">
                Big Data Analytics, Machine Learning, and Data Mining
              </strong>
              . She has been a pioneer in applying intelligent systems to
              healthcare problems, having published over 200 research papers
              in prestigious international journals and conferences.
            </p>
            <p className="text-[#5C564E] leading-[1.75] max-w-[56ch]">
              Under her leadership, the lab focuses on developing
              technology-enabled environments to solve complex real-world
              social and medical challenges.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================
   Datasets + Community
   ============================================ */
function Pillars() {
  const items = [
    {
      eyebrow: "Open Datasets",
      title: "Access our curated multimodal datasets for mental health research and analysis.",
      cta: "View Repository",
      href: "https://github.com/BDA-IIITA/MODEST",
      accent: "#4A6B5C",
    },
    {
      eyebrow: "Community",
      title: "Wellness initiatives specifically tailored for the IIIT Allahabad student communities.",
      cta: "Join Us",
      href: "https://bdasp.iiita.ac.in/#/contact",
      accent: "#8B5E3C",
    },
  ];

  return (
    <section className="px-6 py-20 bg-[#FBF8F3]">
      <div className="max-w-[920px] mx-auto grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <Reveal
            key={item.eyebrow}
            delay={i * 120}
            className="rounded-[22px] border border-[#E7DCC9] bg-white p-8 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-22px_rgba(43,42,40,0.2)] transition-all duration-400"
          >
            <div
              className="w-10 h-10 rounded-[11px] mb-6"
              style={{ background: item.accent }}
            />
            <p
              className="text-[0.72rem] tracking-[0.16em] uppercase font-semibold mb-3"
              style={{ color: item.accent }}
            >
              {item.eyebrow}
            </p>
            <p className="text-[#5C564E] leading-relaxed mb-6">{item.title}</p>
            <a
              href={item.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B2A28] group"
            >
              {item.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================
   Quote banner
   ============================================ */
function Quote() {
  return (
    <section className="relative px-6 py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6B4226] to-[#3F2716]">
      <div className="relative z-10 max-w-[760px] text-center text-white">
        <Reveal as="p" className="font-serif text-5xl leading-none text-white/35 mb-[-0.6rem]">
          “
        </Reveal>
        <Reveal
          as="p"
          delay={100}
          className="font-serif italic font-normal text-[1.5rem] sm:text-[2rem] leading-[1.5] mb-6"
        >
          We are building a space where the multimodal (the technical) meets
          the modest (the humble, human-centric approach), allowing for a
          radical rediscovery of the self.
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================
   Project Identity
   ============================================ */
function ProjectIdentity() {
  return (
    <section className="px-6 py-24 bg-[#F2E9D8]">
      <div className="max-w-[760px] mx-auto text-center">
        <Reveal as="p" className="text-[0.78rem] tracking-[0.18em] uppercase font-semibold text-[#4A6B5C] mb-5">
          Project Identity
        </Reveal>
        <Reveal
          delay={80}
          as="p"
          className="font-serif text-[#2B2A28] text-[1.4rem] sm:text-[1.7rem] leading-[1.55] font-medium"
        >
          Multimodal Analysis for Mental Disorder Recognition to Improve
          Mental Health and Well-being. An initiative at the BDA Lab, IIIT
          Allahabad, aimed at integrating AI-driven diagnostics with
          culturally grounded perspectives to support more accessible,
          equitable, and context-sensitive mental health solutions.
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================
   Footer (contact + quick links + sanction line)
   ============================================ */
function Footer() {
  const quickLinks = [
    { label: "IIITA Official Website", href: "https://www.iiita.ac.in/" },
    { label: "CSTUP Portal", href: "http://www.dstup.gov.in/cst" },
    {
      label: "Research Publications",
      href: "https://scholar.google.com/citations?user=hPvt6d8AAAAJ&hl=en",
    },
    {
      label: "Mental Health Support Resources",
      href: "https://www.who.int/health-topics/mental-health#tab=tab_1",
    },
  ];

  return (
    <footer className="bg-[#211C16] text-[#D9CBB8] px-6 pt-20 pb-10">
      <div className="max-w-[1100px] mx-auto grid sm:grid-cols-3 gap-12 mb-14">
        <div>
          <p className="text-[0.78rem] tracking-[0.16em] uppercase font-semibold text-[#C9B79A] mb-4">
            Contact Us
          </p>
          <p className="font-semibold text-white mb-3">
            Principal Investigator: Prof. Sonali Agarwal
          </p>
          <p className="text-sm leading-relaxed text-[#C2B6A4] mb-1">
            Department of Information Technology
          </p>
          <p className="text-sm leading-relaxed text-[#C2B6A4] mb-1">
            ✉ sonali@iiita.ac.in
          </p>
          <p className="text-sm leading-relaxed text-[#C2B6A4] mb-1">
            ✆ +91-532-2922424
          </p>
          <p className="text-sm leading-relaxed text-[#C2B6A4]">
            ➤ Jhalwa, Prayagraj - 211015
          </p>
        </div>

        <div>
          <p className="text-[0.78rem] tracking-[0.16em] uppercase font-semibold text-[#C9B79A] mb-4">
            Quick Links
          </p>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-[#C2B6A4] hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.78rem] tracking-[0.16em] uppercase font-semibold text-[#C9B79A] mb-4">
            Get Connect
          </p>
          <a
            href="https://bdasp.iiita.ac.in/#/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] text-white px-6 py-3 text-sm font-semibold hover:bg-[#6B4226] transition-colors"
          >
            Join Us
          </a>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto border-t border-white/10 pt-8 text-center">
        <p className="text-sm text-[#C2B6A4] mb-2">
          Sanctioned by the Council of Science &amp; Technology, U.P.
        </p>
        <p className="text-xs text-[#8A7F6E]">
          © 2024-2027 Project MODEST. All Rights Reserved. | IIIT-A | PI:{" "}
          <a href="mailto:sonali@iiita.ac.in" className="hover:text-white transition-colors">
            sonali@iiita.ac.in
          </a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="font-sans text-[#2B2A28] overflow-x-hidden">
      <Nav />
      <Hero />
      <Initiative />
      <PrincipalInvestigator />
      <Pillars />
      <Quote />
      <ProjectIdentity />
      <Footer />
    </div>
  );
}

export default App;
