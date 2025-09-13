import Header from "components/Header";
import CreatorFunnelTool from "components/BiogenC";
import IGBioLongArticle from "components/BiogenCInfo";

import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IG Bio Maker",
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
    canonical: "https://www.grandeapp.com/bio-ig-creator",
  },
  openGraph: {
  title: "IG Bio Maker",
    description:
" If you’re a creator, your IG bio is the very first impression people get when they land on your profile. In only 150 characters, you have the opportunity to introduce yourself, share your vibe, and convince someone to hit the follow button. ",
    url: "https://www.grandeapp.com/bio-ig-creator",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
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
  title: "IG Bio Maker",
    description:
" If you’re a creator, your IG bio is the very first impression people get when they land on your profile. In only 150 characters, you have the opportunity to introduce yourself, share your vibe, and convince someone to hit the follow button. ",
    images: ["https://www.grandeapp.com/images/logo.png"],
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
                item: "https://www.grandeapp.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "IG Bio Maker",
                item: "https://www.grandeapp.com/bio-ig-creator",
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        <CreatorFunnelTool />
        <IGBioLongArticle />
      </main>
      <Footer />
    </div>
  );
}
