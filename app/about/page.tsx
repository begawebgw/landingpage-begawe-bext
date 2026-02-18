import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — Begawe | Digital Product Studio",
  description:
    "Kenali tim di balik Begawe — digital product studio asal Jakarta yang membangun produk digital berdampak untuk bisnis Indonesia.",
  openGraph: {
    title: "About — Begawe | Digital Product Studio",
    description:
      "Kenali tim di balik Begawe — digital product studio asal Jakarta yang membangun produk digital berdampak untuk bisnis Indonesia.",
    url: "https://begawe.studio/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
