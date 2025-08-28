import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";
import ForgotPasswordForm from "components/ForgotPasswordForm";
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
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Grow with Top Creators | GrandeApp",
    description:
      "GrandeApp helps brands and agencies scale by connecting them with top creators—Influencers, UGC, and Podcasts—powered by AI.",
    image: "https://www.grandeapp.com/images/logo.png", // update with your real OG image
    mainEntityOfPage: "https://www.grandeapp.com",
  }),
}}
/>

      <main>
        {/* <Hero /> */}
        <ForgotPasswordForm/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
