"use client";

import { useRevealAnimation } from "@/lib/hooks";

const cards = [
  {
    id: "cs-mobile",
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

export default function Portfolio() {
  useRevealAnimation();

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header reveal">
        <div>
          <div className="section-label">Selected Work</div>
          <h2 className="section-title" style={{ fontFamily: "var(--font-display)" }}>
            Proyek Terbaru
          </h2>
        </div>
        <a href="/portfolio" className="section-link">
          Lihat Semua
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="portfolio-grid">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`portfolio-card coming-soon reveal reveal-delay-${i + 1}`}
          >
            <div className="coming-soon-visual">
              <div className="coming-soon-icon">{card.icon}</div>
              <div className="coming-soon-badge">
                <span className="dot" aria-hidden="true" />
                Coming Soon
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-meta">
                <h3 style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="portfolio-tags-row">
                  {card.pills.map((pill) => (
                    <span key={pill} className="portfolio-pill">{pill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
