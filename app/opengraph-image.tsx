import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Begawe — Build Digital, Build Better";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://landing-page-begawe-next.vercel.app";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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

        {/* Green glow center */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Logo on white pill background */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: 24,
            padding: "32px 64px",
            marginBottom: 48,
          }}
        >
          <img
            src={`${siteUrl}/logo-begawe.svg`}
            width={480}
            height={320}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.02em",
            marginBottom: 16,
          }}
        >
          Build Digital, Build Better
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(0,230,118,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          begawe.studio
        </div>
      </div>
    ),
    { ...size }
  );
}
