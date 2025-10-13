import Header from "components/Header";
import GrandeAppInstagramAdsPage from "components/IGadLaunch";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
 title: "GrandeApp: Influencer Ads on Instagram for Brands and Agencies",
  description:
    "Discover how GrandeApp enables influencer ads on Instagram, helping brands and agencies run effective campaigns, track performance, and boost engagement with the right creators.",
  keywords: [
    "influencer ads on Instagram",
    "GrandeApp",
    "Instagram influencer marketing",
    "brand campaigns Instagram",
    "affiliate influencer campaigns",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/grandeapp-influencer-ads-instagram",
  },
  openGraph: {
 title: "GrandeApp: Influencer Ads on Instagram for Brands and Agencies",
  description:
    "Discover how GrandeApp enables influencer ads on Instagram, helping brands and agencies run effective campaigns, track performance, and boost engagement with the right creators.",
  url: "https://grandeapp.com/blog/grandeapp-influencer-ads-instagram",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ads.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
 title: "GrandeApp: Influencer Ads on Instagram for Brands and Agencies",
  description:
    "Discover how GrandeApp enables influencer ads on Instagram, helping brands and agencies run effective campaigns, track performance, and boost engagement with the right creators.",
  images: ["https://grandeapp.com/images/blog/ads.jpg"],
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
              name: "GrandeApp: Influencer Ads on Instagram for Brands and Agencies",

              item: "https://grandeapp.com/blog/grandeapp-influencer-ads-instagram",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <GrandeAppInstagramAdsPage />
      </main>
      <Footer />
    </div>
  );
}
