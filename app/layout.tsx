import { ThemeProvider } from "next-themes";
import "styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <GoogleAnalytics gaId="G-D0NTC472L0" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
