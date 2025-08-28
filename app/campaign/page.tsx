import Header from "components/Header";
import HeroManageCampaign from "components/HeroManage";
import Section from "components/Section";
import Footer from "components/Footer";

import CampaignAccordion from "components/QAcampaign";


import USAb from "components/USAbuy";
import { Metadata } from 'next';
import  CamapaignValueShowcase from "components/CampaignResult";
import CampaignHowItWorks from "components/CampaignHIW"; // adjust the path based on your folder structure

export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
};


export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">







      <Header />
  
      <main>
        <HeroManageCampaign />
        <CamapaignValueShowcase />
                <CampaignHowItWorks />

        {/* <Features /> */}
         <USAb /> 


   
<Section
  leftHalf={<CampaignAccordion />}
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

      </main>
      <Footer />
    </div>
  );
}
