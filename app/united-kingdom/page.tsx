import Header from "components/Header";
import LowestFeeExchangePage from "components/TopKingdom";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Influencer Marketing UK",
  description:

"Collaborate with the United Kingdom’s Top Creators",

  keywords: [
    "influencer marketing UK",
    "UGC creators UK",
    "podcast partnerships UK",
    "brand deals UK",
    "AI marketing UK",
    "scale with creators UK",
    "GrandeApp platform UK",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/united-kingdom" },
  openGraph: {
  title: "Influencer Marketing UK",
    description:
"Collaborate with the United Kingdom’s Top Creators",
    url: "https://www.grandeapp.com/united-kingdom",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: UGC Creator & Influencer Marketing in the UK",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Marketing UK",
    description:
"Collaborate with the United Kingdom’s Top Creators",
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
              { "@type": "ListItem", position: 2, name: "United Kingdom", item: "https://www.grandeapp.com/united-kingdom" },
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
