import Header from "components/Header";
import LowestFeeExchangePage from "components/TopSpain";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: La Mejor Plataforma de Creadores UGC e Influencers en España",
  description:
    "GrandeApp ayuda a las marcas en España a escalar con IA conectándolas con los mejores creadores: Influencers, UGC y Podcast. Lanza anuncios pagos o crece de manera orgánica con un asistente de marketing impulsado por IA.",
  keywords: [
    "marketing de influencers España",
    "creadores UGC España",
    "colaboraciones con podcasts España",
    "acuerdos de marca España",
    "marketing con IA España",
    "escalar con creadores España",
    "plataforma GrandeApp España",
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/spain" },
  openGraph: {
    title: "Grande: La Mejor Plataforma de Creadores UGC e Influencers en España",
    description:
      "GrandeApp conecta a las marcas españolas con influencers, creadores de UGC y podcasts. Con el poder de la IA, ayudamos a lanzar campañas de alto rendimiento de manera eficiente.",
    url: "https://www.grandeapp.com/spain",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: Creadores UGC e Influencers en España",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: La Mejor Plataforma de Creadores UGC e Influencers en España",
    description:
      "GrandeApp ayuda a las marcas españolas a crecer con influencers, creadores de UGC y podcasts—impulsado por IA.",
    images: ["https://www.grandeapp.com/images/logo.png"],
  },
  robots: { index: true, follow: true },
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
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.grandeapp.com" },
              { "@type": "ListItem", position: 2, name: "España", item: "https://www.grandeapp.com/spain" },
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
