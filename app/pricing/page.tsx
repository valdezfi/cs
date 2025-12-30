import Header from "components/Header";
import Footer from "components/Footer";
import PricingPlans from "components/PricingPlan";
import PricingPlansc from "components/PricePlanCreator";

import PricingAccordion  from "components/QApricing";


import { Metadata } from 'next';
import Script from 'next/script';
import Section from "components/Section";


export const metadata: Metadata = {
  title: 'COfuncion | AI‑Powered OTT and Social Media Campaign Engine',
  description:
    'COfuncion helps brands, agencies, and marketers launch, optimize, and measure OTT and social media ad campaigns with AI‑driven insights and reporting.',
  keywords: [
    'OTT advertising',
    'AI campaign engine',
    'streaming ad optimization',
    'audience insights',
    'OTT campaign reporting',
    'AI ad tools',
  ],
  authors: [{ name: 'COfuncion' }],
  alternates: {
    canonical: 'https://cofuncion.com/',
  },
  openGraph: {
    title: 'COfuncion — Scale Your OTT Ad Campaigns with AI',
    description:
      'COfuncion provides powerful AI tools for planning, optimizing, and reporting OTT ad campaigns across streaming platforms for brands and agencies.',
    url: 'https://cofuncion.com/',
    siteName: 'COfuncion',
    images: [
      {
        url: 'https://cofuncion.com/images/logo.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'COfuncion OTT AI Campaign Engine',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launch & Optimize OTT Campaigns with AI | COfuncion',
    description:
      'Leverage AI‑powered audience insights, campaign automation, and reporting to drive results with your OTT advertising strategy.',
    images: ['https://cofuncion.com/images/logo.png'], // replace with relevant OG image
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
    image: "https://grandeapp.com/images/logo.png", // update with your real OG image
    mainEntityOfPage: "https://grandeapp.com",
  }),
}}
/>



      <Header />
  <PricingPlans/>
<PricingPlansc/>
      <main>
   

     <Section
  leftHalf={<PricingAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        COfuncion OTT Campaign Pricing
      </h2>
      <p className="text-xl font-light mb-4">
        Launch and scale OTT campaigns with COfuncion by Grande. Choose your tier, set your budget, and let AI handle creator selection, content optimization, and ad performance — all in one platform.
      </p>
      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base sm:text-lg">
        <li>✅ Starter: $3k/month (AI-powered, minimum ad spend $2k)</li>
        <li>✅ Pro: $5k/month (premium UGC + influencer content, minimum ad spend $5k)</li>
        <li>✅ Enterprise: Custom pricing with dedicated AI workflows and account manager, minimum ad spend $5k+</li>
        <li>✅ AI optimizes campaigns at every stage: targeting, creative, and budget allocation</li>
        <li>✅ Fully transparent — no hidden fees, cancel or upgrade anytime</li>
      </ul>
    </div>
  }
/>








  
      </main>
      <Footer />
    </div>
  );
}
