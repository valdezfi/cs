// components/PricingAccordion.tsx
"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  toggleOpen,
}) => (
  <div className="mb-4 border border-gray-200 rounded-xl shadow-sm bg-white transition-all dark:bg-gray-900 dark:border-gray-700">
    <button
      onClick={toggleOpen}
      className="w-full flex justify-between items-center p-5 text-left"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <FaChevronDown
        className={`text-gray-600 dark:text-gray-300 transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
        isOpen ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      <div className="p-5 pt-0 text-gray-700 dark:text-gray-300">{content}</div>
    </div>
  </div>
);

// Creator-focused FAQs
const pricingFAQs = [
  {
    title: "Is there a free plan for creators?",
    content:
      "Yes! Our free plan gives you access to basic tools, unlimited campaign applications, and limited AI support. It's perfect for exploring opportunities without commitment.",
  },
  {
    title: "What do I get with Creator Pro?",
    content:
      "Creator Pro gives you full access to AI tools that help you grow as a UGC creator, podcaster, or influencer. You'll receive guidance on brand partnerships, digital product ideas, weekly growth plans, and more.",
  },
  {
    title: "How does the AI help me personally?",
    content:
      "The AI analyzes your goals, content style, and audience to recommend strategies, potential brand deals, and growth moves tailored to your niche — from monetization to visibility.",
  },
  {
    title: "Do I need a large following to benefit?",
    content:
      "Nope. Whether you're just starting out or have a loyal fanbase, the tools adapt to your stage and goals. Many micro-creators and niche podcasters use it to grow consistently.",
  },
  {
    title: "Can I cancel or switch plans anytime?",
    content:
      "Yes. You're in full control. Cancel, pause, or downgrade directly in your dashboard at any time. No contracts or hidden fees.",
  },
];

interface PricingAccordionProps {
  items?: { title: string; content: string }[];
}

const PricingAccordion: React.FC<PricingAccordionProps> = ({
  items = pricingFAQs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Pricing FAQs for UGC Creators, Podcasters & Influencers
      </h2>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default PricingAccordion;
