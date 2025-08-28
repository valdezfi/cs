import Header from "components/Header";
import Hero from "components/Hero";
import TermsOfUse from "components/Terms";
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
        <TermsOfUse/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
