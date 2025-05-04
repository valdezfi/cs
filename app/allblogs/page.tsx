import Header from "components/Header";
import BlogMultiCard from "components/BlogMultiPost";
import Footer from "components/Footer";

import { Metadata } from 'next';
import Script from 'next/script';

// SEO and social sharing metadata
export const metadata: Metadata = {
  title: "All Blogs",
  description:
    "All Crypto Blogs ",
  keywords: [
 "crypto hedge fund",
"crypto hedge",
"crypto hedge fund fees",
"crypto fund of funds",
"crypto currency hedge fund",
"crypto funds",
"top crypto hedge funds",
"crypto fund administrator",
"crypto index fund",
"bitcoin hedge fund",
"crypto vc",
"crypto asset fund",
"blockchain vc",
"blockchain fund",
"momo",
"bitcoin converter"
  ],
  openGraph: {
    title: "All Blogs",
    description:
      "All Crypto Blogs",
    url: "https://numerobook.com/allblogs",
    images: [
      {
        url: "public/images/OIG-19.jpg",
        width: 1200,
        height: 630,
        alt: "All Crypto Blogs | Numerobook",
      },
    ],
    siteName: "Numerobook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " All Blogs| Numerobook",
    description:
      "All Crypto Blogs",
    images: ["/images/OIG-19.jpg"],
  },
  alternates: {
    canonical: "https://numerobook.com/allblogs",
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
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://numerobook.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'allblogs',
                item: 'https://numerobook.com/allblogs',
              },
            ],
          }),
        }}
      />
      <Header />
      <main>
        {/* <Hero /> */}
        <BlogMultiCard/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
