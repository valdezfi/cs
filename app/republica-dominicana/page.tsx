import Header from "components/Header";
import LowestFeeExchangePage from "components/TopRD";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Plataforma de Marketing de Influencers Dominicanos",
  description:
    "GrandeApp ayuda a las marcas en República Dominicana a crecer con IA conectándolas con los mejores creadores—Influencers, UGC y podcasts. Lanza campañas de pago o crece orgánicamente con un asistente de marketing potenciado por IA.",
  keywords: [
 
    "influencer marketing",
    "que hora republica dominicana",
    "airbnb republica dominicana",
    "temu republica dominicana",
    "punta cana republica dominicana weather",
    "Influencer dominicanos"
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/republica-dominicana" },
  openGraph: {
    title: "Grande: La Mejor Plataforma de Creadores UGC e Influencers en República Dominicana",
    description:
      "GrandeApp conecta a las marcas dominicanas con influencers, creadores de UGC y podcasts. Potenciado por IA, te ayudamos a lanzar campañas de alto rendimiento de manera eficiente.",
    url: "https://www.grandeapp.com/republica-dominicana",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grande: Creadores UGC e Influencer Marketing en República Dominicana",
      },
    ],
    type: "website",
    locale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: La Mejor Plataforma de Creadores UGC e Influencers en República Dominicana",
    description:
      "GrandeApp ayuda a las marcas dominicanas a crecer con influencers, UGC y podcasts—potenciado por IA.",
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
              { "@type": "ListItem", position: 2, name: "República Dominicana", item: "https://www.grandeapp.com/republica-dominicana" },
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
