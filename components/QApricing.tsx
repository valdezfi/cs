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
    title: "How much does Grande cost for brands?",
    content:
      "We offer flexible pricing based on campaign size and targeting needs. Brands can launch influencer or podcast campaigns starting from $500. For custom campaigns or ongoing partnerships, contact sales.",
  },
  {
    title: "Is there a plan for freelancers or solo marketers?",
    content:
      "Yes! Freelancers can use Grande to manage multiple creators or brand deals under a single dashboard. Pricing starts at $49/month with access to collaboration tools and reporting.",
  },
  {
    title: "What’s included in the agency plan?",
    content:
      "Agencies get multi-brand management, white-label dashboards, reporting, and priority support. Custom onboarding and team training are also included. Contact us for enterprise pricing.",
  },
  {
    title: "Are there any free tools available?",
    content:
      "Yes — anyone can start with our free creator search and campaign planning tools. Upgrade only when you're ready to launch and manage campaigns at scale.",
  },
  {
    title: "Can I cancel anytime?",
    content:
      "Absolutely. There are no long-term contracts. You can cancel or downgrade your plan at any time directly from your dashboard.",
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
        Pricing FAQs for Brands, Freelancers & Agencies
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
