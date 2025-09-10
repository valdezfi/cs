import Header from "components/Header";
import LowestFeeExchangePage from "components/TopSaudi";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Saudi Arabia",
  description:
    "GrandeApp helps Saudi Arabian brands scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.",
  keywords: [
    "influencer marketing Saudi Arabia",
    "UGC creators Saudi Arabia",
    "podcast partnerships Saudi Arabia",
    "brand deals Saudi Arabia",
    "AI marketing Saudi Arabia",
    "scale with creators Saudi Arabia",
    "GrandeApp platform Saudi Arabia",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/saudi-arabia" },
  openGraph: {
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Saudi Arabia",
    description:
      "GrandeApp connects Saudi brands with influencers, UGC, and podcast creators. Powered by AI, we help you launch high-performing campaigns efficiently.",
    url: "https://www.grandeapp.com/saudi-arabia",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: UGC Creator & Influencer Marketing in Saudi Arabia",
      },
    ],
    type: "website",
    locale: "en_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Saudi Arabia",
    description:
      "GrandeApp helps Saudi brands grow with influencers, UGC, and podcast creators—powered by AI.",
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
              { "@type": "ListItem", position: 2, name: "Saudi Arabia", item: "https://www.grandeapp.com/saudi-arabia" },
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
