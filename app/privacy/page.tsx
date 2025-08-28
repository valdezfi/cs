import Header from "components/Header";
import PrivacyPolicy from "components/PrivacyTerms";
import Footer from "components/Footer";


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
        {/* <Hero /> */}
        <PrivacyPolicy/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
