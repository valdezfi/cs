import Header from "components/Header";
import SaaSInfluencerMarketingPage from "components/SAAS";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "SaaS Influencer Marketing: Grow Your Software Brand",
  description:
    "Discover how SaaS companies can leverage influencer marketing to drive user acquisition, affiliate campaigns, and brand growth with GrandeApp.",
  keywords: [
    "SaaS influencer marketing",
    "software marketing",
    "affiliate campaigns",
    "influencer partnerships",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/saas",
  },
  openGraph: {
  title: "SaaS Influencer Marketing: Grow Your Software Brand",
 description:
    "Discover how SaaS companies can leverage influencer marketing to drive user acquisition, affiliate campaigns, and brand growth with GrandeApp.",
 url: "https://grandeapp.com/blog/saas",
    images: [
      {
        url: "https://grandeapp.com/images/blog/affiliatem.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "SaaS Influencer Marketing: Grow Your Software Brand",
 description:
    "Discover how SaaS companies can leverage influencer marketing to drive user acquisition, affiliate campaigns, and brand growth with GrandeApp.",
  images: ["https://grandeapp.com/images/blog/affiliatem.jpg"],
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
              name: "Timeline for Influencer Marketing Campaigns",

              item: "https://grandeapp.com/blog/saas",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <SaaSInfluencerMarketingPage />
      </main>
      <Footer />
    </div>
  );
}



