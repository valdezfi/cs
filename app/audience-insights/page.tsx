import Header from "components/Header";
import Footer from "components/Footer";



import { Metadata } from 'next';
import AudienceInsightsTool from "components/AudienceInsights";



export const metadata: Metadata = {
  title: 'COfuncion | AI‑Powered OTT Campaign Engine',
  description:
    'COfuncion helps brands, agencies, and marketers launch, optimize, and measure OTT ad campaigns with AI‑driven insights and reporting.',
  keywords: [
    'OTT advertising',
    'AI campaign engine',
    'streaming ad optimization',
    'audience insights',
    'OTT campaign reporting',
    'AI ad tools',
  ],
  authors: [{ name: 'COfuncion' }],
  alternates: {
    canonical: 'https://cofuncion.com',
  },
  openGraph: {
    title: 'COfuncion — Scale Your OTT Ad Campaigns with AI',
    description:
      'COfuncion provides powerful AI tools for planning, optimizing, and reporting OTT ad campaigns across streaming platforms for brands and agencies.',
    url: 'https://cofuncion.com',
    siteName: 'COfuncion',
    images: [
      {
        url: 'https://cofuncion.com/images/logo.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'COfuncion OTT AI Campaign Engine',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launch & Optimize OTT Campaigns with AI | COfuncion',
    description:
      'Leverage AI‑powered audience insights, campaign automation, and reporting to drive results with your OTT advertising strategy.',
    images: ['https://cofuncion.com/images/logo.png'], // replace with relevant OG image
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
        <AudienceInsightsTool />
        {/* <AICampaignAssistantPage/> */}
        {/* <SupademoEmbed/> */}
        {/* <ProductExplanation/> */}


    {/* <h1
  className="mt-24 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
  bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
  drop-shadow-xl text-center"
>
  Published Campaign
</h1> */}
         {/* <USAb />  */}

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
