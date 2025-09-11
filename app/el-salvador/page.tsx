import Header from "components/Header";
import LowestFeeExchangePage from "components/TopSav";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Plataforma Líder de Marketing de Influencers en El Salvador",
  description:
    "Potencia tu marca en El Salvador con campañas auténticas usando influencers, contenido generado por usuarios (UGC) y podcasts.",
  keywords: [
  'Grande: Plataforma Líder de Marketing de Influencers en El Salvador'
  ],
  openGraph: {
    title: "Grande: Plataforma Líder de Marketing de Influencers en El Salvador",
    description:
    "Potencia tu marca en El Salvador con campañas auténticas usando influencers, contenido generado por usuarios (UGC) y podcasts.",
    url: "https://grandeapp.com/el-salvador",
    images: [
      {
        url: "https://grandeapp.com/images/el-salvador.jpg",
        width: 1200,
        height: 630,
        alt: "Grande ",
      },
    ],
    siteName: "Grande",
    locale: "es_SV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande en El Salvador",
    description:
    "Potencia tu marca en El Salvador con campañas auténticas usando influencers, contenido generado por usuarios (UGC) y podcasts.",
    images: ["https://grandeapp.com/images/el-salvador.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/el-salvador",
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
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://grandeapp.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "El Salvador",
                item: "https://grandeapp.com/el-salvador",
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
