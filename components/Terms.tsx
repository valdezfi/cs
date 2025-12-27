// app/(legal)/terms/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | COfuncion",
  description:
    "Review the Terms of Use for COfuncion, the AI-powered OTT campaign automation and management platform for brands and agencies.",
  keywords: [
    "COfuncion terms",
    "OTT advertising terms",
    "AI campaign automation",
    "Streaming ad platform terms",
    "Programmatic OTT",
  ],
  openGraph: {
    title: "Terms of Use | COfuncion",
    description:
      "Official Terms of Use for COfuncion, covering AI-powered OTT campaign management, automation, analytics, and reporting.",
    url: "https://cofuncion.com/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://cofuncion.com/terms",
  },
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">Terms of Use</h1>
          <p className="text-lg text-center">
            Last Updated: <strong>January 2025</strong>
          </p>

          <section className="space-y-8 text-lg leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
              <p>
                These Terms of Use (“Terms”) govern your access to and use of
                COfuncion.com and all related services (the “Platform”).
                By accessing or using the Platform, you agree to be bound by
                these Terms.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">2. About COfuncion</h2>
              <p>
                COfuncion (“we”, “us”) is an AI-powered OTT campaign automation
                and management platform designed for brands and agencies.
                The Platform enables planning, targeting, optimization,
                reporting, and performance analysis of streaming ad campaigns.
              </p>
              <p className="mt-2">
                COfuncion is not an ad network, streaming service, talent
                agency, or media owner.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">3. Eligibility</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>You must be at least 18 years old</li>
                <li>You must have authority to act on behalf of a brand or agency</li>
                <li>You must provide accurate and current account information</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                4. Account Access & Security
              </h2>
              <p>
                You are responsible for safeguarding your credentials and all
                activity under your account. We may suspend or terminate access
                if security, compliance, or misuse concerns arise.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                5. Platform Use & Campaign Responsibility
              </h2>
              <p>
                You are solely responsible for campaign inputs including
                targeting criteria, budgets, creatives, messaging, and
                compliance with advertising laws and platform policies.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                6. AI Automation & Optimization
              </h2>
              <p>
                COfuncion provides AI-driven recommendations, automation,
                optimization, and performance insights. AI outputs are
                probabilistic and informational only.
              </p>
              <p className="mt-2">
                Final campaign decisions remain the responsibility of the user.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                7. Reporting & Analytics
              </h2>
              <p>
                Campaign performance data and insights are derived from
                integrated data sources and modeling systems. COfuncion does
                not guarantee accuracy, completeness, or outcomes.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                8. Fees & Billing
              </h2>
              <p>
                Platform fees, subscriptions, usage-based pricing, or
                enterprise agreements may apply. All fees are non-refundable
                unless otherwise stated in writing.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                9. Intellectual Property
              </h2>
              <p>
                COfuncion retains all rights to its software, AI models,
                workflows, and platform technology. Users retain ownership of
                their uploaded campaign data and creatives.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                10. Prohibited Use
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Misuse of AI or data systems</li>
                <li>Illegal or deceptive advertising</li>
                <li>Attempting to reverse-engineer the Platform</li>
                <li>Interfering with system integrity or security</li>
              </ul>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                11. Third-Party Integrations
              </h2>
              <p>
                The Platform may integrate with DSPs, data providers, analytics
                tools, or streaming platforms. Use of these services is subject
                to their respective terms.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                12. Limitation of Liability
              </h2>
              <p>
                COfuncion is provided “as-is”. We are not liable for indirect,
                incidental, or consequential damages, lost revenue, or campaign
                performance outcomes.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                13. Termination
              </h2>
              <p>
                We may suspend or terminate access for violations, non-payment,
                or misuse. Upon termination, access to the Platform will cease.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                14. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                United States.
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                15. Contact
              </h2>
              <p>
                For legal inquiries, contact{" "}
                <a
                  href="mailto:info@cofuncion.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  info@cofuncion.com
                </a>
                .
              </p>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
