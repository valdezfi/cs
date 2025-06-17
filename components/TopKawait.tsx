import Image from "next/image";
import Link from "next/link";

export default function GrandeKuwaitMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: The Leading UGC Creator & Influencer Marketing Platform in Kuwait
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Connect with Kuwait’s Top Influencers & UGC Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Whether you're launching a brand in Kuwait City or scaling across the Gulf, Grande helps you collaborate with Kuwaiti creators who deliver authentic engagement and high-performing content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/kuwait-influencers.jpg"
          alt="Influencer and UGC marketing in Kuwait"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a trusted UGC creator platform in Kuwait?</h2>
          <p>
            Grande empowers your brand to build powerful campaigns that speak to your audience. As Kuwait’s top influencer and UGC platform, we connect you with creators who drive real value and creative storytelling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Marketing in Kuwait?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Effective UGC Campaigns:</strong> Build trust with audiences through user-generated content that resonates locally.</li>
            <li><strong>Wide Influencer Access:</strong> From Kuwait City to Al Jahra, find influencers across every niche and region.</li>
            <li><strong>Smart Campaign Management:</strong> Launch and manage campaigns seamlessly on our all-in-one platform.</li>
            <li><strong>Actionable Data:</strong> Get real-time analytics to optimize performance and improve engagement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande the Best UGC Creator Platform in Kuwait?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Targeted Micro-Influencers:</strong> Reach niche audiences in Kuwait with authentic micro-influencer partnerships.</li>
            <li><strong>Tailored Strategies:</strong> Every campaign is designed to match your brand’s vision, voice, and KPIs.</li>
            <li><strong>Localized Content:</strong> Work with creators who understand Kuwaiti culture and trends.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits of Using Grande in Kuwait</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>ROI-Driven Campaigns:</strong> Maximize your marketing spend with results-focused strategies.</li>
            <li><strong>Perfect Brand-Creator Fit:</strong> Match with creators that naturally align with your brand identity.</li>
            <li><strong>Streamlined Experience:</strong> Simplify campaign execution from outreach to performance tracking.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Powering UGC and Influencer Marketing in Kuwait</h2>
          <p>
            Grande helps brands in Kuwait tell compelling stories and build community through creator collaboration. From product launches to awareness campaigns, we make influencer marketing easy and effective.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Work with top creators from Kuwait’s key markets and growing talent pools.</li>
            <li>Reach your ideal customers with strategic influencer targeting.</li>
            <li>Stand out in the Kuwaiti market with premium, culturally relevant content.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Campaign with Grande in Kuwait Today!</h2>
          <p className="mb-6">
            Ready to grow in Kuwait? Partner with Grande, the trusted platform for influencer and UGC marketing success in the Gulf.
          </p>
          <Link href="/contact">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Launch App
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
