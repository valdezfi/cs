import Header from "components/Header";
import LowestFeeExchangePage from "components/TopRD";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grande: Plataforma Líder de Marketing de Influencers en republica dominicana",
  description:
    "Plataforma de Marketing de Influencers, Podcast y UGC en republica dominicana – Grande",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Digital Ecommerce Marketing",
    "e-commerce marketing manager",
    "ecommerce marketing tools",
    "e-commerce marketing agency republica dominicana",
    "e-commerce marketing and advertising",
    "e-commerce marketing republica dominicana",
    "shopping influencers republica dominicana",
    "content creation in republica dominicana",
    "brand marketing republica dominicana",
"Influencers en republica dominicana",

  "creator campaigns republica dominicana",
    'marketing de influencers en republica dominicana',
    'influencers en republica dominicana',
    'ugc creadores en republica dominicana',
    'campañas con influencers en republica dominicana',
        'campañas con ugc creadores  en republica dominicana',
  ],
  openGraph: {
    title: "Influencers, Podcasts y Contenido UGC en republica dominicana – Grande",
    description:
    "Plataforma de Marketing de Influencers, Podcast y UGC en republica dominicana – Grande",
    url: "https://www.grandeapp.com/republicadominicana",
    images: [
      {
        url: "https://grandeapp.com/images/republicadominicana.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en republica dominicana – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencers, Podcasts y Contenido UGC en Colombia – Grande",
    description:
      "Plataforma de Marketing de Influencers, Podcast y UGC en Colombia – Grande",
    images: [
      "https://grandeapp.com/images/republicadominicana.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/republicadominicana",
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
                name: 'Top USA Crypto Exchange',
                item: 'https://grandeapp.com/republicadominicana',
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
