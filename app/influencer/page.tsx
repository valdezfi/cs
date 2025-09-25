import Header from "components/Header";
import HeroInfluencer from "components/HeroInfluencer";
import Section from "components/Section";
import Footer from "components/Footer";

import InfluencerAccordion from "components/QAinfluencer";


import USAb from "components/USAbuy";
// import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';
import  InfluenerValueShowcase from "components/InfluencerResult";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure
import InfluenerHowItWorks from "components/InfluencerHIW"; // adjust the path based on your folder structure


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
  
      <main>
        <HeroInfluencer />
        <InfluenerValueShowcase />
                <InfluenerHowItWorks />

        {/* <Features /> */}
         <USAb /> 
         
        <PredictableHero/>
   

   
<Section
  leftHalf={<InfluencerAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Grande helps you grow, earn, and stay in control.
      </h2>
      <p className="text-xl font-light">
        Whether you're creating full-time or just getting started, Grande gives you the tools to monetize your content and land brand deals—on your terms.
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
