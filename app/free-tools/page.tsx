import Header from "components/Header";
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";
import FreeToolsPage from "components/FreeTools";



export const metadata: Metadata = {
  title: "Free Automated Social Media Tools",
  description: "Best social media tools for marketing that are free to use! ",
  authors: [{ name: "GrandeApp Editorial Team" }],
  keywords: [
    "automated social media tools",
    "Best social media tools"
  
  ],
  openGraph: {
  title: "Free Automated Social Media Tools",
  description: "Best social media tools for marketing that are free to use! ",
    url: "https://grandeapp.com/free-tools",
    images: [
      {
        url: "https://grandeapp.com/images/free-tools.jpg",
        width: 1200,
        height: 630,
        alt:  "Free Automated Social Media Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Free Automated Social Media Tools",
  description: "Best social media tools for marketing that are free to use! ",
    images: ["https://grandeapp.com/images/free-tools.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/free-tools",
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
                name: "Ghana",
                item: "https://grandeapp.com/ghana",
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-1 py-8 px-4">
        
        <FreeToolsPage />
      </main>
      <Footer />
    </div>
  );
}
