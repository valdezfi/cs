import Header from "components/Header";
import LowestFeeExchangePage from "components/TopBahrain";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  title: "Grande: The Leading UGC Creator & Influencer Marketing Platform in Bahrain",
  description:
      "Whether you're a startup in Manama or a regional brand expanding across the Gulf, Grande helps you collaborate with Bahraini creators who spark authentic engagement and deliver premium content.",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Digital Ecommerce Marketing in bahrain",
    "e-commerce marketing manager in bahrain",
    "ecommerce marketing tools",
    "e-commerce marketing agency bahrain",
    "e-commerce marketing and advertising in bahrain",
    "e-commerce marketing bahrain",
    "shopping influencers bahrain",
    "content creation in bahrain",
    "brand marketing in bahrain",
"Influencers in bahrain",

  
  ],
  openGraph: {
    title: "Grande: The Leading UGC Creator & Influencer Marketing Platform in Bahrain",
    description:
      "Whether you're a startup in Manama or a regional brand expanding across the Gulf, Grande helps you collaborate with Bahraini creators who spark authentic engagement and deliver premium content.",
    url: "https://www.grandeapp.com/bahrain",
    images: [
      {
        url: "https://grandeapp.com/images/bahrain.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Argentina – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: The Leading UGC Creator & Influencer Marketing Platform in Bahrain",
    description:
      "Whether you're a startup in Manama or a regional brand expanding across the Gulf, Grande helps you collaborate with Bahraini creators who spark authentic engagement and deliver premium content.",
    images: [
      "https://grandeapp.com/images/bahrain.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/bahrain",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://grandeapp.com"),
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
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://grandeapp.com',

              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Top USA Crypto Exchange',
                item: 'https://grandeapp.com/bahrain',
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
