import { FaUsers, FaChartLine, FaMapMarkedAlt, FaHandshake } from "react-icons/fa";

const valueFeatures = [
  {
    name: "Real-World Social Amplification",
    icon: (className) => <FaUsers className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description:
      "Influencers share more content from real-life experiences. Tap into authentic, high-conversion storytelling from offline moments.",
  },
  {
    name: "Measurable ROI & Media Impact",
    icon: (className) => <FaChartLine className={className} />,
    hoverColor: "group-hover:text-green-400",
    description:
      "Track impressions, shares, and content volume from your in-person events. Grande helps quantify campaign value across platforms.",
  },
  {
    name: "Geo-Based Creator Targeting",
    icon: (className) => <FaMapMarkedAlt className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description:
      "Curate event guest lists by city, niche, or reach. Bring in the right local creators for maximum cultural fit and relevance.",
  },
  {
    name: "Stronger Creator Relationships",
    icon: (className) => <FaHandshake className={className} />,
    hoverColor: "group-hover:text-yellow-400",
    description:
      "In-person events build trust and long-term loyalty. Creators become true brand advocates when they connect face to face.",
  },
];

const EventValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Why Agencies & Brands Use Grande for Influencer Events
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

export default EventValueShowcase;
