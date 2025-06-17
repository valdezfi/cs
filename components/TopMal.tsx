import Image from "next/image";
import Link from "next/link";

export default function GrandeMalaysiaMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: The Leading UGC Creator & Influencer Marketing Platform in Malaysia
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Connect with Malaysia’s Top Influencers & UGC Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Whether you're a brand in Kuala Lumpur, Penang, or Johor Bahru, Grande helps you partner with local creators who drive real engagement and craft high-quality, culturally relevant content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/malaysia-influencers.jpg"
          alt="Influencer and UGC marketing in Malaysia"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a trusted UGC creator platform in Malaysia?</h2>
          <p>
            Grande empowers your brand to connect with Malaysian consumers through authentic, creator-led content. Our platform bridges brands with top influencers and content creators across the country.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Marketing in Malaysia?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Localized UGC Expertise:</strong> Malaysian creators know how to speak your audience’s language — from Bahasa Malaysia to English and Chinese.</li>
            <li><strong>Influencers Across Regions:</strong> Find creators from Kuala Lumpur to Kuching, spanning lifestyle, beauty, tech, and more.</li>
            <li><strong>All-in-One Platform:</strong> Manage your campaigns from creator discovery to performance tracking with ease.</li>
            <li><strong>Data You Can Use:</strong> Analyze results and make smarter decisions with real-time insights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande the Best UGC Creator Platform in Malaysia?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro & Macro Influencer Access:</strong> Work with the right-sized creators for your niche and budget.</li>
            <li><strong>Culturally-Aware Campaigns:</strong> Malaysian creators create content that resonates with local customs, trends, and humor.</li>
            <li><strong>Tailored Campaign Support:</strong> Get expert strategy and execution from the Grande team — made for Malaysia’s market.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits of Using Grande in Malaysia</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Cost-Efficient ROI:</strong> Launch campaigns that convert without overspending.</li>
            <li><strong>Creator-Brand Fit:</strong> Work with creators who match your brand values, voice, and goals.</li>
            <li><strong>Simplified Workflow:</strong> Manage end-to-end collaborations through one centralized dashboard.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Powering Influencer & UGC Marketing in Malaysia</h2>
          <p>
            From viral TikToks to compelling Instagram Reels, Grande helps brands in Malaysia unlock the power of creator partnerships. We make content creation seamless, authentic, and results-focused.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Collaborate with creators across Malaysia’s urban and emerging creator communities.</li>
            <li>Drive regional awareness and engagement in both West and East Malaysia.</li>
            <li>Tap into multilingual creator content for diverse audience segments.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Campaign with Grande in Malaysia Today!</h2>
          <p className="mb-6">
            Ready to grow in Malaysia? Work with Grande to build campaigns that speak directly to your audience through the power of creators and community.
          </p>
          <Link href="/contact">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Contact Us
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
