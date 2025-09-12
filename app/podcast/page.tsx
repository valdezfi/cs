import Header from "components/Header";
import HeroPodcaster from "components/HeroPodcast";
import Section from "components/Section";
import Footer from "components/Footer";

import PodcasterAccordion from "components/QApodcast";
import USAb from "components/USAbuy";
import { Metadata } from "next";
import Script from "next/script";
import PodcastValueShowcase from "components/PodcastResult";
import PredictableHero from "components/Predictable"; 
import PodcastHowItWorks from "components/PodcastHIW";

export const metadata: Metadata = {
  title: "Grande: Grow Your Podcast & Monetize Your Voice",
  description:
    "GrandeApp helps podcasters scale by connecting them with sponsors, influencers, and creators, powered by AI. Track performance, grow your audience, and monetize your content efficiently.",
  keywords: [
    "podcast marketing",
   
  
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/podcast" },
  openGraph: {
    title: "Grande: Grow Your Podcast & Monetize Your Voice",
    description:
      "GrandeApp helps podcasters connect with sponsors and track performance with AI-powered tools. Grow your audience and monetize your show efficiently.",
    url: "https://www.grandeapp.com/podcast",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: Podcast Growth & Monetization Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: Grow Your Podcast & Monetize Your Voice",
    description:
      "Connect with sponsors, track performance, and grow your audience with GrandeApp for podcasters.",
    images: ["https://www.grandeapp.com/images/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grandeapp.com" },
              { "@type": "ListItem", position: 2, name: "Podcast", item: "https://www.grandeapp.com/podcast" },
            ],
          }),
        }}
      />
      <Header />
      <main>
        <HeroPodcaster />
        <PodcastValueShowcase />
        <PodcastHowItWorks />
        <USAb />
        <PredictableHero />
        <Section
          leftHalf={<PodcasterAccordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Grande helps podcasters grow their show and monetize their voice.
              </h2>
              <p className="text-xl font-light">
                Whether you’re recording from your closet or a full studio, Grande connects you with sponsors, tracks performance, and helps you build income — without giving up creative control.
              </p>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
