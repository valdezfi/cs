import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
import Link from "next/link";

export default function GrandeSouthAfricaMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Influencer Marketing Platform in South Africa
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Connect with South Africa's Top Influencers & UGC Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Whether you're a startup or an established brand in South Africa, Grande helps you collaborate with creators who drive authentic engagement and deliver high-quality content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <CreatorSpotlight
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a reliable UGC creator platform in South Africa?</h2>
          <p>
            Grande is your ultimate solution for building impactful campaigns that resonate with your audience. As one of the best influencer marketing platforms, we help brands connect with creators who drive engagement and deliver authentic, high-quality content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Marketing in South Africa?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Comprehensive UGC Solutions:</strong> Tap into the power of user-generated content to establish trust and authenticity with your audience.</li>
            <li><strong>Diverse Influencer Network:</strong> From micro-influencers to well-known creators across South Africa, we have a wide range of talent to match your specific needs.</li>
            <li><strong>Seamless Campaign Management:</strong> Our intuitive platform makes planning, executing, and monitoring campaigns easy.</li>
            <li><strong>Data-Driven Insights:</strong> Get real-time analytics to measure campaign performance and make informed decisions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande the Best UGC Creator Platform in South Africa?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro-Influencer Marketing Platform:</strong> Grande excels in connecting brands with micro-influencers who have niche audiences and high engagement rates.</li>
            <li><strong>Custom Campaign Strategies:</strong> We provide tailored solutions to align with your brand’s objectives, whether it’s boosting sales or enhancing brand awareness.</li>
            <li><strong>High-Quality UGC:</strong> Collaborate with creators to produce genuine, relatable content that resonates with your audience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits of Using Grande in South Africa</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Affordable Marketing Solutions:</strong> Maximize your ROI with cost-effective influencer marketing and UGC campaigns.</li>
            <li><strong>Brand-Creator Alignment:</strong> Our platform ensures you find the right creators who share your brand’s vision and values.</li>
            <li><strong>Simplified Workflow:</strong> With our user-friendly interface, managing campaigns has never been easier.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Transforming Marketing with UGC and Influencers in South Africa</h2>
          <p>
            At Grande, we believe in the power of storytelling through authentic content. By combining our expertise in UGC platform and influencer marketing, we help businesses in South Africa create impactful campaigns that deliver results.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Discover and collaborate with top-tier creators across South Africa.</li>
            <li>Leverage the power of micro-influencer marketing for targeted outreach.</li>
            <li>Drive meaningful engagement and build long-lasting relationships with your audience.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Journey with Grande in South Africa Today!</h2>
          <p className="mb-6">
            Don’t miss out on the opportunity to elevate your marketing efforts. Partner with Grande, the leading UGC creator platform in South Africa, and unlock the potential of influencer marketing.
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
