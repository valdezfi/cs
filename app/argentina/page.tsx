import Header from "components/Header";
import LowestFeeExchangePage from "components/TopAr";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grande: Plataforma Líder de Marketing de Influencers en Argentina",
  description:
    "Plataforma de Marketing de Influencers, Podcast y UGC en Argentina – Grande",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
 
"Influencers en argentina",

  
  ],
  openGraph: {
    title: "Influencers, Podcasts y Contenido UGC en Argentina – Grande",
    description:
    "Plataforma de Marketing de Influencers, Podcast y UGC en Argentina – Grande",
    url: "https://www.grandeapp.com/argentina",
    images: [
      {
        url: "https://grandeapp.com/images/argentina.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Argentina – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencers, Podcasts y Contenido UGC en Argentina – Grande",
    description:
      "Plataforma de Marketing de Influencers, Podcast y UGC en Argentina – Grande",
    images: [
      "https://grandeapp.com/images/p.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/argentina",
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
                name: 'Influencers, Podcast y UGC en Argentina – Grande',
                item: 'https://grandeapp.com/dominican-republic',
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
