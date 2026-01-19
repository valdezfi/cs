import Header from "components/Header";
import BlogMultiCard from "components/BlogMultiPost";
import Footer from "components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Co‑Intelligence | Blog',
  description:
    'Explore the Co‑Intelligence Blog for insights on AI, data analytics, intelligence platforms, and strategies for smarter decision-making.',
  keywords: [
    'AI blog',
    'Co-Intelligence insights',
    'data analytics blog',
    'AI platform articles',
    'intelligence platform news',
    'business intelligence tips',
  ],
  authors: [{ name: 'Co‑Intelligence' }],
  alternates: {
    canonical: 'https://co-i.org/blog',
  },
  openGraph: {
    title: 'Co‑Intelligence Blog — AI Insights & Analytics',
    description:
      'Stay updated with the latest AI and intelligence platform insights from Co‑Intelligence, covering analytics, data strategies, and smarter decision-making.',
    url: 'https://co-i.org/blog',
    siteName: 'Co‑Intelligence',
    images: [
      {
        url: 'https://co-i.org/images/logo.png', // replace with your OG image
        width: 1200,
        height: 630,
        alt: 'Co‑Intelligence AI Platform Blog',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co‑Intelligence Blog — AI & Analytics Insights',
    description:
      'Explore AI, data analytics, and intelligence platform strategies on the Co‑Intelligence blog.',
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
        <BlogMultiCard />
      </main>
      <Footer />
    </div>
  );
}
