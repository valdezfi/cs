import Header from "components/Header";
import LowestFeeExchangePage from "components/TopParaguay"; // ⚠️ create or swap to Paraguay content
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marketing de Influencers en Paraguay",
  description:
            "Conecta con tu audiencia en Paraguay a través de campañas auténticas con creadores locales, microinfluencers y contenido generado por usuarios.",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Marketing de Influencers en Paraguay",
  ],
  openGraph: {
    title: "Marketing de Influencers en Paraguay",
    description:

            "Conecta con tu audiencia en Paraguay a través de campañas auténticas con creadores locales, microinfluencers y contenido generado por usuarios.",

    url: "https://grandeapp.com/paraguay",
    images: [
      {
        url: "https://grandeapp.com/images/paraguay.jpg", // ⚠️ replace with actual Paraguay image
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Paraguay – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing de Influencers en Paraguay",
    description:
            "Conecta con tu audiencia en Paraguay a través de campañas auténticas con creadores locales, microinfluencers y contenido generado por usuarios.",
    images: ["https://grandeapp.com/images/paraguay-social.jpg"], // ⚠️ replace with actual image
  },
  alternates: {
    canonical: "https://grandeapp.com/paraguay",
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
                name: "Paraguay",
                item: "https://grandeapp.com/paraguay",
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        <LowestFeeExchangePage /> {/* ⚠️ should be Paraguay-specific content */}
      </main>
      <Footer />
    </div>
  );
}
