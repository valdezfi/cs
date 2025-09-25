import Header from "components/Header";
import LowestFeeExchangePage from "components/TopIndia";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Influencer Marketing India",
  description:
    "Whether you’re a local startup or a growing brand in India, Grande helps you connect with creators that drive results through authentic content.",
  keywords: [
    "influencer marketing India",
  
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://grandeapp.com/influencer-india",
  },
  openGraph: {
  title: "Grande: Influencer Marketing India",
    description:
    "Whether you’re a local startup or a growing brand in India, Grande helps you connect with creators that drive results through authentic content.",
    url: "https://grandeapp.com/influencer-india",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform in India",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  title: "Grande: Influencer Marketing India",
    description:
    "Whether you’re a local startup or a growing brand in India, Grande helps you connect with creators that drive results through authentic content.",
    images: ["https://grandeapp.com/images/logo.png"],
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
                name: "India",
                item: "https://grandeapp.com/influencer-india",
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
