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

const ugcFAQs = [
  {
    title: "What is Grande and how does it support UGC creators?",
    content:
      "Grande helps UGC creators get discovered by brands, pitch their services, and manage paid deals — all from a central AI-powered dashboard designed for content creators.",
  },
  {
    title: "How do brands find me on Grande?",
    content:
      "Brands can view your creator portfolio and stats. You’ll be recommended to relevant campaigns or can apply directly to paid gigs in your dashboard.",
  },
  {
    title: "What types of content can I promote?",
    content:
      "You can promote anything — TikToks, Reels, product videos, Amazon UGC, affiliate links, and more using a custom Link in Bio or branded showcase page.",
  },
  {
    title: "Can I track which brands view my profile or content?",
    content:
      "Yes, Grande’s dashboard shows profile visits, brand interest, and campaign engagement so you know which content is attracting attention.",
  },
  {
    title: "Do I need a manager or agency to use Grande?",
    content:
      "Nope. Grande is built for independent creators. You control your pricing, pitches, contracts, and payouts — without needing an agency.",
  },
  {
    title: "Is Grande available to creators outside the U.S.?",
    content:
      "Absolutely. We support creators across the U.S., LATAM, Canada, and Europe. If you create quality content, you can land global brand deals.",
  },
];

interface UGCAccordionProps {
  items?: { title: string; content: string }[];
}

const UGCAccordion: React.FC<UGCAccordionProps> = ({
  items = ugcFAQs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        FAQs for UGC Creators Using Grande
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

export default UGCAccordion;
