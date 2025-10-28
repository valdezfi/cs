"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  Globe,
  DollarSign,
  FileText,
  Ban,
  Building2,
  Link as LinkIcon,
  Pencil,
  Check,
  X,
} from "lucide-react";

export default function AICampaignPreview({
  data,
  onEdit,
}: {
  data: any;
  onEdit?: (key: string, value: string) => void;
}) {
  const [editableData, setEditableData] = useState(data || {});
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  if (!data) return null;

  const startEdit = (key: string) => {
    setEditingKey(key);
    setTempValue(editableData[key] || "");
  };

  const saveEdit = (key: string) => {
    const updated = { ...editableData, [key]: tempValue };
    setEditableData(updated);
    if (onEdit) onEdit(key, tempValue);
    setEditingKey(null);
  };

  const cancelEdit = () => setEditingKey(null);

  const Field = ({
    label,
    keyName,
    icon: Icon,
  }: {
    label: string;
    keyName: string;
    icon: any;
  }) => (
    <div className="mb-5">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-blue-400" />
          <strong>{label}:</strong>
        </div>
        {editingKey === keyName ? (
          <div className="flex gap-2">
            <button
              onClick={() => saveEdit(keyName)}
              className="text-green-500 hover:text-green-600"
              title="Save"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={cancelEdit}
              className="text-red-500 hover:text-red-600"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => startEdit(keyName)}
            className="text-blue-500 hover:text-blue-600"
            title="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>

      {editingKey === keyName ? (
        <textarea
          rows={2}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800 text-sm focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <p className="mt-2 text-sm text-gray-800 dark:text-gray-100 whitespace-pre-line">
          {editableData[keyName] || (
            <span className="text-gray-400">No information yet</span>
          )}
        </p>
      )}
    </div>
  );

  return (
    <div className="mt-10 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg text-left">
      {/* 🧠 Campaign Header */}
   {/* 🧠 Campaign Header */}
<div className="flex items-center justify-between mb-6">
  <div className="flex items-center gap-3">
    <Sparkles className="w-7 h-7 text-blue-500" />

    {editingKey === "campaignName" ? (
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className="flex-1 p-2 text-xl font-semibold border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => saveEdit("campaignName")}
          className="text-green-500 hover:text-green-600"
        >
          <Check className="w-5 h-5" />
        </button>
        <button
          onClick={cancelEdit}
          className="text-red-500 hover:text-red-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    ) : (
      <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        {editableData.campaignName || "Untitled Campaign"}
        <button
          onClick={() => startEdit("campaignName")}
          className="ml-3 text-blue-500 hover:text-blue-600"
        >
          <Pencil className="w-5 h-5" />
        </button>
      </span>
    )}
  </div>
</div>

{/* 🏢 Brand Section */}
<div className="flex items-center mb-6">
  <Building2 className="w-5 h-5 text-gray-500 mr-2" />

  {editingKey === "brandName" ? (
    <div className="flex items-center gap-2 w-full">
      <input
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        className="flex-1 p-2 text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={() => saveEdit("brandName")}
        className="text-green-500 hover:text-green-600"
      >
        <Check className="w-4 h-4" />
      </button>
      <button
        onClick={cancelEdit}
        className="text-red-500 hover:text-red-600"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  ) : (
    <p className="text-gray-700 dark:text-gray-300 text-base flex items-center">
      <strong>Brand:</strong>{" "}
      <span className="ml-1 capitalize font-semibold text-blue-600 dark:text-blue-400">
        {editableData.brandName || "No brand provided"}
      </span>
      <button
        onClick={() => startEdit("brandName")}
        className="ml-2 text-blue-500 hover:text-blue-600"
      >
        <Pencil className="w-4 h-4" />
      </button>
    </p>
  )}
</div>


      {/* 🧩 Campaign Info Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6 text-gray-700 dark:text-gray-300">
        <div>
          <Field label="Industry" keyName="industry" icon={Globe} />
          <Field label="Platform" keyName="platform" icon={Globe} />
          <Field label="Target Country" keyName="targetCountry" icon={Globe} />
        </div>
        <div>
          <Field label="Start Date" keyName="startDate" icon={Calendar} />
          <Field label="End Date" keyName="endDate" icon={Calendar} />
          <Field label="Compensation" keyName="compensation" icon={DollarSign} />
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* ✍️ Editable Text Fields */}
      <Field label="Deliverables" keyName="deliverables" icon={FileText} />
      <Field label="Product Details" keyName="productDetails" icon={FileText} />
      <Field
        label="Why We Want This Content"
        keyName="whyWeWantThisContent"
        icon={DollarSign}
      />
      <Field label="Do’s" keyName="dos" icon={Globe} />
      <Field label="Don’ts" keyName="doNot" icon={Ban} />

      {/* 🌐 Website Links */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4 text-blue-400" />
            <strong>Product / Website Links:</strong>
          </div>
          <button
            onClick={() => startEdit("productWebsite")}
            className="text-blue-500 hover:text-blue-600"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>

        {editingKey === "productWebsite" ? (
          <textarea
            rows={2}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800 text-sm"
            placeholder="Add or edit links, separated by new lines"
          />
        ) : (
          <div className="space-y-1 text-sm">
            {[editableData.productWebsite, editableData.optionalProductDetails1, editableData.optionalProductDetails2]
              .filter(Boolean)
              .map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {link}
                </a>
              ))}
            {!editableData.productWebsite &&
              !editableData.optionalProductDetails1 &&
              !editableData.optionalProductDetails2 && (
                <p className="text-gray-400">No links added yet</p>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
