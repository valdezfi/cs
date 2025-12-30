"use client";

import {
  Bot,
  Users,
  Video,
  BarChart3,
} from "lucide-react";

export default function SocialCampaignExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          How We Manage Paid Social & Google Campaigns
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion uses AI to plan, launch, and scale influencer-driven campaigns
          across TikTok Ads, Meta (Facebook & Instagram), and Google Ads —
          combining UGC, creators, and paid media into one performance system.
        </p>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Bot className="w-14 h-14 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. AI Campaign Planning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI analyzes your business, competitors, and goals to define
              the optimal mix of TikTok, Meta, and Google Ads —
              including budgets, audiences, and creatives.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Users className="w-14 h-14 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. Influencers & UGC Creation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We source and manage influencers and UGC creators.
              AI selects creators, scripts hooks, and formats proven to convert
              across social feeds and Google placements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Video className="w-14 h-14 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Launch on TikTok, Meta & Google
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              UGC and influencer content is deployed as ads on TikTok,
              Instagram, Facebook, YouTube, Display, and Performance Max —
              optimized for each platform’s algorithm.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <BarChart3 className="w-14 h-14 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              4. Optimize, Retarget & Scale
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI continuously optimizes creatives, audiences, bids, and spend.
              We retarget across platforms, scale winners, and deliver
              clear ROAS-focused reporting.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
