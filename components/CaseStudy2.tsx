// app/case-studies/koshine/page.tsx
import Link from "next/link";

export const metadata = {
  title: "KOSHINÉ x GrandeApp | Creator Sourcing Case Study",
  description:
    "How KOSHINÉ partnered with GrandeApp to source authentic beauty creators for their ongoing global affiliate campaign.",
  alternates: { canonical: "https://grandeapp.com/case-studies/koshine" },
};

export default function KoshineCaseStudy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          KOSHINÉ x GrandeApp
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Global Creator Sourcing — USA, Brazil, Western Europe & Canada
        </p>
        <div className="mt-10">
          <img
            src="/images/s.png"
            alt="KOSHINÉ Creator Sourcing Campaign"
            width={1000}
            height={560}
            className="rounded-2xl shadow-lg mx-auto"
          />
          <p className="text-sm text-gray-500 mt-3">
            Main campaign visual — sourcing authentic creators for KOSHINÉ’s global affiliate program
          </p>
        </div>
      </section>

      {/* About the Brand */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">About the Brand</h2>
        <p>
          <strong>KOSHINÉ</strong> is a clean, science-driven beauty brand
          developed by pharmaceutical scientists with over 15 years of R&D
          experience. A subsidiary of <strong>Kintor Pharmaceutical Limited</strong>, 
          KOSHINÉ focuses on safe, effective, and vegan skincare and haircare solutions.
        </p>
        <p>
          Their clinically tested actives — <strong>KX-826™</strong> and{" "}
          <strong>KT-939™</strong> — are designed to treat concerns such as hair
          thinning, acne, and pigmentation using research-backed, gentle formulas.
        </p>
        <p>
          Learn more at{" "}
          <Link
            href="https://en.koshine.hk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            www.koshine.hk
          </Link>
          .
        </p>
      </section>

      {/* Creator Sourcing Overview */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Creator Sourcing Overview</h2>
        <p>
          KOSHINÉ partnered with <strong>GrandeApp</strong> to identify and recruit{" "}
          authentic beauty creators for its ongoing global affiliate campaign. The goal
          is to connect with influencers whose content aligns with KOSHINÉ’s
          scientific, clean-beauty positioning while maintaining a natural and
          trustworthy tone.
        </p>
        <p>
          GrandeApp is managing the sourcing and vetting process across multiple
          international markets — ensuring a balanced mix of Nano and Micro influencers
          with proven engagement and audience trust in skincare and haircare niches.
        </p>
      </section>

      {/* Target Markets */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Target Markets</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>🇺🇸 United States — Beauty creators focused on dermatology and UGC content</li>
          <li>🇧🇷 Brazil — Skincare influencers with high organic reach</li>
          <li>🇪🇺 Western Europe — Clean beauty and science-based creators</li>
          <li>🇨🇦 Canada — Wellness and aesthetic lifestyle creators</li>
        </ul>
        <p>
          This approach allows KOSHINÉ to collaborate with regionally relevant creators
          who understand their audiences and can integrate KOSHINÉ’s products naturally
          into their content.
        </p>
      </section>

      {/* Vetting & Selection Process */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Vetting & Selection Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            🔍 <strong>Profile Analysis:</strong> Reviewing creators’ engagement rates,
            audience quality, and content frequency.
          </li>
          <li>
            💬 <strong>Content Review:</strong> Assessing aesthetic and tone alignment
            with KOSHINÉ’s brand.
          </li>
          <li>
            🌍 <strong>Regional Relevance:</strong> Ensuring diversity in language,
            culture, and audience demographics.
          </li>
          <li>
            🤝 <strong>Pre-Approval Communication:</strong> Coordinating outreach and
            confirming creator interest before onboarding.
          </li>
        </ul>
        <p>
          This data-driven sourcing workflow ensures every selected creator is
          brand-safe, authentic, and aligned for long-term affiliate collaboration.
        </p>
      </section>

      {/* Campaign Status */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Campaign Status</h2>
        <p>
          The KOSHINÉ sourcing campaign is <strong>currently active</strong>. Creator
          recruitment and onboarding are ongoing across all four target regions. As
          the program expands, new qualified beauty creators are being added weekly to
          the affiliate network.
        </p>
        <p>
          Performance metrics and campaign outcomes will be published in an updated
          case study once the initial recruitment phase is completed.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <Link
          href="https://grandeapp.com/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl text-lg transition-all focus:ring-4 focus:ring-blue-500/30"
        >
          Join the GrandeApp Creator Network
        </Link>
      </section>
    </main>
  );
}
