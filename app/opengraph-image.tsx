import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Begawe — Build Digital, Build Better";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,230,118,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,230,118,0.1)",
            border: "1px solid rgba(0,230,118,0.3)",
            borderRadius: 999,
            padding: "8px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00e676",
            }}
          />
          <span style={{ color: "#00e676", fontSize: 18, fontWeight: 600 }}>
            Available for Projects
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: "-2px",
          }}
        >
          Build Digital,{" "}
          <span style={{ color: "#00e676" }}>Build Better</span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 48,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Digital product studio yang membangun solusi teknologi berdampak
          untuk bisnis Indonesia.
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 32,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 20 }}>
            begawe.studio
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            {["Mobile", "Web", "UI/UX", "AI"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: "6px 14px",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 18,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
