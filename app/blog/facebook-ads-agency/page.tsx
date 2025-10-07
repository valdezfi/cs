import Header from "components/Header";
import FacebookAdsAgencyPage from "components/FacebookAds";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "Discover How A Facebook Ads Agency Can Help Your Brand?",
  description:
    "Discover how a Facebook Ads agency can help your brand grow with effective campaigns, influencer collaboration, and affiliate strategies through GrandeApp.",
  keywords: [
    "Facebook Ads agency",
    "Facebook advertising",
    "influencer marketing",
    "affiliate campaigns",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/facebook-ads-agency",
  },
  openGraph: {
  title: "Discover How A Facebook Ads Agency Can Help Your Brand?",
  description:
    "Discover how a Facebook Ads agency can help your brand grow with effective campaigns, influencer collaboration, and affiliate strategies through GrandeApp.",
   url: "https://grandeapp.com/blog/facebook-ads-agency",
    images: [
      {
        url: "https://grandeapp.com/images/blog/b2b.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Discover How A Facebook Ads Agency Can Help Your Brand?",
  description:
    "Discover how a Facebook Ads agency can help your brand grow with effective campaigns, influencer collaboration, and affiliate strategies through GrandeApp.",
  images: ["https://grandeapp.com/images/blog/b2b.jpg"],
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
              name: "Discover How A Facebook Ads Agency Can Help Your Brand?",

              item: "https://grandeapp.com/blog/facebook-ads-agency",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <FacebookAdsAgencyPage />
      </main>
      <Footer />
    </div>
  );
}
