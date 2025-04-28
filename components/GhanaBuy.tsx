import React from "react";
import CryptoCardSupply from "./IndiaBuyCard";
import {DollarSign } from "lucide-react"; // Import a nice coin icon
import { SiBitcoin, SiEthereum, SiTether, SiMonero,  } from "react-icons/si";
import Flag from 'react-world-flags';

const GhanaB = () => {
  const features = [
    {
      icon: SiBitcoin,
      title: "Bitcoin (BTC)",
      // description: "Get the most value from your crypto and afford yourself anything you dream of right now",
      loanlink: "/signup"

    },
    {
      icon: SiEthereum,
      title: " Ethereum (ETH)",
      // description: "Maximize your tax efficiency. Getting a crypto loan and its spending – are non-taxable events, because they do not generate direct earnings. Then, use the funds for expenses.",
      loanlink: "/signup"

    },
    {
      icon: SiTether,
      title: "Tether (USDT)",
      // description: "Leverage your crypto and put the cash towards a major Investment: house, gold, treasuries, stocks, or silver.",
      loanlink: "/signup"

    },
    {
      icon: SiMonero,
      title: "Monero (XMR)",
      // description: "Reinvest your crypto holdings and make your company grow. Cover operational expenses, pay employees on time, or even buy another company.",
      loanlink: "/signup"

    },
    {
      icon: DollarSign,
      title: "USD Coin (USDC)",
      // description: "Talk about your authentication features built into your app.",
      loanlink: "/signup"
    },
    {
      icon: SiBitcoin,
      title: "Wrapped Bitcoin",
      // description: "Talk about your subscription features and how they work.",
      loanlink: "/signup"

    },
  ];

  return (
    <section className="container mx-auto mt-12 px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
  Ghana
  <Flag code="gh" style={{ width: 32, height: 20, marginTop: '8px' }} />
</h2>

          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
          Buy Bitcoin (BTC) peer to peer using Numerobook
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <CryptoCardSupply key={index} {...feature} />
              
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default GhanaB;
