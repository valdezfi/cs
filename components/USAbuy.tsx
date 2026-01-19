"use client";

import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Acquire Existing Products",
    description:
      "Identify promising products and solutions, and acquire them to unlock their AI potential.",
  },
  {
    icon: Briefcase,
    title: "Transform with AI",
    description:
      "Enhance and scale these products by integrating AI-driven features, automations, and intelligent workflows.",
  },
  {
    icon: Users,
    title: "Scale & Optimize",
    description:
      "Deploy AI-enhanced products to teams and organizations, monitor performance, and continuously optimize for impact.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200">
          Acquiring and Scaling AI-Enabled Products
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-blue-800 dark:text-blue-300 max-w-3xl mx-auto font-light">
          Co‑Intelligence specializes in acquiring existing products and transforming them into
          AI-powered solutions that scale, optimize, and deliver measurable impact.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-800 dark:text-blue-300 mb-6">
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
