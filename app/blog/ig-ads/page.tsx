import Header from "components/Header";
import IGAdsNotDeliveringPage from "components/IGAds";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "Why Your IG Ads Are Not Delivering and How to Fix It",
  description:
    "Learn why your Instagram ads may not be delivering and how to optimize campaigns using influencers, nano campaigns, and platforms like GrandeApp.",
  keywords: [
    "IG ads not delivering",
    "Instagram ads optimization",
    "influencer marketing",
    "nano campaigns",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/ig-ads",
  },
  openGraph: {
  title: "Why Your IG Ads Are Not Delivering and How to Fix It",
  description:
    "Learn why your Instagram ads may not be delivering and how to optimize campaigns using influencers, nano campaigns, and platforms like GrandeApp.",
 url: "https://grandeapp.com/blog/ig-ads",
    images: [
      {
        url: "https://grandeapp.com/images/blog/nano.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Why Your IG Ads Are Not Delivering and How to Fix It",
  description:
    "Learn why your Instagram ads may not be delivering and how to optimize campaigns using influencers, nano campaigns, and platforms like GrandeApp.",
   images: ["https://grandeapp.com/images/blog/nano.jpg"],
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
              name: "Why Your IG Ads Are Not Delivering and How to Fix It",

              item: "https://grandeapp.com/blog/ig-ads",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <IGAdsNotDeliveringPage />
      </main>
      <Footer />
    </div>
  );
}
