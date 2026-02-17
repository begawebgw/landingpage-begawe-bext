"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const filters = [
  { key: "all", label: "Semua" },
  { key: "mobile", label: "Mobile App" },
  { key: "web", label: "Web App" },
  { key: "design", label: "UI/UX" },
  { key: "ai", label: "AI" },
];

const stats = [
  { value: "40+", label: "Proyek yang literally shipped" },
  { value: "0x", label: "Nge-ghost client, which is never" },
  { value: "∞", label: "Kopi yang habis, no cap" },
  { value: "24/7", label: "Deadline mode, honestly" },
];

const projects = [
  {
    id: "payease",
    category: "mobile",
    label: "Fintech",
    title: "PayEase",
    desc: "Aplikasi pembayaran digital dengan QRIS, transfer, dan top-up untuk 50K+ pengguna aktif di Indonesia.",
    pills: ["Mobile App", "UI/UX", "Backend"],
    techTags: ["React Native", "Node.js", "PostgreSQL"],
    mockup: {
      emoji: "💳",
      sub: "Rp 0 Fee",
      tags: ["QRIS", "Transfer", "TopUp"],
      btn: "OPEN APP",
      visClass: "vis-1",
      activeTag: "Transfer",
    },
  },
  {
    id: "sehatku",
    category: "web",
    label: "Healthcare",
    title: "SehatKu",
    desc: "Platform telemedicine real-time yang terintegrasi dengan rekam medis digital untuk 200+ dokter.",
    pills: ["Web App", "API", "Healthcare"],
    techTags: ["Next.js", "PostgreSQL", "Supabase"],
    mockup: {
      emoji: "🏥",
      sub: "24/7 Care",
      tags: ["Consult", "Records", "Rx"],
      btn: "BOOK NOW",
      visClass: "vis-2",
      activeTag: "Consult",
    },
  },
];

const comingSoon = [
  {
    id: "cs-web",
    category: "web",
    title: "Project Baru",
    desc: "Sedang dalam pengerjaan. Stay tuned untuk update terbaru.",
    pills: ["Web App", "2025"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: "cs-mobile",
    category: "mobile",
    title: "Project Baru",
    desc: "Sedang dalam pengerjaan. Stay tuned untuk update terbaru.",
    pills: ["Mobile App", "2025"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

const MockupNavIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const MockupActionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const filteredComingSoon = activeFilter === "all"
    ? comingSoon
    : comingSoon.filter((p) => p.category === activeFilter);

  return (
    <>
      <Nav />
      <main>
        {/* ── PAGE HERO ── */}
        <section className="page-hero">
          <div className="page-hero-inner">
            <h1 className="reveal">
              Karya yang{" "}
              <span className="accent">berbicara sendiri</span>
            </h1>
            <p className="reveal reveal-delay-2" style={{ marginTop: "1.25rem" }}>
              Setiap proyek adalah cerita — tentang tantangan yang kami pecahkan,
              solusi yang kami ciptakan, dan dampak yang kami tinggalkan.
            </p>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="pf-stats-section reveal">
          <div className="pf-stats-inner">
            {stats.map((s) => (
              <div key={s.label} className="pf-stat">
                <div className="pf-stat-value">{s.value}</div>
                <div className="pf-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="pf-projects-section">
          {/* Header + Filters */}
          <div className="pf-projects-header reveal">
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="section-title">Proyek Terpilih</h2>
            </div>
          </div>

          <div className="pf-filters reveal reveal-delay-1">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`pf-filter-btn${activeFilter === f.key ? " active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid pf-grid">
            {filteredProjects.map((p, i) => (
              <a
                key={p.id}
                href="#"
                className={`portfolio-card reveal reveal-delay-${i + 1}`}
              >
                <div className="portfolio-tab">{p.label}</div>
                <div className="portfolio-visual">
                  <div className="portfolio-overlay" aria-hidden="true">
                    <span className="portfolio-overlay-label">
                      View Project
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </span>
                  </div>
                  <div className={`portfolio-visual-bg ${p.mockup.visClass}`} />
                  <div className="portfolio-mockup">
                    <div className="mockup-header">
                      <div className="back-icon"><MockupNavIcon /></div>
                      <div className="action-icon"><MockupActionIcon /></div>
                    </div>
                    <div className={`mockup-hero-img m-${i + 1}`}>{p.mockup.emoji}</div>
                    <div className="mockup-title" style={{ fontFamily: "var(--font-display)" }}>{p.title}</div>
                    <div className="mockup-price" style={{ fontFamily: "var(--font-display)" }}>{p.mockup.sub}</div>
                    <div className="mockup-tags">
                      {p.mockup.tags.map((t) => (
                        <span key={t} className={`mockup-tag${t === p.mockup.activeTag ? " active" : ""}`}>{t}</span>
                      ))}
                    </div>
                    <div className="mockup-btn" style={{ fontFamily: "var(--font-display)" }}>{p.mockup.btn}</div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-meta">
                    <h3 style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="portfolio-tags-row">
                      {p.pills.map((pill) => (
                        <span key={pill} className="portfolio-pill">{pill}</span>
                      ))}
                    </div>
                    {/* Tech tags */}
                    <div className="pf-tech-tags">
                      {p.techTags.map((t) => (
                        <span key={t} className="pf-tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="portfolio-arrow"><ArrowIcon /></div>
                </div>
              </a>
            ))}

            {filteredComingSoon.map((p, i) => (
              <div
                key={p.id}
                className={`portfolio-card coming-soon reveal reveal-delay-${filteredProjects.length + i + 1}`}
              >
                <div className="coming-soon-visual">
                  <div className="coming-soon-icon">{p.icon}</div>
                  <div className="coming-soon-badge">
                    <span className="dot" aria-hidden="true" />
                    Coming Soon
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-meta">
                    <h3 style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="portfolio-tags-row">
                      {p.pills.map((pill) => (
                        <span key={pill} className="portfolio-pill">{pill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && filteredComingSoon.length === 0 && (
              <div className="pf-empty reveal">
                <div className="pf-empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <p>Belum ada proyek di kategori ini. Coming soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
