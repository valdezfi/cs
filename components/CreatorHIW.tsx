import Image from "next/image";

const features = [
  {
    title: "Turn your followers into customers",
    description:
      "Use your Instagram & TikTok bios to drive traffic to your merch, services, or content with a custom Link in Bio page.",
  },
  {
    title: "Get discovered by top brands",
    description:
      "Be found by companies looking for creators in your niche and get paid for collaborations.",
  },
  {
    title: "Track performance with ease",
    description:
      "Access easy-to-read reports on your content’s reach, engagement, and brand interest — no guesswork.",
  },
  {
    title: "All-in-one creator tools",
    description:
      "From collabs to payments, manage your entire creator journey in one dashboard — no team needed.",
  },
];

export default function CreatorHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Everything Creators Need to Grow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Grande helps you earn more, grow your influence, and stay in control with smart, AI-powered tools.
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
            src="../public/images/creator.jpg" // Replace with your updated image
            alt="Creator dashboard preview"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
