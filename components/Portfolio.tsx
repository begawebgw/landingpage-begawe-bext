"use client";

import { useRevealAnimation } from "@/lib/hooks";
import { comingSoonCards } from "@/lib/portfolio-data";

const cards = comingSoonCards;

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
