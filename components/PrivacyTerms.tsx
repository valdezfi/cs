// app/(legal)/privacy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | COfuncion",
  description:
    "Learn how COfuncion collects, uses, and protects data for AI-powered OTT campaign automation, analytics, and reporting.",
  keywords: [
    "COfuncion privacy policy",
    "OTT advertising privacy",
    "AI campaign data protection",
    "streaming ads data",
    "programmatic advertising privacy",
  ],
  openGraph: {
    title: "Privacy Policy | COfuncion",
    description:
      "Understand how COfuncion safeguards data used for AI-powered OTT campaign management and analytics.",
    url: "https://cofuncion.com/privacy",
    type: "website",
    images: ["https://cofuncion.com/images/meta/cofuncion-og.png"],
  },
  alternates: {
    canonical: "https://cofuncion.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>

          <p className="text-lg text-center">
            Last Updated: <strong>January 2025</strong>
          </p>

          <section className="space-y-8 text-lg leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p>
                This Privacy Policy explains how COfuncion ("COfuncion", "we",
                "us", or "our") collects, uses, stores, and protects information
                when you access or use cofuncion.com and related services
                (the “Platform”).
              </p>
              <p className="mt-2">
                By using the Platform, you consent to the practices described
                in this Privacy Policy.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>

              <h3 className="text-xl font-medium mt-4">
                A. Account & Business Information
              </h3>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Business name and contact details</li>
                <li>Email address and login credentials</li>
                <li>User role (brand, agency, administrator)</li>
                <li>Billing and subscription information</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">
                B. Campaign & Advertising Data
              </h3>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Campaign configurations and targeting inputs</li>
                <li>Budget, scheduling, and optimization settings</li>
                <li>Creative metadata (not ownership of media assets)</li>
                <li>Performance metrics and delivery logs</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">
                C. Usage & Technical Data
              </h3>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Log files, page views, and feature usage</li>
                <li>Error diagnostics and system telemetry</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">
                D. Payment Information
              </h3>
              <p className="mt-2">
                Payments are processed by secure third-party providers.
                COfuncion does not store full payment card details.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-semibold">
                3. How We Use Information
              </h2>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Operate and maintain the Platform</li>
                <li>Enable AI-powered campaign automation and optimization</li>
                <li>Provide reporting, insights, and analytics</li>
                <li>Improve platform performance and reliability</li>
                <li>Monitor security, fraud, and misuse</li>
                <li>Communicate updates, service notices, and support</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-semibold">
                4. AI & Automated Processing
              </h2>
              <p>
                COfuncion uses AI and automated systems to analyze campaign
                inputs, optimize delivery strategies, and generate performance
                insights. AI outputs are informational and probabilistic.
              </p>
              <p className="mt-2">
                We do not use customer data to train public or third-party AI
                models without authorization.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-semibold">
                5. How We Share Information
              </h2>
              <p>We may share information with:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Authorized users within your organization</li>
                <li>Service providers (hosting, analytics, billing)</li>
                <li>Integrated advertising or analytics partners</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="mt-2">
                We do <strong>not</strong> sell personal or campaign data.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-semibold">
                6. Cookies & Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies to operate the Platform,
                analyze usage, and remember preferences. Disabling cookies may
                affect functionality.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-semibold">
                7. Data Retention & Security
              </h2>
              <p>
                We retain data only as long as necessary for business,
                contractual, and legal purposes. Security measures include
                encryption, access controls, and monitoring systems.
              </p>
              <p className="mt-2">
                No system is completely secure, and use of the Platform is at
                your own risk.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-semibold">
                8. Your Rights & Choices
              </h2>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Access or update your account information</li>
                <li>Request deletion of your account</li>
                <li>Opt out of non-essential communications</li>
                <li>Request a copy of stored personal data</li>
              </ul>
              <p className="mt-2">
                Requests may be submitted to{" "}
                <a
                  href="mailto:privacy@cofuncion.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  privacy@cofuncion.com
                </a>
                .
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-semibold">
                9. International Data Transfers
              </h2>
              <p>
                Data may be processed in jurisdictions outside your country.
                We implement reasonable safeguards to protect cross-border
                transfers.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-semibold">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Updates
                will be posted with a revised “Last Updated” date.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-semibold">
                11. Contact Us
              </h2>
              <p>
                For privacy-related questions, contact:
              </p>
              <p className="mt-2">
                📧{" "}
                <a
                  href="mailto:privacy@cofuncion.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  info@grandeapp.com
                </a>
              </p>
            </div>

            {/* closing */}
            <div className="text-center mt-10">
              <p className="text-lg">
                By using COfuncion, you agree to this Privacy Policy.
              </p>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
