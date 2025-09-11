import Header from "components/Header";
import LowestFeeExchangePage from "components/TopChile";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grande: Plataforma Líder de Marketing de Influencers en Chile",
  description:
    "Plataforma de Marketing de Influencers, Podcast y UGC en Chile – Grande",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    'Influencers en Chile'
  ],
  openGraph: {
    title: "Grande: Plataforma Líder de Marketing de Influencers en Chile",
    description:
      "Plataforma de Marketing de Influencers, Podcast y UGC en Chile – Grande",
    url: "https://www.grandeapp.com/chile",
    images: [
      {
        url: "https://grandeapp.com/images/chile.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Chile – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grande: Plataforma Líder de Marketing de Influencers en Chile",
    description:
      "Plataforma de Marketing de Influencers, Podcast y UGC en Chile – Grande",
    images: ["https://grandeapp.com/images/chile.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/chile",
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
      {/* JSON-LD Structured Data */}
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
                name: "Chile",
                item: "https://grandeapp.com/chile",
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="flex-1 py-8 px-4 text-gray-900 dark:text-white">
        <h1 className="sr-only">
          Grande: Marketing de Influencers, Podcast y UGC en Chile
        </h1>
        <LowestFeeExchangePage />
      </main>

      <Footer />
    </div>
  );
}
