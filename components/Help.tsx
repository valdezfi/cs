"use client";

import { Bot, Shield, Headset, Globe } from "lucide-react";

const principles = [
  {
    icon: Bot,
    title: "Automated Trading",
    description:
      "AI-driven trading tools execute strategies efficiently, reducing manual work and optimizing returns in real-time.",
  },
  {
    icon: Shield,
    title: "Asset & App Security",
    description:
      "We prioritize security at every layer — protecting digital assets, applications, and user data with best-in-class blockchain practices.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description:
      "Our platforms are designed to grow with your operations, enabling management of larger portfolios and complex workflows seamlessly.",
  },
  {
    icon: Headset,
    title: "Actionable Insights",
    description:
      "We provide real-time analytics and on-chain insights, empowering teams to make data-driven decisions that maximize performance.",
  },
];

export default function CompanyPrinciples() {
  return (
    <section className="py-20 bg-orange-50 dark:bg-orange-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 dark:text-orange-200 mb-6">
          Our Principles
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-orange-800 dark:text-orange-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          At Co‑Intelligence, our mission is to **build principled AI-enabled products** that automate trading, secure assets and apps, and scale smart financial products — guided by values that ensure every solution delivers measurable impact.
        </p>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-900 dark:text-orange-100 group-hover:text-orange-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-orange-800 dark:text-orange-300">
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
