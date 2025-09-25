import Header from "components/Header";
import LowestFeeExchangePage from "components/TopLithuania";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Influencer Marketing Lithuania",
  description:

"Work with creators across Lithuania to launch authentic, high-impact campaigns powered by UGC and influencer collaborations.",
  keywords: [
    "influencer marketing Lithuania",
    "UGC creators Lithuania",
    "podcast partnerships Lithuania",
    "brand deals Lithuania",
    "AI marketing Lithuania",
    "scale with creators Lithuania",
    "GrandeApp platform Lithuania",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://grandeapp.com/lithuania",
  },
  openGraph: {
    title: "Grande: Influencer Marketing Lithuania",
    description:
      "GrandeApp connects Lithuanian brands with influencers, UGC, and podcast creators. Powered by AI, we help you launch high-performing campaigns efficiently.",
    url: "https://grandeapp.com/lithuania",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform in Lithuania",
      },
    ],
    type: "website",
    locale: "en_LT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: Influencer Marketing Lithuania",
    description:
      "GrandeApp helps Lithuanian brands grow with influencers, UGC, and podcast creators—powered by AI.",
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
                name: "Lithuania",
                item: "https://grandeapp.com/lithuania",
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
