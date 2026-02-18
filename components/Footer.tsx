"use client";

import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/logo.svg"
            alt="Begawe"
            className="footer-logo"
            width={120}
            height={40}
            unoptimized
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
        </div>

        <div className="footer-col">
          <h4 style={{ fontFamily: "var(--font-display)" }}>Connect</h4>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
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
