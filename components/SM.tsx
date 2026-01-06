"use client";

import { Bot, Users, Video, BarChart3 } from "lucide-react";

export default function WasteOperationsExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          How We Manage Cannabis Waste & Compliance
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Cofuncion helps dispensaries, cultivators, and operators coordinate licensed waste removal, 
          stay audit-ready, and maintain full regulatory compliance — all from one intelligent platform.
        </p>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Bot className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. Plan Waste Operations
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Schedule pickups, define frequency, and coordinate with licensed haulers for your dispensary or facility.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Users className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. Track & Manage Compliance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate audit-ready manifests, destruction logs, and regulatory reports automatically for every pickup.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Video className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Coordinate Licensed Haulers
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with verified cannabis waste haulers for secure, legal disposal across multiple sites.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <BarChart3 className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              4. Monitor, Optimize & Audit
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track performance, ensure compliance, optimize workflows, and receive clear reporting for audits and inspections.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
