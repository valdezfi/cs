import Header from "components/Header";
import LowestFeeExchangePage from "components/TopUSA";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Influencer Marketing Platform USA",
  description:
            "Connect with creators in USA and across the USA to build impactful, authentic campaigns powered by UGC and influencer collaborations.",
  keywords: [
    "Influencer Marketing Platform USA",
  
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://www.grandeapp.com/influencer-platform",
  },
  openGraph: {
  title: "Grande: Influencer Marketing Platform USA",
    description:
            "Connect with creators in USA and across the USA to build impactful, authentic campaigns powered by UGC and influencer collaborations.",
    url: "https://www.grandeapp.com/influencer-platform",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  title: "Grande: Influencer Marketing Platform USA",
    description:
            "Connect with creators in USA and across the USA to build impactful, authentic campaigns powered by UGC and influencer collaborations.",
    images: ["https://www.grandeapp.com/images/logo.png"],
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
                item: "https://www.grandeapp.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Influencer Platform",
                item: "https://www.grandeapp.com/influencer-platform",
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        <LowestFeeExchangePage />
      </main>
      <Footer />
    </div>
  );
}
