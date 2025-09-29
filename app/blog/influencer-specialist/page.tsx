import Header from "components/Header";
import InfluencerMarketingSpecialistBlog from "components/InfluencerSpecialist";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
    title: "Influencer Marketing Specialist United States",
  description:
    "Learn the role of an influencer marketing specialist United States. Discover skills, strategies, and how platforms like GrandeApp help brands and start-ups succeed.",
  keywords: [
    "influencer marketing specialist United States",
    "influencer marketing jobs USA",
    "nano influencer campaigns",
    "affiliate campaigns",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/timeline-for-influencer",
  },
  openGraph: {
    title: "Influencer Marketing Specialist United States",
  description:
    "Learn the role of an influencer marketing specialist United States. Discover skills, strategies, and how platforms like GrandeApp help brands and start-ups succeed.",
  url: "https://grandeapp.com/blog/timeline-for-influencer",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ig.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Marketing Specialist United States",
  description: "Understanding the timeline for influencer marketing campaigns is crucial for brands and marketers who want to maximize results from affiliate and nano influencer campaigns. Every stage, from goal setting to post-campaign analysis, contributes to the success of your marketing efforts. In this article, we’ll break down a detailed timeline, so you can plan, execute, and optimize campaigns effectively.",
    images: ["https://grandeapp.com/images/blog/ig.jpg"],
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

              item: "https://grandeapp.com/blog/timeline-for-influencer",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <InfluencerMarketingSpecialistBlog />
      </main>
      <Footer />
    </div>
  );
}



