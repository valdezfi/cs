// app/case-studies/tangbuy/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tangbuy x GrandeApp | Holiday Campaign Case Study",
  description:
    "How Tangbuy scaled its creator network and holiday sales using GrandeApp’s data-driven influencer marketing platform.",
  alternates: { canonical: "https://grandeapp.com/case-studies/tangbuy" },
};

export default function TangbuyCaseStudy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tangbuy x GrandeApp
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          How Tangbuy scaled its creator network and holiday sales using
          GrandeApp
        </p>
        <div className="mt-10">
          <img
            src="/images/tangbuy1.png"
            alt="Tangbuy Holiday Campaign Overview"
           width={800}
            height={500}
            className="rounded-2xl shadow-lg mx-auto"
          />
          <p className="text-sm text-gray-500 mt-3">
            Main campaign visual — Holiday influencer campaign overview
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">About Tangbuy</h2>
        <p>
          Tangbuy is a purchasing and fulfillment service provider that caters
          to both individual and business clients. The company sources products
          from APIs, web crawlers, and a dedicated sourcing team — connecting
          factories directly to customers’ doorsteps.
        </p>
        <p>
          Beyond bringing affordable choices to customers, Tangbuy is positioning
          itself as a <strong>pioneer in the creator economy</strong>, empowering
          influencers to drive sales through authentic content. Its affiliate
          program is broader, deeper, and more flexible than traditional models,
          offering creators more ways to earn and brands more ways to grow.
        </p>
      </section>

      {/* Target Audience */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Target Audience</h2>
        <p>
          Tangbuy’s diverse audience includes both consumers and small
          businesses, each motivated by value, authenticity, and cultural
          discovery.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Price-conscious consumers</strong> seeking affordable and
            high-quality products delivered directly to them.
          </li>
          <li>
            <strong>Online shopping enthusiasts</strong> who value variety,
            discovery, and authentic creator recommendations.
          </li>
          <li>
            <strong>Fans of Chinese culture</strong> interested in unique,
            locally sourced items.
          </li>
          <li>
            <strong>SMBs</strong> looking for bulk purchasing or specialized
            sourcing opportunities.
          </li>
        </ul>

        {/* Target Audience Image */}
       <div className="mt-8 flex flex-col items-center space-y-8">
  <img
    src="/images/tangbuy22.png"
    alt="Tangbuy Target Audience"
    width={700}
    height={500}
    className="rounded-2xl shadow-lg"
  />
  <img
    src="/images/tangbuy11.png"
    alt="Tangbuy Target Audience"
    width={700}
    height={500}
    className="rounded-2xl shadow-lg"
  />

  <p className="text-sm text-gray-500 mt-3 text-center">
    Target audience visual — diverse shoppers and SMB clients
  </p>
</div>

      </section>

      {/* Holiday Campaign */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Holiday Campaign Overview</h2>
        <p>
          For the 2024 holiday season, <strong>Tangbuy partnered with GrandeApp</strong>{" "}
          to execute an end-to-end influencer marketing campaign aimed at boosting
          awareness and sales across multiple markets.
        </p>
        <p>
          GrandeApp managed the entire campaign lifecycle — from selecting{" "}
          <strong>Nano, Micro, and Macro influencers</strong> to coordinating
          deliverables, ensuring timely execution, and tracking performance
          metrics.
        </p>
        <p>
          Our team provided real-time data, campaign insights, and communication
          support, ensuring seamless collaboration between Tangbuy and its
          creators. The campaign emphasized authentic product storytelling and
          localized reach through creators who aligned with Tangbuy’s
          value-driven audience.
        </p>
      </section>

      {/* Execution & Logistics */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Execution & Logistics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Creator sourcing, vetting, and matching via{" "}
            <Link
              href="https://grandeapp.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GrandeApp.com
            </Link>
          </li>
          <li>
            Sampling and gifting coordination to ensure creators received Tangbuy
            products on time.
          </li>
          <li>
            Content scheduling and campaign tracking with real-time dashboards.
          </li>
          <li>
            Affiliate link setup and performance analytics to measure conversions.
          </li>
          <li>
            Regional support via local agency partners in markets where Tangbuy
            does not operate directly.
          </li>
        </ul>

        {/* Logistics Image */}
        <div className="mt-8">
          <img
            src="/images/tangbuy3.png"
            alt="Tangbuy Logistics and Execution"
            width={700}
            height={500}
            className="rounded-2xl shadow-lg mx-auto"
          />
          <p className="text-sm text-gray-500 mt-3 text-center">
            Logistics and execution — creator sampling, coordination, and data tracking
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Results</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>50+ influencers activated across Nano, Micro, and Macro tiers.</li>
          <li>300+ UGC posts created across TikTok, Instagram, and YouTube.</li>
          <li>3.2M total impressions and 180K engagements.</li>
          <li>25% increase in affiliate sign-ups during the campaign period.</li>
          <li>18% higher conversion rate from influencer-driven traffic.</li>
        </ul>
      </section>

      {/* Quote */}
      <section className="mb-16">
        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg">
          “Working with GrandeApp gave us full control and transparency over our
          influencer campaigns. The data, coordination, and creative support
          helped us connect with the right creators and scale our affiliate reach
          faster than expected.”
        </blockquote>
        <p className="mt-2 font-medium">— Tangbuy Marketing Team</p>
      </section>

      {/* Next Steps */}
      {/* <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p>
          Tangbuy continues to expand its creator collaborations for 2025,
          focusing on performance-based partnerships, product-specific UGC
          campaigns, and cross-border promotions through GrandeApp’s integrated
          platform.
        </p>
      </section> */}

      {/* CTA */}
      <section className="text-center mt-20">
        <Link
          href="https://grandeapp.com/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl text-lg transition-all focus:ring-4 focus:ring-blue-500/30"
        >
          Launch Your Campaign with GrandeApp
        </Link>
      </section>
    </main>
  );
}
