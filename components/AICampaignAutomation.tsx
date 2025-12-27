"use client";

import { Sparkles, Target, Zap, BarChart3 } from "lucide-react";

export default function AICampaignAutomation() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          AI Campaign Automation
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion uses AI to automate the most time-consuming parts of OTT campaign
          management—so your team can focus on strategy, not manual work.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
            <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Smart Campaign Setup
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI helps structure your campaign based on goals, region, and budget—
              removing guesswork from day one.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
            <Target className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Audience Intelligence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Understand who your ads are reaching and how audiences respond—without
              needing complex dashboards.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
            <Zap className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Continuous Optimization
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI monitors performance and surfaces optimization insights—helping
              improve efficiency while campaigns are live.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
            <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Clear Performance Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive AI-generated summaries that explain what’s working, what’s not,
              and where to focus next—no charts required.
            </p>
          </div>

        </div>

        {/* Bottom CTA Text */}
        <p className="mt-16 text-lg text-gray-700 dark:text-gray-300 font-light max-w-3xl mx-auto">
          AI Campaign Automation doesn’t replace your team—it empowers it with clarity,
          speed, and smarter decision-making at scale.
        </p>

      </div>
    </section>
  );
}
