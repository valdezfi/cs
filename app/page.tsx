import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";
import ProductExplanation from "components/Help";
import USAb from "components/USAbuy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Co‑Intelligence: Building AI-Enabled Products & Workflows',
  description:
    'Co‑Intelligence builds AI-enabled products and helps teams design, develop, and scale intelligent workflows, automation, and secure blockchain solutions.',
  keywords: [
    'AI products',
    'AI workflows',
    'AI automation',
    'productivity tools',
    'intelligent systems',
    'crypto solutions',
    'blockchain security',
    'trading automation',
  ],
  authors: [{ name: 'Co‑Intelligence' }],
  alternates: { canonical: 'https://co-i.org/' },
  openGraph: {
    title: 'Co‑Intelligence: AI Product Portfolios & Workflows',
    description:
      'Building AI-enabled products and improving team productivity through intelligent workflows, automation, and scalable AI systems for crypto and blockchain.',
    url: 'https://co-i.org/',
    siteName: 'Co‑Intelligence',
    images: [
      {
        url: 'https://co-i.org/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Co‑Intelligence AI Products & Workflows',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co‑Intelligence: AI Product Portfolios & Workflows',
    description:
      'Co‑Intelligence builds AI-enabled products, improving team productivity with intelligent automation, secure blockchain solutions, and scalable AI systems.',
    images: ['https://co-i.org/images/logo.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />

      <main className="flex flex-col">
        <Hero />
        <ProductExplanation />
        <USAb />
      </main>

      <Footer />
    </div>
  );
}
