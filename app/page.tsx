import Header from "components/Header";
import Hero from "components/Hero";
import Section from "components/Section";
import Footer from "components/Footer";

import Accordion from "components/Accordion";

import MexicoB from "components/Mexicobuy";
import Indiab from "components/IndiaBuy";
import Argentinabuynow from "components/Argentinabuy";
import UBuy from "components/Uruguaybuy";
import USAb from "components/USAbuy";
import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Buy Bitcoin with the Lowest Fees | Numerobook USA, LATAM & Africa',
  description:
    'Numerobook is the easiest way to buy and sell Bitcoin with low fees. Access crypto tools, real-time charts, and local payment options like Momo, PayPal, and bank transfer.',
  keywords: [
    'buy bitcoin',
    'sell bitcoin',
    'crypto exchange',
    'lowest fee crypto',
    'peer to peer bitcoin',
    'buy bitcoin with momo',
    'buy crypto usa',
    'crypto trading africa',
    'numerobook exchange',
  ],
  authors: [{ name: 'Numerobook' }],
  alternates: {
    canonical: 'https://numerobook.com',
  },
  openGraph: {
    title: 'Buy Bitcoin with the Lowest Fees | Numerobook',
    description:
      'Trade Bitcoin safely and affordably with Numerobook. Serving users in the USA, LATAM, and Africa with trusted payment methods like MTN Momo and more.',
    url: 'https://numerobook.com',
    siteName: 'Numerobook',
    images: [
      {
        url: '/public/images/OIG-19.jpg', // Ensure this image URL is publicly accessible
        width: 1200,
        height: 630,
        alt: 'Numerobook Crypto Trading Platform',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Bitcoin with the Lowest Fees | Numerobook',
    description:
      'Numerobook makes crypto trading simple across the USA, LATAM, and Africa with local payment options and low fees.',
    images: ['/public/images/OIG-19.jpg'], // Make sure the image path is correct and accessible
  },
  robots: {
    index: true,
    follow: true,
  },
};



import Nigeriab from "components/Nigeriabuy";

export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">



<Script
  id="twitter-meta-tags"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Buy Bitcoin with the Lowest Fees | Numerobook',
      description:
        'Numerobook makes crypto trading simple across the USA, LATAM, and Africa with local payment options and low fees.',
      image: 'public/images/OIG-19.jpg',
      mainEntityOfPage: 'https://numerobook.com',
    }),
  }}
/>



      <Header />
  
      <main>
        <Hero />
        {/* <Features /> */}
        <USAb />
        <Indiab />
        <Argentinabuynow/>

        <MexicoB />
<UBuy/>

<Nigeriab />
<GHbuy/>
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
  Numerobook
</h2>
<p className="text-xl font-light">
  Numerobook is designed to make crypto easy, fast, and accessible for everyone. 
</p>

            </div>
          }
        />
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
