import Header from "components/Header";
import LowestFeeExchangePage from "components/TopKenya";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kenya",
  description:
    "GrandeApp helps brands and agencies scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.",
  keywords: [
    "influencer marketing Kenya",
    "ugc creators Kenya",
    "podcast partnerships Kenya",
    "creator economy Kenya",
    "brand deals Kenya",
    "ai marketing",
    "scale with creators",
    "creator campaigns Kenya",
    "GrandeApp platform Kenya",
    "Influencer Marketing Platform in Kenya"
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://www.grandeapp.com/influencer-kenya",
  },
  openGraph: {
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kenya",
    description:
      "GrandeApp connects brands with influencers, UGC, and podcast creators worldwide. Powered by AI, we help you launch high-performing campaigns without the overhead.",
    url: "https://www.grandeapp.com/influencer-kenya",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kenya",
      },
    ],
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: The Best UGC Creator & Influencer Marketing Platform in Kenya",
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
                name: "Kenya",
                item: "https://www.grandeapp.com/influencer-kenya",
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
