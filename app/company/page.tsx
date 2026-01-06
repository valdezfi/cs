import Header from "components/Header";
import Footer from "components/Footer";
import { Metadata } from "next";
import AboutUs from "components/About";

export const metadata: Metadata = {
  title: "COfuncion | Intelligent Cannabis Waste & Compliance Platform",
  description:
    "COfuncion is an intelligent cannabis waste compliance platform helping dispensaries, cultivators, and operators manage pickups, documentation, and audit-ready workflows.",
  keywords: [
    "cannabis waste management",
    "cannabis compliance software",
    "cannabis waste pickup",
    "dispensary compliance",
    "cannabis operators",
    "cannabis manifests",
    "licensed cannabis waste haulers",
    "cannabis audit readiness",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/about",
  },
  openGraph: {
    title: "COfuncion — Intelligent Cannabis Waste Compliance",
    description:
      "Manage cannabis waste pickups, manifests, and compliance with an intelligent, audit-ready platform built for regulated cannabis operators.",
    url: "https://cofuncion.com/about",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/og-cannabis-compliance.png", // recommended: compliance-focused OG image
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Waste Compliance Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "COfuncion | Cannabis Waste & Compliance Platform",
    description:
      "An intelligent platform for cannabis operators to manage waste pickups, compliance documentation, and audit-ready reporting.",
    images: ["https://cofuncion.com/images/og-cannabis-compliance.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />

      <main>
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
