import { Metadata } from 'next';
import Script from 'next/script';
import Header from "components/Header";
import OttAdsMarketingAgencyPage from "components/OTT-ads-marketing-agency";
import Footer from "components/Footer";



export const metadata: Metadata = {
  title:
    "OTT Ads Marketing Agency | AI, Influencers & UGC for Smarter Streaming Campaigns",
  description:
    "Learn how an OTT ads marketing agency uses AI, influencers, and UGC creators to deliver high-performance campaigns across OTT ad networks. Discover how to buy OTT ad space efficiently.",
  keywords: [
    "OTT ads marketing agency",
    "OTT ad network",
    "buy OTT ad space",
    "streaming TV ads",
    "AI advertising",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/ott-ads-marketing-agency",
  },
  openGraph: {
    title:
      "OTT Ads Marketing Agency | Optimize Campaigns Across OTT Ad Networks",
    description:
      "Explore how agencies and brands use AI-powered OTT advertising and influencer strategies to reach streaming audiences effectively.",
    url: "https://grandeapp.com/blog/ott-ads-marketing-agency",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ott-agency.jpg",
        width: 1200,
        height: 630,
        alt: "OTT ads marketing agency AI influencers UGC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OTT Ads Marketing Agency | AI, UGC & Influencers for Streaming Success",
    description:
      "How an OTT ads marketing agency uses AI tools, influencer campaigns, and OTT ad networks to optimize streaming ad performance.",
    images: ["https://grandeapp.com/images/blog/ott-agency.jpg"],
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
              name:       "OTT Ads Marketing Agency | AI, UGC & Influencers for Streaming Success",


              item: "https://grandeapp.com/blog/ott-ads-marketing-agency",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <OttAdsMarketingAgencyPage />
      </main>
      <Footer />
    </div>
  );
}



