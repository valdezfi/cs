import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import CultivatorsUseCOfuncion from "components/Cultivators";

export const metadata: Metadata = {
  title: "Cannabis Cultivators | COfuncion Grower Operations & Compliance",
  description:
    "COfuncion helps licensed cannabis cultivators manage cultivation operations, compliance, and reporting with AI-driven insights and workflow automation.",
  keywords: [
    "cannabis cultivators",
    "growers compliance",
    "cannabis cultivation management",
    "AI grower operations",
    "cannabis reporting tools",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/cultivators",
  },
  openGraph: {
    title: "Cannabis Cultivators | COfuncion Grower Operations & Compliance",
    description:
      "Track cultivation operations, manage compliance, and optimize grower workflows with COfuncion’s AI-powered platform for cannabis cultivators.",
    url: "https://cofuncion.com/cultivators",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Cultivators Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Cultivators | COfuncion Grower Operations & Compliance",
    description:
      "Manage cultivation operations, compliance, and workflows with COfuncion’s AI-powered platform for cannabis growers.",
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

      <main>
        <CultivatorsUseCOfuncion />
      </main>

      <Footer />
    </div>
  );
}
