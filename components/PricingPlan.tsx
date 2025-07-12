'use client';

import React, { useState } from 'react';

const plans = [
  {
    title: "Free",
    monthly: "$0/mo",
    yearly: "$0/yr",
    description: "Start exploring with basic access.",
    features: [
   "AI-driven campaign management",
      "Access to 80 creators globally",
      "Smart influencer-matching powered by AI",
      "Real-time campaign ROI and conversion tracking",
      "Integrated content rights management",
      "Email campaign support",
      "Priority access to top-tier creators during launches",
      "Smart Contract Generator: Instantly draft influencer-brand contracts tailored to campaign type (UGC, product placement, affiliate, etc.)",
      "AI Content Briefs: Auto-generate clear, creative UGC briefs tailored to each influencer",
      "Content Hook Recommender: AI suggests compelling intros and hooks for UGC and influencer content",
      "Performance Predictor: AI estimates engagement and conversions per influencer before campaign launch",
      "Follow-Up Email Writer: Auto-write professional reminders and updates to influencers",
      "Content Rights Tracker: Automatically manage licensing and usage rights for all influencer content",
      "Podcast Topic Generator: Get podcast topic ideas based on brand or niche",
      "Script & Outline Assistant: Generate full podcast episode outlines with talking points and CTAs",
    ],
    cta: "app.grandeapp.com",
    highlighted: false,
  },
  // {
  //   title: "Essentials",
  //   monthly: "$349/mo",
  //   yearly: "$2,499/yr", // You save $1,689 over monthly ($349 x 12 = $4,188)
  //   description: "For solo brands or creators scaling outreach.",
  //   features: [
  //     "Access to 100+ creators",
  //     "Standard campaign management",
  //     "Email support",
  //     "AI-powered creator recommendations",
  //   ],
  //   cta: "Get Started",
  //   highlighted: false,
  // },
  {
    title: "Pro Plan",
    monthly: "$100000/mo",
    yearly: "$8000009/yr", // You save $2,889 over monthly ($599 x 12 = $7,188)
    description: "For teams managing campaigns and creator relationships.",
    features: [
     "All Monthly benefits",
      "Priority support",
       "Affiliate and promo code setup",
      "Unlimited UGC (User Generated Content) creators",
      "Unlimited podcast creators",
      "1000+ verified influencers with high engagement",
      "Access to Unlimited Influencers globally",

      "Exclusive early access to features",
    ],
    cta: "app.grandeapp.com",
    highlighted: true,
  },
  // {
  //   title: "Enterprise",
  //   monthly: "Custom",
  //   yearly: "Custom",
  //   description: "Custom solutions for agencies and global brands.",
  //   features: [
  //     "Dedicated account manager",
  //     "Custom integrations & workflows",
  //     "SLA & compliance support",
  //     "Premium reporting & insights",
  //     "AI trend prediction & market insights",
  //     "Full AI suite & custom models",
  //   ],
  //   cta: "Contact Sales",
  //   highlighted: false,
  // },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="pt-24 px-4 py-10 mb-10 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-sm">
          {billing === "monthly"
            ? "Pay monthly with flexibility, cancel anytime."
            : "Pay once and save up to 40% — get the full value for less."}
        </p>

        {/* Toggle */}
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const isCustom = plan.monthly === "Custom";
            const isFree = plan.monthly === "$0/mo";
            const showSave = billing === "yearly" && !isCustom && !isFree;

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
                    Best Value
                  </div>
                )}

                <p className="text-2xl font-bold mb-2">
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </p>

                <p className="text-sm mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  {billing === "yearly" && !isCustom
                    ? `Pay $${plan.yearly.replace(/[^0-9]/g, "")} Yearly`
                    : plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
