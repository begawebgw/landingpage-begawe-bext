"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Kualitas Tanpa Kompromi",
    desc: "Kami tidak menganggap 'cukup bagus' sebagai standar. Setiap baris kode, setiap piksel desain — dikerjakan dengan standar yang tinggi.",
    accent: "var(--success)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Transparansi Penuh",
    desc: "Klien selalu tahu apa yang sedang dikerjakan, mengapa, dan bagaimana kemajuannya. Tidak ada kejutan di tengah proyek.",
    accent: "#60a5fa",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Inovasi Terus-menerus",
    desc: "Teknologi bergerak cepat. Kami selalu belajar, mengadopsi stack terbaru, dan mencari cara lebih baik untuk menyelesaikan masalah.",
    accent: "#fbbf24",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Kemitraan Jangka Panjang",
    desc: "Kami bukan vendor — kami mitra. Hubungan dengan klien dibangun atas kepercayaan, komunikasi terbuka, dan hasil nyata.",
    accent: "#a78bfa",
  },
];

const team = [
  {
    initials: "BG",
    name: "Founder & CEO",
    role: "Product & Strategy",
    bio: "Memimpin visi produk dan strategi bisnis. 5+ tahun membangun produk digital untuk startup dan enterprise.",
    color: "var(--success)",
  },
  {
    initials: "RL",
    name: "Lead Developer",
    role: "Engineering",
    bio: "Arsitektur sistem, code review, dan memastikan setiap produk yang keluar berjalan mulus di production.",
    color: "#60a5fa",
  },
  {
    initials: "AS",
    name: "UI/UX Designer",
    role: "Design",
    bio: "Mengubah brief menjadi pengalaman visual yang intuitif. Figma wizard dengan passion di interaction design.",
    color: "#fbbf24",
  },
  {
    initials: "DK",
    name: "Mobile Engineer",
    role: "Mobile",
    bio: "Spesialis React Native dan Flutter. Membangun aplikasi yang terasa native di kedua platform sekaligus.",
    color: "#a78bfa",
  },
];

const whyItems = [
  {
    num: "01",
    title: "Full-Stack Studio",
    desc: "Dari desain hingga deployment — semua ada di satu tim. Tidak perlu koordinasi dengan vendor berbeda.",
  },
  {
    num: "02",
    title: "Responsif & Komunikatif",
    desc: "Kami merespons dalam jam kerja. Progress update rutin. Tidak ada proyek yang hilang tanpa kabar.",
  },
  {
    num: "03",
    title: "Teknologi Terkini",
    desc: "Kami gunakan stack modern yang scalable — bukan solusi lama yang hanya mudah untuk kami, tapi sulit untuk Anda.",
  },
  {
    num: "04",
    title: "Post-Launch Support",
    desc: "Proyek selesai bukan berarti selesai kerja sama. Kami hadir untuk maintenance, update, dan iterasi selanjutnya.",
  },
];

export default function AboutPage() {
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
              Tim yang membangun{" "}
              <span className="accent">masa depan digital</span>
            </h1>
            <p className="reveal reveal-delay-2" style={{ marginTop: "1.25rem" }}>
              Begawe adalah digital product studio asal Jakarta yang fokus membangun
              produk digital berdampak — dari aplikasi mobile, web app, hingga solusi AI
              yang benar-benar digunakan orang.
            </p>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="about-story-section">
          <div className="about-story-inner">
            <div className="about-story-text reveal">
              <div className="section-label">Our Story</div>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                Dari frustrasi menjadi misi
              </h2>
              <p className="about-story-p">
                Begawe lahir dari rasa frustrasi. Kami melihat terlalu banyak bisnis
                yang terjebak dengan vendor yang lambat, komunikasi yang buruk, dan
                produk yang tidak sesuai harapan — meski sudah keluar budget besar.
              </p>
              <p className="about-story-p">
                Kami percaya bahwa membangun produk digital seharusnya terasa seperti
                kolaborasi, bukan pertaruhan. Itu sebabnya kami membangun Begawe —
                studio yang mengutamakan kejujuran, kecepatan, dan kualitas di atas segalanya.
              </p>
              <p className="about-story-p">
                Hari ini, kami telah membantu 40+ bisnis — dari startup tahap awal
                hingga perusahaan yang sedang scale up — mewujudkan produk digital
                mereka.
              </p>
            </div>

            <div className="about-story-visual reveal reveal-delay-2">
              <div className="about-story-card">
                <div className="asc-header">
                  <div className="asc-dots">
                    <span /><span /><span />
                  </div>
                  <span className="asc-label">begawe.studio</span>
                </div>
                <div className="asc-body">
                  <div className="asc-line asc-line-green">
                    <span className="asc-key">mission</span>
                    <span className="asc-val">&quot;Build products that matter&quot;</span>
                  </div>
                  <div className="asc-line">
                    <span className="asc-key">founded</span>
                    <span className="asc-val">2022</span>
                  </div>
                  <div className="asc-line">
                    <span className="asc-key">location</span>
                    <span className="asc-val">&quot;Jakarta, Indonesia&quot;</span>
                  </div>
                  <div className="asc-line">
                    <span className="asc-key">team</span>
                    <span className="asc-val">10+ builders</span>
                  </div>
                  <div className="asc-line">
                    <span className="asc-key">projects</span>
                    <span className="asc-val">40+ shipped</span>
                  </div>
                  <div className="asc-line asc-line-green">
                    <span className="asc-key">status</span>
                    <span className="asc-val asc-status">
                      <span className="dot" aria-hidden="true" />
                      Open for projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="about-values-section">
          <div className="about-values-inner">
            <div className="section-header reveal">
              <div>
                <div className="section-label">What We Believe</div>
                <h2 className="section-title">Nilai yang Kami Pegang</h2>
              </div>
            </div>
            <div className="about-values-grid">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`value-card reveal reveal-delay-${(i % 2) + 1}`}
                  style={{ "--value-accent": v.accent } as React.CSSProperties}
                >
                  <div className="value-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="about-team-section">
          <div className="about-team-inner">
            <div className="section-header reveal">
              <div>
                <div className="section-label">The People</div>
                <h2 className="section-title">Tim di Balik Begawe</h2>
              </div>
            </div>
            <div className="about-team-grid">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`team-card reveal reveal-delay-${(i % 2) + 1}`}
                >
                  <div
                    className="team-avatar"
                    style={{ background: `linear-gradient(135deg, ${member.color}22, ${member.color}44)`, borderColor: `${member.color}44` }}
                  >
                    <span style={{ color: member.color, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem" }}>
                      {member.initials}
                    </span>
                  </div>
                  <div className="team-info">
                    <div className="team-role" style={{ color: member.color }}>{member.role}</div>
                    <h4>{member.name}</h4>
                    <p>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY BEGAWE ── */}
        <section className="about-why-section">
          <div className="about-why-inner">
            <div className="section-header reveal">
              <div>
                <div className="section-label">Why Us</div>
                <h2 className="section-title">Kenapa Pilih Begawe?</h2>
              </div>
            </div>
            <div className="about-why-grid">
              {whyItems.map((item, i) => (
                <div
                  key={item.num}
                  className={`about-why-item reveal reveal-delay-${(i % 2) + 1}`}
                >
                  <div className="about-why-num">{item.num}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
