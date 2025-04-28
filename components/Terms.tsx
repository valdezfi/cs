import Head from "next/head";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>Terms of Use | Numerobook</title>
        <meta
          name="description"
          content="The Terms of Use for Numerobook. Understand the conditions and guidelines for using our P2P services."
        />
        <meta name="keywords" content="terms of use, numerobook, p2p, bitcoin, mobile money" />
      </Head>

      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Terms of Use
          </h1>

          <section className="space-y-8">
            <p className="text-lg">
              These Terms of Use ("Agreement") govern your use of Numerobook.com ("Service", "we", "us", or "our"), a platform facilitating peer-to-peer (P2P) cryptocurrency transactions. By using our service, you agree to the following terms and conditions.
            </p>

            <section>
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Numerobook, you agree to comply with this Agreement. If you do not agree to these terms, you should not use our services. We reserve the right to modify this Agreement at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. Registration</h2>
              <p>
                To use certain features of Numerobook, you must create an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Use of the Service</h2>
              <p>
                Numerobook facilitates secure P2P transactions in which users can buy and sell Bitcoin and other cryptocurrencies. You agree to use the Service only for lawful purposes and not to engage in any illegal activity, including but not limited to money laundering or fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. User Obligations</h2>
              <p>
                You agree to:
              </p>
              <ul className="list-disc list-inside">
                <li>Provide accurate information during registration and while conducting transactions.</li>
                <li>Ensure that your payment methods are valid and authorized.</li>
                <li>Keep your account secure by maintaining the confidentiality of your login credentials.</li>
                <li>Comply with all applicable local, national, and international laws regarding cryptocurrency trading.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Payment Transactions</h2>
              <p>
                All payments made through Numerobook are processed securely. You agree to follow all instructions provided during the transaction process. Transactions are final and cannot be reversed once completed. Ensure all details, including payment amounts and recipient information, are correct before finalizing any transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Fees</h2>
              <p>
                Numerobook charges a fee for certain transactions, including but not limited to cryptocurrency purchases, and sales. The applicable fees will be communicated to you before completing any transaction. These fees may be subject to change, and you agree to review the fee schedule before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Account Termination</h2>
              <p>
                Numerobook reserves the right to suspend or terminate your account at any time for any reason, including but not limited to violation of this Agreement or any illegal activity. You may also terminate your account by contacting us at <a href="mailto:info@numerobook.com" className="text-blue-500 hover:underline">info@numerobook.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Security</h2>
              <p>
                You agree to take all necessary precautions to protect your personal and account information. Numerobook takes reasonable measures to secure its platform, but we cannot guarantee the security of your account. You are responsible for securing your own devices and accounts from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
              <p>
                Numerobook is not responsible for any loss or damage that may occur as a result of using the platform, including but not limited to loss of funds, unauthorized transactions, or system errors. Our liability is limited to the maximum extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. Privacy</h2>
              <p>
                We respect your privacy. Your personal information will be handled in accordance with our <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">11. Governing Law</h2>
              <p>
                This Agreement is governed by the laws of the jurisdiction in which Numerobook operates. Any disputes will be resolved in the appropriate courts within that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at <a href="mailto:info@numerobook.com" className="text-blue-500 hover:underline">info@numerobook.com</a>.
              </p>
            </section>

            <section className="mt-8 text-center">
              <p className="text-lg">
                By using Numerobook, you agree to abide by these Terms of Use. Thank you for choosing Numerobook!
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
