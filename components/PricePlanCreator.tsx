'use client';

import React, { useState } from 'react';

const plans = [
  {
    title: "Free",
    monthly: "$0/mo",
    yearly: "$0/yr",
    description: "Kickstart your creator journey with smart tools.",
    features: [
      "Apply to unlimited campaigns",
      "Basic creator insights",
      "Community access",
      "Light AI career advice",
    ],
    cta: "Start for Free",
    highlighted: false,
  },
  {
    title: "Creator Pro",
    monthly: "$59.99/mo",
    yearly: "$399/yr", // Save 40%
    description: "Level up with AI guidance, brand deals & digital product strategy.",
    features: [
      "Personalized AI career roadmap",
      "AI-backed brand partnership advice",
      "Help building digital products",
      "Advanced creator analytics",
      "Priority campaign access",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="pt-24 px-4 py-10 mb-10 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Built for Creators Ready to Grow
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-sm">
          Whether you're starting or scaling, our AI supports your journey every step of the way.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={`mr-2 ${billing === "monthly" ? "font-bold" : "opacity-60"}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() =>
                setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"))
              }
              checked={billing === "yearly"}
            />
            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 transition-colors duration-300" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
          </label>
          <span className={`ml-2 ${billing === "yearly" ? "font-bold" : "opacity-60"}`}>Yearly</span>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => {
            const isFree = plan.monthly === "$0/mo";
            const showSave = billing === "yearly" && !isFree;

            return (
              <div
                key={index}
                className={`border rounded-xl p-6 transition relative ${
                  plan.highlighted
                    ? "bg-gray-100 dark:bg-gray-900 border-blue-600 shadow-xl"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>

                {showSave && (
                  <p className="text-sm text-green-600 font-semibold mb-1">
                    Save 40% annually
                  </p>
                )}

                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
                    Best for Growth
                  </div>
                )}

                <p className="text-2xl font-bold mb-2">
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </p>

                <p className="text-sm mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6 text-sm text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://c.grandeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition font-medium"
                >
                  {billing === "yearly" && !isFree
                    ? `Pay $${plan.yearly.replace(/[^0-9]/g, "")} Yearly`
                    : plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
