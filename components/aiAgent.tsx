"use client";

import { useState, useEffect } from "react";
import {
  Stethoscope,
  Sparkles,
  Mail,
  Bot,
  DollarSign,
  ClipboardList,
  UserSearch,
  X,
} from "lucide-react";
import Button from "../components/ui/button/Button";

// Import your components adapted for recruiting
import AIRecruitingPreview from "components/AIRecruitingPreview";
// import CandidateMiniGallery from "components/CandidateMiniGallery";
import TopFunnelPricing from "components/TopFunnelPricing";

export default function AIRecruitingAssistantPage() {
  // Rotating medical specialties
  const phrases = [
    "Doctors",
    "Nurses",
    "Specialists",
    "Surgeons",
    "Clinicians",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 3-step AI Recruiting Intake Flow
  const steps = [
    {
      title: "Step 1: Role Information",
      fields: [
        {
          key: "role",
          text: "What medical role are you hiring for?",
          icon: Stethoscope,
        },
        {
          key: "requirements",
          text: "Add the key requirements (experience, certifications, specialty):",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Step 2: Job Details",
      fields: [
        {
          key: "salaryRange",
          text: "Salary range or compensation details:",
          icon: DollarSign,
        },
        {
          key: "location",
          text: "Location of the hospital/clinic or remote:",
          icon: UserSearch,
        },
      ],
    },
    {
      title: "Step 3: Organization Info",
      fields: [
        {
          key: "facility",
          text: "Your hospital, clinic, or medical group name:",
          icon: Sparkles,
        },
        {
          key: "email",
          text: "Business email to receive candidate matches:",
          icon: Mail,
        },
      ],
    },
  ];

  const [answers, setAnswers] = useState({
    role: "",
    requirements: "",
    salaryRange: "",
    location: "",
    facility: "",
    email: "",
  });

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const [aiGenerated, setAiGenerated] = useState(null);
  const [showAIModal, setShowAIModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [showPricing, setShowPricing] = useState(false);

  // ➤ AI Job Generation
  const handleGenerateAI = async () => {
    if (
      !answers.role ||
      !answers.salaryRange ||
      !answers.location ||
      !answers.facility ||
      !answers.email
    ) {
      alert("Please complete all required fields.");
      return;
    }

    setAiLoading(true);

    try {
      const res = await fetch("https://cohlth.ai/api/ai/generateJob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      const data = await res.json();
      setAiGenerated(data);
      setShowAIModal(true);
    } catch (err) {
      console.error(err);
      alert("AI generation failed.");
    } finally {
      setAiLoading(false);
    }
  };

  // ➤ Publish Job Posting
  const handlePublish = async () => {
    if (!answers.email) return alert("Email required.");

    setLoading(true);

    try {
      const res = await fetch(
        `https://cohlth.ai/api/recruiting/postjob/${answers.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answers),
        }
      );

      if (!res.ok) throw new Error("Failed posting job.");

      setShowPricing(true);
      setShowAIModal(false);
    } catch (err) {
      console.log(err);
      alert("Error posting job.");
    } finally {
      setLoading(false);
    }
  };

  // Pricing screen
  if (showPricing)
    return (
      <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-6 py-20 text-center">
        <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Job Posted Successfully 🎉</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
          We’ll send AI-matched candidates to: <strong>{answers.email}</strong>
        </p>
        <TopFunnelPricing />
      </div>
    );

  const currentStep = steps[current];

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* 🔵 HERO */}
      <section className="py-16 text-center px-6">
        <h1
          className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-10 
        bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight"
        >
          AI Recruiting Engine for <br />
          <span
            className={`transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[index]}
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Cohlth uses advanced AI to source, pre-screen, and match qualified
          medical professionals — reducing hiring time by up to 80%.
        </p>
      </section>

      {/* 📝 FORM */}
      <main className="pb-20 px-6 max-w-3xl mx-auto">
        <div className="p-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-2xl font-bold mb-6">{currentStep.title}</h2>

          {currentStep.fields.map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.key} className="mb-8">
                <label className="block font-semibold mb-2">
                  <Icon className="inline w-5 h-5 mr-2 text-blue-500" />
                  {field.text}
                </label>

                <textarea
                  rows={2}
                  value={answers[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  placeholder="Type here..."
                  className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
            );
          })}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {current > 0 && (
              <Button onClick={() => setCurrent(current - 1)} variant="outline">
                ← Back
              </Button>
            )}
            {current < steps.length - 1 ? (
              <Button onClick={() => setCurrent(current + 1)} variant="primary">
                Next →
              </Button>
            ) : (
              <Button
                onClick={handleGenerateAI}
                variant="primary"
                disabled={aiLoading}
                className="w-full"
              >
                <Bot className="w-4 h-4 mr-2" />
                {aiLoading ? "Generating Job..." : "Generate AI Job Description ✨"}
              </Button>
            )}
          </div>
        </div>
      </main>

      {/* ✨ AI Preview Modal */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full relative">
            <button
              onClick={() => setShowAIModal(false)}
              className="absolute right-4 top-4"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="text-center mb-6">
              <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-2" />
              <h2 className="text-2xl font-bold">AI-Generated Job Posting</h2>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              {aiGenerated && <AIRecruitingPreview data={aiGenerated} />}
            </div>

            <CandidateMiniGallery />

            <div className="mt-6 flex gap-3">
              <Button onClick={() => setShowAIModal(false)} variant="outline">
                Close
              </Button>
              <Button onClick={handlePublish} variant="primary" disabled={loading}>
                {loading ? "Posting..." : "Post Job 🚀"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
