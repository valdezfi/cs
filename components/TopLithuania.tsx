import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
import Link from "next/link";

export default function GrandeLithuaniaMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
           Grande: Influencer Marketing Lithuania
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Partner with Lithuania’s Top Content Creators Through Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Work with creators across Lithuania to launch authentic, high-impact campaigns powered by UGC and influencer collaborations.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <CreatorSpotlight
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a Reliable UGC Creator Platform in Lithuania?</h2>
          <p>
            Grande is your go-to solution for building campaigns that connect with Lithuanian audiences. As a premier influencer marketing platform, we bridge the gap between brands and local creators who drive engagement and craft relatable content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for the Lithuanian Market?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Localized UGC Campaigns:</strong> Build trust with content tailored to Lithuanian audiences and cultural nuances.</li>
            <li><strong>Vetted Influencer Network:</strong> Collaborate with micro and macro influencers from Vilnius to Klaipėda.</li>
            <li><strong>Effortless Campaign Management:</strong> Manage your strategy and creators with an intuitive platform.</li>
            <li><strong>Real-Time Analytics:</strong> Gain insights on how your content performs across Lithuania’s digital landscape.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Sets Grande Apart in Lithuania?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Hyper-Targeted Micro-Influencer Strategies:</strong> Work with creators who speak directly to niche Lithuanian communities.</li>
            <li><strong>Tailored Campaign Support:</strong> From skincare to tech, we adapt our solutions to your sector.</li>
            <li><strong>Authentic, High-Quality Content:</strong> Empower your brand through meaningful UGC that resonates in Lithuania’s unique digital space.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">The Grande Advantage</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Cost-Effective Marketing:</strong> Reach your KPIs without overspending on traditional media.</li>
            <li><strong>Strategic Brand Alignment:</strong> We match you with Lithuanian creators who align with your values.</li>
            <li><strong>Efficient Workflows:</strong> Keep everything organized in one powerful platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Empowering Brands in Lithuania with UGC & Influencers</h2>
          <p>
            At Grande, we believe every Lithuanian brand has a story worth telling. By combining local creators, strategic campaigns, and scalable tools, we make UGC and influencer marketing not just effective—but transformative.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Find the best creators across Lithuania.</li>
            <li>Use micro-influencer marketing to speak directly to local communities.</li>
            <li>Boost engagement and brand loyalty through authentic campaigns.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Connecting with Lithuanian Creators Today</h2>
          <p className="mb-6">
            Ready to take your marketing to the next level? Partner with Grande and tap into the full potential of UGC and influencer marketing in Lithuania.
          </p>
          <Link href="/">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Launch App
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
