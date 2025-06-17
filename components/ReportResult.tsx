import {
  FaChartBar,
  FaBullhorn,
  FaUsers,
  FaSyncAlt,
} from "react-icons/fa";

const reportingFeatures = [
  {
    name: "Unified Campaign Analytics",
    icon: (className) => <FaChartBar className={className} />,
    hoverColor: "group-hover:text-indigo-500",
    description:
      "View impressions, conversions, and performance metrics in one dashboard — whether you're a brand, agency, or freelancer.",
  },
  {
    name: "Real-Time ROI Reporting",
    icon: (className) => <FaSyncAlt className={className} />,
    hoverColor: "group-hover:text-green-500",
    description:
      "Track return on spend as campaigns run — from budget allocation to final outcomes.",
  },
  {
    name: "Cross-Platform Attribution",
    icon: (className) => <FaBullhorn className={className} />,
    hoverColor: "group-hover:text-yellow-400",
    description:
      "Measure campaign impact across YouTube, Instagram, podcasts, and more — all in one place.",
  },
  {
    name: "Client & Team Reporting",
    icon: (className) => <FaUsers className={className} />,
    hoverColor: "group-hover:text-blue-400",
    description:
      "Easily share reports, export metrics, and keep clients or collaborators aligned on campaign progress.",
  },
];

const PlatformReportingShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Reporting Tools for Brands, Agencies & Freelancers
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        From ROI to media performance, Grande delivers campaign intelligence that helps you move faster and work smarter — no spreadsheets required.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reportingFeatures.map((feature, idx) => (
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

export default PlatformReportingShowcase;
