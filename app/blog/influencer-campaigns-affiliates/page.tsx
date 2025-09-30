import Header from "components/Header";
import InfluencerMarketingCampaignsAffiliates from "components/InfluencerMarketingCampaignsAffiliates";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "Influencer Marketing Campaigns: Affiliates & Partnerships",
  description:
    "Discover how influencer marketing campaigns can combine affiliates and traditional partnerships to drive growth, boost conversions, and scale your brand with GrandeApp.",
  keywords: [
    "influencer marketing campaigns",
    "affiliate marketing",
    "brand partnerships",
    "nano influencers",
    "GrandeApp",
  ],metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/influencer-campaigns-affiliates",
  },
  openGraph: {
  title: "Influencer Marketing Campaigns: Affiliates & Partnerships",
  description:
    "Discover how influencer marketing campaigns can combine affiliates and traditional partnerships to drive growth, boost conversions, and scale your brand with GrandeApp.",
  url: "https://grandeapp.com/blog/influencer-campaigns-affiliates",
    images: [
      {
        url: "https://grandeapp.com/images/blog/what-is-a-ugc-creator.jpg",
        width: 1200,
        height: 630,
        alt: "Affiliate marketing vs influencer marketing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Marketing Campaigns: Affiliates & Partnerships",
  description:
    "Discover how influencer marketing campaigns can combine affiliates and traditional partnerships to drive growth, boost conversions, and scale your brand with GrandeApp.",
   images: ["https://grandeapp.com/images/blog/what-is-a-ugc-creator.jpg"],
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
              name: "Affiliate Marketing vs Influencer Marketing: What You Need to Know in 2025",
              item: "https://grandeapp.com/blog/influencer-campaigns-affiliates",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <InfluencerMarketingCampaignsAffiliates/>
      </main>
      <Footer />
    </div>
  );
}
