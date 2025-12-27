"use client";

import { Calendar, Activity, Zap, Users } from "lucide-react";

export default function ManageCampaigns() {
  const features = [
    {
      icon: Calendar,
      title: "Schedule Campaigns",
      description:
        "Plan and launch OTT campaigns across multiple platforms with AI-assisted scheduling to hit your audience at peak times.",
    },
    {
      icon: Activity,
      title: "Track Performance",
      description:
        "Monitor campaign progress in real-time. AI highlights key metrics like reach, impressions, and viewer engagement.",
    },
    {
      icon: Users,
      title: "Audience Insights",
      description:
        "Understand your audience's preferences and behavior patterns to fine-tune targeting and improve campaign results.",
    },
    {
      icon: Zap,
      title: "AI Optimization",
      description:
        "Receive actionable AI recommendations to adjust targeting, content, and timing for maximum performance.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Manage Your OTT Campaigns with AI
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Take full control of your OTT campaigns. Plan, track, and optimize campaigns with AI-powered insights—streamline your workflow and maximize impact.
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
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
