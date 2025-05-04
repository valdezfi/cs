import Header from "components/Header";
import PrivacyPolicy from "components/PrivacyTerms";
import Footer from "components/Footer";


import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Privacy Policy | Numerobook USA',
  description:
    'Review Numerobook’s Privacy Policy to understand how we protect your data while you trade crypto with the lowest fees in the USA.',
  keywords: [
  
   
    'bitcoin converter',
    'crypto calculator',
    'lowest fee crypto exchange'
  ],
  authors: [{ name: 'Numerobook' }],
  alternates: {
    canonical: 'https://numerobook.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Numerobook USA',
    description:
      'Learn how Numerobook safeguards your personal data and provides secure crypto trading tools with the lowest fees.',
    url: 'https://numerobook.com/privacy',
    siteName: 'Numerobook',
    images: [
      {
        url: '/images/OIG-19.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Numerobook',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Numerobook USA',
    description:
      'Understand how your data is protected when using Numerobook’s crypto trading tools and low-fee exchange.',
    images: ['/images/OIG-19.jpg'],
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
