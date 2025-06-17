import {
  FaRobot,
  FaChartLine,
  FaVideo,
  FaShareAlt,
} from "react-icons/fa";

const ugcFeatures = [
  {
    name: "AI-Powered Brand Matching",
    icon: (className) => <FaRobot className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description:
      "Get paired with brands that match your style, content type, and audience.",
  },
  {
    name: "Real-Time Content Insights",
    icon: (className) => <FaChartLine className={className} />,
    hoverColor: "group-hover:text-green-400",
    description:
      "Track views, engagement, and performance across all UGC deliverables.",
  },
  {
    name: "Simplified Campaign Workflow",
    icon: (className) => <FaVideo className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description:
      "Easily manage briefs, content submissions, and revisions in one place.",
  },
  {
    name: "Distribute Across Channels",
    icon: (className) => <FaShareAlt className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description:
      "Deliver content for brands across Instagram, TikTok, Amazon, and more.",
  },
];

const UGCValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Built for UGC Creators Who Want to Work Smarter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ugcFeatures.map((feature, idx) => (
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

export default UGCValueShowcase;
