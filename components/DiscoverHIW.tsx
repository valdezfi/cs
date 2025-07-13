import Image from "next/image";

const features = [
  {
    title: "AI-Powered Creator Discovery",
    description:
      "Brands and agencies can instantly find relevant UGC creators, influencers, and freelancers based on niche, engagement, and location — no more spreadsheets or scouting manually.",
  },
  {
    title: "Attract Collaborations Effortlessly",
    description:
      "Creators and freelancers get matched with campaigns that fit their style. Brands only see profiles that match their intent.",
  },
  {
    title: "Data-Driven Performance Insights",
    description:
      "Track creator reach, engagement, and conversions with built-in reporting tools. No guesswork — just clean metrics.",
  },
  {
    title: "All-in-One Creator Dashboard",
    description:
      "Creators can manage their collabs, payments, and performance in one place — while brands track everything from a centralized dashboard.",
  },
];

export default function CreatorHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Discover Talent. Fuel Growth.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Whether you're a brand looking to scale content or a creator looking to land deals — Grande makes discovery seamless, intentional, and AI-driven.
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
            src="../public/images/creator.jpg"
            alt="Discover creators dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
