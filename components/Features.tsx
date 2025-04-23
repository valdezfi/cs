import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import { Coins, Calculator, House, BriefcaseBusiness } from "lucide-react"; // Import a nice coin icon

const Features = () => {
  const features = [
    {
      icon: Coins,
      title: "Buy More Crypto",
      description: "Get the most value from your crypto and afford yourself anything you dream of right now",
    },
    {
      icon: Calculator,
      title: "Optimize Taxes",
      description: "Maximize your tax efficiency. Getting a crypto loan and its spending – are non-taxable events, because they do not generate direct earnings. Then, use the funds for expenses.",
    },
    {
      icon: House,
      title: "Acquire Traditional Assets",
      description: "Leverage your crypto and put the cash towards a major Investment: house, gold, treasuries, stocks, or silver.",
    },
    // {
    //   icon: BriefcaseBusiness,
    //   title: "Invest in your business",
    //   description: "Reinvest your crypto holdings and make your company grow. Cover operational expenses, pay employees on time, or even buy another company.",
    // },
    // {
    //   icon: FaShieldAlt,
    //   title: "Authentication",
    //   description: "Talk about your authentication features built into your app.",
    // },
    // {
    //   icon: SiStripe,
    //   title: "Subscriptions",
    //   description: "Talk about your subscription features and how they work.",
    // },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">One crypto loan — infinite possibilities.

</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
          Get the most out of your crypto and afford yourself anything you dream of right now


          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
