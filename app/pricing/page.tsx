import Header from "components/Header";
import Footer from "components/Footer";
import PricingPlans from "components/PricingPlan";
import PricingPlansc from "components/PricePlanCreator";

import PricingAccordion  from "components/QApricing";


import { Metadata } from 'next';
import Script from 'next/script';
import Section from "components/Section";

export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
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
