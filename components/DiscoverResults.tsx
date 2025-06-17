import { FaSearch, FaChartLine, FaCogs, FaGlobeAmericas } from "react-icons/fa";

const valueFeatures = [
  {
    name: "Precision Creator Discovery",
    icon: (className) => <FaSearch className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description:
      "Use AI filters—niche, audience demographics, engagement—to find the perfect creators in seconds.",
  },
  {
    name: "Real-Time Creator Insights",
    icon: (className) => <FaChartLine className={className} />,
    hoverColor: "group-hover:text-green-400",
    description:
      "See creator performance metrics instantly: reach, engagement rates, past campaign ROI.",
  },
  {
    name: "Automated Collaboration Workflows",
    icon: (className) => <FaCogs className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description:
      "Streamline outreach, contract management, and payouts with built-in automation.",
  },
  {
    name: "Multi-Platform Reach",
    icon: (className) => <FaGlobeAmericas className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description:
      "Discover and work with creators across Instagram, TikTok, YouTube, and more—all from one dashboard.",
  },
];

const DiscoverValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Discover & Work With the Right Creators
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {valueFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-black dark:bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-white dark:text-black"
          >
            <div className="mb-4">
              {feature.icon(
                `text-4xl text-white dark:text-black transition ${feature.hoverColor}`
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-sm text-gray-300 dark:text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverValueShowcase;
