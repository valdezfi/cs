import Header from "components/Header";
import LowestFeeExchangePage from "components/TopMX";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  title: "Grande: Marketing de Influencers en México",
  description:
    "Influencers, Podcasts y Contenido UGC en Mexico – Grande",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Marketing de Influencers en México",
  
  ],
  openGraph: {
  title: "Grande: Marketing de Influencers en México",
    description:
            "Impulsa tu marca en México con campañas auténticas de influencers, podcast , y contenido generado por usuarios (UGC).",
    url: "https://www.grandeapp.com/mexico",
    images: [
      {
        url: "https://grandeapp.com/images/mexico.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Mexico – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Grande: Marketing de Influencers en México",
    description:
            "Impulsa tu marca en México con campañas auténticas de influencers, podcast , y contenido generado por usuarios (UGC).",
    images: [
      "https://grandeapp.com/images/p.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/mexico",
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
                name: 'Influencers, Podcasts y Contenido UGC en Mexico – Grande',
                item: 'https://grandeapp.com/mexico',
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
