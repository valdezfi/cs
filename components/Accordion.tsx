"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
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
    title: "What is Grande’s AI-driven Creator Economy platform?",
    content:
      "Grande is an AI-powered platform that intelligently connects brands with authentic creators for campaigns, product placements, and affiliate deals. It enables creators to monetize through merch, UGC, and data-driven collaborations—automated for scale and efficiency.",
  },
  {
    title: "How can brands launch campaigns?",
    content:
      "Brands can submit a campaign brief, define targeting (location, niche, budget), and get matched with vetted creators using AI. Grande manages outreach, coordination, and performance tracking.",
  },
  {
    title: "How do creators earn with Grande?",
    content:
      "Creators earn through sponsored deals, exclusive merch collaborations, and affiliate links. Grande automates campaign logistics so creators can focus on what they do best: creating content.",
  },
  {
    title: "What makes Grande different?",
    content:
      "Grande combines AI matchmaking with creator-first tools, giving brands data-backed performance and creators monetization opportunities beyond single sponsorships.",
  },
  {
    title: "Can I track performance as a brand?",
    content:
      "Yes. Brands get a real-time dashboard showing campaign performance, reach, creator engagement, and ROI analytics—powered by AI insights.",
  },
  {
    title: "Who qualifies as a creator?",
    content:
      "Any creator with authentic engagement and quality content can apply. We work with influencers, UGC creators, and niche experts across multiple regions and languages.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        FAQs: Inside Grande’s AI Creator Platform
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

export default Accordion;
