'use client';

import Header from "components/Header";
import HeroBrand from "components/HeroBrand";
import Section from "components/Section";
import Footer from "components/Footer";
// import MyPage from "components/Creators";

import BrandAccordion from "components/QABrand";
import BrandHowItWorks from "components/BrandHIW";

import USAb from "components/USAbuy";
import  BrandValueShowcase from "components/BrandResults";
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure



export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">



      <Header />
  
      <main>
        <HeroBrand />
        <BrandValueShowcase />
                <BrandHowItWorks />

        {/* <Features /> */}
         <USAb /> 

        <PredictableHero/>
     

   
  <Section
  leftHalf={<BrandAccordion />}
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
