import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import ProcessorsUseCOfuncion from "components/Manufacturers";

export const metadata: Metadata = {
  title: "Cannabis Processors & Manufacturers | COfuncion Compliance & Waste Operations",
  description:
    "COfuncion helps licensed cannabis processors and manufacturers manage compliance, waste pickups, reporting, and operations with AI-powered insights and workflow automation.",
  keywords: [
    "cannabis processors",
    "cannabis manufacturers",
    "waste management cannabis",
    "compliance tracking cannabis",
    "AI operations cannabis",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/processors",
  },
  openGraph: {
    title: "Cannabis Processors & Manufacturers | COfuncion",
    description:
      "Track pickups, manage compliance, and monitor operations for cannabis processors and manufacturers with COfuncion’s AI-powered platform.",
    url: "https://cofuncion.com/processors",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Processors Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Processors & Manufacturers | COfuncion",
    description:
      "Manage compliance, waste pickups, and operational workflows for cannabis processors and manufacturers using COfuncion’s AI platform.",
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

      <main className="flex-grow">
        <ProcessorsUseCOfuncion />
      </main>

      <Footer />
    </div>
  );
}
