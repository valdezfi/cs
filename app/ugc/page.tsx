import Header from "components/Header";
import HeroUGCCreator from "components/HeroUGC";
import Section from "components/Section";
import Footer from "components/Footer";

import UGCAccordion from "components/QAugc";


import USAb from "components/USAbuy";
// import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';
import  UGCValueShowcase from "components/UGCResults";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure
import UGCHowItWorks from "components/UGCHIW"; // adjust the path based on your folder structure

export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
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
        'Numerobook makes crypto trading simple across the USA, LATAM, India, Africa, and beyond with local payment options and low fees.',
      image: 'https://numerobook.com/images/OIG-19.jpg',
      mainEntityOfPage: 'https://numerobook.com',
    }),
  }}
/>



      <Header />
  
      <main>
        <HeroUGCCreator />
        <UGCValueShowcase />
                <UGCHowItWorks />

        {/* <Features /> */}
         <USAb /> 
           {/* <Section
          leftHalf={<Creator />}
          rightHalf={
            <div className="flex flex-col justify-end">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
  Our Ai will help you scale your brand
</h2>
<p className="text-xl font-light">
  Numerobook is designed to make crypto easy, fast, and accessible for everyone. 
</p>
            </div>
          }
        /> */}
        <PredictableHero/>
        {/* <Indiab /> */}
        {/* <Argentinabuynow/>

        <MexicoB />  */}
{/* <UBuy/>

<Nigeriab />
<GHbuy/> */}

   
<Section
  leftHalf={<UGCAccordion />}
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
