import Header from "components/Header";
import LowestFeeExchangePage from "components/TopMX";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
  title:
    "México ads: Cómo las Marcas Están Transformando sus Campañas Digitales",
  description:
    "Descubre cómo combinar México ads e influencer marketing para impulsar tu marca. Estrategias para agencias, creadores y marcas con GrandeApp.",
  keywords: [
    "México ads",
    "influencer marketing",
    "marketing de influencers México",
    "agencias de publicidad México",
    "campañas de afiliados",
    "GrandeApp",
  ],
  openGraph: {
   title:
    "México ads: Cómo las Marcas Están Transformando sus Campañas Digitales",
  description:
    "Descubre cómo combinar México ads e influencer marketing para impulsar tu marca. Estrategias para agencias, creadores y marcas con GrandeApp.",
     url: "https://grandeapp.com/mexico",
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
    title:
    "México ads: Cómo las Marcas Están Transformando sus Campañas Digitales",
  description:
    "Descubre cómo combinar México ads e influencer marketing para impulsar tu marca. Estrategias para agencias, creadores y marcas con GrandeApp.",
     images: [
      "https://grandeapp.com/images/mexico.jpg",
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
                name: "México ads: Cómo las Marcas Están Transformando sus Campañas Digitales",
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
