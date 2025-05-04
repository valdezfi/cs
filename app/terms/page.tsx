import Header from "components/Header";
import Hero from "components/Hero";
import TermsOfUse from "components/Terms";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Terms Of Use | Numerobook USA',
  description:
    'Review Numerobook’s Terms of Use to understand your rights and responsibilities when trading crypto with the lowest fees in the USA.',
  keywords: [
    'bitcoin converter',
    'crypto calculator',
    'lowest fee crypto exchange'
  ],
  authors: [{ name: 'Numerobook' }],
  alternates: {
    canonical: 'https://numerobook.com/terms',
  },
  openGraph: {
    title: 'Terms Of Use | Numerobook USA',
    description:
      'Understand your rights, obligations, and how Numerobook provides secure crypto trading tools with the lowest fees.',
    url: 'https://numerobook.com/terms',
    siteName: 'Numerobook',
    images: [
      {
        url: '/images/OIG-19.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms Of Use - Numerobook',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms Of Use | Numerobook USA',
    description:
      'Understand your responsibilities and protections when using Numerobook’s low-fee crypto tools and exchange.',
    images: ['public/images/OIG-19.jpg'],
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
          name: 'Terms & Conditions',
          item: 'https://numerobook.com/terms',
        },
      ],
    }),
  }}
/>

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
