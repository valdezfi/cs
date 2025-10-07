import Header from "components/Header";
import SexualHealthResourcesPage from "components/SexualHealthResourcesPage";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
   title:
    "Sexual Health Resources for Influencers and Brands | Affiliate Partnerships & Awareness",
  description:
    "Explore sexual health resources for influencers and brands. Learn how affiliate programs, link-in-bio tools, and influencer partnerships empower ethical and educational sexual wellness campaigns.",
  keywords: [
    "sexual health resources",
    "influencer partnerships",
    "affiliate programs",
    "link in bio",
    "GrandeApp",
  ],
 metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/sexual-health-resources",
  },
  openGraph: {
   title:
    "Sexual Health Resources for Influencers and Brands | Affiliate Partnerships & Awareness",
  description:
    "Explore sexual health resources for influencers and brands. Learn how affiliate programs, link-in-bio tools, and influencer partnerships empower ethical and educational sexual wellness campaigns.",
  url: "https://grandeapp.com/blog/sexual-health-resources",
    images: [
      {
        url: "https://grandeapp.com/images/blog/a.jpg",
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
  images: ["https://grandeapp.com/images/blog/a.jpg"],
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
              name:"Sexual Health Resources for Influencers and Brands | Affiliate Partnerships & Awareness",
              item: "https://grandeapp.com/blog/sexual-health-resources",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <SexualHealthResourcesPage />
      </main>
      <Footer />
    </div>
  );
}



