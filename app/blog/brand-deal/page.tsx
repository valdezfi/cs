import Header from "components/Header";
import BrandDealsForInfluencersPage from "components/BrandDeals";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
 title: "Brand Deals for Influencers: How Micro Influencers Can Win Partnerships",
  description:
    "Learn how micro influencer brand deals and brand deals for influencers are changing the industry. Discover how GrandeApp helps creators land partnerships, affiliate campaigns, and long-term collaborations.",
  keywords: [
    "micro influencer brand deals",
    "brand deals for influencers",
    "affiliate marketing",
    "influencer partnerships",
    "GrandeApp",
  ],
metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/brand-deal",
  },
  openGraph: {
 title: "Brand Deals for Influencers: How Micro Influencers Can Win Partnerships",
  description:
    "Learn how micro influencer brand deals and brand deals for influencers are changing the industry. Discover how GrandeApp helps creators land partnerships, affiliate campaigns, and long-term collaborations.",
  url: "https://grandeapp.com/blog/brand-deal",
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
 title: "Brand Deals for Influencers: How Micro Influencers Can Win Partnerships",
  description:
    "Learn how micro influencer brand deals and brand deals for influencers are changing the industry. Discover how GrandeApp helps creators land partnerships, affiliate campaigns, and long-term collaborations.",
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
              item: "https://grandeapp.com/blog/brand-deal",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <BrandDealsForInfluencersPage/>
      </main>
      <Footer />
    </div>
  );
}