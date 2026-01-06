import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import DispensariesUseCOfuncion from "components/Dispensaries";

export const metadata: Metadata = {
  title: "Cannabis Dispensaries | COfuncion Compliance & Waste Management",
  description:
    "COfuncion helps licensed cannabis dispensaries manage compliance, waste pickups, reporting, and operations with AI-driven insights and automation.",
  keywords: [
    "cannabis dispensaries",
    "waste management cannabis",
    "compliance tracking dispensary",
    "cannabis operations",
    "AI compliance tools",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/dispensaries",
  },
  openGraph: {
    title: "Cannabis Dispensaries | COfuncion Compliance & Waste Management",
    description:
      "Track pickups, manage compliance, and monitor dispensary operations with COfuncion’s AI-powered platform for cannabis dispensaries.",
    url: "https://cofuncion.com/dispensaries",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Dispensaries Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Dispensaries | COfuncion Compliance & Waste Management",
    description:
      "Manage dispensary compliance, waste pickups, and operations with COfuncion’s AI-powered platform.",
    images: ["https://cofuncion.com/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 dark:bg-green-900">
      <Header />

      <main>
        <DispensariesUseCOfuncion />
      </main>

      <Footer />
    </div>
  );
}
