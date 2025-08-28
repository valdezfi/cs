import Header from "components/Header";
import Hero from "components/Hero";
import Section from "components/Section";
import Footer from "components/Footer";

import Accordion from "components/Accordion";


import USAb from "components/USAbuy";
import { Metadata } from 'next';
import BrandShowcase from "components/Brandshowcase";
import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure



export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
};

export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">






      <Header />
  
      <main>
        <Hero />
        <BrandShowcase />
        
        {/* <Features /> */}
         <USAb /> 
           <Section
          leftHalf={<Creator />}
          rightHalf={
            <div className="flex flex-col justify-end">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
  Our Ai will help you scale your brand.
</h2>
<p className="text-xl font-light">
Modern tool!
  
  
  </p>
            </div>
          }
        />
        <PredictableHero/>
        {/* <Indiab /> */}
        {/* <Argentinabuynow/>

        <MexicoB />  */}
{/* <UBuy/>


   <Section
  leftHalf={<Accordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Grande: The Intelligence Engine for Influencer Marketing
      </h2>
      <p className="text-xl font-light">
        Discover a smarter way to connect with creators, manage campaigns, and drive measurable growth — all from one powerful terminal.
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
