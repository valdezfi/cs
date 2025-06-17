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

// ✅ Default FAQs (You can separate by type if needed)
const defaultAccordionItems = [
  {
    title: "What is Grande’s AI-driven Creator Economy platform?",
    content:
      "Grande is an AI-powered platform that intelligently connects brands with authentic creators for campaigns, UGC, and affiliate deals. It streamlines monetization through merch, content automation, and data-driven recommendations.",
  },
  {
    title: "How do agencies or brands launch a campaign?",
    content:
      "Agencies and brands submit a campaign brief, select goals (like conversions or awareness), and our AI finds creators with matching niche, audience, and performance data. We automate the outreach, negotiation, and delivery.",
  },
  {
    title: "How do freelancers or creators make money?",
    content:
      "Creators earn from brand sponsorships, UGC, affiliate links, and even merch drops. AI suggests content ideas and helps match you with paying opportunities—so you focus on content, not outreach.",
  },
  {
    title: "How does Grande use AI to match creators and brands?",
    content:
      "Our AI matches based on niche, content style, past engagement, audience demographics, and campaign goals. This ensures the best fit for both sides—without wasting time.",
  },
  {
    title: "What if I'm a small creator or just getting started?",
    content:
      "No problem. We support micro and nano influencers too. If you’re consistent and have good engagement, we’ll help you grow and monetize through AI suggestions and small campaigns.",
  },
  {
    title: "Can I track performance as a brand or creator?",
    content:
      "Yes. You’ll get dashboards showing engagement, conversions, content delivery, and ROI in real time. Brands and creators both see performance from different angles.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const AgencyAccordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
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

export default AgencyAccordion;
