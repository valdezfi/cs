import Header from "components/Header";
import BrandFunnelTool from "components/BiogenB";

import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Free IG BIO Maker",
  description:
" If you’re a creator, your IG bio is the very first impression people get when they land on your profile. In only 150 characters, you have the opportunity to introduce yourself, share your vibe, and convince someone to hit the follow button. ",
keywords: [
    "ig bio",
    "instagram bio ideas aesthetic",
"instagram bio with emoji",
"ig bio copy and paste",
"ig bio maker",
"ugc creator jobs"


  ],
  authors: [{ name: "GrandeApp" }],
  alternates: {
    canonical: "https://grandeapp.com/bio-ig-creator",
  },
  openGraph: {
  title: "Free IG BIO Maker",
    description:
" If you’re a creator, your IG bio is the very first impression people get when they land on your profile. In only 150 characters, you have the opportunity to introduce yourself, share your vibe, and convince someone to hit the follow button. ",
    url: "https://grandeapp.com/bio-ig-creator",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "IG Bio Maker",
      },
    ],
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
  title: "Free IG BIO Maker",
    description:
" If you’re a creator, your IG bio is the very first impression people get when they land on your profile. In only 150 characters, you have the opportunity to introduce yourself, share your vibe, and convince someone to hit the follow button. ",
    images: ["https://grandeapp.com/images/logo.png"],
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
                name: "IG Bio Maker",
                item: "https://grandeapp.com/bio-ig-creator",
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        <BrandFunnelTool />
        
        {/* <IGBioLongArticle /> */}
      </main>
      <Footer />
    </div>
  );
}
