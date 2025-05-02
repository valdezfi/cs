import Header from "components/Header";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';
import BuyCrypto from 'components/Rwandablog'

export const metadata: Metadata = {
  title: 'Buy Crypto with MTN Mobile Money Rwanda on Numerobook',
  description: 'Learn how to buy crypto peer-to-peer using MTN Mobile Money Rwanda with Numerobook.',
  keywords: ['mtn mobile money rwanda', 'mtn rwanda'],
  openGraph: {
    title: 'Buy Crypto with MTN Mobile Money Rwanda on Numerobook',
    description: 'Use Numerobook to buy crypto directly from locals in Rwanda using MTN Mobile Money.',
    url: 'https://numerobook.com/rwanda',
    images: [
      {
        url: 'https://numerobook.com/public/crypto-mtn-mobile-money.jpg',
        width: 1200,
        height: 630,
        alt: 'Buy Crypto Rwanda MTN Mobile Money',
      },
    ],
    siteName: 'Numerobook',
    locale: 'en_RW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Crypto with MTN Mobile Money Rwanda on Numerobook',
    description: 'Numerobook lets you trade crypto directly using MTN Mobile Money Rwanda.',
    images: ['https://numerobook.com/public/crypto-mtn-mobile-money.jpg'],
  },
  alternates: {
    canonical: 'https://numerobook.com/rwanda',
  },
};

export default function RwandaBuyCryptoPage() {
  return (
    <>
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
                name: 'Buy Crypto Rwanda',
                item: 'https://numerobook.com/rwanda',
              },
            ],
          }),
        }}
      />
  
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        {/* <Hero /> */}
      
        <BuyCrypto/>
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );

    </>
  );
}


