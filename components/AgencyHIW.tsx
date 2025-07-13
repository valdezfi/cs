import Image from "next/image";

const features = [

  {
    title: "Turn your clients’ followers into customers",
    description:
      "Use Instagram & TikTok bios to drive traffic to your client’s website, online shop, or blog with a custom Link in Bio page.",
  },
  {
    title: "Search & find the best creators",
    description:
      "Expand partnership opportunities with trusted influencers for any niche & audience.",
  },
  {
    title: "Easy analytics & reporting",
    description:
      "Share reports & curated influencer lists with clients — no platform access needed.",
  },
  {
    title: "Seamless influencer marketing",
    description:
      "Our all-in-one influencer marketing platform can be used across brands & account teams, with no limits on seats.",
  },
];

export default function AgencyHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
           Grande Agencies & Freelancers works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Streamline your influencer marketing and Link in Bio tools with AI.
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
       {/* Right Image */}
<div className="w-full group">
  <Image
    src="/public/images/agency.jpg" // Replace with your image path
    alt="Dashboard preview"
    width={600}
    height={600}
    className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-blue-500 transition duration-300"
  />
</div>

      </div>
    </section>
  );
}
