import Header from "components/Header";
import LowestFeeExchangePage from "components/TopRwanda";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Influencer Marketing Platform in Rwanda",
  description:
    "Whether you're a startup or an established brand in Rwanda, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
  keywords: [
    "influencer marketing Rwanda",
    "UGC creators Rwanda",
    "podcast partnerships Rwanda",
    "brand deals Rwanda",
    "AI marketing Rwanda",
    "scale with creators Rwanda",
    "GrandeApp platform Rwanda",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://grandeapp.com/rwanda" },
  openGraph: {
    title: "Influencer Marketing Platform in Rwanda",
    description:
    "Whether you're a startup or an established brand in Rwanda, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
    url: "https://grandeapp.com/rwanda",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: UGC Creator & Influencer Marketing in Rwanda",
      },
    ],
    type: "website",
    locale: "en_RW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Platform in Rwanda",
    description:
    "Whether you're a startup or an established brand in Rwanda, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
    images: ["https://grandeapp.com/images/logo.png"],
  },
  robots: { index: true, follow: true },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://grandeapp.com" },
              { "@type": "ListItem", position: 2, name: "Rwanda", item: "https://grandeapp.com/rwanda" },
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
