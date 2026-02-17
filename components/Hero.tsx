export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-badge reveal">
        <span className="dot" aria-hidden="true" />
        Available for Projects
      </div>

      <h1
        className="reveal reveal-delay-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Build Digital,
        <br />
        Build <span className="accent">Better</span>
      </h1>

      <p className="reveal reveal-delay-2">
        Kami membangun produk digital yang bukan sekadar berfungsi — tapi
        memberikan dampak nyata untuk bisnis dan pengguna Anda.
      </p>

      {/* CTA Buttons */}
      <div className="hero-cta-group reveal reveal-delay-3">
        <a
          href="https://wa.me/6285887799935"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Hubungi Kami
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
        <a href="#portfolio" className="btn-secondary">
          Lihat Karya Kami
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Social proof */}
      <div className="hero-social-proof reveal reveal-delay-4">
        <div className="stars" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span>Dipercaya 40+ brand</span>
        <span className="divider" aria-hidden="true" />
        <span>Indonesia &amp; Asia</span>
      </div>

      {/* Scroll indicator */}
      <a
        href="#portfolio"
        className="scroll-indicator"
        aria-label="Scroll to portfolio section"
      >
        <div className="scroll-indicator-dot" aria-hidden="true" />
        <span>Scroll</span>
      </a>
    </section>
  );
}
