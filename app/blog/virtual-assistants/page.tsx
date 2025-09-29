import Header from "components/Header";
import UGCArticle from "components/UGCArticle";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
   title: "How to Use Virtual Assistants for Influencer Marketing Campaigns",
  description:
    "Learn how to use virtual assistants to manage influencer marketing campaigns, streamline workflows, and scale affiliate and nano campaigns.",
  keywords: [  "how to become a ugc creator",
            "ugc creator",],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/virtual-assistants",
  },
  openGraph: {
  title: "How to Use Virtual Assistants for Influencer Marketing Campaigns",
  description:
    "Learn how to use virtual assistants to manage influencer marketing campaigns, streamline workflows, and scale affiliate and nano campaigns.",
  url: "https://grandeapp.com/blog/virtual-assistants",
    images: [
      {
        url: "https://grandeapp.com/images/blog/what-is-a-digital-creator.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Collaboration:",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "How to Use Virtual Assistants for Influencer Marketing Campaigns",
  description:
    "Learn how to use virtual assistants to manage influencer marketing campaigns, streamline workflows, and scale affiliate and nano campaigns.",
  images: ["https://grandeapp.com/images/blog/what-is-a-digital-creator.jpg"],
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
              name: "How to Use Virtual Assistants for Influencer Marketing Campaigns",
              item: "https://grandeapp.com/blog/virtual-assistants",
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
