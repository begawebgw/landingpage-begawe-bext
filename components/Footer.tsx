"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Begawe"
            className="footer-logo"
          />
          <p>
            Digital product studio yang membangun solusi teknologi berdampak
            untuk bisnis Indonesia.
          </p>
        </div>

        <div className="footer-col">
          <h4 style={{ fontFamily: "var(--font-display)" }}>Layanan</h4>
          <a href="/services">Mobile Development</a>
          <a href="/services">Web Application</a>
          <a href="/services">UI/UX Design</a>
          <a href="/services">AI Integration</a>
        </div>

        <div className="footer-col">
          <h4 style={{ fontFamily: "var(--font-display)" }}>Company</h4>
          <a href="/portfolio">Portofolio</a>
          <a href="/about">About</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-col">
          <h4 style={{ fontFamily: "var(--font-display)" }}>Connect</h4>
          <a
            href="https://wa.me/6285887799935"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="https://instagram.com/begawe.bgw" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com/@begawe.bgw" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href="https://github.com/begawebgw" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {year} Begawe. All rights reserved.
        </span>
        <a href="#" className="back-to-top" aria-label="Back to top">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          Back to top
        </a>
        <span>Jakarta, Indonesia</span>
      </div>
    </footer>
  );
}
