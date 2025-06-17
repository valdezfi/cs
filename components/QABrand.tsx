"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface BrandAccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const BrandAccordionItem: React.FC<BrandAccordionItemProps> = ({
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

const BranddefaultAccordionItems = [
  {
    title: "What is Grande’s AI-driven Creator Economy platform?",
    content:
      "Grande is an AI-powered platform that helps brands and agencies connect with the right creators for campaigns, UGC, and affiliate deals. It automates discovery, outreach, and performance tracking to simplify influencer marketing.",
  },
  {
    title: "How do I launch a campaign on Grande?",
    content:
      "Submit a campaign brief with your target goals—such as conversions, reach, or UGC. Our AI selects creators with the right audience and past performance. From there, Grande automates communication, negotiations, and deliverables.",
  },
  {
    title: "How does Grande select creators for my brand?",
    content:
      "We use AI to match creators based on their niche, content type, audience demographics, engagement metrics, and campaign fit. This ensures you work only with high-potential talent aligned with your goals.",
  },
  {
    title: "Can I track my campaign’s performance?",
    content:
      "Yes. Our brand dashboard shows real-time performance metrics like reach, engagement, conversions, and content delivery status. You’ll have full visibility across all active and past campaigns.",
  },
  {
    title: "Can I collaborate with influencers across multiple countries?",
    content:
      "Absolutely. Grande operates across the U.S., LATAM, and Europe. You can run localized campaigns or global collaborations, all managed under one platform.",
  },
  {
    title: "Does Grande support affiliate and UGC models?",
    content:
      "Yes. Beyond sponsored campaigns, you can engage creators for affiliate marketing or to produce high-quality UGC for ads, socials, or your website. We streamline both use cases.",
  },
];

interface BrandAccordionProps {
  items?: { title: string; content: string }[];
}

const BrandAccordion: React.FC<BrandAccordionProps> = ({ items = BranddefaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        FAQs for Brands & Agencies Using Grande
      </h2>
      {items.map((item, index) => (
        <BrandAccordionItem
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

export default BrandAccordion;
