import Header from "components/Header";
import GrandeAppBrandAffiliateCampaignPage from "components/Promo";
import Footer from "components/Footer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Launch Affiliate + Influencer Campaigns on GrandeApp: Boost TikTok Shop Promo Code",
  description:
    "How brands use GrandeApp to run affiliate and influencer campaigns that drive TikTok Shop promo codes. Create campaigns, track performance, and scale fast.",
  keywords: [
    "brand influencer campaigns",
    "TikTok affiliate marketing",
    "GrandeApp for brands",
    "TikTok Shop promo code",
    "affiliate program for brands",
    "TikTok Shop campaigns",
  ],
  openGraph: {
    title:
      "Launch Affiliate + Influencer Campaigns on GrandeApp: Boost TikTok Shop Promo Code",
    description:
      "How brands use GrandeApp to run affiliate and influencer campaigns that drive TikTok Shop promo codes. Create campaigns, track performance, and scale fast.",
    url: "https://grandeapp.com/blog/promo",
    siteName: "GrandeApp",
    images: [
      {
        url: "https://grandeapp.com/images/agency.jpg",
        width: 1200,
        height: 630,
        alt: "Influencers, Podcasts y Contenido UGC en Puerto Rico – Grande",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Launch Affiliate + Influencer Campaigns on GrandeApp: Boost TikTok Shop Promo Code",
    description:
      "How brands use GrandeApp to run affiliate and influencer campaigns that drive TikTok Shop promo codes. Create campaigns, track performance, and scale fast.",
    images: ["https://grandeapp.com/images/agency.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/blog/promo",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://grandeapp.com"),
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* ✅ JSON-LD Breadcrumb Schema */}
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
                name:       "Launch Affiliate + Influencer Campaigns on GrandeApp: Boost TikTok Shop Promo Code",

                item: "https://grandeapp.com/blog/promo",
              },
            ],
          }),
        }}
      />

      <Header />
      <main className="flex-1 py-8 px-4">
        <GrandeAppBrandAffiliateCampaignPage />
      </main>
      <Footer />
    </div>
  );
}
