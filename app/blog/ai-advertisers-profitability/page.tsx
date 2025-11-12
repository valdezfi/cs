import Header from "components/Header";
import AiAdvertisersProfitabilityPage from "components/AI-advertisers-profitability";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "How Can AI Help Advertisers Maximize Campaign Profitability",
  description:
    "Discover how AI helps advertisers maximize campaign profitability through creative automation, ecommerce ROI improvement, and intelligent optimization agents.",
  keywords: [
    "How can AI help advertisers maximize campaign profitability",
    "AI advertising tools",
    "AI campaign generator",
    "AI agents",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/ai-advertisers-profitability",
  },
  openGraph: {
    title: "How Can AI Help Advertisers Maximize Campaign Profitability",
    description:
      "Explore how AI transforms ad performance, automates creative testing, and improves profitability for advertisers globally through data-driven intelligence.",
    url: "https://grandeapp.com/blog/ai-advertisers-profitability",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ai-advertisers-profitability.jpg",
        width: 1200,
        height: 630,
        alt: "AI advertising profitability for brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Can AI Help Advertisers Maximize Campaign Profitability",
    description:
      "Learn how AI-powered tools optimize ad spend, creatives, and ecommerce ROI to increase campaign profitability.",
    images: ["https://grandeapp.com/images/blog/ai-advertisers-profitability.jpg"],
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
              name: "How Can AI Help Advertisers Maximize Campaign Profitability",
              item: "https://grandeapp.com/blog/ai-advertisers-profitability",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <AiAdvertisersProfitabilityPage />
      </main>
      <Footer />
    </div>
  );
}
