import Header from "components/Header";
import CampanasDeInfluencersPage from "components/Campanas";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
 title: "Campañas de Influencers: Estrategias Locales e Internacionales",
  description:
    "Descubre cómo las campañas de influencers pueden potenciar marcas a nivel local e internacional. Aprende a maximizar resultados con influencers y GrandeApp.",
  keywords: [
    "campañas de influencers",
    "campañas de influencers para audiencias internacionales",
    "marketing de influencers",
    "campañas locales",
    "GrandeApp",
  ],
metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/campanas-de-influencers",
  },
  openGraph: {
 title: "Campañas de Influencers: Estrategias Locales e Internacionales",
  description:
    "Descubre cómo las campañas de influencers pueden potenciar marcas a nivel local e internacional. Aprende a maximizar resultados con influencers y GrandeApp.",
 url: "https://grandeapp.com/blog/campanas-de-influencers",
    images: [
      {
        url: "https://grandeapp.com/images/blog/la.jpg",
        width: 1200,
        height: 630,
        alt: "Affiliate marketing vs influencer marketing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
 title: "Campañas de Influencers: Estrategias Locales e Internacionales",
  description:
    "Descubre cómo las campañas de influencers pueden potenciar marcas a nivel local e internacional. Aprende a maximizar resultados con influencers y GrandeApp.",
 images: ["https://grandeapp.com/images/blog/la.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
              name: "Campañas de Influencers: Estrategias Locales e Internacionales",
              item: "https://grandeapp.com/blog/campanas-de-influencers",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <CampanasDeInfluencersPage/>
      </main>
      <Footer />
    </div>
  );
}