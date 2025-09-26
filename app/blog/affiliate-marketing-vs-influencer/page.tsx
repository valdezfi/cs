import Header from "components/Header";
import AffiliateVsInfluencerBlog from "components/AffiliateMarketingBlog";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "Affiliate Marketing vs Influencer Marketing: What You Need to Know in 2025",
  description: "Understanding the difference between affiliate marketing and influencer marketing is crucial for creators, entrepreneurs, and brands looking to maximize online revenue in 2025. Both strategies can generate income, but the approach, scale, and ROI differ significantly.",
  keywords: ["affiliate marketing vs influencer marketing", "influencer marketing", "affiliate marketing"],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/affiliate-marketing-vs-influencer",
  },
  openGraph: {
  title: "Affiliate Marketing vs Influencer Marketing: What You Need to Know in 2025",
  description: "Understanding the difference between affiliate marketing and influencer marketing is crucial for creators, entrepreneurs, and brands looking to maximize online revenue in 2025. Both strategies can generate income, but the approach, scale, and ROI differ significantly.",
    url: "https://grandeapp.com/blog/affiliate-marketing-vs-influencer",
    images: [
      {
        url: "https://grandeapp.com/images/blogs/100.jpg",
        width: 1200,
        height: 630,
        alt: "Affiliate marketing vs influencer marketing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Marketing vs Influencer Marketing: 2025 Guide",
    description: "Discover the differences between affiliate marketing and influencer marketing, and learn how creators, entrepreneurs, and brands can maximize revenue with GrandeApp in 2025.",
    images: ["https://grandeapp.com/images/blogs/100.jpg"],
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
              name: "100 Day Affiliate Marketing Challenge",
              item: "https://grandeapp.com/blog/affiliate-marketing-vs-influencer",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <AffiliateVsInfluencerBlog />
      </main>
      <Footer />
    </div>
  );
}
