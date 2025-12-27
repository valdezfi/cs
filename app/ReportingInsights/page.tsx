import Header from "components/Header";
import Footer from "components/Footer";

import SupademoEmbed3 from "components/Demo3";
import AICampaignAssistantPage from "components/aiAgent";

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
        url: 'https://cofuncion.com/images/og-image.png', // replace with your actual OG image
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
    images: ['https://cofuncion.com/images/og-image.png'], // replace with relevant OG image
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



      </main>
      <Footer />
    </div>
  );
}
