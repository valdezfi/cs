import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Numerobook | Instantly Buy & Sell Crypto",
  description:
    "Buy and sell Bitcoin, Ethereum, Monero, and Stablecoins instantly with Numerobook. The fastest crypto peer-to-peer exchange for local and global users.",
  keywords: [
    "momo",
    "bitcoin calculator",
    "bitcoin converter",
    "fiat-backed stablecoins",
    "public key vs private key",
    "private key vs public key",
    "difference between public and private key",
    "fiat backed stablecoins",
    "mejor plataforma para comprar criptomonedas en colombia",
    "numerobook",
    "monero fees",
    "monero transaction cost",
    "crypto in zimbabwe",
    "monero transaction fee",
    "cryptocurrency trading in zimbabwe",
    "cryptocurrency trading platform in nigeria",
    "plataformas de criptomonedas en colombia",
    "best monero pools",
    "plataformas de criptomonedas en colombia",
    "plataformas de criptomonedas en méxico",
    "plataformas de criptomonedas en argentina",
    "crypto trading platforms in nigeria",
    "xmr fees",
    "monero pools",
    "crypto brokers in nigeria",
    "mejores exchanges para comprar criptomonedas 2025",
    "how to buy bitcoin in ghana",
    "usdc vs usdt comparison",
    "mtn mobile money",
    "momos near me",
    "xmr to usd",
    "best trading platform in zimbabwe",
    "xmr calculator",
    "xmr chart calculator",
    "monero to usd",
    "monero calculator",
    "monero usd",
    "monero hashrate calculator",
    "buy monero with usd",
    "what is monero",
    "monero vs bitcoin",
    "xmr pool",
    "xmr to btc",
    "usd to monero",
    "best xmr mining pool",
"usd to usdt",
"usdt to usd exchange",
"how to buy usdt",
"buy usdt",
"buy usdt with credit card",
"tether fees",
"buy tether with credit card",
"crypto gift cards",
"bitcoin gift card",
"convert gift card to bitcoin",
"buy visa gift card with bitcoin",
"bitcoin gift card walmart",
"sell gift cards for bitcoins",
"buy virtual visa gift card with bitcoin",
"buy gift cards with bitcoin",
"sell gift card",
"gift card exchange",
"gift card exchange near me",
"trade gift card for cash",
"buy bitcoin with prepaid card",
"instant cash for gift cards",
"bitcoin trading bot strategy",
"best cryptocurrency trading bots",
"cryptocurrency robot",
"buy monero",
"usdt trading bot",
"usdc trading bot",
"trading bot crypto",
"algorithmic cryptocurrency trading",
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
"blockchain fund"
  ],
  openGraph: {
    type: "website",
    url: "https://numerobook.com",
    title: "Numerobook | Instantly Buy & Sell Crypto",
    description:
      "Trade Bitcoin and other cryptocurrencies instantly. Connect with verified buyers and sellers worldwide.",
    siteName: "Numerobook",
    images: [
      {
        url: "https://numerobook.com/images/OIG-19.jpg",
        width: 1200,
        height: 630,
        alt: "Numerobook P2P Crypto Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numerobook | Instantly Buy & Sell Crypto",
    description: "The fastest P2P crypto marketplace to connect with global traders.",
    images: ["https://numerobook.com/images/OIG-19.jpg"],
  },
  alternates: {
    canonical: "https://numerobook.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Numerobook Team" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
     
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <GoogleAnalytics gaId="G-F3Q6L5RHHX" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
