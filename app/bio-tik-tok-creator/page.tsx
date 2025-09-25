import Header from "components/Header";
import LowestFeeExchangePage from "components/TopPhilippines";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Why use tik tok bio generator?",
  description:
"Whether you're a startup or an established brand in the Philippines, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",

keywords: [
    "tik tok bio idea",
   "tik tok bio generator",
   "tik tok bio link"


  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://grandeapp.com/philippines",
  },
  openGraph: {
    title: "Influencer Marketing in the Philippines",
    description:
"Whether you're a startup or an established brand in the Philippines, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
    url: "https://grandeapp.com/philippines",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: The Best UGC Creator & Influencer Marketing Platform in Philippines",
      },
    ],
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing in the Philippines",
    description:
"Whether you're a startup or an established brand in the Philippines, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.",
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
                name: "Philippines",
                item: "https://grandeapp.com/philippines",
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
