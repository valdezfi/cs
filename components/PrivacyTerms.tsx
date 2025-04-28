import Head from "next/head";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>Privacy Policy | Numerobook</title>
        <meta
          name="description"
          content="Learn about Numerobook's privacy practices and how we protect your personal data."
        />
        <meta name="keywords" content="privacy, numerobook, data protection, p2p" />
      </Head>

      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

          <section className="space-y-8">
            <p className="text-lg">
              This Privacy Policy explains how Numerobook ("we", "us", or "our") collects, uses, and protects your personal
              information when you use our services at Numerobook.com ("the Service"). By using the Service, you consent to
              the collection and use of your personal data in accordance with this Privacy Policy.
            </p>

            <section>
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p>
                We collect information that you provide to us when registering for an account or using the Service. This
                includes:
              </p>
              <ul className="list-disc list-inside">
                <li>Your name, email address, and contact information.</li>
                <li>Account details, such as username, password, and transaction information.</li>
                <li>Payment and transaction information for the services you use on the platform.</li>
                <li>Any communication you send to us via support, feedback, or other forms of communication.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide and improve the Service, including but not limited to:
              </p>
              <ul className="list-disc list-inside">
                <li>Providing access to your account and services available on the platform.</li>
                <li>Processing transactions and payments related to your use of the Service.</li>
                <li>Communicating with you about your account, transactions, and any updates to the platform.</li>
                <li>Improving the functionality and user experience of the Service.</li>
                <li>Sending marketing communications, if you have opted in to receive them.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. How We Protect Your Information</h2>
              <p>
                We take the security of your personal information seriously. We implement industry-standard security measures
                to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                However, no method of data transmission or storage is 100% secure, and we cannot guarantee the absolute
                security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Sharing Your Information</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. However, we may share your
                information with trusted third-party service providers who help us operate the platform or deliver services,
                including payment processors, email service providers, and others.
              </p>
              <p>
                We may also disclose your information if required by law, such as to comply with a subpoena, legal process,
                or government request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete the personal information we hold about you. You may also
                withdraw your consent for us to use your data for marketing purposes at any time. If you wish to exercise these
                rights or have any questions about your personal data, please contact us at{" "}
                <a href="mailto:info@numerobook.com" className="text-blue-500 hover:underline">info@numerobook.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Cookies</h2>
              <p>
                We use cookies to enhance your experience on our platform. Cookies are small files stored on your device that
                allow us to remember your preferences and actions. You can adjust your browser settings to refuse cookies, but
                some parts of the Service may not function correctly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page. You are encouraged to review this policy periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please
                contact us at{" "}
                <a href="mailto:info@numerobook.com" className="text-blue-500 hover:underline">info@numerobook.com</a>.
              </p>
            </section>

            <section className="mt-8 text-center">
              <p className="text-lg">
                By using Numerobook, you consent to the collection and use of your personal data as outlined in this Privacy
                Policy. Thank you for trusting us with your information!
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
