import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure
import Link from "next/link";

export default function GrandeUKMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
Influencer Marketing UK

          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Collaborate with the United Kingdom’s Top Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Build campaigns that resonate with UK audiences through authentic creator partnerships and impactful user-generated content.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <CreatorSpotlight
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">Looking for a reliable UGC platform in the United Kingdom?</h2>
          <p>
            Grande connects brands with UK-based creators to produce authentic, high-performing content. Whether you’re in London, Manchester, or Edinburgh, we make influencer marketing easy and effective.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose Grande for UGC and Influencer Campaigns?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Tailored UGC Strategies:</strong> Build trust with British audiences using authentic, relatable content.</li>
            <li><strong>Local & Global Talent:</strong> Partner with UK-based creators as well as influencers from wider European markets.</li>
            <li><strong>Simple Campaign Tools:</strong> Plan, launch, and measure your influencer campaigns with ease.</li>
            <li><strong>Smart Performance Tracking:</strong> Get real-time analytics to guide your marketing decisions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What Makes Grande Ideal for the UK Market?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Micro-Influencer Focus:</strong> Work with influencers who understand niche UK communities and trends.</li>
            <li><strong>Strategic Support:</strong> Our UK team helps you craft campaigns that align with your goals and market culture.</li>
            <li><strong>Premium Content:</strong> Collaborate with creators to develop content that builds credibility and inspires trust.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Key Benefits of Using Grande UK</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Cost-Effective Marketing:</strong> Achieve high ROI with scalable campaigns that suit every budget.</li>
            <li><strong>Creator Matching:</strong> Find UK influencers that genuinely reflect your brand's voice and audience.</li>
            <li><strong>All-in-One Dashboard:</strong> Manage everything from creator communication to reporting in one place.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande is Changing How UK Brands Connect with Creators</h2>
          <p>
            Our platform empowers UK businesses to tap into the power of digital storytelling. With our hands-on support and data-backed tools, Grande simplifies the way brands work with creators.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Access a growing network of UK and European influencers.</li>
            <li>Launch micro-influencer campaigns tailored to British audiences.</li>
            <li>Foster engagement through real, relatable creator content.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your UK Creator Campaign with Grande</h2>
          <p className="mb-6">
            Elevate your brand in the UK with Grande — your trusted partner in UGC and influencer marketing. Let's bring your next campaign to life.
          </p>
          <Link href="/">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Launch Campaign
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
