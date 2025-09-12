import Header from "components/Header";
import LowestFeeExchangePage from "components/TopPR";
import Footer from "components/Footer";
import Script from 'next/script';

// Metadata configuration
import { Metadata } from "next";

export const metadata: Metadata = {
  title:             "Marketing de Influencers en Puerto Rico",
  description:
            "Lanza campañas auténticas en Puerto Rico con creadores locales, contenido generado por usuarios (UGC) y colaboraciones con podcasts.",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
   
"Influencers en Puerto Rico",
"Puerto Rico"
  ],
  openGraph: {
    title:            "Marketing de Influencers en Puerto Rico",

    description:
    "Lanza campañas auténticas en Puerto Rico con creadores locales, contenido generado por usuarios (UGC) y colaboraciones con podcasts.",
    url: "https://www.grandeapp.com/blog/puerto-rico",
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
            "Lanza campañas auténticas en Puerto Rico con creadores locales, contenido generado por usuarios (UGC) y colaboraciones con podcasts.",
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
