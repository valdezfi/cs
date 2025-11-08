import Link from "next/link";

export const metadata = {
  title: "Our End-to-End Influencer Marketing Process | GrandeApp",
  description:
    "Explore how GrandeApp delivers full-funnel influencer marketing — from creator sourcing to content execution and performance tracking across LATAM, Europe, and the USA.",
  alternates: { canonical: "https://grandeapp.com/about/approach" },
};

export default function ApproachPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800 dark:text-white">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          End-to-End Influencer Marketing Process
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
         How GrandeApp powers creator collaborations from start to finish — Globally.

        </p>
      </section>

      {/* Step 1 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">1. Discovery & Campaign Planning</h2>
        <p>
          We begin by understanding each brand’s goals, target audience, and
          deliverables. Using GrandeApp’s campaign setup tools, we define
          objectives, budgets, timelines, and creative direction — ensuring clear
          KPIs whether the goal is awareness, engagement, or conversions.
        </p>
      </section>

      {/* Step 2 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">2. Creator Sourcing & Vetting</h2>
        <p>
          Through <Link href="https://grandeapp.com" className="text-blue-600 dark:text-blue-400 underline">GrandeApp.com</Link>, we identify and recruit creators across Nano, Micro,
          and Macro tiers. Our vetting process reviews engagement quality,
          audience relevance, and brand safety to ensure a perfect match.
          GrandeApp’s data engine filters creators by <strong>location, niche, and performance metrics</strong> across LATAM, Europe, and the USA.
        </p>
      </section>

      {/* Step 3 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">3. Briefing, Sampling & Coordination</h2>
        <p>
          After approval, we manage creator communication, product gifting, and
          campaign briefings. Our team supports brands with messaging guidelines
          and ensures creators meet campaign and compliance standards.
        </p>
      </section>

      {/* Step 4 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">4. Content Production & Review</h2>
        <p>
          Creators develop authentic UGC and sponsored content following the
          approved brief. Brands can <strong>review, approve, and track deliverables</strong> in real-time through the GrandeApp dashboard, ensuring content
          quality and timeliness.
        </p>
      </section>

      {/* Step 5 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">5. Campaign Execution & Amplification</h2>
        <p>
          Once approved, content goes live across TikTok, Instagram, and YouTube.
          GrandeApp tracks live performance including reach, engagement, clicks,
          and conversions. Optional paid amplification or affiliate integration
          helps extend campaign reach through unique creator links or discount codes.
        </p>
      </section>

      {/* Step 6 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">6. Performance Tracking & Optimization</h2>
        <p>
          We provide <strong>real-time dashboards and post-campaign reports</strong> showing
          engagement, reach, ROI, and before/after results.
        </p>
      </section>

      {/* Step 7 */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold">7. Reporting & Long-Term Partnerships</h2>
        <p>
          After campaign completion, brands receive comprehensive reports including
          audience insights, conversion analytics, and performance breakdowns.
          GrandeApp supports long-term collaborations by converting top creators
          into <strong>ongoing brand ambassadors and affiliates</strong>.
        </p>
      </section>

      {/* Key Strengths */}
      <section className="mb-16 space-y-3">
        <h2 className="text-2xl font-semibold">Key Strengths</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>100% Digital workflow — from sourcing to reporting</li>
          <li>Data-driven creator matching</li>
          <li>Seamless gifting & coordination management</li>
          <li>Transparent affiliate and performance tracking</li>
          <li>Global reach </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <Link
          href="https://grandeapp.com/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-xl text-lg transition-all focus:ring-4 focus:ring-orange-500/30"
        >
          Start Your Campaign with GrandeApp
        </Link>
      </section>
    </main>
  );
}
