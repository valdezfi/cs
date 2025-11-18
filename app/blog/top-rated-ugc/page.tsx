import Header from "components/Header";
import TopRatedUGCVideoPlatformsPage from "components/top-rated-ugc-video-platforms-for-social-media-managers";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title:
    "Top-Rated UGC Video Platforms for Social Media Managers | GrandeApp Guide",
  description:
    "Explore the top-rated UGC video platforms for social media managers. Learn how to source creators, streamline content workflows, and scale campaigns with GrandeApp.",
  keywords: [
    "top-rated UGC video platforms for social media managers",
    "UGC platforms for social media managers",
    "UGC creators",
    "influencer marketing",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
  alternates: {
    canonical:
      "https://grandeapp.com/blog/top-rated-ugc",
  },
  openGraph: {
    title:
      "Top-Rated UGC Video Platforms for Social Media Managers | Official GrandeApp Guide",
    description:
      "See the best UGC video platforms for social media managers who need fast content production, streamlined workflows, and global creators. Discover how GrandeApp powers modern creator strategies.",
    url: "https://grandeapp.com/blog/top-rated-ugc",
    images: [
      {
        url: "https://grandeapp.com/images/blogs/ugc-toolkit.jpg",
        width: 1200,
        height: 630,
        alt: "Top-rated UGC video platforms for social media managers",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top-Rated UGC Video Platforms for Social Media Managers | GrandeApp",
    description:
      "The official guide for social media managers to choose top-rated UGC platforms and scale content creation with influencers and creators.",
    images: ["https://grandeapp.com/images/blogs/ugc-toolkit.jpg"],
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
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://grandeapp.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name:"Top-Rated UGC Video Platforms for Social Media Managers | GrandeApp Guide",

              item: "https://grandeapp.com/blog/top-rated-ugc",
            },
          ],
        }),
      }}
    />
      <Header />
      <main className="flex-1 py-8 px-4">
       
        <TopRatedUGCVideoPlatformsPage />
      </main>
      <Footer />
    </div>
  );
}



