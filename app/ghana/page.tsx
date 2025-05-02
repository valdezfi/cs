import Header from "components/Header";
import BuyBitcoinWithMomoPage from "components/TopGhana";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'How to Buy Bitcoin in Ghana with Momo?',
  description:
    'Learn how to buy Bitcoin in Ghana easily using Momo. Numerobook offers a simple, secure peer-to-peer way to trade crypto with Momo payments and MTN Mobile Money.',
  keywords: [
    'momo',
    'mtn mobile money',
    'buy bitcoin in ghana',
    'how to use momo for bitcoin',
    'ghana crypto exchange',
    'buy bitcoin ghana',
  ],
  authors: [{ name: 'Numerobook' }],
  alternates: {
    canonical: 'https://numerobook.com/ghana', // Ensure this matches the current page
  },
  openGraph: {
    title: 'How to Buy Bitcoin in Ghana with Momo?',
    description:
    'Discover the easiest way to buy Bitcoin in Ghana using Momo and MTN Mobile Money with Numerobook. Enjoy low fees and seamless peer-to-peer trading.',
    url: 'https://numerobook.com/ghana',
    siteName: 'Numerobook',
    images: [
      {
        url: 'https://numerobook.com/public/ghana-crypto.jpg', // Use an image specific to Ghana, or update with a local image
        width: 1200,
        height: 630,
        alt: 'Buying Bitcoin in Ghana with Momo',
      },
    ],
    type: 'website',
    locale: 'en_GH', // Ghana locale
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Buy Bitcoin in Ghana with Momo?',
    description:
      'Easily buy Bitcoin in Ghana using Momo and MTN Mobile Money. Trade securely with Numerobook.',
    images: ['https://numerobook.com/public/ghana-crypto.jpg'],
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
                item: 'https://numerobook.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'How to Buy Bitcoin in Ghana with Momo?',
                item: 'https://numerobook.com/ghana',
              },
            ],
          }),
        }}
      />
      
      <Header />
      <main>
        <BuyBitcoinWithMomoPage />
      </main>
      <Footer />
    </div>
  );
}
