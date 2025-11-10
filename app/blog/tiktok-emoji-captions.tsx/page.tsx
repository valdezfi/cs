import Header from "components/Header";
import TiktokEmojiCaptionsPage from "components/Tiktok-emoji-captions";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';



export const metadata: Metadata = {
  title: "How to Use TikTok Emoji in Your Captions to Make Your Brand More Attractive",
  description:
    "Learn how to use TikTok emoji in captions to boost engagement, express emotion, and make your brand posts stand out. Emoji strategy guide for influencers and brands on GrandeApp.",
  keywords: [
    "TikTok emoji",
    "TikTok captions",
    "social media engagement",
    "influencer marketing",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical: "https://grandeapp.com/blog/tiktok-emoji-captions",
  },
  openGraph: {
    title:
      "How to Use TikTok Emoji in Your Captions to Make Your Brand More Attractive",
    description:
      "Boost engagement and brand personality with TikTok emoji. Learn how influencers use emojis to enhance captions and attract followers through GrandeApp.",
    url: "https://grandeapp.com/blog/tiktok-emoji-captions",
    images: [
      {
        url: "https://grandeapp.com/image/blog/tiktok-emoji.jpg",
        width: 1200,
        height: 630,
        alt: "TikTok emoji captions for brands and influencers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use TikTok Emoji in Your Captions | GrandeApp",
    description:
      "TikTok emoji tips for better captions, engagement, and influencer brand building. Learn how to make your posts stand out with the right emoji strategy.",
    images: ["https://grandeapp.com/image/blog/tiktok-emoji.jpg"],
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
              name:  "How to Use TikTok Emoji in Your Captions to Make Your Brand More Attractive",


              item: "https://grandeapp.com/blog/tiktok-emoji-captions",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <TiktokEmojiCaptionsPage />
      </main>
      <Footer />
    </div>
  );
}
