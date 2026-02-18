import { WHATSAPP_URL } from "@/lib/config";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-box reveal">
        {/* Micro-benefits */}
        <div className="cta-benefits" aria-label="Why work with us">
          <div className="cta-benefit">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Fast Delivery
          </div>
          <div className="cta-benefit">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Clean Code
          </div>
          <div className="cta-benefit">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            Ongoing Support
          </div>
        </div>

        <h2 style={{ fontFamily: "var(--font-display)" }}>
          Punya ide?
          <br />
          Mari wujudkan bersama.
        </h2>
        <p>
          Ceritakan proyek Anda dan tim kami akan segera merespons dalam 24 jam.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow"
        >
          Hubungi Kami
          <svg
            width="16"
            height="16"
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
    </section>
  );
}
