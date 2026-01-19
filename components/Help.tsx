"use client";

import { Bot, FileCheck, Headset, Globe } from "lucide-react";

const principles = [
  {
    icon: Bot,
    title: "Productivity First",
    description:
      "We design every product and workflow to maximize efficiency and empower teams to achieve more with less friction.",
  },
  {
    icon: FileCheck,
    title: "Intelligent Workflows",
    description:
      "Our solutions prioritize clarity, automation, and consistency, ensuring operations run smoothly and reliably.",
  },
  {
    icon: Globe,
    title: "Actionable Insights",
    description:
      "We believe data should guide decisions. Our products provide meaningful insights that drive measurable impact.",
  },
  {
    icon: Headset,
    title: "Continuous Improvement",
    description:
      "Learning and adaptation are core to our approach — we evolve our tools and practices to stay ahead of user needs and industry trends.",
  },
];

export default function CompanyPrinciples() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-blue-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200 mb-6">
          Our Principles
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-800 dark:text-blue-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          At Co‑Intelligence, our mission is to **build principled AI-enabled products** that improve productivity, streamline workflows, and deliver meaningful impact — guided by values that ensure every product aligns with our commitment to excellence.
        </p>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-blue-800 dark:text-blue-300">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
