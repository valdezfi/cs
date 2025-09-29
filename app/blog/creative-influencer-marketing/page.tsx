import Header from "components/Header";
import CreativeInfluencerMarketingBlog from "components/AffiliateCampaigns";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "Creative Influencer Marketing Campaigns Concept Examples",
  description: "In today’s digital landscape, creative influencer marketing campaigns concept examples are not just an interesting case study—they are the blueprint for how brands connect with audiences in an authentic way. With the rise of affiliate models and the power of nano influencers, brands now have the opportunity to scale meaningful campaigns without overspending on celebrity endorsements.",
  keywords: ["Creative Influencer Marketing Campaigns Concept Examples", "influencer marketing", "affiliate marketing"],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/creative-influencer-marketing",
  },
  openGraph: {
  title: "Creative Influencer Marketing Campaigns Concept Examples",
  description: "In today’s digital landscape, creative influencer marketing campaigns concept examples are not just an interesting case study—they are the blueprint for how brands connect with audiences in an authentic way. With the rise of affiliate models and the power of nano influencers, brands now have the opportunity to scale meaningful campaigns without overspending on celebrity endorsements.",
    url: "https://grandeapp.com/blog/creative-influencer-marketing",
    images: [
      {
        url: "https://grandeapp.com/images/blog/ugcgrowth.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Influencer Marketing Campaigns Concept Examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Creative Influencer Marketing Campaigns Concept Examples",
  description: "In today’s digital landscape, creative influencer marketing campaigns concept examples are not just an interesting case study—they are the blueprint for how brands connect with audiences in an authentic way. With the rise of affiliate models and the power of nano influencers, brands now have the opportunity to scale meaningful campaigns without overspending on celebrity endorsements.",
    images: ["https://grandeapp.com/images/blog/ugcgrowth.jpg"],
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
              name: "Creative Influencer Marketing Campaigns Concept Examples",
              item: "https://grandeapp.com/blog/creative-influencer-marketing",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <CreativeInfluencerMarketingBlog />
      </main>
      <Footer />
    </div>
  );
}







 