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
  <div className="mb-4 border border-gray-200 rounded-xl shadow-sm bg-white transition-all">
    <button
      onClick={toggleOpen}
      className="w-full flex justify-between items-center p-5 text-left"
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <FaChevronDown
        className={`text-gray-600 transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
        isOpen ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      <div className="p-5 pt-0 text-gray-700">{content}</div>
    </div>
  </div>
);

const pricingFAQs = [
  {
    title: "What is the minimum OTT campaign spend?",
    content:
      "Starter campaigns require a minimum OTT ad spend of $2,000. Pro campaigns require a minimum of $5,000. Enterprise campaigns start at $5,000+ and include dedicated AI optimization and support.",
  },
  {
    title: "How is AI involved in the campaigns?",
    content:
      "AI manages creator selection, campaign optimization, performance tracking, and ad distribution. This ensures maximum ROI and efficient scaling at every stage.",
  },
  {
    title: "What’s included in the Starter plan?",
    content:
      "Starter campaigns ($3k/month) include AI-assisted campaign setup, access to top creators, OTT ad distribution, and basic reporting. Minimum ad spend $2,000.",
  },
  {
    title: "What’s included in the Pro plan?",
    content:
      "Pro campaigns ($5k/month) provide premium UGC content, influencer campaigns, full AI optimization, and performance analytics. Minimum ad spend $5,000.",
  },
  {
    title: "Can I cancel or change my plan?",
    content:
      "Yes — there are no long-term contracts. You can cancel, upgrade, or downgrade your plan anytime from your dashboard.",
  },
  {
    title: "Are there custom enterprise options?",
    content:
      "Enterprise plans include advanced AI workflows, dedicated account managers, and custom OTT integrations. Minimum ad spend $5,000. Contact sales for details.",
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
        OTT Campaign Pricing FAQs
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
