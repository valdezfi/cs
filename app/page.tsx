import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";

// import SupademoEmbed from "components/Demo";
// import SupademoEmbed2 from "components/Demo2";
import ProductExplanation from "components/Help";
// import SocialCampaignExplanation from "components/SM";

// import SupademoEmbed3 from "components/Demo3";
// import AICampaignAssistantPage from "components/aiAgent";

import USAb from "components/USAbuy";
import { Metadata } from "next";
// import BrandShowcase from "components/Brandshowcase";
// import Creator from "components/ContentCreator"; 
// import PredictableHero from "components/Predictable"; 

// import CreatorSpotlight from "components/ShowCreator"; 
// import AiHero from "components/Ai"; 

export const metadata: Metadata = {
  title: 'Co‑Intelligence: Building AI-Enabled Products & Workflows',
  description:
    'Co‑Intelligence builds AI-enabled products and helps teams design, develop, and scale intelligent workflows and automation.',
  keywords: [
    'AI products',
    'AI workflows',
    'AI automation',
    'productivity tools',
    'intelligent systems',
  ],
  authors: [{ name: 'Co‑Intelligence' }],
  alternates: { canonical: 'https://co-i.org/' },
  openGraph: {
    title: 'Co‑Intelligence: AI Product Portfolios & Workflows',
    description:
      'Building AI-enabled products and improving team productivity through intelligent workflows, automation, and scalable AI systems.',
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
      'Co‑Intelligence builds AI-enabled products and improves team productivity with intelligent automation and scalable AI systems.',
    images: ['https://co-i.org/images/logo.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />

      <main>
        <Hero />

        {/* Company Principles / AI Product Portfolio */}
        <ProductExplanation />
      </main>

      <Footer />
    </div>
  );
}