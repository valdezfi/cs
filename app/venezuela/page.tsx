import Header from "components/Header";
import LowestFeeExchangePage from "components/TopVen";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Venezuela",
  description:
    "GrandeApp helps Venezuelan brands scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.",
  keywords: [
    "influencer marketing Venezuela",
    "UGC creators Venezuela",
    "podcast partnerships Venezuela",
    "brand deals Venezuela",
    "AI marketing Venezuela",
    "scale with creators Venezuela",
    "GrandeApp platform Venezuela",
    "shein venezuela",
    "mercado libre venezuela",
    "mercado libre de venezuela"
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/venezuela" },
  openGraph: {
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Venezuela",
    description:
      "GrandeApp connects Venezuelan brands with influencers, UGC, and podcast creators. Powered by AI, we help you launch high-performing campaigns efficiently.",
    url: "https://www.grandeapp.com/venezuela",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: UGC Creator & Influencer Marketing in Venezuela",
      },
    ],
    type: "website",
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Venezuela",
    description:
      "GrandeApp helps Venezuelan brands grow with influencers, UGC, and podcast creators—powered by AI.",
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
              { "@type": "ListItem", position: 2, name: "Venezuela", item: "https://www.grandeapp.com/venezuela" },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        <LowestFeeExchangePage />
      </main>
      <Footer />
    </div>
  );
}
