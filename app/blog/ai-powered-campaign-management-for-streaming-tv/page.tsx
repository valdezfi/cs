import Header from "components/Header";
import AiPoweredCampaignManagementStreamingTvPage from "components/Ai-powered-campaign-management-for-streaming-tv";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "AI-Powered Campaign Management for Streaming TV | GrandeApp",
  description:
    "Discover how AI-powered campaign management for streaming TV empowers brands, UGC creators, and influencers to optimize ad performance across CTV and OTT platforms.",
  keywords: [
    "AI-powered campaign management for streaming TV",
    "AI advertising",
    "CTV ad optimization",
    "influencer marketing",
    "UGC creators",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical:
      "https://grandeapp.com/blog/ai-powered-campaign-management-for-streaming-tv",
  },
  openGraph: {
    title: "AI-Powered Campaign Management for Streaming TV | GrandeApp",
    description:
      "Learn how AI-driven tools help brands, influencers, and UGC creators scale campaigns across connected TV and streaming platforms with automation and optimization.",
    url: "https://grandeapp.com/blog/ai-powered-campaign-management-for-streaming-tv",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ai-streaming-tv.jpg",
        width: 1200,
        height: 630,
        alt: "AI campaign management for streaming TV advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Campaign Management for Streaming TV | GrandeApp",
    description:
      "Maximize performance on streaming TV with AI-powered automation for brands, influencers, and UGC creators.",
    images: ["https://grandeapp.com/images/blog/ai-streaming-tv.jpg"],
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
              name: "AI-Powered Campaign Management for Streaming TV | GrandeApp",
  
              item: "https://grandeapp.com/blog/ai-powered-campaign-management-for-streaming-tv",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <AiPoweredCampaignManagementStreamingTvPage />
      </main>
      <Footer />
    </div>
  );
}
