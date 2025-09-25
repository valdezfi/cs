import Header from "components/Header";
import LowestFeeExchangePage from "components/TopBrazil";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: The Best UGC Creator & Influencer Marketing in Brazil",
  description:
"Whether you're a startup or an established brand in Brazil, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",

  keywords: [
    "Influencer Marketing in Brazil",

  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://grandeapp.com/influencers-in-brazil",
  },
  openGraph: {
    title: "Grande: The Best UGC Creator & Influencer Marketing in Brazil",
    description:
"Whether you're a startup or an established brand in Brazil, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
    url: "https://grandeapp.com/influencers-in-brazil",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing  in Brazil",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: The Best UGC Creator & Influencer Marketing  in Brazil",
    description:
"Whether you're a startup or an established brand in Brazil, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
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
                name: "Influencers in Brazil",
                item: "https://grandeapp.com/influencers-in-brazil",
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
