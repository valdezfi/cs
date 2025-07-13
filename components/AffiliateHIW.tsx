import Image from "next/image";

const features = [
  {
    title: "Drive Revenue with Affiliate Campaigns",
    description:
      "Easily launch affiliate programs that turn creators into revenue channels. Track clicks, sales, and ROI in real time.",
  },
  {
    title: "Match with Performance-Ready Creators",
    description:
      "Use AI to find creators who can effectively promote your offers via affiliate links across Instagram, TikTok, YouTube, and more.",
  },
  {
    title: "Centralized Affiliate Link Management",
    description:
      "Manage every affiliate link, commission structure, and creator payout from a unified dashboard built for scale.",
  },
  {
    title: "Built for Agencies & Freelancers",
    description:
      "Run affiliate programs on behalf of clients with tools to monitor performance, automate payouts, and prove campaign value.",
  },
];

export default function AffiliateHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Affiliate Link Management for Growth-Focused Teams
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Whether you're a brand scaling sales, a freelancer managing influencer deals, or an agency driving results—Grande gives you everything you need to win with affiliate links.
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
          <Image
            src="/public/images/affiliate.jpg" // Replace with your dashboard image
            alt="Affiliate management dashboard"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
