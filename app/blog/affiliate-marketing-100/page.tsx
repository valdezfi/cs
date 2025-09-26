import Header from "components/Header";
import AffiliateMarketingBlog from "components/AffiliateMarketingBlog";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
  title: "What Is Affiliate Marketing? A Complete Guide for 2025",
  description: "Affiliate marketing is one of the fastest-growing opportunities for creators, influencers, and entrepreneurs in 2025.",
  keywords: ["affiliate marketing", "100 day challenge", "GrandeApp"],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/affiliate-marketing-100",
  },
  openGraph: {
    title: "What Is Affiliate Marketing? A Complete Guide for 2025",
  description: "Affiliate marketing is one of the fastest-growing opportunities for creators, influencers, and entrepreneurs in 2025.",
    url: "https://grandeapp.com/blog/affiliate-marketing-100",
    images: [
      {
        url: "https://grandeapp.com/images/blogs/100.jpg",
        width: 1200,
        height: 630,
        alt: "Affiliate marketing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Affiliate Marketing? A Complete Guide for 2025",
  description: "Affiliate marketing is one of the fastest-growing opportunities for creators, influencers, and entrepreneurs in 2025.",
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
              item: "https://grandeapp.com/blog/affiliate-marketing-100",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <AffiliateMarketingBlog />
      </main>
      <Footer />
    </div>
  );
}
