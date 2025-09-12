import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
import Link from "next/link";

export default function GrandeSingaporeMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Influencer Marketing Platform in Singapore
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Work with Singapore’s Top Creators to Elevate Your Brand
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            From Orchard Road startups to established brands across Singapore, Grande helps you scale with content that feels real, local, and impactful.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <CreatorSpotlight
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for the best UGC creator platform in Singapore?</h2>
          <p>
            Grande connects your brand with local creators who understand Singaporean culture, trends, and platforms. Deliver performance-driven campaigns powered by creators who know how to tell your brand story.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Marketing in Singapore?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Localized UGC Strategies:</strong> Speak directly to Singaporean audiences across English, Mandarin, and Malay communities.</li>
            <li><strong>Wide Influencer Access:</strong> Partner with top creators in fashion, tech, lifestyle, finance, and more.</li>
            <li><strong>Streamlined Campaigns:</strong> Our intuitive dashboard helps you manage and track every part of your campaign.</li>
            <li><strong>Actionable Insights:</strong> Get real-time performance metrics to scale what works.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande the Best UGC Creator Platform in Singapore?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro & Macro Influencers:</strong> Work with creators who deliver both reach and engagement, based on your goals.</li>
            <li><strong>Smart Targeting:</strong> Reach specific Singaporean demographics by tapping into trusted voices.</li>
            <li><strong>Premium UGC Quality:</strong> Our creators are equipped to shoot polished, authentic content fit for any platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits of Using Grande in Singapore</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Cost-Effective ROI:</strong> Optimize ad spend by leveraging high-performing content from trusted local creators.</li>
            <li><strong>Authentic Brand Voice:</strong> Let creators reflect your brand in a natural, Singaporean tone.</li>
            <li><strong>End-to-End Simplicity:</strong> From outreach to results, Grande handles your influencer marketing workflow.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Your Partner for UGC and Influencer Marketing in Singapore</h2>
          <p>
            Whether you’re launching a new product or building a long-term brand presence in Singapore, Grande makes it easier to create impactful content and partnerships.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Collaborate with creators who have strong audiences in Singapore and Southeast Asia.</li>
            <li>Target bilingual or multilingual consumers effectively.</li>
            <li>Stand out in Singapore’s competitive digital landscape with meaningful influencer campaigns.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Growing in Singapore with Grande</h2>
          <p className="mb-6">
            Ready to scale your brand’s influence in Singapore? Partner with Grande — the go-to UGC and influencer platform for results.
          </p>
          <Link href="/">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Join Us
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
