import Header from "components/Header";
import MediaKitForInfluencersPage from "components/MediaKit";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "What is a Media Kit for Influencers: Boost Your Brand Deals",
  description:
    "Learn what a media kit for influencers is and how it helps creators land brand deals, affiliate campaigns, and partnerships using GrandeApp.",
  keywords: [
    "media kit for influencers",
    "influencer marketing",
    "affiliate campaigns",
    "brand partnerships",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/media-kit-for-influencers",
  },
  openGraph: {
  title: "What is a Media Kit for Influencers: Boost Your Brand Deals",
  description:
    "Learn what a media kit for influencers is and how it helps creators land brand deals, affiliate campaigns, and partnerships using GrandeApp.",
   url: "https://grandeapp.com/blog/media-kit-for-influencers",
    images: [
      {
        url: "https://grandeapp.com/images/blog/john.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "What is a Media Kit for Influencers: Boost Your Brand Deals",
  description:
    "Learn what a media kit for influencers is and how it helps creators land brand deals, affiliate campaigns, and partnerships using GrandeApp.",
   images: ["https://grandeapp.com/images/blog/john.jpg"],
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
              name: "Influencer Marketing Specialist United States",

              item: "https://grandeapp.com/blog/media-kit-for-influencers",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <MediaKitForInfluencersPage />
      </main>
      <Footer />
    </div>
  );
}



