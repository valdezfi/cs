 import Header from "components/Header";
// import Hero from "components/Hero";
// import AmountInput from "components/BitcoinInput";
import SignupForm from "components/SignupForm";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
};
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />

 


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
                item: 'https://numerobook.com',

              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'signup',
                item: 'https://numerobook.com/signup',
              },
            ],
          }),
        }}
      />
      <main>
        {/* <Hero /> */}
        <SignupForm 
 /> 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
