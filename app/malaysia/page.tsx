import Header from "components/Header";
import LowestFeeExchangePage from "components/TopMal";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Influencer Marketing Malaysia",
  description:
            "Whether you're a brand in Kuala Lumpur, Penang, or Johor Bahru, Grande helps you partner with local creators who drive real engagement and craft high-quality, culturally relevant content.",
  keywords: [
    "influencer marketing Malaysia",
    "UGC creators Malaysia",
    "podcast partnerships Malaysia",
    "brand deals Malaysia",
    "AI marketing Malaysia",
    "scale with creators Malaysia",
    "GrandeApp platform Malaysia",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://grandeapp.com/malaysia",
  },
  openGraph: {
  title: "Grande: Influencer Marketing Malaysia",
    description:
            "Whether you're a brand in Kuala Lumpur, Penang, or Johor Bahru, Grande helps you partner with local creators who drive real engagement and craft high-quality, culturally relevant content.",
    url: "https://grandeapp.com/malaysia",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform in Malaysia",
      },
    ],
    type: "website",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
  title: "Grande: Influencer Marketing Malaysia",
    description:
            "Whether you're a brand in Kuala Lumpur, Penang, or Johor Bahru, Grande helps you partner with local creators who drive real engagement and craft high-quality, culturally relevant content.",
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
                name: "Malaysia",
                item: "https://grandeapp.com/malaysia",
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
