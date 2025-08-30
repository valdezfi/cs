import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Grande",
  description: "Boost Your ADs With Influencers, UGC Creators, & Podcast Creators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.jpg" type="image/svg+xml" />
     
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <GoogleAnalytics gaId="G-D0NTC472L0" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
