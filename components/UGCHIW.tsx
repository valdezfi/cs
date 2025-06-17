import Image from "next/image";

const features = [
  {
    title: "Showcase Your Work in Style",
    description:
      "Use a high-converting Link in Bio to promote your best videos, brand deals, and affiliate offers — all in one clean portfolio.",
  },
  {
    title: "Attract More Brand Deals",
    description:
      "Stand out with a media kit that highlights your niche, audience insights, and past content for top brands to discover you.",
  },
  {
    title: "Track What Performs Best",
    description:
      "See which videos and campaigns drive the most views, clicks, and conversions — get data you can act on instantly.",
  },
  {
    title: "Run Your UGC Business Solo",
    description:
      "From pitches to payments, manage every deal with AI tools that save time, increase visibility, and scale your income.",
  },
];

export default function UGCHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Everything UGC Creators Need to Earn More
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande helps you get discovered by brands, land more paid deals, and run your UGC creator business with less effort — powered by AI.
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
            src="/images/ugc.jpg" // Replace with a UGC-relevant image
            alt="UGC creator dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
