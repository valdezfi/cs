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

const eventAccordionItems = [
  {
    title: "How does Grande help organize influencer events?",
    content:
      "Grande lets brands plan, invite, and manage influencer events seamlessly — from curated guest lists to tracking RSVPs and event-day check-ins, all in one platform.",
  },
  {
    title: "Can I invite creators based on niche and city?",
    content:
      "Yes. Filter by creator category, city, follower count, and engagement rate. Grande suggests verified influencers who match your target audience and event vibe.",
  },
  {
    title: "What kind of content do creators post at events?",
    content:
      "Expect high-quality UGC like Instagram Stories, TikToks, Reels, and event recaps. Creators often tag brands and share authentic behind-the-scenes content from the experience.",
  },
  {
    title: "How do I track event success and ROI?",
    content:
      "Grande provides a full post-event report: attendance, social media metrics, creator mentions, and estimated earned media value — so you can measure real impact.",
  },
  {
    title: "Can I approve posts or ask for specific tags?",
    content:
      "Yes. You can set clear posting guidelines, hashtags, and handle tags before the event. Afterward, creators can submit content for review before publishing if needed.",
  },
  {
    title: "Do you support hybrid (online + offline) activations?",
    content:
      "Absolutely. Whether it’s a launch party with a livestream, or a local meetup with a TikTok challenge, Grande makes it easy to blend in-person and digital reach.",
  },
];

interface CampaignAccordionProps {
  items?: { title: string; content: string }[];
}

const EventAccordion: React.FC<CampaignAccordionProps> = ({
  items = eventAccordionItems,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Influencer Event FAQs
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

export default EventAccordion;
