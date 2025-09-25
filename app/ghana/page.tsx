import Header from "components/Header";
import LowestFeeExchangePage from "components/TopGhana";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grande | Influencer & UGC Marketing in Ghana",
  description: "Boost your brand in Ghana with influencers, UGC creators, and podcast collaborations powered by Grande.",
  authors: [{ name: "GrandeApp Editorial Team" }],
  keywords: [
    "Influencer marketing Ghana",
    "UGC creators Ghana",
    "Digital marketing Ghana",
    "Brand marketing Ghana",
    "Micro-influencers Ghana",
    "Content creators Ghana",
    "GrandeApp Ghana",
  ],
  openGraph: {
    title: "Grande | Influencer & UGC Marketing in Ghana",
    description: "Boost your brand in Ghana with influencers, UGC creators, and podcast collaborations powered by Grande.",
    url: "https://grandeapp.com/ghana",
    images: [
      {
        url: "https://grandeapp.com/images/ghana.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer and UGC marketing in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande | Influencer & UGC Marketing in Ghana",
    description: "Boost your brand in Ghana with influencers, UGC creators, and podcast collaborations powered by Grande.",
    images: [
      "https://grandeapp.com/images/ghana.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/ghana",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://grandeapp.com"),
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
                name: "Ghana",
                item: "https://grandeapp.com/ghana",
              },
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
