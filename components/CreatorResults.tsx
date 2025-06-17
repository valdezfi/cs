import {
  FaHandshake,       // for brand matching
  FaRegChartBar,     // for insights
  FaRegPaperPlane,   // for workflow
  FaGlobeAmericas    // for global/multi-platform creation
} from "react-icons/fa";

const valueFeatures = [
  {
    name: "AI Brand Matching",
    icon: (className) => <FaHandshake className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description: "Get connected with brands that match your niche and audience—automatically.",
  },
  {
    name: "Real-Time Insights",
    icon: (className) => <FaRegChartBar className={className} />,
    hoverColor: "group-hover:text-green-400",
    description: "See how your content performs and what brands are loving in real time.",
  },
  {
    name: "Easy Collab Workflow",
    icon: (className) => <FaRegPaperPlane className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description: "Handle outreach, deals, and payments in one place. No back-and-forth needed.",
  },
  {
    name: "Create Anywhere",
    icon: (className) => <FaGlobeAmericas className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description: "Work with top brands across TikTok, Instagram, YouTube, and more.",
  },
];

const CreatorValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Why Creators Choose Grande
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

export default CreatorValueShowcase;
