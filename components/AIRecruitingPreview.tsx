"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Globe,
  DollarSign,
  FileText,
  Building2,
  Home,
  MapPin,
  ClipboardList,
  Pencil,
  Check,
  X,
  BedDouble,
  Bath,
} from "lucide-react";

export default function AIListingPreview({
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

  // 🔧 Shared Editable Field Component
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
            >
              <Check className="w-4 h-4" />
            </button>
            <button onClick={cancelEdit} className="text-red-500 hover:text-red-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => startEdit(keyName)}
            className="text-blue-500 hover:text-blue-600"
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
    <div className="mt-8 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg text-left">

      {/* 🏠 Listing Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Home className="w-7 h-7 text-blue-500" />

          {editingKey === "title" ? (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="flex-1 p-2 text-xl font-semibold border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800"
              />
              <button onClick={() => saveEdit("title")}>
                <Check className="w-5 h-5 text-green-500" />
              </button>
              <button onClick={cancelEdit}>
                <X className="w-5 h-5 text-red-500" />
              </button>
            </div>
          ) : (
            <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              {editableData.title || "Untitled Property Listing"}
              <button
                onClick={() => startEdit("title")}
                className="ml-3 text-blue-500"
              >
                <Pencil className="w-5 h-5" />
              </button>
            </span>
          )}
        </div>
      </div>

      {/* 🏢 Seller / Agent / Agency */}
      <div className="flex items-center mb-6">
        <Building2 className="w-5 h-5 text-gray-500 mr-2" />

        {editingKey === "agentName" ? (
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800"
            />
            <button onClick={() => saveEdit("agentName")}>
              <Check className="w-4 h-4 text-green-500" />
            </button>
            <button onClick={cancelEdit}>
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 text-base flex items-center">
            <strong>Agent / Seller:</strong>{" "}
            <span className="ml-1 font-semibold text-blue-600 dark:text-blue-400">
              {editableData.agentName || "Not provided"}
            </span>
            <button
              onClick={() => startEdit("agentName")}
              className="ml-2 text-blue-500"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </p>
        )}
      </div>

      {/* 🏘 Property Info Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6 text-gray-700 dark:text-gray-300">
        <div>
          <Field label="Location" keyName="location" icon={MapPin} />
          <Field label="Property Type" keyName="propertyType" icon={Home} />
          <Field label="Bedrooms" keyName="bedrooms" icon={BedDouble} />
          <Field label="Bathrooms" keyName="bathrooms" icon={Bath} />
        </div>
        <div>
          <Field label="Asking Price" keyName="price" icon={DollarSign} />
          <Field label="Region / Market" keyName="region" icon={Globe} />
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* 📝 Listing Description Fields */}
      <Field label="Property Summary" keyName="summary" icon={FileText} />
      <Field label="Key Features" keyName="features" icon={ClipboardList} />
      <Field label="Neighborhood Highlights" keyName="neighborhood" icon={MapPin} />
      <Field label="Investment Benefits" keyName="investment" icon={Sparkles} />
      <Field label="Additional Information" keyName="extraInfo" icon={Building2} />

      {/* 🌐 External Link */}
      <Field label="Listing Link (optional)" keyName="listingLink" icon={Globe} />
    </div>
  );
}
