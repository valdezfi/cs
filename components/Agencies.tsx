"use client";

import { Layers, Brain, Activity, Users } from "lucide-react";
import Link from "next/link";

export default function AgenciesUseCOfuncion() {
  const features = [
    {
      icon: Layers,
      title: "Manage Multiple Clients in One System",
      description:
        "Agencies use COfuncion to operate multiple client campaigns from a single AI-driven dashboard—without juggling fragmented OTT tools or manual workflows.",
    },
    {
      icon: Brain,
      title: "AI-Guided Media Planning",
      description:
        "Build OTT campaign strategies using AI recommendations for audience logic, budget pacing, and campaign structure—designed for agency efficiency.",
    },
    {
      icon: Activity,
      title: "Real-Time Optimization & Reporting",
      description:
        "Monitor performance signals across campaigns and receive AI-powered optimization insights that help agencies improve outcomes and retain clients.",
    },
    {
      icon: Users,
      title: "White-Label Client Experience",
      description:
        "Present clean, professional reporting to clients with agency branding—keeping ownership of the relationship while delivering enterprise-grade insights.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Built for Agencies Running OTT Campaigns
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion gives agencies an AI-powered platform to plan, execute, and
          optimize OTT campaigns at scale—while maintaining full control over
          clients, reporting, and strategy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900"
            >
              <feature.icon className="w-14 h-14 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/agency-access"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition"
          >
            Request Agency Access
          </Link>
        </div>
      </div>
    </section>
  );
}
