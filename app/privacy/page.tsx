import Header from "components/Header";
import Footer from "components/Footer";
import { Metadata } from 'next';
import PrivacyPolicy from "components/PrivacyTerms";

export const metadata: Metadata = {
  title: 'Co‑Intelligence | AI-Powered Intelligence Platform',
  description:
    'Co‑Intelligence is an AI-powered platform helping organizations gather insights, analyze data, and make smarter decisions with advanced analytics and intelligence tools.',
  keywords: [
    'AI platform',
    'intelligence platform',
    'data analytics',
    'AI insights',
    'business intelligence',
    'decision support',
  ],
  authors: [{ name: 'Co‑Intelligence' }],
  alternates: {
    canonical: 'https://co-i.org/privacy',
  },
  openGraph: {
    title: 'Co‑Intelligence — AI-Powered Intelligence Platform',
    description:
      'Co‑Intelligence provides advanced AI tools to help organizations analyze data, generate insights, and drive smarter decisions.',
    url: 'https://co-i.org/privacy',
    siteName: 'Co‑Intelligence',
    images: [
      {
        url: 'https://co-i.org/images/logo.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Co‑Intelligence AI Platform',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlock Insights with AI | Co‑Intelligence',
    description:
      'Leverage Co‑Intelligence to gather insights, analyze data, and make smarter, AI-driven decisions.',
    images: ['https://co-i.org/images/logo.png'], // replace with relevant OG image
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
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
