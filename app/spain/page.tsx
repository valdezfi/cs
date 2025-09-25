import Header from "components/Header";
import LowestFeeExchangePage from "components/TopSpain";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marketing de Influencers en España",
  description:
"Plataforma de Influencers, Podcast y Contenido UGC en España – Grande",

keywords: [
    "Marketing de Influencers en España"
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://grandeapp.com/spain" },
  openGraph: {
  title: "Marketing de Influencers en España",
    description:
"Plataforma de Influencers, Podcast y Contenido UGC en España – Grande",
    url: "https://grandeapp.com/spain",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
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
  title: "Marketing de Influencers en España",
    description:
"Plataforma de Influencers, Podcast y Contenido UGC en España – Grande",
    images: ["https://grandeapp.com/images/logo.png"],
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
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://grandeapp.com" },
              { "@type": "ListItem", position: 2, name: "España", item: "https://grandeapp.com/spain" },
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
