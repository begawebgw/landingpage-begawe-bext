import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Begawe — Build Digital, Build Better",
  description:
    "Digital product studio yang membangun solusi teknologi berdampak untuk bisnis Indonesia.",
  icons: {
    icon: "/logo-link.png",
    apple: "/logo-link.png",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  openGraph: {
    title: "Begawe — Build Digital, Build Better",
    description:
      "Digital product studio yang membangun solusi teknologi berdampak untuk bisnis Indonesia.",
    url: "https://landing-page-begawe-next.vercel.app",
    siteName: "Begawe",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Begawe — Digital Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Begawe — Build Digital, Build Better",
    description:
      "Digital product studio yang membangun solusi teknologi berdampak untuk bisnis Indonesia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${syne.variable} ${plusJakartaSans.variable}`}>
      <body style={{ fontFamily: "var(--font-body)" }}>{children}</body>
    </html>
  );
}
