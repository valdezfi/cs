import Image from "next/image";

const features = [
  {
    title: "Send Gifting Campaigns with Ease",
    description:
      "Ship products to influencers, podcasters, or UGC creators, track delivery, and get notified when items are received — all in one place.",
  },
  {
    title: "Simplify Creator Payments",
    description:
      "Approve content and release payments in seconds. No spreadsheets, no chasing invoices, no manual payouts.",
  },
  {
    title: "Generate Payment & Gifting Receipts",
    description:
      "Keep a clean paper trail for every campaign — download receipts for product shipments, payments, and creator confirmations.",
  },
  {
    title: "Centralize Everything in One Dashboard",
    description:
      "Say goodbye to scattered tools. Grande brings your creator gifting and payment operations under one roof.",
  },
];

export default function PaymentsHowItWorks() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Handle Payments & Gifting Without the Chaos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Whether you're a brand, agency, or freelancer — Grande lets you manage creator gifting and payments in one fast, reliable dashboard.
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
            src="/public/images/gifting.jpg" // Ideally: update to an image that visualizes a dashboard with payments/gifting cards
            alt="Creator payments and gifting dashboard"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto border-4 border-white group-hover:border-indigo-400 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
