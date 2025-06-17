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

const reportingFAQs = [
  {
    title: "What does Grande's reporting tool offer?",
    content:
      "Grande provides unified reporting across creators, platforms, and campaigns — including clicks, views, conversions, spend, and ROI — so agencies, brands, and freelancers can make data-backed decisions.",
  },
  {
    title: "Can I share reports with clients or team members?",
    content:
      "Yes. You can generate shareable, branded reports in one click — perfect for client updates, internal reviews, or pitching new budgets.",
  },
  {
    title: "What kind of metrics can I track?",
    content:
      "You’ll see campaign-level insights such as creator performance, CTR, conversion rate, platform trends, affiliate earnings, and content engagement metrics.",
  },
  {
    title: "Is it built for freelancers too?",
    content:
      "Absolutely. Freelancers use Grande to track performance across all their clients in one place — without needing custom spreadsheets or third-party tools.",
  },
  {
    title: "Does it support both UGC and influencer campaigns?",
    content:
      "Yes. Whether you're tracking a TikTok UGC campaign or influencer stories on Instagram, Grande consolidates performance in one reporting layer.",
  },
  {
    title: "How does AI help with reporting?",
    content:
      "Grande uses AI to summarize performance, flag top and underperforming content, and recommend optimizations — saving you hours of manual review.",
  },
];

interface ReportingAccordionProps {
  items?: { title: string; content: string }[];
}

const ReportingAccordion: React.FC<ReportingAccordionProps> = ({
  items = reportingFAQs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Reporting FAQs for Agencies, Freelancers & Brands
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

export default ReportingAccordion;
