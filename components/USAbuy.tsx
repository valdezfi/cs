"use client";

import React from "react";
import USCardbuy from "./USABuyCard";
import {
  Users,
  Briefcase,
  Building2,
} from "lucide-react";

const USAb = () => {
  const features = [
    {
      icon: Building2,
      title: "Brands & Businesses",
      description:
        "Plan and launch OTT ad campaigns with AI-powered strategy, audience targeting, and campaign optimization.",
      loanlink: "/create-campaign",
    },
    {
      icon: Briefcase,
      title: "Marketing Agencies",
      description:
        "Automate campaign setup, optimize creatives and placements, integrate UGC, and track performance metrics easily.",
      loanlink: "/agency-tools",
    },
    {
      icon: Users,
      title: "Marketers & Advertisers",
      description:
        "Reach global audiences efficiently, analyze campaign ROI, and scale your OTT ad spend strategically.",
      loanlink: "/marketer-dashboard",
    },
  ];

  return (
    <section className="container mx-auto mt-12 px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Experience AI-Powered OTT Ad Campaigns
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            COfuncion uses advanced AI to help brands, agencies, and marketers connect with audiences.
            Plan, launch, and optimize OTT campaigns efficiently, with AI-driven insights and UGC integration.
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
