import Header from "components/Header";
import InfluencerMarketingStartupsPage from "components/Statup";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "Influencer Marketing SaaS Platform: Scale Your Brand with Affiliates & Partnerships",
  description:
    "Discover how an influencer marketing SaaS platform helps brands run affiliate campaigns, collaborate with influencers, and scale efficiently using tools like GrandeApp.",
  keywords: [
    "influencer marketing SaaS platform",
    "SaaS influencer marketing",
    "affiliate campaigns",
    "brand partnerships",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/influencer-marketing-saas-platform",
  },
  openGraph: {
  title: "Influencer Marketing for Start-Ups",
  description:
    "Learn how influencer marketing for start-ups can drive growth. Discover affordable strategies with affiliate and nano influencers to scale your brand.",
  url: "https://grandeapp.com/blog/influencer-marketing-saas-platform",
    images: [
      {
        url: "https://grandeapp.com/images/blog/branddeal.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Marketing for Start-Ups",
  description:
    "Learn how influencer marketing for start-ups can drive growth. Discover affordable strategies with affiliate and nano influencers to scale your brand.",
  images: ["https://grandeapp.com/images/blog/branddeal.jpg"],
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
              name: "Influencer Marketing SaaS Platform: Scale Your Brand with Affiliates & Partnerships",
              item: "https://grandeapp.com/blog/influencer-marketing-saas-platform",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <InfluencerMarketingStartupsPage />
      </main>
      <Footer />
    </div>
  );
}
