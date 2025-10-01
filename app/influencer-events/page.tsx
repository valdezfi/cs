import Header from "components/Header";
import HeroEvent from "components/HeroEvent";
import Section from "components/Section";
import Footer from "components/Footer";

import EventAccordion from "components/QAevent";
import USAb from "components/USAbuy";
import { Metadata } from 'next';
import Script from 'next/script';
import EventValueShowcase from "components/EventResult";
import PredictableHero from "components/Predictable";
import EventHowItWorks from "components/EventHIW";

export const metadata: Metadata = {
  title: "Influencer Brand Event",
  description: "Grande powers unforgettable influencer events — from guest list to ROI.",

  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/influencer-events",
  },
  openGraph: {
    title: "Influencer Brand Event",
  description: "Grande powers unforgettable influencer events — from guest list to ROI.",
    url: "https://grandeapp.com/influencer-events",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Influencer Brand Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Brand Event",
  description: "Grande powers unforgettable influencer events — from guest list to ROI.",
    images: ["https://grandeapp.com/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://grandeapp.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Influencer Brand Event",
                item: "https://grandeapp.com/influencer-events",
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        <HeroEvent />
        <EventValueShowcase />
        <EventHowItWorks />
        <USAb />
        <PredictableHero />

        <Section
          leftHalf={<EventAccordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Grande powers unforgettable influencer events — from guest list to ROI.
              </h2>
              <p className="text-xl font-light">
                Whether it’s a VIP dinner, product launch, or creator meetup, Grande helps you invite the right creators, capture viral content, and track event performance — all without spreadsheets or guesswork.
              </p>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
