import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import LandlordsUseCOfuncion from "components/Landlords";

export const metadata: Metadata = {
  title: "Cannabis Landlords & Property Management | COfuncion",
  description:
    "COfuncion helps landlords and property managers of cannabis facilities track compliance, manage tenants, and streamline cannabis-related operations with AI-driven tools.",
  keywords: [
    "cannabis property management",
    "landlord compliance",
    "tenant oversight cannabis",
    "cannabis operations management",
    "AI compliance tools",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/landlords",
  },
  openGraph: {
    title: "Cannabis Landlords & Property Management | COfuncion",
    description:
      "Track compliance, manage cannabis tenants, and streamline property operations with COfuncion’s AI-powered platform for landlords and property managers.",
    url: "https://cofuncion.com/landlords",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Landlords Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Landlords & Property Management | COfuncion",
    description:
      "Manage cannabis properties with AI-powered compliance and tenant management tools from COfuncion.",
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
        <LandlordsUseCOfuncion />
      </main>

      <Footer />
    </div>
  );
}
