"use client";

import { Layers, Cpu, Factory, Globe } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Layers,
    title: "Centralized Operations",
    description:
      "Manage multiple facilities, dispensaries, and production sites from a single dashboard to ensure consistency and efficiency across the organization.",
  },
  {
    icon: Cpu,
    title: "Optimize Production & Cultivation",
    description:
      "Track cultivation cycles, manufacturing workflows, and inventory to maximize yield, quality, and operational efficiency across all locations.",
  },
  {
    icon: Factory,
    title: "Maintain Compliance Across States",
    description:
      "Ensure every site meets state and local regulations, generate audit-ready reports, and stay inspection-ready across multiple jurisdictions.",
  },
  {
    icon: Globe,
    title: "Scale with Confidence",
    description:
      "Leverage real-time insights and analytics to expand operations, enter new markets, and make data-driven strategic decisions.",
  },
];

export default function MSOUseCOfuncion() {
  return (
    <section className="py-24 bg-green-50 dark:bg-green-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-6">
          How Vertically Integrated Operators (MSOs) Use COfuncion
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion helps multi-state operators (MSOs) unify operations, maintain compliance, 
          optimize production, and scale their business with data-driven insights.
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
                <p className="text-green-800 dark:text-green-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/signup"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
