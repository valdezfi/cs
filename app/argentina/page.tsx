import Header from "components/Header";
import LowestFeeExchangePage from "components/TopAr";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grande: Plataforma Líder de Marketing de Influencers en Mexico",
  description:
    "Influencers, Podcasts y Contenido UGC en Mexico – Grande",
  authors: [{ name: "Grandeapp Editorial Team" }],
  keywords: [
    "Digital Ecommerce Marketing",
    "e-commerce marketing manager",
    "ecommerce marketing tools",
    "e-commerce marketing agency argentina",
    "e-commerce marketing and advertising",
    "e-commerce marketing argentina",
    "shopping influencers argentina",
    "content creation in argentina",
    "brand marketing argentina",
"Influencers en argentina",

  "creator campaigns mexico",
    'marketing de influencers en argentina',
    'influencers en argentina',
    'ugc creadores en argentina',
    'campañas con influencers en argentina',
        'campañas con ugc creadores  en argentina',
  ],
  openGraph: {
    title: "Influencers, Podcasts y Contenido UGC en Mexico – Grande",
    description:
      "In the era of rapid online growth, standing out isn’t optional—it’s essential. That’s where Digital Ecommerce Marketing steps in. If you’re running an online store, reaching your ideal customer, converting traffic into buyers, and creating a loyal community are all dependent on smart, data-driven marketing. This is the foundation of what we do at Grande.",
    url: "https://www.grandeapp.com/mexico",
    images: [
      {
        url: "https://grandeapp.com/images/mexico.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Mexico – Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencers, Podcasts y Contenido UGC en Mexico – Grande",
    description:
      "In the era of rapid online growth, standing out isn’t optional—it’s essential. That’s where Digital Ecommerce Marketing steps in. If you’re running an online store, reaching your ideal customer, converting traffic into buyers, and creating a loyal community are all dependent on smart, data-driven marketing. This is the foundation of what we do at Grande.",
    images: [
      "https://grandeapp.com/images/p.jpg",
    ],
  },
  alternates: {
    canonical: "https://grandeapp.com/mexico",
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
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://grandeapp.com',

              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Top USA Crypto Exchange',
                item: 'https://grandeapp.com/dominican-republic',
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
