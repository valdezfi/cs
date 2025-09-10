import Header from "components/Header";
import LowestFeeExchangePage from "components/TopSav";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Influencers, UGC y Crypto Exchange en El Salvador",
  description:
    "Grande te conecta con Influencers, Creadores de UGC y te muestra los mejores exchanges de criptomonedas con bajas comisiones en El Salvador.",
  keywords: [
    "marketing de influencers El Salvador",
    "influencers en El Salvador",
    "UGC El Salvador",
    "crypto exchange El Salvador",
    "mejor exchange de criptomonedas",
    "Bitcoin El Salvador",
    "USDT El Salvador",
    "XMR El Salvador",
    "comprar criptomonedas en El Salvador",
    "vender criptomonedas en El Salvador",
  ],
  openGraph: {
    title: "Grande: Influencers, UGC y Crypto Exchange en El Salvador",
    description:
      "Descubre cómo lanzar campañas con influencers, creadores UGC y encuentra los exchanges de criptomonedas más económicos en El Salvador.",
    url: "https://grandeapp.com/el-salvador",
    images: [
      {
        url: "https://grandeapp.com/images/el-salvador.jpg",
        width: 1200,
        height: 630,
        alt: "Grande en El Salvador – Influencers, UGC y Crypto Exchange",
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
      "Conecta con influencers y descubre los mejores exchanges de criptomonedas en El Salvador con Grande.",
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
