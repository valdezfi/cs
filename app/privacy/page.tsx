import Header from "components/Header";
import PrivacyPolicy from "components/PrivacyTerms";
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

      <meta property="og:image" content="https://numerobook.com/public/images/OIG-19.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />


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
          name: 'Privacy Policy',
          item: 'https://numerobook.com/privacy',
        },
      ],
    }),
  }}
/>

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
