import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

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
"instant cash for gift cards"
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
        url: "https://www.numerobook.com/public/OIG-19.jpg",
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
    images: ["https://www.numerobook.com/public/OIG-19.jpg"],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        /> */}

        {/* Google Analytics script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-335050025`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-335050025', {
                page_path: window.location.pathname,
              });
            `,
          }}
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
