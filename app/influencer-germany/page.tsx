import Header from "components/Header";
import LowestFeeExchangePage from "components/TopGermany";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grande | UGC & Influencer Marketing Platform Germany",
  description: "Boost your brand in Germany with top influencers, UGC creators, and podcasts using Grande's platform.",
  authors: [{ name: "GrandeApp Editorial Team" }],
  keywords: [
    "Influencer marketing Germany",
   
  ],
  openGraph: {
    title: "Grande | UGC & Influencer Marketing Platform Germany",
    description: "Boost your brand in Germany with top influencers, UGC creators, and podcasts using Grande's platform.",
    url: "https://www.grandeapp.com/influencer-germany",
    images: [
      {
        url: "https://www.grandeapp.com/images/germany-influencers.jpg",
        width: 1200,
        height: 630,
        alt: "UGC and influencer marketing in Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande | UGC & Influencer Marketing Platform Germany",
    description: "Boost your brand in Germany with top influencers, UGC creators, and podcasts using Grande's platform.",
    images: ["https://www.grandeapp.com/images/germany-influencers.jpg"],
  },
  alternates: {
    canonical: "https://www.grandeapp.com/influencer-germany",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.grandeapp.com"),
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
                item: "https://www.grandeapp.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Germany",
                item: "https://www.grandeapp.com/influencer-germany",
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
