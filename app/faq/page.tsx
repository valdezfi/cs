import Header from "components/Header";
import Footer from "components/Footer";



import { Metadata } from 'next';
import ManageCampaigns from "components/FAQ";


export const metadata: Metadata = {
  title: 'Manage OTT Campaigns | COfuncion AI Campaign Engine',
  description:
    'COfuncion allows brands and agencies to plan, launch, and manage OTT ad campaigns with AI-powered optimization, scheduling, and targeting tools.',
  keywords: [
    'OTT campaign management',
    'AI ad optimization',
    'streaming platform ads',
    'audience targeting OTT',
    'campaign automation',
  ],
  authors: [{ name: 'COfuncion' }],
  alternates: {
    canonical: 'https://cofuncion.com/faq',
  },
  openGraph: {
    title: 'Manage Your OTT Campaigns with AI | COfuncion',
    description:
      'Use COfuncion’s AI-powered platform to schedule, optimize, and monitor OTT campaigns across streaming platforms with actionable insights.',
    url: 'https://cofuncion.com/faq',
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
        <ManageCampaigns />
   



      </main>
      <Footer />
    </div>
  );
}
