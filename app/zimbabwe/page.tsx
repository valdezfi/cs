import Header from "components/Header";
import LowestFeeExchangePage from "components/TopZimbabwe";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Influencer Marketing Zimbabwe",
  description:
    "Connect with Zimbabwe's Top Influencers & UGC Creators",
  keywords: [
    "influencer marketing Zimbabwe",
  
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://grandeapp.com/zimbabwe" },
  openGraph: {
    title: "Influencer Marketing Platform Zimbabwe",
    description:
      "Connect with Zimbabwe's Top Influencers & UGC Creators",
    url: "https://grandeapp.com/zimbabwe",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: UGC Creator & Influencer Marketing in Zimbabwe",
      },
    ],
    type: "website",
    locale: "en_ZW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Platform Zimbabwe",
    description:
      "Connect with Zimbabwe's Top Influencers & UGC Creators",
    images: ["https://grandeapp.com/images/logo.png"],
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://grandeapp.com" },
              { "@type": "ListItem", position: 2, name: "Zimbabwe", item: "https://grandeapp.com/zimbabwe" },
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
