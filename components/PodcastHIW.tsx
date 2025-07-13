import Image from "next/image";

const features = [
  {
    title: "Grow your podcast audience",
    description:
      "Promote your latest episodes, merch, or listener subscriptions through a high-converting Link in Bio page made for podcasters.",
  },
  {
    title: "Get discovered by top sponsors",
    description:
      "Highlight your podcast’s niche, listener stats, and standout content — sponsors and advertisers come to you.",
  },
  {
    title: "Understand your impact",
    description:
      "View performance reports with listens, engagement, and brand interest — all in a single, easy-to-use dashboard.",
  },
  {
    title: "Run your podcast business solo",
    description:
      "From sponsorships to payouts, manage your podcast’s monetization without needing a network or manager.",
  },
];

export default function PodcasterHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Everything Podcasters Need to Grow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande helps you grow your show, earn through sponsorships and listener products, and manage it all with powerful AI tools built for podcasters.
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
          <img
            src="/images/podcast.jpg" // Update this path to a podcast-relevant image
            alt="Podcaster dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
