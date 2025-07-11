// app/(legal)/terms/page.tsx or pages/terms.tsx depending on your setup
import Head from "next/head";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>Terms of Use | GrandeApp</title>
        <meta
          name="description"
          content="Review the Terms of Use for GrandeApp—your go-to platform for influencer marketing and UGC collaborations. Learn how we protect your rights and ensure a fair, transparent experience for brands and creators."
        />
        <meta
          name="keywords"
          content="Terms of Use, GrandeApp, influencer terms, UGC terms, creator platform, campaign rules, user rights"
        />
        <meta name="author" content="GrandeApp Legal Team" />
        <meta property="og:title" content="Terms of Use | GrandeApp" />
        <meta
          property="og:description"
          content="Explore the official Terms of Use for GrandeApp, outlining the rules for safe and fair use of our platform by creators and brands."
        />
        <meta
          property="og:image"
          content="https://grandeapp.com/images/meta/grandeapp-og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grandeapp.com/terms" />
        <link rel="canonical" href="https://grandeapp.com/terms" />
      </Head>

      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Use</h1>

          <section className="space-y-8 text-lg leading-relaxed">
            <p>
              These Terms of Use ("Agreement") govern your use of GrandeApp.com
              ("Grande", "we", "us", or "our"), a platform connecting brands
              with creators for influencer marketing and user-generated content
              (UGC) services. By using our services, you agree to the terms
              below.
            </p>

            {/* All sections from 1 to 13 go here — no changes needed */}

            <section className="mt-8 text-center">
              <p>
                By using Grande, you agree to these Terms of Use. Thank you for
                trusting GrandeApp to power your influencer marketing and UGC
                campaigns.
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
