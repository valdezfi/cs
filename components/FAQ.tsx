"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is COfuncion?",
    answer:
      "COfuncion is an AI-powered OTT campaign management platform designed to help brands and agencies plan, manage, optimize, and scale streaming ad campaigns using data-driven insights."
  },
  {
    question: "What platforms does COfuncion support?",
    answer:
      "COfuncion is built for modern OTT and streaming ecosystems. Platform availability may vary by region and campaign type, but the system is designed to be flexible and platform-agnostic."
  },
  {
    question: "Do you provide creators or influencers?",
    answer:
      "Creator sourcing is not included by default. Influencer and creator access is handled through GrandeApp. COfuncion focuses strictly on campaign execution, optimization, and reporting."
  },
  {
    question: "Can UGC be added to campaigns?",
    answer:
      "Yes. UGC can be added as an optional service. Brands may use their own content, licensed UGC, or request UGC support as part of a custom campaign package."
  },
  {
    question: "What does AI manage inside a campaign?",
    answer:
      "AI assists with audience insights, campaign scheduling, performance monitoring, optimization suggestions, and reporting—helping teams make faster, smarter decisions."
  },
  {
    question: "Is this a self-serve or managed platform?",
    answer:
      "COfuncion supports both. You can self-manage campaigns or work with a dedicated account manager for strategic execution and optimization."
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on campaign scale, regions, and features used. Entry plans focus on campaign management and reporting. Advanced plans include AI optimization, audience insights, and optional UGC add-ons."
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No long-term commitment is required. Campaigns can be run on a per-campaign or monthly basis depending on your needs."
  },
  {
    question: "Do you support international campaigns?",
    answer:
      "Yes. COfuncion supports global OTT campaigns across the U.S., LATAM, Europe, MENA, and other regions depending on availability."
  },
  {
    question: "What kind of reporting do I get?",
    answer:
      "You receive AI-generated performance insights, audience behavior summaries, engagement trends, and optimization recommendations—no complex charts required."
  }
];

export default function CampaignFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-900 dark:text-white font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
