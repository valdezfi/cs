import Header from "components/Header";
import LowestFeeExchangePage from "components/TopGermany";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Influencer Marketing Germany",
  description: "Whether you're a startup or an established brand in Germany, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
  authors: [{ name: "GrandeApp Editorial Team" }],
  keywords: [
    "Influencer marketing Germany",
   
  ],
  openGraph: {
    title: "Influencer Marketing Germany",
    description: "Whether you're a startup or an established brand in Germany, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",

    url: "https://grandeapp.com/influencer-germany",
    images: [
      {
        url: "https://grandeapp.com/images/germany-influencers.jpg",
        width: 1200,
        height: 630,
        alt: "UGC and influencer marketing in Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Germany",
    description: "Whether you're a startup or an established brand in Germany, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
    images: ["https://grandeapp.com/images/germany-influencers.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/influencer-germany",
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
                name: "Germany",
                item: "https://grandeapp.com/influencer-germany",
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
