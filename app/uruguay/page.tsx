import Header from "components/Header";
import LowestFeeExchangePage from "components/TopUruguay";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Influencer Marketing Uruguay",
  description:
           " Plataforma de marketing de influencers y UGC en Uruguay – Grande",
  keywords: [
    "influencer marketing Uruguay",
  
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/uruguay" },
  openGraph: {
  title: "Influencer Marketing Uruguay",
    description:
           " Plataforma de marketing de influencers y UGC en Uruguay – Grande",
    url: "https://www.grandeapp.com/uruguay",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: UGC Creator & Influencer Marketing in Uruguay",
      },
    ],
    type: "website",
    locale: "es_UY",
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Marketing Uruguay",
    description:
           " Plataforma de marketing de influencers y UGC en Uruguay – Grande",
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
              { "@type": "ListItem", position: 2, name: "Uruguay", item: "https://www.grandeapp.com/uruguay" },
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
