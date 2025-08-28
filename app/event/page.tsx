import Header from "components/Header";
import HeroEvent from "components/HeroEvent";
import Section from "components/Section";
import Footer from "components/Footer";

import EventAccordion from "components/QAevent";


import USAb from "components/USAbuy";
// import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';
import  EventValueShowcase from "components/EventResult";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure
import EventHowItWorks from "components/EventHIW"; // adjust the path based on your folder structure


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
    image: "https://www.grandeapp.com/images/logo.png", // update with your real OG image
    mainEntityOfPage: "https://www.grandeapp.com",
  }),
}}
/>



      <Header />
  
      <main>
        <HeroEvent />
        <EventValueShowcase />
                <EventHowItWorks />

        {/* <Features /> */}
         <USAb /> 
 
        <PredictableHero/>
  

   
<Section
  leftHalf={<EventAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Grande powers unforgettable influencer events — from guest list to ROI.
      </h2>
      <p className="text-xl font-light">
        Whether it’s a VIP dinner, product launch, or creator meetup, Grande helps you invite the right creators, capture viral content, and track event performance — all without spreadsheets or guesswork.
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
