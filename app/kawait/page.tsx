import Header from "components/Header";
import LowestFeeExchangePage from "components/TopKawait";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kuwait",
  description:
    "GrandeApp helps brands in Kuwait scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.",
  keywords: [
    "influencer marketing Kuwait",
    "UGC creators Kuwait",
    "podcast partnerships Kuwait",
    "brand deals Kuwait",
    "AI marketing Kuwait",
    "scale with creators Kuwait",
    "GrandeApp platform Kuwait",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://www.grandeapp.com/kawait",
  },
  openGraph: {
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kuwait",
    description:
      "GrandeApp connects Kuwaiti brands with influencers, UGC, and podcast creators. Powered by AI, we help you launch high-performing campaigns efficiently.",
    url: "https://www.grandeapp.com/kawait",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kuwait",
      },
    ],
    type: "website",
    locale: "en_KW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kuwait",
    description:
      "GrandeApp helps Kuwaiti brands grow with influencers, UGC, and podcast creators—powered by AI.",
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
                name: "Kuwait",
                item: "https://www.grandeapp.com/kawait",
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
