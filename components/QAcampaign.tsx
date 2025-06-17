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
};

const defaultAccordionItems = [
  {
    title: "What is Grande and how does it support campaign managers?",
    content:
      "Grande is an AI-powered platform built for freelancers, agencies, and brands to launch, manage, and scale influencer campaigns — all from one intuitive dashboard.",
  },
  {
    title: "How do I launch a campaign on Grande?",
    content:
      "You can create a campaign in minutes — define your goals, budget, ideal creator type, and content needs. Grande then auto-matches you with verified profiles who meet your criteria.",
  },
  {
    title: "Can I manage multiple clients or brands?",
    content:
      "Yes. Grande is designed for agencies and freelancers managing multiple clients. Easily switch between campaigns and brand profiles within your dashboard.",
  },
  {
    title: "What kind of performance tracking is included?",
    content:
      "Each campaign includes built-in reporting: reach, engagement, conversions, content submissions, creator status, and payout tracking — no spreadsheets required.",
  },
  {
    title: "Can I approve content before it goes live?",
    content:
      "Absolutely. You can set custom workflows for creator submissions — approve or request edits before anything is published.",
  },
  {
    title: "Is there support for affiliate or performance-based campaigns?",
    content:
      "Yes. You can run fixed-rate or performance-based deals with unique tracking links and conversion metrics tied directly to each creator.",
  },
];

interface CampaignAccordionProps {
  items?: { title: string; content: string }[];
}

const CampaignAccordion: React.FC<CampaignAccordionProps> = ({
  items = defaultAccordionItems,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Campaign Management FAQs
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

export default CampaignAccordion;
