"use client";

import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Dispensaries & Cannabis Brands",
    description:
      "Coordinate licensed waste pickups, track compliance documentation, and stay audit-ready effortlessly.",
    link: "/create-account",
  },
  {
    icon: Briefcase,
    title: "Processors & Cultivators",
    description:
      "Automate manifests, manage destruction schedules, and ensure regulatory compliance across multiple sites.",
    link: "/processor-tools",
  },
  {
    icon: Users,
    title: "Operators & Compliance Teams",
    description:
      "Monitor cannabis waste operations, generate reports, and reduce risk with an intelligent compliance dashboard.",
    link: "/operator-dashboard",
  },
];

export default function USAb() {
  return (
    <section className="py-20 bg-green-50 dark:bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-200">
          Intelligent Cannabis Waste Compliance
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-green-800 dark:text-green-300 max-w-3xl mx-auto font-light">
          Our platform helps dispensaries, cultivators, and compliance teams stay fully audit-ready. 
          Automate waste tracking, manage licensed hauler coordination, and maintain compliance with ease.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-green-800 dark:text-green-300 mb-6">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="inline-block px-6 py-3 rounded-full border-2 border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition duration-300"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
