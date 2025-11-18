"use client";

import React from "react";
import USCardbuy from "./USABuyCard";
import {
  Users,
  Briefcase,
  Home,
  Building2,
} from "lucide-react";

const USAb = () => {
  const features = [
    {
      icon: Building2,
      title: "Sellers & Property Owners",
      description:
        "Use AI to instantly generate stunning property listings with neighborhood insights, key features, and investment summaries.",
      loanlink: "/create-listing",
    },
    {
      icon: Briefcase,
      title: "Real Estate Agents",
      description:
        "Automate listing creation, optimize descriptions, attract qualified buyers, and streamline your sales workflow.",
      loanlink: "/agent-tools",
    },
    {
      icon: Users,
      title: "Buyers & Investors",
      description:
        "Discover AI-matched properties based on your budget, region, and criteria—LATAM, GCC, Africa, and beyond.",
      loanlink: "/buyer-matching",
    },
  ];

  return (
    <section className="container mx-auto mt-12 px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Experience AI-Powered Real Estate Listings
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            COagentes uses advanced AI to help sellers, agents, and buyers connect.
            Generate listings, find opportunities, and access global real estate markets—instantly.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <USCardbuy key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USAb;
