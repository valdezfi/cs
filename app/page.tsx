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
    'GrandeApp helps brands and agencies scale with AI by connecting them to top creators—Influencers, UGC, and Podcast talent. Launch paid ads or grow organically with an AI-powered marketing co-pilot.',
  keywords: [
    'influencer marketing', 
    'ugc creators',
    'hotel en ciudad de mexico',
    'renta de autos en mexico',
    'ranking de universidades en mexico',
    'hotel en cd de mexico',
    'agencias de marketing digital en mexico',
    'cómo funciona marketing digital',
    'ad',
    'mercado libre santo domingo',
    'corotos empleo santo domingo',
    'marketplace santo domingo',
    'santo domingo blue mall',
    'codigo postal santo domingo este',
    'santo domingo oeste',
    'agencias de marketing digital santo domingo',
        'agencias de marketing digital en republica dominicana',
        'marketing digital en español',
    'las mejores agencias de marketing digital en méxico',
    'cómo crear una agencia de marketing en redes sociales',
    'empresas de marketing digital en méxico',
    'seven mx',
    'mx gear',
    'latin american market',
    'boletos de avion para mexico',
    'telecomunicaciones',
    'numero de mexico para whatsapp',
    'mx sports',
    'mx store',
    'podcast partnerships',
    'creator economy',
    'brand deals',
    'mexican marketing firms',
    'ai marketing',
    'scale with creators',
    'creator campaigns USA',
    'creator campaigns LATAM',
    'grandeApp platform',
    'uruguay',
    'affiliate marketing with ppc',
    'affiliate marketing in mexico',
    'creator campaigns venezuela',
    'marketing de influencers en venezuela',
    'influencers en venezuela',
    'affiliate marketing side hustle',
    'ugc creadores en venezuela',
    'campañas con influencers en LATAM',
        'campañas con ugc creadores  en LATAM',
        'affiliate marketing software for small teams',
'easy affiliate tracking for influencers',
        'creator campaigns uruguay',
    'marketing de influencers en uruguay',
    'affiliate marketing in digital marketing',
    'influencers en uruguay',
    'ugc creadores en uruguay',
    'campañas con influencers en republica dominicana',
        'campañas con ugc creadores  en republica dominicana',
'track affiliate sales without cookies',
'affiliate marketing platform for LATAM creators',
             'creator campaigns paraguay',
    'marketing de influencers en paraguay',
    'influencers en paraguay',
    'ugc creadores en paraguay',
    'campañas con influencers en paraguay',
        'campañas con ugc creadores  en paraguay',

'jet set santo domingo',

          'creator campaigns colombia',
    'marketing de influencers en colombia',
    'influencers en colombia',
    'ugc creadores en colombia',
    'campañas con influencers en colombia',
        'campañas con ugc creadores  en colombia',
'beauty supply en santo domingo',
'momo challenge video',
'momo challenge video original',
       'micro influencer agency',

       'influencer pr',
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
'gaming influencer agency',
'what is an influencer agency?',
'banco popular contacto',
'banco popular routing number',
'banco popular dominicano telefono',
'dominican college softball',
'dominican university soccer',
'paypal login',
'dominican college baseball',
'dominican republic beaches',
'shein near me',
'shein bathing suits',
'mercado libre venezuela',
'mercado libre de venezuela',
'shein location',
'shein stores near me',
'shein store near me',
'ropa',
'shein india',
'shein wholesale',
'shein sale',
'fashion nova',
'shein plus size',
'shein reviews plus size',
'free shipping shein',
'shein shipping',
'shein shipping argentina',
'winter dresses',
'shein paypal',
'prom dresses',
'silk pajamas',
'clever login',
'influencers',
'brand engagement agency',
'influencer agent',
'creative agencies',
'singapore creative agencies',
'influencer marketing agency los angeles',
'creative influencer campaigns',
'influencer uk',
   'creator campaigns mexico',
    'marketing de influencers en mexico',
    'influencers en mexico',
    'ugc creadores en mexico',
    'campañas con influencers en mexico',
        'campañas con ugc creadores  en mexico',
'influencer marketing campaigns',
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
 
 
 'advertise on roblox',

'roblox advertising agency',
'roblox influencer marketing',

'roblox brand activations',

'roblox marketing services',

'roblox event promotion',

'roblox virtual brand partnerships',

'roblox ugc brand marketing',
'roblox influencer program',

'roblox creator sponsorships',

'roblox ugc creator affiliate',

'roblox partnership opportunities',

'make money on roblox as influencer',
'how to create your own affiliate program for small business',
'roblox ugc sponsorship',

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
