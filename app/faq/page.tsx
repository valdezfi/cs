import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import ManageCampaigns from "components/FAQ";

export const metadata: Metadata = {
  title: "COfuncion FAQ | Cannabis Operations & Compliance",
  description:
    "Find answers to frequently asked questions about managing cannabis operations, compliance, and waste workflows using COfuncion’s AI-powered platform.",
  keywords: [
    "cannabis operations FAQ",
    "compliance cannabis",
    "cannabis waste management",
    "AI cannabis platform",
    "dispensary FAQ",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/faq",
  },
  openGraph: {
    title: "COfuncion FAQ | Cannabis Operations & Compliance",
    description:
      "Get answers about cannabis operations, compliance, and waste management using COfuncion’s intelligent platform.",
    url: "https://cofuncion.com/faq",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis FAQ",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "COfuncion FAQ | Cannabis Operations & Compliance",
    description:
      "Explore frequently asked questions on cannabis compliance, operations, and AI-powered management with COfuncion.",
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

      <main className="flex-grow px-6 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 font-light max-w-3xl mx-auto">
            Everything you need to know about managing cannabis operations, compliance, and waste workflows with COfuncion’s AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <ManageCampaigns />
        </div>
      </main>

      <Footer />
    </div>
  );
}
