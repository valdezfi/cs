import Header from "components/Header";
import Footer from "components/Footer";

import { Metadata } from "next";
import ComplianceConsultantsUseCOfuncion from "components/Compliance";

export const metadata: Metadata = {
  title: "Compliance Consultants | COfuncion Cannabis Compliance Platform",
  description:
    "COfuncion helps compliance consultants manage cannabis regulatory audits, reporting, and advisory services with AI-driven insights and automation.",
  keywords: [
    "cannabis compliance consultants",
    "regulatory audits cannabis",
    "compliance management platform",
    "AI cannabis compliance",
    "audit reporting tools",
  ],
  authors: [{ name: "COfuncion" }],
  alternates: {
    canonical: "https://cofuncion.com/compliance-consultants",
  },
  openGraph: {
    title: "Compliance Consultants | COfuncion Cannabis Compliance Platform",
    description:
      "Assist clients with cannabis compliance, audits, and reporting using COfuncion’s AI-powered platform for compliance consultants.",
    url: "https://cofuncion.com/compliance-consultants",
    siteName: "COfuncion",
    images: [
      {
        url: "https://cofuncion.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "COfuncion Cannabis Compliance Consultants",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance Consultants | COfuncion Cannabis Compliance Platform",
    description:
      "Manage cannabis audits, reporting, and compliance workflows with COfuncion’s AI-powered platform for compliance consultants.",
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
        <ComplianceConsultantsUseCOfuncion />
      </main>

      <Footer />
    </div>
  );
}
