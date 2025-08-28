
import Header from "components/Header";
import HeroPayments from "components/HeroPayments";
import Section from "components/Section";
import Footer from "components/Footer";

import PaymentsAccordion from "components/QApayments";


import USAb from "components/USAbuy";
// import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';
import  PaymentValueShowcase from "components/PaymentResult";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure
import PaymentHowItWorks from "components/PaymentHIW"; // adjust the path based on your folder structure



export const metadata: Metadata = {
  title: 'Grow with Top Creators | GrandeApp USA, LATAM, Europe & Beyond',
  description:
    'GrandeApp helps brands and agencies scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.',
  keywords: [
    'influencer marketing',
    'ugc creators',
    'podcast partnerships',
    'creator economy',
    'brand deals',
    'ai marketing',
    'scale with creators',
    'creator campaigns USA',
    'creator campaigns LATAM',
    'GrandeApp platform',
  ],
  authors: [{ name: 'GrandeApp' }],
  alternates: {
    canonical: 'https://www.grandeapp.com',
  },
  openGraph: {
    title: 'Scale Your Marketing with Top Creators | GrandeApp',
    description:
      'GrandeApp connects brands with influencers, UGC, and podcast creators worldwide. Powered by AI, we help you launch high-performing campaigns without the overhead.',
    url: 'https://www.grandeapp.com',
    siteName: 'GrandeApp',
    images: [
      {
        url: 'https://www.grandeapp.com/images/logo.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'GrandeApp Creator Marketing Platform',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale with Creators | GrandeApp',
    description:
      'GrandeApp helps brands and agencies grow with influencers, UGC, and podcast creators—powered by AI.',
    images: ['https://www.grandeapp.com/images/logo.png'], // replace with your actual OG image
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
  id="twitter-meta-tags"
  type="application/ld+json"
  strategy="afterInteractive"
dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Grow with Top Creators | GrandeApp",
    description:
      "GrandeApp helps brands and agencies scale by connecting them with top creators—Influencers, UGC, and Podcasts—powered by AI.",
    image: "https://www.grandeapp.com/images/logo.png", // update with your real OG image
    mainEntityOfPage: "https://www.grandeapp.com",
  }),
}}
/>



      <Header />
  
      <main>
        <HeroPayments />
        <PaymentValueShowcase />
                <PaymentHowItWorks />

        {/* <Features /> */}
         <USAb /> 
        
        <PredictableHero/>
      

   
<Section
  leftHalf={<PaymentsAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Built for freelancers, brands, and creators who run campaigns that pay.
      </h2>
      <p className="text-xl font-light">
        From shipping products to releasing payments — Grande makes it easy to manage influencer gifting, approve content, and handle payouts without email chains or spreadsheets. Perfect for fast-moving teams and solo operators alike.
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
