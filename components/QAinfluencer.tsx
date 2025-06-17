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
    title: "What is Grande and how can it help me as an influencer?",
    content:
      "Grande is an AI-powered platform that helps influencers monetize through brand deals, affiliate links, and custom tools like Link in Bio pages. You keep full control while accessing new income opportunities.",
  },
  {
    title: "How do I get brand deals on Grande?",
    content:
      "Once you sign up, our system matches you with campaigns based on your content, audience, and engagement. Brands may invite you directly, or you can apply to open campaigns from your dashboard.",
  },
  {
    title: "Can I track how my content is performing?",
    content:
      "Yes. You get access to real-time metrics showing reach, clicks, engagement, and conversions. You'll always know what's working and what brands love most.",
  },
  {
    title: "Does Grande support creators outside the U.S.?",
    content:
      "Absolutely. Grande works with influencers across LATAM, Europe, and the U.S. Whether you're local or global, we help you grow and earn across borders.",
  },
  {
    title: "Can I use Grande without a manager or agent?",
    content:
      "Yes — that’s the point. Grande gives you the tools to manage offers, links, payments, and insights yourself. No team required.",
  },
  {
    title: "Can I promote my own products or services too?",
    content:
      "Of course. Grande lets you build a monetized Link in Bio where you can promote your merch, services, OnlyFans, YouTube, or anything else you offer.",
  },
];

interface InfluencerAccordionProps {
  items?: { title: string; content: string }[];
}

const InfluencerAccordion: React.FC<InfluencerAccordionProps> = ({
  items = defaultAccordionItems,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        FAQs for Influencers Using Grande
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

export default InfluencerAccordion;
