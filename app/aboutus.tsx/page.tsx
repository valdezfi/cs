import Header from "components/Header";
import Footer from "components/Footer";

import AboutUs from "components/About";

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
};



export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">







      <Header />
  
      <main>
        <AboutUs />
        
     
      </main>
      <Footer />
    </div>
  );
}
