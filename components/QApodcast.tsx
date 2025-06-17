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

const podcasterFAQs = [
  {
    title: "What is Grande and how does it help podcasters?",
    content:
      "Grande is an AI-driven platform designed to help podcasters grow, monetize, and manage their shows. From brand sponsorships to custom landing pages and affiliate tools, Grande simplifies monetization and growth for independent podcasters.",
  },
  {
    title: "How do I find sponsorships for my podcast?",
    content:
      "After signing up, Grande matches your podcast with relevant brands based on your genre, audience, and listenership. You’ll receive offers or can apply directly to campaigns from your dashboard.",
  },
  {
    title: "Can I track how my podcast and links are performing?",
    content:
      "Yes — Grande provides performance dashboards showing listens, click-throughs, conversions, and earnings so you can measure what’s working and what to improve.",
  },
  {
    title: "Can I promote my own products, merch, or subscription content?",
    content:
      "Absolutely. Use Grande’s Link in Bio tools to promote your episodes, merch, Patreon, or exclusive content — all in one place tailored for podcast audiences.",
  },
  {
    title: "Do I need a team or network to use Grande?",
    content:
      "Nope. Grande is built for independent podcasters. You can manage deals, links, payments, and analytics solo — no agent or network required.",
  },
  {
    title: "Is Grande available to podcasters outside the U.S.?",
    content:
      "Yes! Grande supports creators across LATAM, Europe, and other global regions. Whether you podcast in English, Spanish, or another language, you can grow and monetize with us.",
  },
];

interface PodcasterAccordionProps {
  items?: { title: string; content: string }[];
}

const PodcasterAccordion: React.FC<PodcasterAccordionProps> = ({
  items = podcasterFAQs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        FAQs for Podcasters Using Grande
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

export default PodcasterAccordion;
