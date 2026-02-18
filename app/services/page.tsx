import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Begawe | Mobile, Web, UI/UX & AI",
  description:
    "Layanan lengkap dari Begawe: Mobile App, Web Application, UI/UX Design, dan AI Integration untuk bisnis Anda.",
  openGraph: {
    title: "Services — Begawe | Mobile, Web, UI/UX & AI",
    description:
      "Layanan lengkap dari Begawe: Mobile App, Web Application, UI/UX Design, dan AI Integration untuk bisnis Anda.",
    url: "https://begawe.studio/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
