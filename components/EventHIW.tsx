import Image from "next/image";

const features = [
  {
    title: "Curated Guest Lists by Niche & Location",
    description:
      "Easily discover and invite creators based on geography, audience, and relevance — perfect for local activations, pop-ups, and product launches.",
  },
  {
    title: "In-Person Moments → Viral Content",
    description:
      "IRL events spark genuine connection and story-worthy content. Influencers post more when they're engaged offline and part of something exclusive.",
  },
  {
    title: "Stronger Creator-Brand Relationships",
    description:
      "Offline interactions build trust and deepen loyalty. Events turn one-off partnerships into long-term brand ambassadors.",
  },
  {
    title: "Event ROI Tracking & Campaign Reporting",
    description:
      "Track posts, impressions, and engagements generated from your event. Measure performance across social platforms and calculate real media ROI.",
  },
];

export default function EventHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Turn Real Moments Into Real Results
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande makes influencer event planning effortless — helping brands build real connections and creators amplify the experience authentically.
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
            src="grandeapp.com/images/event.jpg" // ← Swap to an event-themed image if needed
            alt="In-person influencer event"
            width={300}
            height={300}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-pink-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
