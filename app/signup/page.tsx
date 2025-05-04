 import Header from "components/Header";
// import Hero from "components/Hero";
// import AmountInput from "components/BitcoinInput";
import SignupForm from "components/SignupForm";
import Footer from "components/Footer";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Create Your Account | Numerobook",
  description:
    "Sign up to Numerobook and get access to secure crypto trading tools, bots, and portfolio tracking. Start your crypto journey with Momo or other payment options.",
  keywords: [
    "signup crypto platform",
    "create account numerobook",
    "crypto trading signup",
    "bitcoin signup",
    "numerobook register",
    "momo crypto signup",
    "secure crypto account",
    "best crypto trading bot",
    "crypto hedge fund",
    "bitcoin converter",
    "crypto portfolio tracker",
  ],
  openGraph: {
    title: "Create Your Account | Numerobook",
    description:
      "Sign up to access powerful crypto tools, bots, and portfolio management with Numerobook.",
    url: "https://numerobook.com/signup",
    images: [
      {
        url: "/images/OIG-19.jpg",
        width: 1200,
        height: 630,
        alt: "Signup for Numerobook",
      },
    ],
    siteName: "Numerobook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Numerobook – Crypto Tools, Bots & More",
    description:
      "Create your free account and unlock powerful tools for trading, tracking, and investing in crypto securely.",
    images: ["/images/OIG-19.jpg"],
  },
  alternates: {
    canonical: "https://numerobook.com/signup",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />

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
                name: 'signup',
                item: 'https://numerobook.com/signup',
              },
            ],
          }),
        }}
      />
      <main>
        {/* <Hero /> */}
        <SignupForm 
 /> 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
