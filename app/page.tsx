import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";

// import SupademoEmbed from "components/Demo";
// import SupademoEmbed2 from "components/Demo2";
import ProductExplanation from "components/Help";
import SocialCampaignExplanation from "components/SM";

// import SupademoEmbed3 from "components/Demo3";
// import AICampaignAssistantPage from "components/aiAgent";

import USAb from "components/USAbuy";
import { Metadata } from 'next';
// import BrandShowcase from "components/Brandshowcase";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
// import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure

// import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
// import AiHero from "components/Ai"; // adjust the path based on your folder structure



export const metadata: Metadata = {
  title: 'Manage OTT and Social Media AD Campaigns | COfuncion AI Campaign Engine',
  description:
    'COfuncion allows brands and agencies to plan, launch, and manage OTT and social media ad campaigns with AI-powered optimization, scheduling, and targeting tools.',
  keywords: [
    'OTT campaign management',
    'AI ad optimization',
    'streaming platform ads',
    'audience targeting OTT',
    'campaign automation',
  ],
  authors: [{ name: 'COfuncion' }],
  alternates: {
    canonical: 'https://cofuncion.com/',
  },
  openGraph: {
    title: 'Manage Your OTT Campaigns with AI | COfuncion',
    description:
      'Use COfuncion’s AI-powered platform to schedule, optimize, and monitor OTT campaigns across streaming platforms with actionable insights.',
    url: 'https://cofuncion.com/',
    siteName: 'COfuncion',
    images: [
      {
        url: 'https://cofuncion.com/images/logo.png', // replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'COfuncion OTT Campaign Management',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manage OTT Campaigns with AI | COfuncion',
    description:
      'Plan, launch, and optimize OTT ad campaigns using AI-driven insights and tools from COfuncion.',
    images: ['https://cofuncion.com/images/logo.png'], // replace with OG image
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">






      <Header />
  
      <main>
        <Hero />
        {/* <AICampaignAssistantPage/> */}
        {/* <SupademoEmbed/> */}
        <ProductExplanation/>

<SocialCampaignExplanation/>
    {/* <h1
  className="mt-24 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
  bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
  drop-shadow-xl text-center"
>
  Published Campaign
</h1> */}
         <USAb /> 

{/* <SupademoEmbed2 /> */}
        {/* <BrandShowcase /> */}
        {/* <Features /> */}
        {/* < SupademoEmbed3 /> */}
{/* <AiHero/> */}

           {/* <Section
          leftHalf={<Creator />}
          rightHalf={
            <div className="flex flex-col justify-end">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
  Our Ai will help you scale your brand.
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
