"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  Globe,
  DollarSign,
  FileText,
  Building2,
  Stethoscope,
  UserRoundCheck,
  MapPin,
  ClipboardList,
  Pencil,
  Check,
  X,
} from "lucide-react";

export default function AIRecruitingPreview({
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

  // 🚀 Shared Field Component
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
            <button
              onClick={cancelEdit}
              className="text-red-500 hover:text-red-600"
            >
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

      {/* 🏥 Job Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Stethoscope className="w-7 h-7 text-blue-500" />

          {editingKey === "jobTitle" ? (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="flex-1 p-2 text-xl font-semibold border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800"
              />
              <button onClick={() => saveEdit("jobTitle")}>
                <Check className="w-5 h-5 text-green-500" />
              </button>
              <button onClick={cancelEdit}>
                <X className="w-5 h-5 text-red-500" />
              </button>
            </div>
          ) : (
            <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              {editableData.jobTitle || "Untitled Medical Role"}
              <button
                onClick={() => startEdit("jobTitle")}
                className="ml-3 text-blue-500"
              >
                <Pencil className="w-5 h-5" />
              </button>
            </span>
          )}
        </div>
      </div>

      {/* 🏢 Facility Name */}
      <div className="flex items-center mb-6">
        <Building2 className="w-5 h-5 text-gray-500 mr-2" />

        {editingKey === "facility" ? (
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800"
            />
            <button onClick={() => saveEdit("facility")}>
              <Check className="w-4 h-4 text-green-500" />
            </button>
            <button onClick={cancelEdit}>
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 text-base flex items-center">
            <strong>Facility:</strong>{" "}
            <span className="ml-1 font-semibold text-blue-600 dark:text-blue-400">
              {editableData.facility || "Not provided"}
            </span>
            <button
              onClick={() => startEdit("facility")}
              className="ml-2 text-blue-500"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </p>
        )}
      </div>

      {/* 📊 Job Info Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6 text-gray-700 dark:text-gray-300">
        <div>
          <Field label="Location" keyName="location" icon={MapPin} />
          <Field label="Employment Type" keyName="employmentType" icon={ClipboardList} />
          <Field label="Department" keyName="department" icon={Building2} />
        </div>
        <div>
          <Field label="Salary Range" keyName="salaryRange" icon={DollarSign} />
          <Field label="Start Date" keyName="startDate" icon={Calendar} />
          <Field label="Experience Level" keyName="experience" icon={UserRoundCheck} />
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* 📝 Description Fields */}
      <Field label="Role Summary" keyName="roleSummary" icon={FileText} />
      <Field label="Key Responsibilities" keyName="responsibilities" icon={ClipboardList} />
      <Field label="Required Qualifications" keyName="qualifications" icon={Stethoscope} />
      <Field label="Preferred Skills" keyName="skills" icon={Sparkles} />
      <Field label="About the Facility" keyName="facilityInfo" icon={Building2} />

      {/* 🌐 Website Links / Application Links */}
      <Field label="Application Link" keyName="applicationLink" icon={Globe} />

    </div>
  );
}
