import Header from "components/Header";
import Footer from "components/Footer";
import PricingPlans from "components/PricePlanCreator";
import PricingAccordion  from "components/QAcreatorPricing";


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
    image: "https://www.grandeapp.com/images/logo.png", // update with your real OG image
    mainEntityOfPage: "https://www.grandeapp.com",
  }),
}}
/>



      <Header />
  <PricingPlans/>

      <main>
   

        {/* <Features /> */}
<Section
  leftHalf={<PricingAccordion />}
  rightHalf={
    <div className="flex flex-col justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Transparent Pricing for UGC Creators, Podcasters & Influencers
      </h2>
      <p className="text-xl font-light mb-4">
        Whether you're just starting out or building your empire, Grande gives you AI tools and opportunities to grow, collaborate, and earn — on your terms.
      </p>
      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base sm:text-lg">
        <li>✅ Free tier to explore and connect with brands</li>
        <li>✅ Creator Pro starts at $49/month — unlock full AI access</li>
        <li>✅ Cancel or pause anytime — no contracts or hidden fees</li>
        <li>✅ Perfect for solo creators, small teams & side hustlers</li>
      </ul>
    </div>
  }
/>










  
      </main>
      <Footer />
    </div>
  );
}
