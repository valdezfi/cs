import Header from "components/Header";
import Hero from "components/Hero";
import AmountInput from "components/BitcoinInput";
import Footer from "components/Footer";
import ForgotPasswordForm from "components/ForgotPasswordForm";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Forgot Password | Numerobook',
  description:
    'Reset your Numerobook account password securely. Get back to trading crypto with the lowest fees in the USA.',
  keywords: [
    'forgot password',
    'reset crypto account password',
    'Numerobook login help',
    'crypto exchange login reset'
  ],
  authors: [{ name: 'Numerobook' }],
  alternates: {
    canonical: 'https://numerobook.com/forgotpassword',
  },
  openGraph: {
    title: 'Forgot Password | Numerobook',
    description:
      'Trouble logging in? Use our secure password reset tool to access your Numerobook crypto trading account.',
    url: 'https://numerobook.com/forgotpassword',
    siteName: 'Numerobook',
    images: [
      {
        url: 'https://numerobook.com/public/OIG-19.jpg',
        width: 1200,
        height: 630,
        alt: 'Forgot Password - Numerobook',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgot Password | Numerobook',
    description:
      'Reset your Numerobook account password easily and return to low-fee crypto trading.',
    images: ['https://numerobook.com/public/OIG-19.jpg'],
  },
  robots: {
    index: false,
    follow: false,
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
          name: 'Forgot Password',
          item: 'https://numerobook.com/forgotpassword',
        },
      ],
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
