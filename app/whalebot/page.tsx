import Header from "components/Header";
import Whaleboti from "components/Whalebotinvest";
import Footer from "components/Footer";

import { Metadata } from 'next';
import Script from 'next/script';

// Dynamic metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Best Crypto Trading Bot With a Hedge Fund Advantage",
  description:
    "Automatically manage your wrapped bitcoin trading bot strategy and other digital assets using well-tested crypto hedge fund quant strategies.",
  keywords: [
    "crypto trading bot",
    "trading bot crypto",
    "trading bots",
    "crypto profit bot",
    "bitcoin trading bot strategy",
    "do crypto trading bots work",
    "bitcoin trading bot",
    "crypto hedge fund"
  ],
  openGraph: {
    title: "Crypto Calculator – Convert BTC, ETH, XMR to Fiat Instantly",
    description:
    "Automatically manage your bitcoin trading bot strategy and other digital asset strategies using well-tested crypto hedge fund quant strategies.",
    url: "https://numerobook.com/whalebot",
    images: [
      {
        url: "https://numerobook.com/public/OIG-19.jpg",
        width: 1200,
        height: 630,
        alt: "Buy Crypto Rwanda MTN Mobile Money",
      },
    ],
    siteName: "Numerobook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Crypto with MTN Mobile Money Rwanda on Numerobook",
    description:
      "Numerobook lets you trade crypto directly using MTN Mobile Money Rwanda.",
    images: ["https://numerobook.com/public/OIG-19.jpg"],
  },
  alternates: {
    canonical: "https://numerobook.com/whalebot",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-1 py-8"> {/* Ensures main section takes available space */}
        <Whaleboti />
        {/* <Hero />
        <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
