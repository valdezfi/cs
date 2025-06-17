import { FaGift, FaMoneyBillWave, FaWallet, FaReceipt } from "react-icons/fa";

const brandFeatures = [
  {
    name: "Fast, Transparent Payouts",
    icon: (className) => <FaMoneyBillWave className={className} />,
    hoverColor: "group-hover:text-green-400",
    description: "Pay creators directly with automated tracking, approval flows, and proof of delivery.",
  },
  {
    name: "Smart Gifting Logistics",
    icon: (className) => <FaGift className={className} />,
    hoverColor: "group-hover:text-pink-400",
    description: "Send free products or services to influencers, track delivery, and confirm receipt—all in one place.",
  },
  {
    name: "Unified Campaign Wallet",
    icon: (className) => <FaWallet className={className} />,
    hoverColor: "group-hover:text-indigo-400",
    description: "Manage budgets, allocate spend, and monitor real-time campaign balances across creators.",
  },
  {
    name: "Detailed Payment Reporting",
    icon: (className) => <FaReceipt className={className} />,
    hoverColor: "group-hover:text-yellow-400",
    description: "Download receipts, view transaction history, and export payout reports for your finance team.",
  },
];

const BrandValueShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Simplify Payments & Gifting for Your Influencer Campaigns
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {brandFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-black dark:bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-white dark:text-black"
          >
            <div className="mb-4">
              {feature.icon(`text-4xl text-white dark:text-black transition ${feature.hoverColor}`)}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-sm text-gray-300 dark:text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandValueShowcase;
