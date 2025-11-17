import Header from "components/Header";
import BestUGCVideoPlatformsPage from "components/UGC-platforms-list";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title:
    "Best UGC Video Platforms for Digital Marketers | AI, Influencers & ROI",
  description:
    "Discover the best UGC video platforms for digital marketers. Learn how brands, influencers, and creators use AI tools to scale authentic video campaigns that drive conversions.",
  keywords: [
    "best UGC video platforms for digital marketers",
    "top UGC platforms",
    "influencer marketing",
    "AI marketing tools",
    "GrandeApp",
    "content creators",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical:
      "https://grandeapp.com/ugc-platforms-list",
  },
  openGraph: {
    title:
      "Best UGC Video Platforms for Digital Marketers | GrandeApp Official Guide",
    description:
      "Explore the best UGC video platforms for digital marketers to collaborate with creators, automate campaigns, and improve ROI through AI-powered tools.",
    url: "https://grandeapp.com/ugc-platforms-list",
    images: [
      {
        url: "https://grandeapp.com/images/blogs/ugc-platforms.jpg",
        width: 1200,
        height: 630,
        alt: "Best UGC video platforms for digital marketers GrandeApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best UGC Video Platforms for Digital Marketers | Creator & Brand Collaboration Tools",
    description:
      "See how top marketers and brands use UGC platforms like GrandeApp to scale authentic, high-ROI video campaigns with AI automation.",
    images: ["https://grandeapp.com/images/blogs/ugc-platforms.jpg"],
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
              name:       "Best UGC Video Platforms for Digital Marketers | Creator & Brand Collaboration Tools",
              item: "https://grandeapp.com/ugc-platforms-list",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <BestUGCVideoPlatformsPage />
      </main>
      <Footer />
    </div>
  );
}
