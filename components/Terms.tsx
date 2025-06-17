import Head from "next/head";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>Terms of Use | Grande</title>
        <meta
          name="description"
          content="The Terms of Use for GrandeApp. Understand the conditions and guidelines for using our influencer and UGC platform."
        />
        <meta name="keywords" content="terms of use, grande, grandeapp, influencer marketing, UGC, creator platform" />
      </Head>

      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Use</h1>

          <section className="space-y-8">
            <p className="text-lg">
              These Terms of Use ("Agreement") govern your use of GrandeApp.com ("Grande", "we", "us", or "our"), a platform connecting brands with creators for influencer marketing and user-generated content (UGC) services. By using our services, you agree to the terms below.
            </p>

            <section>
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Grande, you accept and agree to be bound by this Agreement. If you do not agree, you may not use our platform. Grande reserves the right to update these terms at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. Account Registration</h2>
              <p>
                To use our platform as a brand or creator, you must register and provide accurate and current information. You are responsible for safeguarding your login credentials and all activity under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Use of the Platform</h2>
              <p>
                Grande is designed for connecting brands with vetted creators and UGC talent. You agree not to misuse the platform, commit fraud, impersonate others, or engage in behavior that violates applicable laws or harms others on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
              <ul className="list-disc list-inside">
                <li>Provide accurate and up-to-date information during registration and campaign participation.</li>
                <li>Use the platform solely for its intended business and creative purposes.</li>
                <li>Respect contracts, briefs, and timelines agreed upon between brands and creators.</li>
                <li>Abide by copyright, intellectual property, and advertising guidelines.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Campaign Transactions</h2>
              <p>
                Brands are responsible for clearly defining deliverables, timelines, and compensation in campaigns. Creators must meet the agreed terms to receive payments. Grande may withhold or cancel payments if work is incomplete, violated, or flagged for fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Fees</h2>
              <p>
                Grande may charge platform fees, transaction fees, or service fees, which will be disclosed upfront. You agree to review all applicable fees before confirming any campaign or transaction. Fees may change with notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Content Ownership</h2>
              <p>
                Unless otherwise agreed in writing, creators retain ownership of their content. Brands are granted usage rights defined in campaign agreements. All parties agree not to misuse, alter, or resell content without consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Platform Integrity & Security</h2>
              <p>
                You are responsible for securing your devices and account. Grande implements industry-standard security protocols, but we do not guarantee immunity from cyber risks. Promptly notify us of any suspicious activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Termination</h2>
              <p>
                Grande reserves the right to suspend or terminate your account at any time if you violate these terms, participate in fraudulent activity, or cause reputational damage to the platform. You may request account deletion by contacting <a href="mailto:info@grandeapp.com" className="text-blue-500 hover:underline">info@grandeapp.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. Limitation of Liability</h2>
              <p>
                Grande is not liable for indirect losses, campaign disputes between brands and creators, or platform outages. Our maximum liability is limited to fees paid by you within the last 3 months for affected services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">11. Privacy</h2>
              <p>
                We respect your privacy. Information collected is governed by our <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>. By using Grande, you consent to data handling practices as described therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">12. Governing Law</h2>
              <p>
                These terms are governed by the laws of the jurisdiction in which GrandeApp operates. Any legal dispute will be resolved in the courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">13. Contact Information</h2>
              <p>
                For questions or feedback about these Terms of Use, contact us at <a href="mailto:info@grandeapp.com" className="text-blue-500 hover:underline">info@grandeapp.com</a>.
              </p>
            </section>

            <section className="mt-8 text-center">
              <p className="text-lg">
                By using Grande, you agree to these Terms of Use. Thank you for trusting GrandeApp to power your influencer marketing and UGC campaigns.
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
