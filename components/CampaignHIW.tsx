import Image from "next/image";

const features = [
  {
    title: "AI-Powered Campaign Matching",
    description:
      "Brands and agencies launch campaigns and instantly get matched with qualified UGC creators, influencers, and podcasters — based on real-time data and intent.",
  },
  {
    title: "Intent-Based Creator Applications",
    description:
      "Creators apply to campaigns that fit their niche and content style. No spam — just quality matches powered by AI filters.",
  },
  {
    title: "Built-In Campaign Performance Suite",
    description:
      "Track submissions, clicks, conversions, and creator engagement from a centralized campaign dashboard — no spreadsheets needed.",
  },
  {
    title: "All-in-One Dashboard for Teams & Talent",
    description:
      "Manage outreach, approvals, payments, and performance in one place. Both brands and creators stay fully in sync from pitch to post.",
  },
];

export default function CampaignHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Launch Smarter Campaigns with Grande
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Whether you're building brand awareness, scaling UGC, or activating niche creators — Grande makes campaign discovery, execution, and reporting seamless.
          </p>
          <ol className="space-y-6 list-decimal list-inside">
            {features.map((item, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Image */}
        <div className="w-full group">
          <img
            src="../public/images/campaign.jpg"
            alt="Campaign dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
