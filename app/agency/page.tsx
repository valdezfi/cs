import Header from "components/Header";
import HeroAgency from "components/HeroAgencies";
import Section from "components/Section";
import Footer from "components/Footer";
// import MyPage from "components/Creators";

import AgencyAccordion from "components/QAagency";

// import MexicoB from "components/Mexicobuy";
// import Indiab from "components/IndiaBuy";
// import Argentinabuynow from "components/Argentinabuy";
// import UBuy from "components/Uruguaybuy";
import USAb from "components/USAbuy";
// import GHbuy from "components/GhanaBuy";
import { Metadata } from 'next';
import Script from 'next/script';
import ValueShowcase from "components/AgencyResults";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure
import AgencyHowItWorks from "components/AgencyHIW"; // adjust the path based on your folder structure


export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
};


export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">







      <Header />
  
      <main>
        <HeroAgency />
        <ValueShowcase />
                <AgencyHowItWorks />

        {/* <Features /> */}
         <USAb /> 
   
        
        <PredictableHero/>
     


   
  <Section
  leftHalf={<AgencyAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Grande gives you the edge you need.
      </h2>
      <p className="text-xl font-light">
        Whether you're a solo entrepreneur or a growing team, Grande helps you scale with confidence.
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
