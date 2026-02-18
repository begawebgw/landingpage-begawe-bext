"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useRevealAnimation } from "@/lib/hooks";
import { comingSoonCards } from "@/lib/portfolio-data";

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

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  useRevealAnimation(activeFilter);

  const filtered =
    activeFilter === "all"
      ? comingSoonCards
      : comingSoonCards.filter((p) => p.category === activeFilter);

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
