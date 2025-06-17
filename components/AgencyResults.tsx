import { FaRobot, FaChartLine, FaLayerGroup, FaPeopleArrows } from "react-icons/fa";

const valueFeatures = [
  {
    name: "Smart Creator Matching",
    icon: (className) => <FaRobot className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description: "Find influencers who align with your brand voice and audience using AI.",
  },
  {
    name: "Real-Time Performance",
    icon: (className) => <FaChartLine className={className} />,
    hoverColor: "group-hover:text-green-400",
    description: "Get instant insights into campaign reach, engagement, and ROI.",
  },
  {
    name: "Campaign Automation",
    icon: (className) => <FaLayerGroup className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description: "Simplify outreach, reporting, and payouts so you can focus on growth.",
  },
  {
    name: "Cross-Platform Campaigns",
    icon: (className) => <FaPeopleArrows className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description: "Run seamless campaigns on Instagram, TikTok, YouTube, and more.",
  },
];

const BrandValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Why Top Brands Choose Grande
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {valueFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-black dark:bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-white dark:text-black"
          >
            <div className="mb-4">
              {feature.icon(`text-4xl text-white dark:text-black transition ${feature.hoverColor}`)}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-sm text-gray-300 dark:text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandValueShowcase;
