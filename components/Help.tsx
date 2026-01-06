"use client";

import { Bot, FileCheck, Headset, Globe } from "lucide-react";

const steps = [
  {
    icon: Bot,
    title: "Plan Waste Operations",
    description:
      "Schedule and coordinate licensed cannabis waste pickups tailored to your operation’s size and frequency.",
  },
  {
    icon: FileCheck,
    title: "Ensure Compliance",
    description:
      "Generate and manage audit-ready manifests, destruction logs, and regulatory reports automatically.",
  },
  {
    icon: Globe,
    title: "Connect to Licensed Haulers",
    description:
      "Access a network of verified cannabis waste haulers, ensuring secure, legal disposal across your region.",
  },
  {
    icon: Headset,
    title: "Support & Guidance",
    description:
      "Dedicated account managers assist operators with compliance questions, audit prep, and workflow optimization.",
  },
];

export default function ProductExplanation() {
  return (
    <section className="py-20 bg-green-50 dark:bg-green-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-6">
          How Cofuncion Works
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Cofuncion helps dispensaries, cultivators, and cannabis operators stay compliant, coordinate licensed waste removal, 
          and maintain audit-ready documentation — all in a single intelligent platform.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100 group-hover:text-green-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-green-800 dark:text-green-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
