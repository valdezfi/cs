"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Globe,
  DollarSign,
  FileText,
  Building2,
  ClipboardList,
  Pencil,
  Check,
  X,
} from "lucide-react";

export default function COfuncionPreview({
  data,
  onEdit,
}: {
  data?: any;
  onEdit?: (key: string, value: string) => void;
}) {
  const defaultData = {
    campaignName: "COfuncion OTT Campaign",
    clientName: "Example Brand",
    region: "LATAM / USA / Europe / Africa",
    minBudget: "$20,000",
    ugcRequired: "Mandatory",
    duration: "1 month",
    channel: "OTT Campaign",
    streamingPlatforms: "Amazon Fire / Prime Video",
    adFormat: "Pre-roll / Mid-roll / Banner",
    activationFee: "$3,000 per campaign",
    summary:
      "OTT-only ad campaign via COfuncion.com targeting streaming audiences to maximize reach and conversions.",
    objectives:
      "1. Boost OTT viewership\n2. Drive conversions and engagement\n3. Integrate UGC content into OTT placements",
    kpis:
      "1. Impressions / Views\n2. Completion rate\n3. CTR / Conversions",
    extraInfo:
      "30% commission on campaign spend; tiered for high-value campaigns. Optional premium OTT creative available.",
    campaignLink: "https://cofuncion.com/ott-dashboard",
  };

  const [editableData, setEditableData] = useState(data || defaultData);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  if (!editableData) return null;

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

      {/* Campaign Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Building2 className="w-7 h-7 text-blue-500" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            {editableData.campaignName}
            <button
              onClick={() => startEdit("campaignName")}
              className="ml-3 text-blue-500"
            >
              <Pencil className="w-5 h-5" />
            </button>
          </span>
        </div>
      </div>

      {/* Client Info */}
      <div className="flex items-center mb-6">
        <Building2 className="w-5 h-5 text-gray-500 mr-2" />
        <p className="text-gray-700 dark:text-gray-300 text-base flex items-center">
          <strong>Client / Brand:</strong>{" "}
          <span className="ml-1 font-semibold text-blue-600 dark:text-blue-400">
            {editableData.clientName}
          </span>
        </p>
      </div>

      {/* Campaign Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6 text-gray-700 dark:text-gray-300">
        <div>
          <Field label="Region / Market" keyName="region" icon={Globe} />
          <Field label="Minimum Budget" keyName="minBudget" icon={DollarSign} />
          <Field label="UGC Requirement" keyName="ugcRequired" icon={Sparkles} />
        </div>
        <div>
          <Field label="Campaign Duration" keyName="duration" icon={ClipboardList} />
          <Field label="Platform / Channel" keyName="channel" icon={Globe} />
          <Field label="Streaming Platforms (video apps may vary)" keyName="streamingPlatforms" icon={Globe} />
          <Field label="Ad Format" keyName="adFormat" icon={Sparkles} />
          <Field label="Activation Fee" keyName="activationFee" icon={DollarSign} />
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* Campaign Description */}
      <Field label="Campaign Summary" keyName="summary" icon={FileText} />
      <Field label="Key Objectives" keyName="objectives" icon={ClipboardList} />
      <Field label="Performance KPIs" keyName="kpis" icon={Sparkles} />
      <Field label="Extra Notes" keyName="extraInfo" icon={Building2} />
      <Field label="Campaign Link / Dashboard" keyName="campaignLink" icon={Globe} />
    </div>
  );
}
