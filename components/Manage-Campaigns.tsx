"use client";

import { Calendar, Activity, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Schedule Waste Pickups",
    description:
      "Plan and coordinate cannabis waste pickups across multiple facilities with AI-assisted scheduling for efficiency.",
  },
  {
    icon: Activity,
    title: "Track Compliance",
    description:
      "Monitor manifests, destruction logs, and audit-ready documentation in real-time with intelligent tracking.",
  },
  {
    icon: Users,
    title: "Operator Insights",
    description:
      "Understand site operations and team workflows to optimize compliance, pickups, and reporting.",
  },
];

export default function ManageCampaigns() {
  return (
    <section className="py-20 bg-green-50 dark:bg-green-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-6">
          Manage Cannabis Waste Operations
        </h2>
        <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Take full control of your cannabis waste operations. Plan, track, and optimize pickups with AI-powered insights—streamline workflows and ensure full compliance.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative w-full max-w-sm p-8 rounded-3xl bg-gradient-to-tr from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white mb-6 text-2xl shadow-lg group-hover:scale-110 transform transition duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-green-800 dark:text-green-300 leading-relaxed">
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
