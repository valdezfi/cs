import Header from "components/Header";
import TermsOfUse from "components/Terms";
import Footer from "components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Co‑Intelligence | Terms of Use',
  description:
    'Read the Terms of Use for Co‑Intelligence, an AI-powered platform providing insights, analytics, and decision-making tools for organizations.',
  keywords: [
    'Co-Intelligence terms',
    'AI platform terms',
    'intelligence platform',
    'data analytics',
    'AI decision tools',
    'platform policies',
  ],
  authors: [{ name: 'Co‑Intelligence' }],
  alternates: {
    canonical: 'https://co-i.org/terms',
  },
  openGraph: {
    title: 'Co‑Intelligence — Terms of Use',
    description:
      'Review the Terms of Use for Co‑Intelligence, the AI-powered intelligence platform that helps organizations analyze data and generate actionable insights.',
    url: 'https://co-i.org/terms',
    siteName: 'Co‑Intelligence',
    images: [
      {
        url: 'https://co-i.org/images/logo.png', // replace with actual OG image
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
    title: 'Co‑Intelligence Terms of Use',
    description:
      'Understand the terms for using Co‑Intelligence, the AI platform for insights and analytics.',
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
        <TermsOfUse />
      </main>
      <Footer />
    </div>
  );
}
