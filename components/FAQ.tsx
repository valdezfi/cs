"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is COfuncion?",
    answer:
      "COfuncion is an intelligent cannabis waste and compliance platform that helps dispensaries, cultivators, and operators manage waste pickups, documentation, and audit-ready workflows."
  },
  {
    question: "Who is COfuncion built for?",
    answer:
      "COfuncion is designed for licensed cannabis dispensaries, cultivators, processors, operators, and compliance teams operating in regulated markets."
  },
  {
    question: "Does COfuncion handle cannabis waste pickups?",
    answer:
      "COfuncion coordinates and manages licensed cannabis waste pickups through verified haulers. The platform focuses on scheduling, tracking, and compliance—not physical hauling."
  },
  {
    question: "Is COfuncion compliant with state cannabis regulations?",
    answer:
      "COfuncion is built to support state-level cannabis waste and compliance requirements. Specific regulations may vary by state, and operators remain responsible for adhering to local laws."
  },
  {
    question: "What compliance documentation does COfuncion manage?",
    answer:
      "The platform manages manifests, destruction logs, pickup records, and audit-ready reports—keeping all documentation centralized and accessible."
  },
  {
    question: "Can I manage multiple facilities or locations?",
    answer:
      "Yes. COfuncion supports multi-location operations, allowing operators to manage waste workflows, reporting, and compliance across multiple licensed facilities."
  },
  {
    question: "Is this a self-serve or managed platform?",
    answer:
      "Both. Operators can self-manage waste operations or work with a dedicated account manager for compliance guidance, reporting, and operational optimization."
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on the number of facilities, pickup volume, and features used. Plans are designed to scale with your operation as regulatory needs grow."
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No long-term contracts are required. Operators can choose flexible monthly plans based on their operational needs."
  },
  {
    question: "Does COfuncion operate outside of NYC?",
    answer:
      "Yes. While availability depends on state regulations and licensed hauler networks, COfuncion is designed to scale across multiple U.S. cannabis markets."
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
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-900 dark:text-white font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
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
