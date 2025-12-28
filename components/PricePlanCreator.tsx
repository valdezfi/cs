"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

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
  minAdSpend?: string;
};

export default function PricingPlansc() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      title: "Starter",
      monthlyPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER!,
      yearlyPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER_YEARLY!,
      monthly: "$3,000/mo",
      yearly: "$32,000/yr",
      description:
        "AI-managed campaigns for TikTok & Facebook using influencers. No UGC included. Minimum ad spend $2,000.",
      features: [
        "AI campaign setup & optimization",
        "Media placement suggestions",
        "Basic reporting & analytics",
      ],
      highlighted: true,
      minAdSpend: "$2,000",
    },
    {
      title: "Pro",
      monthlyPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO!,
      yearlyPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_YEARLY!,
      monthly: "$5,000/mo",
      yearly: "$52,000/yr",
      description:
        "Premium influencer + UGC campaigns on TikTok & Facebook. AI-managed optimization. Minimum ad spend $5,000.",
      features: [
        "Everything in Starter",
        "Premium UGC creators",
        "Audience targeting & frequency optimization",
        "Creative rotation & budget allocation",
      ],
      highlighted: true,
      minAdSpend: "$5,000",
    },
    {
      title: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      description:
        "Fully managed TikTok & Facebook campaigns with AI, influencers, UGC, and dedicated account manager. Minimum ad spend $5,000+.",
      features: [
        "Dedicated account manager",
        "Custom integrations",
        "Full AI optimization & reporting",
      ],
      enterprise: true,
      minAdSpend: "$5,000+",
    },
  ];

  const handleSubscribe = (plan: Plan) => {
    if (plan.enterprise) {
      window.location.href =
        "mailto:info@grandeapp.com?subject=Enterprise%20Plan%20Inquiry";
      return;
    }

    const priceId =
      billing === "monthly" ? plan.monthlyPriceId : plan.yearlyPriceId;

    if (!priceId) {
      toast.error("Price not configured.");
      return;
    }

    setSelectedPriceId(priceId);
    setShowAuthModal(true);
  };

  const startCheckout = async () => {
    if (!email || !password) {
      toast.error("Email and password required");
      return;
    }

    setLoading(true);
    try {
      const signupRes = await fetch(
        "https://app.grandeapp.com/g/brand/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const signupData = await signupRes.json();
      if (!signupRes.ok && signupData.message !== "User already exists") {
        throw new Error(signupData.message || "Signup failed");
      }

      const checkoutRes = await fetch(
        "https://app.grandeapp.com/g/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, priceId: selectedPriceId }),
        }
      );

      const checkoutData = await checkoutRes.json();
      if (checkoutData?.url) {
        window.location.href = checkoutData.url;
      } else {
        throw new Error(checkoutData.error || "Checkout failed");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Choose Your Influencer & UGC Ad Plan
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            All plans include AI-powered campaign management for TikTok & Facebook.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white dark:bg-gray-900 shadow-2xl scale-[1.03] border border-brand-500"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl"
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {plan.title}
                </h3>

                <p className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </p>

                {plan.minAdSpend && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Minimum ad spend: {plan.minAdSpend}
                  </p>
                )}

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-left">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-brand-500 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`mt-8 w-full py-3 rounded-lg font-medium transition ${
                    plan.highlighted
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black"
                  }`}
                >
                  {plan.enterprise ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AUTH MODAL */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl p-6 shadow-xl relative space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Create your account
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Continue to checkout and set up your TikTok & Facebook campaigns.
              </p>
            </div>

            <input
              type="email"
              placeholder="Business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            <button
              onClick={startCheckout}
              disabled={loading}
              className="w-full bg-brand-500 text-white py-2 rounded-md hover:bg-brand-600 transition disabled:opacity-50"
            >
              {loading ? "Processing…" : "Continue to Checkout"}
            </button>

            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
