import React from "react";
import { SiBitcoin, SiEthereum, SiTether, SiMonero } from "react-icons/si";
import { DollarSign } from "lucide-react"; // Import a nice coin icon
import Link from "next/link";

const Whaleboti = () => {
  const features = [
    {
      icon: DollarSign,
      title: "USD Coin (USDC)",
      loanlink: "/signup"
    },
  ];

  const keyAdvantages = [
    {
      icon: <DollarSign className="text-xl" />,
      title: "$1000 Minimum investment",
    },
    {
      icon: <DollarSign className="text-xl" />,
      title: "0% Performance fee",
    },
    {
      icon: <DollarSign className="text-xl" />,
      title: "No lockups",
    },
    {
      icon: <DollarSign className="text-xl" />,
      title: "10% Annual management fee",
    },
  ];

  return (
    <section className="container mx-auto mt-16 px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6 flex justify-center items-center">
            Best Crypto Trading Bot With a Hedge Fund Advantage
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light">
            Mastering your emotions is the key to successful and profitable trading. With Numerobook, you can automate your crypto investments, eliminating the stress of FOMO and FUD. Benefit from continuous rebalancing, robust hedge-fund-grade strategies, and a secure, seamless execution platform that works for you—so you can trade smarter, not harder.
          </p>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light">
            Automatically manage your crypto portfolio on uniswap using well-tested hedge fund's quant strategies. It's 100% automated crypto trading, and the only fee you'll pay will be a 10% annual management fee.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">Key Advantages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="mb-4 text-blue-600">{advantage.icon}</div>
                <p className="text-lg font-medium text-gray-800 dark:text-white">{advantage.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Centered "Invest Now" Button */}
        <div className="flex justify-center mt-12 mb-16">
          <Link
            href="/signup"
            className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
          >
            Invest USDC Now
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Whaleboti;
