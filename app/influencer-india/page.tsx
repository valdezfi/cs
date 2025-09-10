import Header from "components/Header";
import LowestFeeExchangePage from "components/TopIndia";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: The Best UGC Creator & Influencer Marketing Platform in India",
  description:
    "GrandeApp helps brands and agencies scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.",
  keywords: [
    "influencer marketing",
    "ugc creators",
    "podcast partnerships",
    "creator economy India",
    "brand deals",
    "ai marketing",
    "scale with creators",
    "creator campaigns India",
    "GrandeApp platform India",
    "Influencer Marketing Platform in India"
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://www.grandeapp.com/influencer-india",
  },
  openGraph: {
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in India",
    description:
      "GrandeApp connects brands with influencers, UGC, and podcast creators worldwide. Powered by AI, we help you launch high-performing campaigns without the overhead.",
    url: "https://www.grandeapp.com/influencer-india",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
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
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in India",
    description:
      "GrandeApp helps brands and agencies grow with influencers, UGC, and podcast creators—powered by AI.",
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
                name: "India",
                item: "https://www.grandeapp.com/influencer-india",
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
