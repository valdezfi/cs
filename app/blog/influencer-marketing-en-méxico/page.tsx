import Header from "components/Header";
import InfluencerMarketingStartupsPage from "components/Statup";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
   title: "Agencias de influencer marketing en México",
  description:
    "Descubre cómo las agencias de influencer marketing en México ayudan a marcas y startups a planear, ejecutar y medir campañas con influencers, nano y programas de afiliados.",
  keywords: [
    "agencias de influencer marketing en México",
    "influencer marketing México",
    "agencias influencers México",
    "nano influencers México",
    "affiliate marketing",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/influencer-marketing-en-méxico",
  },
  openGraph: {
   title: "Agencias de influencer marketing en México",
  description:
    "Descubre cómo las agencias de influencer marketing en México ayudan a marcas y startups a planear, ejecutar y medir campañas con influencers, nano y programas de afiliados.",
 url: "https://grandeapp.com/blog/influencer-marketing-en-méxico",
    images: [
      {
        url: "https://grandeapp.com/images/blog/macro.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
   title: "Agencias de influencer marketing en México",
  description:
    "Descubre cómo las agencias de influencer marketing en México ayudan a marcas y startups a planear, ejecutar y medir campañas con influencers, nano y programas de afiliados.",
 images: ["https://grandeapp.com/images/blog/macro.jpg"],
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
              name: "Agencias de influencer marketing en México",
              item: "https://grandeapp.com/blog/influencer-marketing-en-méxico",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <InfluencerMarketingStartupsPage />
      </main>
      <Footer />
    </div>
  );
}
