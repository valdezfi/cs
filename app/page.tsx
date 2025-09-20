import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";

import SupademoEmbed from "components/Demo";
import SupademoEmbed2 from "components/Demo2";

import SupademoEmbed3 from "components/Demo3";

// import USAb from "components/USAbuy";
import { Metadata } from 'next';
import BrandShowcase from "components/Brandshowcase";
// import Creator from "components/ContentCreator"; // adjust the path based on your folder structure
import PredictableHero from "components/Predictable"; // adjust the path based on your folder structure

import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
import AiHero from "components/Ai"; // adjust the path based on your folder structure



export const metadata: Metadata = {
  title: 'Grow with Top Creators | GrandeApp USA, LATAM, Europe & Beyond',
  description:
    'GrandeApp helps brands and agencies scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent.',
  keywords: [
  'influencer marketing',
  'ugc creators',
  'affiliate marketing in mexico',
  'mercado libre venezuela',
  'shein shipping argentina',
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
