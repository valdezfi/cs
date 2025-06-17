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
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-xl shadow-sm bg-white transition-all">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <FaChevronDown
          className={`text-gray-600 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
};

const defaultAccordionItems = [
  {
    title: "How do affiliate links work on Grande?",
    content:
      "Grande generates trackable affiliate links for each campaign. Creators add these links to their bios, stories, or posts. When followers click and convert, commissions are tracked and paid out automatically.",
  },
  {
    title: "How can brands and agencies launch affiliate campaigns?",
    content:
      "You simply upload your offer and set a commission rate. Our system matches you with relevant creators and distributes custom links. You’ll see real-time metrics on traffic, conversions, and ROI.",
  },
  {
    title: "Can freelancers manage affiliate campaigns for clients?",
    content:
      "Yes. Freelancers can onboard clients, launch affiliate campaigns, track creator performance, and handle payouts—all from one dashboard. It's perfect for UGC managers or independent brand reps.",
  },
  {
    title: "How are commissions and payouts handled?",
    content:
      "Creators earn a commission every time a sale is made through their link. Grande automates the entire payout process on a fixed schedule, so there’s no manual follow-up needed.",
  },
  {
    title: "Do I need a big following to earn with affiliate links?",
    content:
      "Not at all. We support micro and niche creators too. If your audience trusts you and you can drive even modest conversions, affiliate links can still be a strong income source.",
  },
  {
    title: "What kind of performance tracking is available?",
    content:
      "You get access to a real-time dashboard showing link clicks, conversion rates, total revenue, and top-performing creators. Perfect for optimizing campaigns or showing client impact.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const AffiliateFAQ: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Affiliate FAQs: How Grande Helps You Monetize Smarter
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

export default AffiliateFAQ;
