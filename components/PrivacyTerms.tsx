// app/(legal)/privacy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GrandeApp",
  description:
    "Learn how GrandeApp collects, protects, and uses your personal information. Review our Privacy Policy to understand your rights and our data practices.",
  keywords: [
    "Privacy Policy",
    "GrandeApp privacy",
    "data protection",
    "creator data",
    "brand data safety",
    "UGC privacy",
    "AI marketing tools privacy",
  ],
  openGraph: {
    title: "Privacy Policy | GrandeApp",
    description:
      "Learn about GrandeApp's data protection practices and how we safeguard your personal information with full transparency.",
    url: "https://grandeapp.com/privacy",
    type: "website",
    images: ["https://grandeapp.com/images/meta/grandeapp-og.jpg"],
  },
  alternates: {
    canonical: "https://grandeapp.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>

          <p className="text-lg">
            Last Updated: <strong>January 2025</strong>
          </p>

          <section className="space-y-8 text-lg leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p>
                This Privacy Policy explains how GrandeApp ("Grande", "we",
                "us", or "our") collects, uses, stores, and protects your
                personal information when you use grandeapp.com, our mobile
                apps, or any related products and services (the “Platform”).
              </p>
              <p className="mt-2">
                By accessing or using the Platform, you consent to the data
                practices described in this Privacy Policy.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>

              <h3 className="text-xl font-medium mt-4">A. Personal Information</h3>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Name and contact information</li>
                <li>Email address and login credentials</li>
                <li>Username, social media links, and public accounts</li>
                <li>Location (city, country)</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">B. Creator & Brand Profile Data</h3>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Social media metrics</li>
                <li>Follower counts and engagement rates</li>
                <li>Audience demographics (if API-connected)</li>
                <li>Uploaded content, deliverables, and campaign history</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">C. Platform Usage Data</h3>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Device information</li>
                <li>IP address and browser type</li>
                <li>Page interactions and activity logs</li>
                <li>Messages, campaign submissions, and analytics</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">D. Payment Information</h3>
              <p className="mt-2">
                Payments are processed through secure third-party partners (e.g.
                Stripe). We do not store full payment card numbers.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Create and manage your account</li>
                <li>Match creators with brands and campaigns</li>
                <li>Process payments and payouts securely</li>
                <li>Improve platform functionality and safety</li>
                <li>Provide AI-powered campaign suggestions</li>
                <li>Prevent fraud and verify authenticity</li>
                <li>Analyze performance and user behavior</li>
                <li>Communicate updates, changes, and support messages</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-semibold">
                4. How We Share Your Information
              </h2>
              <p>We may share your information with:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Brands looking to hire creators</li>
                <li>Creators applying to your campaigns</li>
                <li>Payment processors (Stripe, PayPal, etc.)</li>
                <li>AI and analytics tools that help improve recommendations</li>
                <li>Marketing or email communication tools</li>
                <li>Law enforcement when legally required</li>
              </ul>
              <p className="mt-2">
                We do <strong>not</strong> sell personal data to third parties.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-semibold">5. Cookies & Tracking</h2>
              <p>
                We use cookies, pixels, and tracking technologies to improve
                platform performance, analyze traffic, save preferences, and
                personalize user experience. You may disable cookies in your
                browser, but some features may not work correctly.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-semibold">
                6. Data Retention & Security
              </h2>
              <p>
                We retain your information only as long as necessary for
                operational, legal, and security purposes. We use encryption,
                access controls, and secure servers to protect your information.
              </p>
              <p className="mt-2">
                However, no platform is 100% secure. You use GrandeApp at your
                own risk.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-semibold">
                7. Your Rights & Choices
              </h2>
              <p>You may have the following rights depending on your region:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Access your personal data</li>
                <li>Update or correct information</li>
                <li>Delete your account</li>
                <li>Request a copy of your data</li>
                <li>Opt out of marketing emails</li>
                <li>Revoke API permissions (e.g., Instagram/TikTok)</li>
              </ul>
              <p className="mt-2">
                To make a request, contact us at{" "}
                <a
                  href="mailto:privacy@grandeapp.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  privacy@grandeapp.com
                </a>
                .
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-semibold">8. Children’s Privacy</h2>
              <p>
                GrandeApp is not intended for individuals under 18. We do not
                knowingly collect personal information from minors.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-semibold">
                9. International Data Transfers
              </h2>
              <p>
                Your information may be processed in countries outside your
                residence. We take reasonable steps to ensure secure data
                transfers and compliance with international standards.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-semibold">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy occasionally. Updates will be
                posted on this page with a new “Last Updated” date. Continued use
                of the Platform means you accept the revised Policy.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-semibold">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we
                protect your data, contact us at:
              </p>
              <p className="mt-2">
                📧{" "}
                <a
                  href="mailto:info@grandeapp.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  info@grandeapp.com
                </a>
              </p>
            </div>

            {/* closing */}
            <div className="text-center mt-10">
              <p className="text-lg">
                By using GrandeApp, you agree to this Privacy Policy. Thank you
                for trusting us with your information.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
