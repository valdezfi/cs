import Header from "components/Header";
import LowestFeeExchangePage from "components/TopCo";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: " Marketing de Influencers Colombia",
  description:
      "Impulsa tu marca en Colombia con campañas auténticas de influencers, podcast y contenido generado por usuarios (UGC).",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Influencers en Colombia",
    
  ],
  openGraph: {
  title: " Marketing de Influencers Colombia",
    description:
      "Impulsa tu marca en Colombia con campañas auténticas de influencers, podcast y contenido generado por usuarios (UGC).",
    url: "https://www.grandeapp.com/colombia",
    images: [
      {
        url: "https://grandeapp.com/images/colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Colombia – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: " Marketing de Influencers Colombia",
    description:
      "Impulsa tu marca en Colombia con campañas auténticas de influencers, podcast y contenido generado por usuarios (UGC).",
    images: ["https://grandeapp.com/images/colombia.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/colombia",
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
      {/* JSON-LD for breadcrumbs */}
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
                name: "Colombia",
                item: "https://grandeapp.com/colombia",
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="flex-1 py-8 px-4 text-gray-900 dark:text-white">
      
        <LowestFeeExchangePage />
      </main>

      <Footer />
    </div>
  );
}
