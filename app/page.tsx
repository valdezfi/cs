import Header from "components/Header";
import Hero from "components/Hero";
import Section from "components/Section";
import Footer from "components/Footer";

import SupademoEmbed from "components/Demo";
import SupademoEmbed2 from "components/Demo2";

import SupademoEmbed3 from "components/Demo3";

// import USAb from "components/USAbuy";
import { Metadata } from 'next';
import BrandShowcase from "components/Brandshowcase";
import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure

import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
import AiHero from "components/Ai"; // adjust the path based on your folder structure



export const metadata: Metadata = {
  title: 'Grow with Top Creators | GrandeApp USA, LATAM, Europe & Beyond',
  description:
    'GrandeApp helps brands and agencies scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.',
  keywords: [
    'influencer marketing',
    'ugc creators',
    'podcast partnerships',
    'creator economy',
    'brand deals',
    'ai marketing',
    'scale with creators',
    'creator campaigns USA',
    'creator campaigns LATAM',
    'grandeApp platform',
    'uruguay',
    'creator campaigns venezuela',
    'marketing de influencers en venezuela',
    'influencers en venezuela',
    'ugc creadores en venezuela',
    'campañas con influencers en LATAM',
        'campañas con ugc creadores  en LATAM',
        

        'creator campaigns uruguay',
    'marketing de influencers en uruguay',
    'influencers en uruguay',
    'ugc creadores en uruguay',
    'campañas con influencers en republica dominicana',
        'campañas con ugc creadores  en republica dominicana',


             'creator campaigns paraguay',
    'marketing de influencers en paraguay',
    'influencers en paraguay',
    'ugc creadores en paraguay',
    'campañas con influencers en paraguay',
        'campañas con ugc creadores  en paraguay',



          'creator campaigns colombia',
    'marketing de influencers en colombia',
    'influencers en colombia',
    'ugc creadores en colombia',
    'campañas con influencers en colombia',
        'campañas con ugc creadores  en colombia',


       
          'creator campaigns chile',
    'marketing de influencers en chile',
    'influencers en chile',
    'ugc creadores en chile',
    'campañas con influencers en chile',
        'campañas con ugc creadores  en chile',

     'creator campaigns argentina',
    'marketing de influencers en argentina',
    'influencers en argentina',
    'ugc creadores en argentina',
    'campañas con influencers en argentina',
        'campañas con ugc creadores  en argentina',



   'creator campaigns mexico',
    'marketing de influencers en mexico',
    'influencers en mexico',
    'ugc creadores en mexico',
    'campañas con influencers en mexico',
        'campañas con ugc creadores  en mexico',

        'creator campaigns el salvador',
    'marketing de influencers en el salvador',
    'influencers en el salvador',
    'ugc creadores en el salvador',
    'campañas con influencers en el salvador',
        'campañas con ugc creadores  en el salvador',
 
             'creator campaigns el brazil',
    'marketing de influencers en el brazil',
    'influencers en brazil',
    'ugc creadores en brazil',
    'campañas con influencers en brazil',
        'campañas con ugc creadores  en brazil',
 
 
 


  ],
  authors: [{ name: 'GrandeApp' }],
  alternates: {
    canonical: 'https://www.grandeapp.com',
  },
  openGraph: {
    title: 'Scale Your Marketing with Top Creators | GrandeApp',
    description:
      'GrandeApp connects brands with influencers, UGC, and podcast creators worldwide. Powered by AI, we help you launch high-performing campaigns without the overhead.',
    url: 'https://www.grandeapp.com',
    siteName: 'GrandeApp',
    images: [
      {
        url: 'https://www.grandeapp.com/images/logo.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'GrandeApp Creator Marketing Platform',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale with Creators | GrandeApp',
    description:
      'GrandeApp helps brands and agencies grow with influencers, UGC, and podcast creators—powered by AI.',
    images: ['https://www.grandeapp.com/images/logo.png'], // replace with your actual OG image
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
        <SupademoEmbed/>
        <CreatorSpotlight/>
<SupademoEmbed2/>
        <BrandShowcase />
        {/* <Features /> */}
         {/* <USAb />  */}
        < SupademoEmbed3 />
<AiHero/>

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
        <PredictableHero/>



      </main>
      <Footer />
    </div>
  );
}
