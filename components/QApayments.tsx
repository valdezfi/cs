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

const giftingAndPaymentFAQs = [
  {
    title: "How do payments work on Grande?",
    content:
      "Once your content is approved by a brand, Grande releases your payment directly to your account. You’ll receive a notification, and can view your earnings and receipts in your dashboard.",
  },
  {
    title: "Can I receive free products through Grande?",
    content:
      "Yes! Many campaigns involve gifted products. Brands ship products directly to your preferred address. You can track shipments and confirm receipt before you post.",
  },
  {
    title: "When do I get paid for a campaign?",
    content:
      "Payments are released once your deliverables are submitted and approved by the brand. Most payouts happen within a few business days of approval.",
  },
  {
    title: "How do I know when a product is arriving?",
    content:
      "You’ll get tracking details in your dashboard when a product has shipped. You’ll also be prompted to confirm when it’s delivered — so brands know you're ready to post.",
  },
  {
    title: "Do I need to send an invoice to get paid?",
    content:
      "No invoices needed. Grande generates payment receipts for every campaign you complete. Everything is automated — just post, get approved, and get paid.",
  },
  {
    title: "What payment methods does Grande support?",
    content:
      "Grande supports direct bank deposits, PayPal, and other regional methods depending on your location. You’ll set your preferred payout method in your account settings.",
  },
];

interface PaymentsAccordionProps {
  items?: { title: string; content: string }[];
}

const PaymentsAccordion: React.FC<PaymentsAccordionProps> = ({
  items = giftingAndPaymentFAQs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        How Grande simplifies payouts and product gifting for creators, freelancers, and brands
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

export default PaymentsAccordion;
