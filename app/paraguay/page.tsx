import Header from "components/Header";
import LowestFeeExchangePage from "components/TopParaguay";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

// Metadata configuration
export const metadata: Metadata = {
  title: 'Crypto Exchange with Lowest Fees | Numerobook USA',
  description:
    'Discover how Numerobook offers the lowest crypto trading fees in the USA. Use our BTC calculator, cointracking tools, and bitcoin converter for smarter, cheaper trades.',
  keywords: ['bitcoin converter', 'crypto calculator', 'Lowest Fee Crypto Exchange'],
  authors: [{ name: 'Numerobook' }],
  alternates: {
    canonical: 'https://numerobook.com/paraguay',
  },
  openGraph: {
    title: 'Crypto Exchange with Lowest Fees | Numerobook USA',
    description:
      'Trade crypto with the lowest fees in the USA using Numerobook. Buy Bitcoin with 0% fees, sell for just 1%, and use tools like our BTC calculator and cointracking dashboard.',
    url: 'https://numerobook.com/usa',
    siteName: 'Numerobook',
    images: [
      {
        url: 'https://numerobook.com/images/OIG-19.jpg',
        width: 1200,
        height: 630,
        alt: 'Lowest Fee Crypto Exchange USA',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Exchange with Lowest Fees | Numerobook USA',
    description:
      'Trade crypto with the lowest fees in the USA using Numerobook. Tools like BTC calculator, cointracking, and more.',
    images: ['/images/blog/pexels-ramilugot-3217363.jpg"'],
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
                item: 'https://grandeapp.com/paraguay',
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
