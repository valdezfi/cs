import Header from "components/Header";
import LowestFeeExchangePage from "components/TopGhana";
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
      <Header />
      <main className="flex-1 py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
          Crypto Exchange with the Lowest Fees in the USA
        </h1>
        <LowestFeeExchangePage />
      </main>
      <Footer />
    </div>
  );
}
