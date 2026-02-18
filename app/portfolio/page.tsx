import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — Begawe | Karya Digital Kami",
  description:
    "Lihat portofolio proyek Begawe — dari mobile app, web app, UI/UX design, hingga solusi AI yang sudah kami bangun.",
  openGraph: {
    title: "Portfolio — Begawe | Karya Digital Kami",
    description:
      "Lihat portofolio proyek Begawe — dari mobile app, web app, UI/UX design, hingga solusi AI yang sudah kami bangun.",
    url: "https://begawe.studio/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
