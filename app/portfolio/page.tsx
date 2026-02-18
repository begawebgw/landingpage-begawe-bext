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

const comingSoon = [
  {
    id: "cs-mobile",
    category: "mobile",
    title: "Mobile App",
    desc: "Sedang dalam pengerjaan. Stay tuned untuk update terbaru.",
    pills: ["Mobile App", "2025"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "cs-web",
    category: "web",
    title: "Web App",
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
    id: "cs-design",
    category: "design",
    title: "UI/UX Design",
    desc: "Sedang dalam pengerjaan. Stay tuned untuk update terbaru.",
    pills: ["UI/UX", "2025"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "cs-ai",
    category: "ai",
    title: "AI Integration",
    desc: "Sedang dalam pengerjaan. Stay tuned untuk update terbaru.",
    pills: ["AI", "2025"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M12 14v7M8 21h8" />
        <path d="M5 10H3a1 1 0 000 2h2M19 10h2a1 1 0 010 2h-2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

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

  const filtered = activeFilter === "all"
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

          <div className="portfolio-grid pf-grid">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className={`portfolio-card coming-soon reveal reveal-delay-${i + 1}`}
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
          </div>
        </section>

        {/* ── CTA ── */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
