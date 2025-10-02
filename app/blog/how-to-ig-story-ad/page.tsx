import Header from "components/Header";
import InfluencerCollaborationPage from "components/InfluencerCollaboration";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "How to Create an IG Story Ad That Converts",
  description:
    "Learn how to create Instagram Story ads that drive engagement and sales using influencer collaborations, nano campaigns, and affiliate strategies through GrandeApp.",
  keywords: [
    "IG Story ad",
    "Instagram Story advertising",
    "influencer marketing",
    "nano campaigns",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/how-to-ig-story-ad",
  },
  openGraph: {
  title: "How to Create an IG Story Ad That Converts",
  description:
    "Learn how to create Instagram Story ads that drive engagement and sales using influencer collaborations, nano campaigns, and affiliate strategies through GrandeApp.",
 url: "https://grandeapp.com/blog/how-to-ig-story-ad",
    images: [
      {
        url: "https://grandeapp.com/images/blog/b.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
   title: "How to Create an IG Story Ad That Converts",
  description:
    "Learn how to create Instagram Story ads that drive engagement and sales using influencer collaborations, nano campaigns, and affiliate strategies through GrandeApp.",
 images: ["https://grandeapp.com/images/blog/b.jpg"],
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
              name: "How to Create an IG Story Ad That Converts",

              item: "https://grandeapp.com/blog/how-to-ig-story-ad",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <InfluencerCollaborationPage />
      </main>
      <Footer />
    </div>
  );
}
