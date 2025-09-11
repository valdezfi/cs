import Image from "next/image";
import Link from "next/link";

export default function GrandeIndiaMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
  Grande: Influencer Marketing India
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Discover India’s Top Influencers & UGC Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Whether you’re a local startup or a growing brand in India, Grande helps you connect with creators that drive results through authentic content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/india-influencers.jpg"
          alt="Influencer and UGC marketing in India"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a powerful UGC creator platform in India?</h2>
          <p>
            Grande is your trusted partner for influencer and UGC marketing. We help Indian businesses of all sizes collaborate with content creators who bring local relevance and high engagement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Indian Brands Choose Grande</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Localized UGC Campaigns:</strong> Speak to your audience in their language, culture, and tone with native creators.</li>
            <li><strong>Pan-India Influencer Network:</strong> From tier-1 cities like Mumbai and Bangalore to tier-2 towns, we connect you with relevant voices.</li>
            <li><strong>Effortless Campaign Management:</strong> Plan, launch, and scale influencer activations in minutes.</li>
            <li><strong>Analytics for India-Focused Growth:</strong> Track conversions, engagement, and regional traction with precision.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">How Grande Helps You Win in India</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro-Influencer Specialists:</strong> Reach high-intent audiences in niches like fashion, beauty, fintech, and wellness.</li>
            <li><strong>Custom Campaigns:</strong> Target by language, state, or interest—from Delhi to Kerala, in Hindi, Tamil, or Bengali.</li>
            <li><strong>Relatable Content:</strong> Authentic videos, stories, and reviews that resonate with India’s digital-first consumers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits for Indian Brands</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Cost-Effective UGC Solutions:</strong> Maximize ROI with budget-friendly influencer packages tailored to India’s market.</li>
            <li><strong>Creator Matchmaking:</strong> Work with creators who reflect your brand’s values and reach your ideal customer segment.</li>
            <li><strong>Local + Global Expansion:</strong> Expand within India or go global—Grande scales with you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Built for India’s Digital Future</h2>
          <p>
            India is the fastest-growing creator economy, and Grande is at the center of it. From tech startups in Bangalore to e-commerce brands in Delhi, we help businesses grow through community-powered marketing.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Connect with India’s rising creator stars.</li>
            <li>Build long-lasting engagement across YouTube, Instagram, and more.</li>
            <li>Boost app installs, sales, or walk-ins through trusted voices.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your India Campaign with Grande Today!</h2>
          <p className="mb-6">
            Ready to grow your brand across India with powerful influencer and UGC strategies? Partner with Grande and dominate digital marketing, the smart way.
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

