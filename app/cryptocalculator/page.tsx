import Header from "components/Header";
import AmountInput from "components/CryptoCalculator";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

// Dynamic metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Crypto Calculator – Convert BTC, ETH, XMR to Fiat Instantly",
  description:
    "Crypto Calculator: BTC, ETH, USDT, and XMR to USD, EUR, MXN, and more. Accurate crypto-to-fiat rates using the Crypto Calculator",
  keywords: [
    "monero calculator",
    "crypto calculator",
    "monero to usd",
    "xmr chart calculator",
    "bitcoin calculator",
    "bitcoin converter",
    "tether calculator",
    "usd to usdt",
    "tether fees",
  ],
  openGraph: {
    title: "Crypto Calculator – Convert BTC, ETH, XMR to Fiat Instantly",
    description:
      "Crypto Calculator: BTC, ETH, USDT, and XMR to USD, EUR, MXN, and more. Accurate crypto-to-fiat rates using the Crypto Calculator",
    url: "https://numerobook.com/cryptocalculator",
    images: [
      {
        url: "public/images/OIG-19.jpg",
        width: 1200,
        height: 630,
        alt: "Buy Crypto Rwanda MTN Mobile Money",
      },
    ],
    siteName: "Numerobook",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Crypto with MTN Mobile Money Rwanda on Numerobook",
    description:
      "Numerobook lets you trade crypto directly using MTN Mobile Money Rwanda.",
    images: ["https://numerobook.com/images/OIG-19.jpg"],
  },
  alternates: {
    canonical: "https://numerobook.com/cryptocalculator",
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
                item: "https://numerobook.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Crypto Calculator",
                item: "https://numerobook.com/cryptocalculator",
              },
            ],
          }),
        }}
      />

      <Header />
 
      <main>
        <AmountInput />
      </main>

      <Footer />
    </div>
  );
}
