"use client";

import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Build AI-Enabled Platforms",
    description:
      "Design and develop intelligent crypto, trading, and blockchain applications from the ground up, tailored to real-world needs.",
  },
  {
    icon: Briefcase,
    title: "Integrate Security & Automation",
    description:
      "Incorporate advanced security measures and automate trading and blockchain workflows to maximize efficiency and protect assets.",
  },
  {
    icon: Users,
    title: "Scale & Monitor",
    description:
      "Deploy AI-powered solutions to teams and organizations, track performance, and continuously optimize for security, usability, and impact.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-orange-50 dark:bg-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 dark:text-orange-200">
          Building AI-Enabled Crypto & Blockchain Products
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-orange-800 dark:text-orange-300 max-w-3xl mx-auto font-light">
          Co‑Intelligence specializes in creating AI-driven platforms for crypto, trading automation, and blockchain security — designed to scale, secure assets, and deliver measurable impact.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-900 dark:text-orange-100 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-orange-800 dark:text-orange-300 mb-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
