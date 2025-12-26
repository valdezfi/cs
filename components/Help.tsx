"use client";

import {
  Bot,
  FileCheck,
  Headset,
  Globe,
} from "lucide-react";

export default function ProductExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          How COfuncion Works
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion.com uses AI to help brands, agencies, and marketers plan, optimize, and run OTT ad campaigns —
          reaching audiences across LATAM, USA, Europe, Africa, and beyond in minutes.
        </p>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Bot className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. Plan with AI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instantly generate an OTT ad strategy including target audiences, budgets, and ad formats.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <FileCheck className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. Optimize Campaigns
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI automatically optimizes creatives, placements, and UGC integration to maximize engagement and ROI.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Globe className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Reach Audiences Globally
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deploy campaigns across OTT platforms to reach viewers worldwide across multiple regions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Headset className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              4. Dedicated Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A COfuncion account manager guides brands, agencies, and marketers through campaign setup,
              placements, performance tracking, and optimization every step of the way.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
