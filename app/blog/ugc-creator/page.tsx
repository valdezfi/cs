import Header from "components/Header";
import UGCArticle from "components/UGCArticle";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "how to become a ugc creator",
  description: "If you're wondering how to become a ugc creator, start by treating content creation like a professional service. This guide walks through the mindset, tools, and simple systems you need to move from hobby posts to paid creator work.",
  keywords: [  "how to become a ugc creator",
            "ugc creator",],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/ugc-creator",
  },
  openGraph: {
  title: "Influencer Collaboration: 10 Creative Ways to Collaborate with Influencers in 2025 (With Examples)",
  description: "Brands need innovative strategies to excel in influencer marketing during the year 2025. The traditional model of brand sponsorship no longer satisfies current consumers since they want genuine  manufacturer-influencer partnerships which generate active interest.",
    url: "https://grandeapp.com/blog/ugc-creator",
    images: [
      {
        url: "https://grandeapp.com/images/blog/collabo.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Collaboration: 10 Creative Ways to Collaborate with Influencers in 2025 (With Examples)",
  description: "Brands need innovative strategies to excel in influencer marketing during the year 2025. The traditional model of brand sponsorship no longer satisfies current consumers since they want genuine  manufacturer-influencer partnerships which generate active interest.",
    images: ["https://grandeapp.com/images/blog/collabo.jpg"],
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
              name: "Influencer Collaboration: 10 Creative Ways to Collaborate with Influencers in 2025 (With Examples)",
              item: "https://grandeapp.com/blog/influencer-collaboration",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <UGCArticle />
      </main>
      <Footer />
    </div>
  );
}
