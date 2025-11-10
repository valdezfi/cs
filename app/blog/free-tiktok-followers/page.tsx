import Header from "components/Header";
import FreeTiktokFollowersPage from "components/Free-tiktok-followers";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title:
    "How to Get Free TikTok Followers with UGC Creators and Influencer Collaborations",
  description:
    "Learn how to get free TikTok followers using UGC creators, influencer partnerships, and smart content strategy. Step-by-step guide with tips to grow your TikTok audience fast through GrandeApp.",
  keywords: [
    "free TikTok followers",
    "UGC creators",
    "influencer collaborations",
    "TikTok growth strategy",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/free-tiktok-followers",
  },
  openGraph: {
    title:
      "How to Get Free TikTok Followers with UGC Creators and Influencer Collaborations",
    description:
      "Step-by-step strategy for getting free TikTok followers using UGC creators and influencer marketing. Grow your TikTok fast with GrandeApp’s creator network.",
    url: "https://grandeapp.com/blog/free-tiktok-followers",
    images: [
      {
        url: "https://grandeapp.com/images/blogs/free-tiktok-followers.jpg",
        width: 1200,
        height: 630,
        alt: "Free TikTok Followers UGC Creators GrandeApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Get Free TikTok Followers with UGC Creators and Influencer Collaborations",
    description:
      "Get free TikTok followers using UGC content and influencer campaigns powered by GrandeApp.",
    images: ["https://grandeapp.com/images/blogs/free-tiktok-followers.jpg"],
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
              name:     "How to Get Free TikTok Followers with UGC Creators and Influencer Collaborations",


              item: "https://grandeapp.com/blog/free-tiktok-followers",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <FreeTiktokFollowersPage />
      </main>
      <Footer />
    </div>
  );
}
