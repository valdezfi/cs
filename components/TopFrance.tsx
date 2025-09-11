import Image from "next/image";
import Link from "next/link";

export default function GrandeFranceMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande Influencer Marketing Platform France
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Connect with France's Top Influencers & UGC Creators 2025
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Whether you're a Paris-based startup or a national brand in France, Grande helps you collaborate with creators who spark authentic engagement and deliver high-quality content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/france-influencers.jpg"
          alt="Influencer and UGC marketing in France"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a reliable UGC creator platform in France?</h2>
          <p>
            Grande is your ultimate partner for building campaigns that connect with your audience. As one of France’s top influencer marketing platforms, we help brands collaborate with creators who deliver real engagement and exceptional content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Marketing France?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Comprehensive UGC Solutions:</strong> Use user-generated content to build trust and authenticity with your French audience.</li>
            <li><strong>Diverse Influencer Network:</strong> From Paris to Marseille, connect with creators of all sizes and styles across France.</li>
            <li><strong>Seamless Campaign Management:</strong> Plan, execute, and track campaigns with ease using our intuitive platform.</li>
            <li><strong>Data-Driven Insights:</strong> Access real-time performance metrics to refine your strategy and boost results.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande the Best UGC Creator Platform in France?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro-Influencer Marketing Platform:</strong> Grande connects you with micro-influencers who drive niche engagement across France.</li>
            <li><strong>Custom Campaign Strategies:</strong> Tailored plans designed to meet your brand’s goals — from awareness to conversion.</li>
            <li><strong>High-Quality UGC:</strong> Work with creators to produce content that feels natural, local, and relatable.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits of Using Grande in France</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Cost-Effective Solutions:</strong> Optimize your ROI with smart influencer and UGC campaigns built for the French market.</li>
            <li><strong>Brand-Creator Compatibility:</strong> Get matched with creators who reflect your values and voice.</li>
            <li><strong>Simplified Workflow:</strong> Our dashboard makes campaign management clear and easy from start to finish.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Powering UGC and Influencer Marketing France</h2>
          <p>
            At Grande, we blend strategy and storytelling to help brands across France create authentic, results-driven campaigns. We make UGC and influencer marketing simple, scalable, and successful.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Collaborate with top creators from France’s biggest cities and emerging talent hubs.</li>
            <li>Target your audience effectively with micro-influencer marketing.</li>
            <li>Build lasting relationships and elevate your brand presence in the French market.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Journey with Grande in France Today!</h2>
          <p className="mb-6">
            Ready to grow your brand in France? Work with Grande, the trusted UGC creator platform, and unlock the full power of influencer marketing.
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
