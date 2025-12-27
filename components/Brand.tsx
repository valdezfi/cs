"use client";

import { Brain, Target, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function BrandsUseCOfuncion() {
  const steps = [
    {
      icon: Brain,
      title: "Plan with AI Intelligence",
      description:
        "Brands use COfuncion to design OTT campaigns using AI-driven audience modeling, budget allocation, and campaign structure—before any spend is committed.",
    },
    {
      icon: Target,
      title: "Launch Targeted OTT Campaigns",
      description:
        "Execute campaigns optimized for connected TV and OTT environments with precise audience logic, geographic controls, and frequency management.",
    },
    {
      icon: Activity,
      title: "Optimize in Real Time",
      description:
        "COfuncion continuously analyzes performance signals and recommends adjustments to improve reach efficiency, engagement, and overall ROI.",
    },
    {
      icon: ShieldCheck,
      title: "Operate with Full Transparency",
      description:
        "Brands retain full visibility into performance metrics, pacing, and spend logic—without black-box media buying or platform lock-in.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          How Brands Use COfuncion
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion is an AI-powered OTT campaign engine that helps brands plan,
          execute, and optimize connected TV campaigns with clarity, control, and
          measurable outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
            >
              <step.icon className="w-14 h-14 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/contact"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition"
          >
            Talk to an OTT Strategist
          </Link>
        </div>
      </div>
    </section>
  );
}
