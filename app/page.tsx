import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";

// import SupademoEmbed from "components/Demo";
// import SupademoEmbed2 from "components/Demo2";
import ProductExplanation from "components/Help";
// import SocialCampaignExplanation from "components/SM";

// import SupademoEmbed3 from "components/Demo3";
// import AICampaignAssistantPage from "components/aiAgent";

import USAb from "components/USAbuy";
import { Metadata } from "next";
// import BrandShowcase from "components/Brandshowcase";
// import Creator from "components/ContentCreator"; 
// import PredictableHero from "components/Predictable"; 

// import CreatorSpotlight from "components/ShowCreator"; 
// import AiHero from "components/Ai"; 


export const metadata: Metadata = {
  title: 'Manage Cannabis Waste Operations & Compliance | COfuncion',
  description:
    'COfuncion helps dispensaries, cultivators, processors, and other cannabis operators plan, track, and manage waste operations, compliance, and reporting with AI-powered insights and automation.',
  keywords: [
    'cannabis waste management',
    'cannabis compliance',
    'AI cannabis operations',
    'cannabis pickups',
    'operator insights',
  ],
  authors: [{ name: 'COfuncion' }],
  alternates: {
    canonical: 'https://cofuncion.com/',
  },
  openGraph: {
    title: 'Manage Cannabis Waste Operations & Compliance | COfuncion',
    description:
      'Use COfuncion to schedule, optimize, and monitor cannabis waste operations, compliance, and reporting across dispensaries, cultivators, and processors with AI-powered insights.',
    url: 'https://cofuncion.com/',
    siteName: 'COfuncion',
    images: [
      {
        url: 'https://cofuncion.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'COfuncion Cannabis Waste Management',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manage Cannabis Waste Operations & Compliance | COfuncion',
    description:
      'Plan, track, and optimize cannabis waste operations and compliance workflows using COfuncion’s AI platform for cannabis operators.',
    images: ['https://cofuncion.com/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col ">
      <Header />
  
      <main>
        <Hero />
        {/* <AICampaignAssistantPage/> */}
        {/* <SupademoEmbed/> */}
        <ProductExplanation/>
        {/* <SocialCampaignExplanation/> */}

        <USAb /> 

        {/* <SupademoEmbed2 /> */}
        {/* <BrandShowcase /> */}
        {/* <Features /> */}
        {/* <SupademoEmbed3 /> */}
        {/* <AiHero/> */}

        {/* <Section
          leftHalf={<Creator />}
          rightHalf={
            <div className="flex flex-col justify-end">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
               Our AI will help you scale your cannabis operations.
             </h2>
            </div>
          }
        /> */}
        {/* <PredictableHero/> */}
      </main>

      <Footer />
    </div>
  );
}
