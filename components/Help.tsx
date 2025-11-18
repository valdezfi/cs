"use client";

import {
  Home,
  Bot,
  FileCheck,
  Users,
  Headset,
  Building2,
  Globe,
  Sparkles,
} from "lucide-react";

export default function ProductExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          How COagentes Works
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COagentes uses AI to help sellers and agents create stunning property
          listings, optimize descriptions, and reach global buyers across LATAM, USA,
          GCC, Africa, and beyond — all in seconds.
        </p>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Bot className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. Generate with AI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instantly create a complete, high-converting property listing using AI —
              description, highlights, and investment summary included.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <FileCheck className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. Auto-Optimize
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI automatically enhances your listing with key features, neighborhood
              info, buyer insights, and SEO-ready formatting.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Globe className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Reach Global Buyers
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your property is optimized for international buyers — including LATAM,
              GCC, Africa, and U.S. investors looking for opportunities.
            </p>
          </div>

          {/* Step 4: Account Manager */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Headset className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              4. Dedicated Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A COagentes account manager guides you through listing creation,
              buyer leads, negotiations, and deal coordination every step of the way.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
