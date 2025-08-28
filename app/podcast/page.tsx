import Header from "components/Header";
import HeroPodcaster from "components/HeroPodcast";
import Section from "components/Section";
import Footer from "components/Footer";

import PodcasterAccordion from "components/QApodcast";


import USAb from "components/USAbuy";
// import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';
import  PodcastValueShowcase from "components/PodcastResult";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure
import PodcastHowItWorks from "components/PodcastHIW"; // adjust the path based on your folder structure


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
        <HeroPodcaster />
        <PodcastValueShowcase />
                <PodcastHowItWorks />

        {/* <Features /> */}
         <USAb /> 
        
        <PredictableHero/>
     

   
<Section
  leftHalf={<PodcasterAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Grande helps podcasters grow their show and monetize their voice.
      </h2>
      <p className="text-xl font-light">
        Whether you’re recording from your closet or a full studio, Grande connects you with sponsors, tracks performance, and helps you build income — without giving up creative control.
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
