import {
  FaRobot,
  FaChartLine,
  FaMicrophoneAlt,
  FaPodcast,
} from "react-icons/fa";

const podcasterFeatures = [
  {
    name: "AI-Powered Sponsor Matching",
    icon: (className) => <FaRobot className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description:
      "Connect with sponsors that match your show's content, tone, and audience.",
  },
  {
    name: "Listener Analytics",
    icon: (className) => <FaChartLine className={className} />,
    hoverColor: "group-hover:text-green-400",
    description:
      "Track downloads, engagement, and conversion from campaigns — all in real time.",
  },
  {
    name: "Automated Campaign Management",
    icon: (className) => <FaMicrophoneAlt className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description:
      "Easily manage ad reads, deliverables, timelines, and payments in one dashboard.",
  },
  {
    name: "Grow Across Platforms",
    icon: (className) => <FaPodcast className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description:
      "Distribute your episodes, sponsor links, and affiliate offers across Spotify, Apple, YouTube, and more.",
  },
];

const PodcasterValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Built for Podcasters Who Want to Earn More
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {podcasterFeatures.map((feature, idx) => (
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

export default PodcasterValueShowcase;
