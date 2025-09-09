

import AboutUs from "components/About";


import Header from "components/Header";
import Footer from "components/Footer";
import Script from "next/script";


// import USAb from "components/USAbuy";
import { Metadata } from 'next';


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
        'affiliate marketing software for small teams',
'easy affiliate tracking for influencers',
        'creator campaigns uruguay',
    'marketing de influencers en uruguay',
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



          'creator campaigns colombia',
    'marketing de influencers en colombia',
    'influencers en colombia',
    'ugc creadores en colombia',
    'campañas con influencers en colombia',
        'campañas con ugc creadores  en colombia',

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
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://grandeapp.com',

              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Top USA Crypto Exchange',
                item: 'https://grandeapp.com/mexico',
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

