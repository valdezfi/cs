import Image from "next/image";

const features = [
  {
    title: "Find creators who convert",
    description:
      "Use AI to match with influencers and UGC creators who align with your niche, audience, and KPIs — no guesswork required.",
  },
  {
    title: "Launch campaigns in minutes",
    description:
      "Submit your brief and let Grande handle creator selection, outreach, content approval, and tracking — all in one place.",
  },
  {
    title: "Track performance in real-time",
    description:
      "Access intuitive reports on reach, engagement, conversions, and ROI. Get actionable insights to optimize your budget.",
  },
  {
    title: "Scale influencer marketing efficiently",
    description:
      "Whether you run one campaign or 100, Grande helps you manage creators, briefs, and deliverables without hiring a team.",
  },
];

export default function BrandHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Everything Brands Need to Win With Creators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande makes it simple for brands and agencies to discover top creators, launch campaigns, and measure results — powered by AI.
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
            src="../public/images/brand.jpg" // Replace with your updated image path for brand UI
            alt="Brand dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
