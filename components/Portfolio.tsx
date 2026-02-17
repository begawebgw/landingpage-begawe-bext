"use client";

import { useEffect } from "react";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const ViewProjectOverlay = () => (
  <div className="portfolio-overlay" aria-hidden="true">
    <span className="portfolio-overlay-label">
      View Project
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </span>
  </div>
);

const MockupNavIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const MockupActionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
  </svg>
);

export default function Portfolio() {
  // Scroll reveal for portfolio section
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      {/* Section header */}
      <div className="section-header reveal">
        <div>
          <div className="section-label">Selected Work</div>
          <h2
            className="section-title"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Proyek Terbaru
          </h2>
        </div>
        <a href="/portfolio" className="section-link">
          Lihat Semua
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="portfolio-grid">
        {/* Card 1 — PayEase (Mobile App) */}
        <a href="#" className="portfolio-card reveal">
          <div className="portfolio-tab">Fintech</div>
          <div className="portfolio-visual">
            <ViewProjectOverlay />
            <div className="portfolio-visual-bg vis-1" />
            <div className="portfolio-mockup">
              <div className="mockup-header">
                <div className="back-icon">
                  <MockupNavIcon />
                </div>
                <div className="action-icon">
                  <MockupActionIcon />
                </div>
              </div>
              <div className="mockup-hero-img m-1">💳</div>
              <div
                className="mockup-title"
                style={{ fontFamily: "var(--font-display)" }}
              >
                PayEase
              </div>
              <div
                className="mockup-price"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Rp 0 Fee
              </div>
              <div className="mockup-tags">
                <span className="mockup-tag">QRIS</span>
                <span className="mockup-tag active">Transfer</span>
                <span className="mockup-tag">TopUp</span>
              </div>
              <div
                className="mockup-btn"
                style={{ fontFamily: "var(--font-display)" }}
              >
                OPEN APP
              </div>
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-meta">
              <h3 style={{ fontFamily: "var(--font-display)" }}>PayEase</h3>
              <p>
                Aplikasi pembayaran digital dengan QRIS, transfer, dan top-up
                untuk 50K+ pengguna.
              </p>
              <div className="portfolio-tags-row">
                <span className="portfolio-pill">Mobile App</span>
                <span className="portfolio-pill">UI/UX</span>
                <span className="portfolio-pill">Backend</span>
              </div>
            </div>
            <div className="portfolio-arrow">
              <ArrowIcon />
            </div>
          </div>
        </a>

        {/* Card 2 — SehatKu (Web App) */}
        <a href="#" className="portfolio-card reveal reveal-delay-1">
          <div className="portfolio-tab">Healthcare</div>
          <div className="portfolio-visual">
            <ViewProjectOverlay />
            <div className="portfolio-visual-bg vis-2" />
            <div className="portfolio-mockup">
              <div className="mockup-header">
                <div className="back-icon">
                  <MockupNavIcon />
                </div>
                <div className="action-icon">
                  <MockupActionIcon />
                </div>
              </div>
              <div className="mockup-hero-img m-2">🏥</div>
              <div
                className="mockup-title"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SehatKu
              </div>
              <div
                className="mockup-price"
                style={{ fontFamily: "var(--font-display)" }}
              >
                24/7 Care
              </div>
              <div className="mockup-tags">
                <span className="mockup-tag active">Consult</span>
                <span className="mockup-tag">Records</span>
                <span className="mockup-tag">Rx</span>
              </div>
              <div
                className="mockup-btn"
                style={{ fontFamily: "var(--font-display)" }}
              >
                BOOK NOW
              </div>
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-meta">
              <h3 style={{ fontFamily: "var(--font-display)" }}>SehatKu</h3>
              <p>
                Platform telemedicine real-time yang terintegrasi dengan rekam
                medis digital.
              </p>
              <div className="portfolio-tags-row">
                <span className="portfolio-pill">Web App</span>
                <span className="portfolio-pill">API</span>
                <span className="portfolio-pill">Healthcare</span>
              </div>
            </div>
            <div className="portfolio-arrow">
              <ArrowIcon />
            </div>
          </div>
        </a>

        {/* Card 3 — Coming Soon (Web) */}
        <div className="portfolio-card coming-soon reveal reveal-delay-2">
          <div className="coming-soon-visual">
            <div className="coming-soon-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div className="coming-soon-badge">
              <span className="dot" aria-hidden="true" />
              Coming Soon
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-meta">
              <h3 style={{ fontFamily: "var(--font-display)" }}>
                Project Baru
              </h3>
              <p>Sedang dalam pengerjaan. Stay tuned untuk update terbaru.</p>
              <div className="portfolio-tags-row">
                <span className="portfolio-pill">Web App</span>
                <span className="portfolio-pill">2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 — Coming Soon (Mobile) */}
        <div className="portfolio-card coming-soon reveal reveal-delay-3">
          <div className="coming-soon-visual">
            <div className="coming-soon-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <div className="coming-soon-badge">
              <span className="dot" aria-hidden="true" />
              Coming Soon
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-meta">
              <h3 style={{ fontFamily: "var(--font-display)" }}>
                Project Baru
              </h3>
              <p>Sedang dalam pengerjaan. Stay tuned untuk update terbaru.</p>
              <div className="portfolio-tags-row">
                <span className="portfolio-pill">Mobile App</span>
                <span className="portfolio-pill">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
