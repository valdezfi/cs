import Header from "components/Header";
import LowestFeeExchangePage from "components/TopRD";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Influencer Marketing de Influencers Dominicanos",
  description:
            "Potencia tu marca con estrategias de influencers dominicanos, Podcast, y contenido generado por usuarios (UGC) adaptadas al mercado dominicano.",
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
    title: "Influencer Marketing de Influencers Dominicanos",
    description:
            "Potencia tu marca con estrategias de influencers dominicanos, Podcast, y contenido generado por usuarios (UGC) adaptadas al mercado dominicano.",
    url: "https://www.grandeapp.com/republica-dominicana",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing en República Dominicana",
      },
    ],
    type: "website",
    locale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing de Influencers Dominicanos",
    description:
            "Potencia tu marca con estrategias de influencers dominicanos, Podcast, y contenido generado por usuarios (UGC) adaptadas al mercado dominicano.",
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
