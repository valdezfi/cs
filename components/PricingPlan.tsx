"use client";

import React, { useState } from "react";

type Plan = {
  title: string;
  monthlyPriceId?: string | null;
  yearlyPriceId?: string | null;
  monthly: string;
  yearly: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  enterprise?: boolean;
};

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState(false);

  const plans: Plan[] = [
    {
      title: "Free",
      monthly: "$0/mo",
      yearly: "$0/yr",
      description: "Start exploring with basic access.",
      features: [
        "Access to 80 creators per month",
        "1 Basic campaign creation",
        "Basic support",
      ],
    },
    {
      title: "Pro Plan",
      monthlyPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_1000!,
      yearlyPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_8000!,
      monthly: "$1,000/mo",
      yearly: "$8,000/yr",
      description:
        "For teams managing campaigns and creator relationships.",
      features: [
        "All Free benefits",
        "Unlimited campaign creation",
        "AI-driven campaign management",
        "Unlimited Influencers",
        "Affiliate and promo code setup",
        "Real-time campaign ROI and conversion tracking",
        "Email campaign support",
        "Priority access to top-tier creators during launches",
        "Performance Predictor: AI estimates engagement and conversions before campaign launch",
        "Exclusive early access to features",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      description:
        "For brands needing tailored campaigns and advanced integrations.",
      features: [
        "All Pro benefits",
        "Dedicated account manager",
        "Custom campaign design and analytics",
        "API and CRM integrations",
        "Priority onboarding and support",
      ],
      enterprise: true,
    },
  ];

  const handleSubscribe = async (plan: Plan) => {
    try {
      if (plan.enterprise) {
        window.location.href =
          "mailto:enterprise@grandeapp.com?subject=Enterprise%20Plan%20Inquiry";
        return;
      }

      if (plan.title === "Free") {
        window.location.href = "https://app.grandeapp.com/billing";
        return;
      }

      setLoading(true);

      // ✅ Select correct price ID based on billing toggle
      const priceId =
        billing === "monthly" ? plan.monthlyPriceId : plan.yearlyPriceId;

      if (!priceId) {
        alert("Price ID not configured for this plan.");
        setLoading(false);
        return;
      }

      // ✅ Call API (no email required)
      const res = await fetch(
        "https://app.grandeapp.com/g/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ priceId }),
        }
      );

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert(data.error || "Something went wrong creating checkout session.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Failed to start checkout session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          {billing === "monthly"
            ? "Pay monthly with flexibility — cancel anytime."
            : "Pay once and save up to 40% — get the full value for less."}
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <span
            className={`mr-2 ${
              billing === "monthly" ? "font-bold" : "opacity-60"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() =>
                setBilling((prev) =>
                  prev === "monthly" ? "yearly" : "monthly"
                )
              }
              checked={billing === "yearly"}
            />
            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 transition-colors duration-300" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
          </label>
          <span
            className={`ml-2 ${
              billing === "yearly" ? "font-bold" : "opacity-60"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {plans.map((plan, index) => {
            const isCustom = plan.monthly === "Custom";
            const isFree = plan.monthly === "$0/mo";
            const showSave =
              billing === "yearly" && !isCustom && !isFree;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 shadow-md border transition-all ${
                  plan.highlighted
                    ? "bg-gray-100 dark:bg-gray-900 border-blue-600 shadow-xl"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
                    Best Value
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-1">{plan.title}</h3>
                {showSave && (
                  <p className="text-sm text-green-600 font-semibold mb-1">
                    Save 40% annually
                  </p>
                )}
                <p className="text-3xl font-bold mb-2">
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </p>
                <p className="text-sm mb-6 text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>

                <ul className="text-sm space-y-2 mb-6 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={loading}
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition font-medium disabled:bg-gray-400"
                >
                  {loading
                    ? "Redirecting..."
                    : plan.enterprise
                    ? "Contact Sales"
                    : isFree
                    ? "Start Free"
                    : "Get Started"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
