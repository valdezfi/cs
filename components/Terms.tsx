// app/(legal)/terms/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | GrandeApp",
  description:
    "Review the full Terms of Use for GrandeApp—your influencer marketing, UGC, and AI campaign management platform.",
  keywords: [
    "GrandeApp terms",
    "Terms of Use",
    "Influencer marketing",
    "UGC terms",
    "Brand-creator agreement",
  ],
  openGraph: {
    title: "Terms of Use | GrandeApp",
    description:
      "Read the official Terms of Use for GrandeApp, covering influencer collaborations, UGC rights, AI tools, and campaign operations.",
    url: "https://grandeapp.com/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://grandeapp.com/terms",
  },
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">Terms of Use</h1>

          <p className="text-lg">
            Last Updated: <strong>January 2025</strong>
          </p>

          <section className="space-y-6 text-lg leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
              <p>
                These Terms of Use (“Terms”, “Agreement”) govern your access to
                and use of GrandeApp.com, the GrandeApp mobile/desktop apps, and
                all related services (the “Platform”). By creating an account or
                using the Platform, you agree to be bound by these Terms. If you
                do not agree, do not use GrandeApp.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">2. About GrandeApp</h2>
              <p>
                GrandeApp (“Grande”, “we”, “us”) is an influencer marketing and
                UGC marketplace that connects brands with creators. The Platform
                offers discovery tools, AI campaign assistants, content
                management, analytics, communication, and payment systems. We
                are not a talent agency, employer, or financial institution.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">3. Eligibility</h2>
              <p>To use GrandeApp, you must:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Be at least 18 years old</li>
                <li>Have legal authority to agree to these Terms</li>
                <li>Provide accurate account information</li>
                <li>Not be banned from similar platforms</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                4. Account Registration & Security
              </h2>
              <p>
                You are responsible for all activity under your account and must
                maintain confidentiality of your login credentials. We may
                suspend or terminate accounts for violations of these Terms or
                security risks.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                5. Creator Responsibilities
              </h2>
              <p>Creators agree to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Produce original, high-quality content</li>
                <li>Follow campaign briefs and deadlines</li>
                <li>Comply with FTC and disclosure rules</li>
                <li>Not use fake followers or engagement</li>
                <li>Provide accurate account analytics and info</li>
              </ul>
              <p className="mt-2">
                Payments are released only after deliverables are approved.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">6. Brand Responsibilities</h2>
              <p>Brands agree to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Provide accurate briefs and expectations</li>
                <li>Supply necessary product or access</li>
                <li>Approve or request revisions promptly</li>
                <li>Fund campaigns and pay fees on time</li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                7. Fees, Payments & Commission
              </h2>
              <p>
                GrandeApp may charge platform fees, subscription fees, payment
                processing fees, or affiliate management fees. Creator payments
                are only released after approval of deliverables, and may be
                withheld for fraud prevention or account review.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                8. Campaign Rules & Deliverables
              </h2>
              <p>
                Deliverables must follow brand guidelines, laws, and platform
                standards. GrandeApp may remove or restrict content that violates
                rules or legal requirements.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                9. Intellectual Property
              </h2>
              <p>
                Creators retain ownership of their content unless otherwise
                stated in the campaign. Upon submission and approval, creators
                grant brands a non-exclusive, worldwide, royalty-free license to
                use the content for the agreed campaign channels.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                10. Prohibited Activities
              </h2>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Fraud or misrepresentation</li>
                <li>Fake engagement or analytics</li>
                <li>Bypassing platform payments</li>
                <li>Posting illegal, harmful, or unsafe content</li>
                <li>Abusing ratings or messaging tools</li>
              </ul>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">11. AI Tools & Automation</h2>
              <p>
                GrandeApp includes AI-powered features such as campaign
                recommendations, influencer matching, and content suggestions.
                AI outputs may not be perfect, and decisions based on AI are
                made at your own risk.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">12. Privacy & Data Use</h2>
              <p>
                We collect and process data as described in our Privacy Policy.
                Data is used to operate the Platform, prevent fraud, match
                creators with brands, and improve services. We do not sell
                personal data.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                13. Third-Party Services
              </h2>
              <p>
                GrandeApp integrates with services such as TikTok, Instagram,
                YouTube, Stripe, and email or analytics providers. Using these
                integrations binds you to their respective terms.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">14. Termination</h2>
              <p>
                We may suspend or terminate accounts for violations, fraud,
                non-payment, or harmful behavior. Upon termination, access to
                the Platform and pending payments may be limited.
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">15. Dispute Resolution</h2>
              <p>
                Brands and creators should attempt to resolve disputes directly.
                GrandeApp may mediate but is not obligated. Legal disputes will
                follow the jurisdiction listed below.
              </p>
            </div>

            {/* 16 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                16. Limitation of Liability
              </h2>
              <p>
                GrandeApp is not liable for indirect damages, lost profits, data
                loss, or issues arising from third-party services. The Platform
                is provided “as-is.”
              </p>
            </div>

            {/* 17 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">17. Indemnification</h2>
              <p>
                You agree to indemnify and hold GrandeApp harmless from claims
                arising from your use of the Platform, content, or interactions
                with brands or creators.
              </p>
            </div>

            {/* 18 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                18. Changes to These Terms
              </h2>
              <p>
                GrandeApp may update these Terms at any time. Continued use of
                the Platform signifies acceptance of the updated Terms.
              </p>
            </div>

            {/* 19 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">19. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                United States.
              </p>
            </div>

            {/* 20 */}
            <div>
              <h2 className="text-2xl font-bold mb-2">20. Contact</h2>
              <p>
                For questions, contact us at{" "}
                <a
                  href="mailto:legal@grandeapp.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  legal@grandeapp.com
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
