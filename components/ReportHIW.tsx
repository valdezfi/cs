import Image from "next/image";

const features = [
  {
    title: "Monitor Campaigns in Real Time",
    description:
      "Track clicks, conversions, engagement, and budget across platforms — all from a single reporting dashboard.",
  },
  {
    title: "Optimize What Works Best",
    description:
      "Use performance insights to double down on the creatives, placements, and channels that deliver the highest ROI.",
  },
  {
    title: "Create Sharable Reports",
    description:
      "Generate clean, exportable reports for clients or internal teams — perfect for freelancers and agencies managing multiple accounts.",
  },
  {
    title: "Simplify Performance Reviews",
    description:
      "Replace scattered spreadsheets with automated tracking, smart summaries, and AI-generated reporting insights.",
  },
];

export default function PlatformReportingHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Reporting That Works for Agencies, Freelancers & Brands
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande helps you measure success, share results, and make smarter campaign decisions — all without manual spreadsheets.
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
          <Image
            src="../public/images/reporting.jpg" // Replace with a reporting-focused image
            alt="Reporting dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
