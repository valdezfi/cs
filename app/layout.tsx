import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Bellete | Get Instant Funds Against Your Crypto",
  description: "Get Instant Funds Against Your Crypto by using your crypto as collateral. Easy, fast, and secure.",
  keywords: [
    "crypto loans",
    "instant crypto loans",
    "borrow crypto",
    "bitcoin loans",
    "ethereum loans",
    "stablecoin loans",
    "crypto-backed loans",
    "DeFi lending",
    "use crypto as collateral",
    "crypto loan app"
  ],
  openGraph: {
    type: "website",
    title: "Bellete | Instant Crypto Loans",
    description: "Get Instant Funds Against Your Crypto by using your crypto as collateral. Easy, fast, and secure.",
    url: "https://www.bellete.com", // Update with your actual website URL
    siteName: "Bellete",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Bellete - Instant Crypto Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellete | Instant Crypto Loans",
    description: "Get Instant Funds Against Your Crypto by using your crypto as collateral. Easy, fast, and secure.",
    image: "/images/twitter-card.jpg", // Replace with your actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
  additionalMetaTags: [
    {
      name: "author",
      content: "Bellete Team",
    },
    {
      name: "robots",
      content: "index, follow", // Ensures pages are indexed and links are followed
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
