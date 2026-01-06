import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import ManageCampaigns from "components/Manage-Campaigns";

export const metadata: Metadata = {
  title: "Manage Cannabis Waste Operations | COfuncion",
  description:
    "Take full control of your cannabis waste operations. Plan, track, and optimize pickups with COfuncion’s AI-powered insights and compliance tools.",
  keywords: [
    "cannabis waste management",
    "cannabis compliance tracking",
    "AI waste operations",
    "cannabis pickups",
    "operator insights",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/manage-campaigns",
  },
  openGraph: {
    title: "Manage Cannabis Waste Operations | COfuncion",
    description:
      "Plan, track, and optimize cannabis waste operations with AI-powered insights for full compliance and efficient workflows.",
    url: "https://cofuncion.com/manage-campaigns",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Waste Operations",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manage Cannabis Waste Operations | COfuncion",
    description:
      "Take control of cannabis waste pickups, compliance, and operator insights with COfuncion’s AI platform.",
    images: ["https://cofuncion.com/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 dark:bg-green-900">
      <Header />

      <main className="flex-grow">
        <ManageCampaigns />
      </main>

      <Footer />
    </div>
  );
}
