import Image from "next/image";
import Link from "next/link";

export default function GrandeBahrainMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: The Leading UGC Creator & Influencer Marketing Platform in Bahrain
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Connect with Bahrain’s Top Influencers & UGC Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Whether you're a startup in Manama or a regional brand expanding across the Gulf, Grande helps you collaborate with Bahraini creators who spark authentic engagement and deliver premium content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/bahrain-influencers.jpg"
          alt="Influencer and UGC marketing in Bahrain"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a reliable UGC creator platform in Bahrain?</h2>
          <p>
            Grande is your strategic partner for building marketing campaigns that resonate. As Bahrain’s top influencer marketing platform, we help brands collaborate with creators who deliver real engagement and stunning content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Marketing in Bahrain?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Trusted UGC Solutions:</strong> Tap into user-generated content that builds local trust and credibility.</li>
            <li><strong>Diverse Influencer Network:</strong> From Manama to Muharraq, connect with creators of all sizes across Bahrain.</li>
            <li><strong>Streamlined Campaigns:</strong> Plan, launch, and monitor your campaigns easily with our powerful platform.</li>
            <li><strong>Smart Analytics:</strong> Real-time insights help you track performance and improve ROI quickly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande the Best UGC Creator Platform in Bahrain?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro-Influencer Power:</strong> Work with niche creators in Bahrain who engage tight-knit, loyal audiences.</li>
            <li><strong>Custom Strategy:</strong> From awareness to conversions, every campaign is tailored to your goals.</li>
            <li><strong>Localized UGC:</strong> Collaborate with creators to craft authentic, Bahraini-branded content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits of Using Grande in Bahrain</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Affordable Reach:</strong> Maximize your marketing budget with cost-effective creator campaigns.</li>
            <li><strong>Perfect Creator Match:</strong> Get paired with influencers who reflect your brand’s identity.</li>
            <li><strong>Effortless Management:</strong> Enjoy a smooth, intuitive campaign experience from start to finish.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Powering UGC and Influencer Marketing in Bahrain</h2>
          <p>
            At Grande, we blend data and creativity to help brands in Bahrain achieve impactful results. Our UGC and influencer marketing services make it simple to grow brand love and engagement across the Kingdom.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Partner with creators across Bahrain's cities and rising talent communities.</li>
            <li>Boost brand awareness and loyalty with relatable, real content.</li>
            <li>Build lasting connections that drive sales and elevate your local presence.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Journey with Grande in Bahrain Today!</h2>
          <p className="mb-6">
            Ready to scale your brand in Bahrain? Collaborate with Grande — the region’s trusted UGC and influencer marketing platform.
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
