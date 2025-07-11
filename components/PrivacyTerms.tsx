// app/(legal)/privacy/page.tsx or pages/privacy.tsx
import Head from "next/head";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>Privacy Policy | GrandeApp</title>
        <meta
          name="description"
          content="Learn how GrandeApp protects your personal information. Read our Privacy Policy to understand your rights and how we manage your data in compliance with global standards."
        />
        <meta
          name="keywords"
          content="Privacy Policy, GrandeApp, data protection, creator privacy, brand safety, UGC, influencer marketing"
        />
        <meta name="author" content="GrandeApp Legal Team" />
        <meta property="og:title" content="Privacy Policy | GrandeApp" />
        <meta
          property="og:description"
          content="Learn about GrandeApp's data protection practices and your rights as a user. We are committed to keeping your information secure and transparent."
        />
        <meta
          property="og:image"
          content="https://grandeapp.com/images/meta/grandeapp-og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grandeapp.com/privacy" />
        <link rel="canonical" href="https://grandeapp.com/privacy" />
      </Head>

      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

          <section className="space-y-8 text-lg leading-relaxed">
            <p>
              This Privacy Policy explains how GrandeApp ("we", "us", or "our") collects, uses, and protects your personal
              information when you use our services at grandeapp.com ("the Service"). By using the Service, you consent to
              the collection and use of your personal data in accordance with this Privacy Policy.
            </p>

            {/* Sections 1 to 9 remain unchanged except for brand/email name updates */}
            <section>
              <h2 className="text-2xl font-semibold">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please
                contact us at{" "}
                <a href="mailto:info@grandeapp.com" className="text-blue-500 hover:underline">
                  info@grandeapp.com
                </a>.
              </p>
            </section>

            <section className="mt-8 text-center">
              <p className="text-lg">
                By using GrandeApp, you consent to the collection and use of your personal data as outlined in this Privacy
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
