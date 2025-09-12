import Header from "components/Header";
import LowestFeeExchangePage from "components/TopSingapore";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Influencer Marketing Platform in Singapore",
  description:
    "From Orchard Road startups to established brands across Singapore, Grande helps you scale with content that feels real, local, and impactful.",
  keywords: [
    "influencer marketing",
    "Influencer Marketing Platform in Singapore"
 
  ],
  authors: [{ name: "GrandeApp" }],
  alternates: { canonical: "https://www.grandeapp.com/singapore" },
  openGraph: {
  title: "Influencer Marketing Platform in Singapore",
    description:
    "From Orchard Road startups to established brands across Singapore, Grande helps you scale with content that feels real, local, and impactful.",
    url: "https://www.grandeapp.com/singapore",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://www.grandeapp.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing in Singapore",
      },
    ],
    type: "website",
    locale: "en_SG",
  },
  twitter: {
    card: "summary_large_image",
  title: "Influencer Marketing Platform in Singapore",
    description:
    "From Orchard Road startups to established brands across Singapore, Grande helps you scale with content that feels real, local, and impactful.",
    images: ["https://www.grandeapp.com/images/logo.png"],
  },
  robots: { index: true, follow: true },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grandeapp.com" },
              { "@type": "ListItem", position: 2, name: "Singapore", item: "https://www.grandeapp.com/singapore" },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        <LowestFeeExchangePage />
      </main>
      <Footer />
    </div>
  );
}
