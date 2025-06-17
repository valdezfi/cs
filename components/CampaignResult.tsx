import { FaRobot, FaSearch, FaLightbulb, FaUserCheck } from "react-icons/fa";

const valueFeatures = [
  {
    name: "AI Vetting & Creator Intelligence",
    icon: (className) => <FaRobot className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description:
      "Instant access to vetted influencers, UGC creators, and podcasters — powered by AI signals, not guesswork.",
  },
  {
    name: "SEO-Optimized Discovery Portal",
    icon: (className) => <FaSearch className={className} />,
    hoverColor: "group-hover:text-green-400",
    description:
      "Our public-facing application page attracts top creators daily. You tap into fresh, relevant talent fast.",
  },
  {
    name: "AI Campaign Theme Generator",
    icon: (className) => <FaLightbulb className={className} />,
    hoverColor: "group-hover:text-yellow-400",
    description:
      "Launch smarter campaigns with AI-suggested content themes aligned to industry trends and seasonal moments.",
  },
  {
    name: "AI Advisory & Forecasting",
    icon: (className) => <FaUserCheck className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description:
      "Get strategic recommendations, predicted outcomes, and budget allocation insights — before spending a dollar.",
  },
];

const CampaignValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Why Agencies & Brands Use Grande
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

export default CampaignValueShowcase;
