import Header from "components/Header";
import LowestFeeExchangePage from "components/TopPR";
import Footer from "components/Footer";
import Script from 'next/script';

// Metadata configuration
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grande: Plataforma Líder de Marketing de Influencers en Puerto Rico",
  description:
    "Influencers, Podcasts y Contenido UGC en Puerto Rico – Grande",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Digital Ecommerce Marketing",
    "e-commerce marketing manager",
    "ecommerce marketing tools",
    "e-commerce marketing agency",
    "e-commerce marketing and advertising",
    "e-commerce marketing services",
    "shopping influencers",
    "content creation",
    "brand marketing",
"Influencers en Puerto Rico"
  ],
  openGraph: {
    title: "Influencers, Podcasts y Contenido UGC en Puerto Rico – Grande",
    description:
      "In the era of rapid online growth, standing out isn’t optional—it’s essential. That’s where Digital Ecommerce Marketing steps in. If you’re running an online store, reaching your ideal customer, converting traffic into buyers, and creating a loyal community are all dependent on smart, data-driven marketing. This is the foundation of what we do at Grande.",
    url: "https://www.numerobook.com/blog/puerto-rico",
    images: [
      {
        url: "https://grandeapp.com/images/blog/p.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Puerto Rico – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencers, Podcasts y Contenido UGC en Puerto Rico – Grande",
    description:
      "In the era of rapid online growth, standing out isn’t optional—it’s essential. That’s where Digital Ecommerce Marketing steps in. If you’re running an online store, reaching your ideal customer, converting traffic into buyers, and creating a loyal community are all dependent on smart, data-driven marketing. This is the foundation of what we do at Grande.",
    images: [
      "https://grandeapp.com/images/blog/p.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/puerto-rico",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://grandeapp.com"),
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
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://grandeapp.com',

              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Top USA Plataforma Líder de Marketing de Influencers en Puerto Rico',
                item: 'https://grandeapp.com/puerto-rico',
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <LowestFeeExchangePage />
      </main>
      <Footer />
    </div>
  );
}
