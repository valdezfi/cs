import {
  FaRobot,
  FaChartLine,
  FaLink,
  FaNetworkWired,
} from "react-icons/fa";

const valueFeatures = [
  {
    name: "AI Affiliate Matching",
    icon: (className) => <FaRobot className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description: "Use AI to instantly connect with top-performing creators for your niche.",
  },
  {
    name: "Live Earnings Dashboard",
    icon: (className) => <FaChartLine className={className} />,
    hoverColor: "group-hover:text-green-400",
    description: "Track clicks, conversions, and commissions in real time across all campaigns.",
  },
  {
    name: "Automated Link Generation",
    icon: (className) => <FaLink className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description: "Generate trackable affiliate links and QR codes with one click—no manual setup.",
  },
  {
    name: "Multi-Platform Reach",
    icon: (className) => <FaNetworkWired className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description: "Distribute affiliate campaigns across TikTok, Instagram, YouTube, and more.",
  },
];

const AffiliateValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Why Brands Trust Grande for Affiliate Growth
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

export default AffiliateValueShowcase;
