import Image from "next/image";

const features = [
  {
    title: "Turn followers into customers",
    description:
      "Use your Instagram or TikTok bio to promote merch, services, or exclusive content through a custom Link in Bio page built to convert.",
  },
  {
    title: "Get discovered by top brands",
    description:
      "Attract paid brand deals by showcasing your niche, audience insights, and content portfolio — brands come to you.",
  },
  {
    title: "Know what’s working",
    description:
      "Access easy reports that show your reach, engagement, and brand interest — all in one simple dashboard.",
  },
  {
    title: "Run your influencer business solo",
    description:
      "From brand collabs to payouts, manage everything yourself with no agent or manager required.",
  },
];

export default function InfluencerHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Everything Influencers Need to Grow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande helps you earn more from your content, land better deals, and grow your influence with AI-powered tools made just for influencers.
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
            src="/public/images/influencer.jpg" // Update this image path as needed
            alt="Influencer dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
