"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const services = [
  {
    id: "mobile",
    variant: "sc-mobile",
    iconVariant: "ic-mobile",
    labelVariant: "lbl-mobile",
    label: "Mobile Development",
    title: "Aplikasi Mobile Native & Cross-Platform",
    description:
      "Kami membangun aplikasi mobile berkualitas tinggi untuk iOS dan Android — dari konsep hingga rilis ke App Store & Play Store, dengan performa yang terasa native.",
    features: [
      "React Native & Flutter",
      "Integrasi API & backend",
      "Push notification & offline mode",
      "UI animasi yang halus & responsif",
      "App Store Optimization (ASO)",
    ],
    tags: ["React Native", "Flutter", "iOS", "Android"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "web",
    variant: "sc-web",
    iconVariant: "ic-web",
    labelVariant: "lbl-web",
    label: "Web Application",
    title: "Web App Modern yang Cepat & Scalable",
    description:
      "Dari landing page hingga SaaS platform kompleks — kami bangun dengan teknologi terkini yang SEO-friendly, cepat, dan mudah di-maintain jangka panjang.",
    features: [
      "Next.js & React ecosystem",
      "Server-side rendering & SSG",
      "Dashboard & admin panel",
      "Authentication & role management",
      "CI/CD pipeline & deployment",
    ],
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "design",
    variant: "sc-design",
    iconVariant: "ic-design",
    labelVariant: "lbl-design",
    label: "UI/UX Design",
    title: "Desain yang Intuitif & Berdampak",
    description:
      "Kami merancang pengalaman pengguna yang tidak hanya indah secara visual, tapi juga mudah digunakan — berbasis riset, data, dan prinsip desain yang solid.",
    features: [
      "User research & persona mapping",
      "Wireframe & interactive prototype",
      "Design system & component library",
      "Usability testing",
      "Handoff ke developer (Figma)",
    ],
    tags: ["Figma", "Prototyping", "Design System", "UX Research"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "ai",
    variant: "sc-ai",
    iconVariant: "ic-ai",
    labelVariant: "lbl-ai",
    label: "AI Integration",
    title: "Integrasikan AI ke Dalam Produk Anda",
    description:
      "Kami mengintegrasikan kecerdasan buatan ke dalam aplikasi Anda — mulai dari chatbot cerdas, rekomendasi personal, hingga otomasi proses bisnis berbasis AI.",
    features: [
      "LLM integration (GPT, Gemini, Claude)",
      "RAG & vector database",
      "Chatbot & virtual assistant",
      "Analisis data & prediksi",
      "Computer vision & OCR",
    ],
    tags: ["OpenAI", "LangChain", "Python", "Vector DB"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M12 14v7M8 21h8" />
        <path d="M5 10H3a1 1 0 000 2h2M19 10h2a1 1 0 010 2h-2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Brief",
    desc: "Kami memahami tujuan bisnis, target pengguna, dan kebutuhan teknis proyek Anda secara mendalam sebelum satu baris pun ditulis.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "Tim desainer kami membuat wireframe dan prototype interaktif yang bisa Anda uji coba — sebelum masuk ke fase development.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Kode yang bersih, terstruktur, dan mudah di-maintain. Kami bekerja dalam sprint dua mingguan dengan update rutin kepada klien.",
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "QA menyeluruh di berbagai device dan skenario nyata. Deploy ke production dengan zero downtime dan monitoring penuh.",
  },
];

const stackItems = [
  "React Native", "Flutter", "Next.js", "React", "TypeScript",
  "Node.js", "Python", "PostgreSQL", "MongoDB", "Supabase",
  "Firebase", "Figma", "TailwindCSS", "OpenAI API", "LangChain",
  "Docker", "Vercel", "AWS", "GitHub Actions", "Prisma",
];

export default function ServicesPage() {
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
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/* ── PAGE HERO ── */}
        <section className="page-hero">
          <div className="page-hero-inner">
            <h1 className="reveal">
              Solusi digital yang{" "}
              <span className="accent">tepat sasaran</span>
            </h1>
            <p className="reveal reveal-delay-2" style={{ marginTop: "1.25rem" }}>
              Dari ide awal hingga produk jadi — kami hadir di setiap tahap
              perjalanan digital bisnis Anda dengan tim yang berpengalaman.
            </p>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="services-section">
          <div className="section-header reveal">
            <div>
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Apa yang Kami Tawarkan</h2>
            </div>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`service-card ${svc.variant} reveal reveal-delay-${(i % 2) + 1}`}
              >
                {/* Top */}
                <div className="service-card-top">
                  <div className={`service-icon ${svc.iconVariant}`}>
                    {svc.icon}
                  </div>
                  <div>
                    <div className={`service-card-label ${svc.labelVariant}`}>
                      {svc.label}
                    </div>
                    <h3>{svc.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p>{svc.description}</p>

                {/* Features */}
                <div className="service-features">
                  {svc.features.map((f) => (
                    <div key={f} className="service-feature">
                      <span className="service-feature-dot" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="service-card-footer">
                  <div className="service-tags">
                    {svc.tags.map((t) => (
                      <span key={t} className="service-tag">{t}</span>
                    ))}
                  </div>
                  <div className="service-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="process-section">
          <div className="process-inner">
            <div className="section-header reveal">
              <div>
                <div className="section-label">How We Work</div>
                <h2 className="section-title">Cara Kami Bekerja</h2>
              </div>
            </div>
            <div className="process-steps">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`process-step reveal reveal-delay-${i + 1}`}
                >
                  <div className="process-step-num">{step.num}</div>
                  <div className="process-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="stack-section">
          <div className="section-header reveal">
            <div>
              <div className="section-label">Tech Stack</div>
              <h2 className="section-title">Teknologi yang Kami Gunakan</h2>
            </div>
          </div>
          <div className="stack-grid reveal reveal-delay-1">
            {stackItems.map((item) => (
              <span key={item} className="stack-badge">
                <span className="stack-badge-dot" />
                {item}
              </span>
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
