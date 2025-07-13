import Header from "components/Header";
import Footer from "components/Footer";

import AboutUs from "components/About";

import { Metadata } from 'next';
import Script from 'next/script';


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
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Buy Bitcoin with the Lowest Fees | Numerobook',
      description:
        'Numerobook makes crypto trading simple across the USA, LATAM, India, Africa, and beyond with local payment options and low fees.',
      image: 'https://numerobook.com/images/OIG-19.jpg',
      mainEntityOfPage: 'https://numerobook.com',
    }),
  }}
/>



      <Header />
  
      <main>
        <AboutUs />
        
     
      </main>
      <Footer />
    </div>
  );
}
