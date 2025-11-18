import { Metadata } from 'next';
import Script from 'next/script';
import Header from "components/Header";
import OttAdPlatformsPage from "components/OTT-ad-platforms";
import Footer from "components/Footer";



export const metadata: Metadata = {
  title: "OTT Ad Platforms | How Brands and Creators Maximize ROI with AI & UGC",
  description:
    "Discover how OTT ad platforms help brands, influencers, and UGC creators scale campaigns with AI-powered optimization, targeting, and creative automation.",
  keywords: [
    "OTT ad platforms",
    "OTT ads",
    "OTT video ads",
    "AI advertising",
    "GrandeApp",
    "streaming TV marketing",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/ott-ad-platforms",
  },
  openGraph: {
    title: "OTT Ad Platforms | AI, Influencers & UGC for Smarter Ad Campaigns",
    description:
      "Learn how brands and creators use OTT ad platforms to improve campaign ROI with AI tools, influencer integration, and performance tracking.",
    url: "https://grandeapp.com/blog/ott-ad-platforms",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ott-ads.jpg",
        width: 1200,
        height: 630,
        alt: "OTT ad platforms AI influencer UGC GrandeApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTT Ad Platforms | How Brands and Creators Maximize ROI with AI",
    description:
      "Explore how OTT ad platforms enable smarter, data-driven campaigns using AI, influencers, and UGC creators to maximize reach and performance.",
    images: ["https://grandeapp.com/images/blog/ott-ads.jpg"],
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
              name: "OTT Ad Platforms | AI, Influencers & UGC for Smarter Ad Campaigns",

              item: "https://grandeapp.com/blog/ott-ad-platforms",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <OttAdPlatformsPage />
      </main>
      <Footer />
    </div>
  );
}



