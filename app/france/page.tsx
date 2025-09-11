import Header from "components/Header";
import LowestFeeExchangePage from "components/TopFrance";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Influencer Marketing France",
  description: "Connect with top influencers and UGC creators in France. Boost your campaigns with authentic content and measurable results using GrandeApp.com.",
  authors: [{ name: "GrandeApp Editorial Team" }],
  keywords: [
    "Influencer marketing France",
  
  ],
  openGraph: {
    title: "Influencer Marketing France",
    description: "Connect with top influencers and UGC creators in France. Boost your campaigns with authentic content and measurable results using GrandeApp.com.",
    url: "https://grandeapp.com/france",
    images: [
      {
        url: "https://grandeapp.com/images/france-influencers.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer and UGC marketing in France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing France",
    description: "Connect with top influencers and UGC creators in France. Boost your campaigns with authentic content and measurable results using GrandeApp.com.",
    images: [
      "https://grandeapp.com/images/france-influencers.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/france",
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
                name: "France",
                item: "https://grandeapp.com/france",
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
