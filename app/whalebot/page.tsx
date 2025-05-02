import Header from "components/Header";
import Whaleboti from "components/Whalebotinvest";
import Footer from "components/Footer";

import { Metadata } from 'next';
import Script from 'next/script';

// SEO and social sharing metadata
export const metadata: Metadata = {
  title: "Best Crypto Trading Bot with a Hedge Fund Advantage | Numerobook",
  description:
    "Use Numerobook's crypto trading bots powered by hedge fund strategies. Optimize your bitcoin trading strategy and automate profits with advanced quant tools.",
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
    title: "Best Crypto Trading Bot with a Hedge Fund Advantage | Numerobook",
    description:
      "Use Numerobook's bitcoin trading bot and quant-driven strategies to manage crypto portfolios like a hedge fund.",
    url: "https://numerobook.com/whalebot",
    images: [
      {
        url: "https://numerobook.com/public/OIG-19.jpg",
        width: 1200,
        height: 630,
        alt: "Best Crypto Trading Bot | Numerobook",
      },
    ],
    siteName: "Numerobook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Trading Bot with a Hedge Fund Advantage | Numerobook",
    description:
      "Automate crypto trading with hedge fund-level strategies. Numerobook bots help maximize your portfolio's performance.",
    images: ["https://numerobook.com/public/OIG-19.jpg"],
  },
  alternates: {
    canonical: "https://numerobook.com/whalebot",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb structured data */}
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
                item: 'https://numerobook.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Whalebot',
                item: 'https://numerobook.com/whalebot',
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="flex-1 py-8">
        <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
          Best Crypto Trading Bot with a Hedge Fund Advantage
        </h1>
        <Whaleboti />
      </main>

      <Footer />
    </div>
  );
}
