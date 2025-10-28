"use client";

import { useState } from "react";
// import { useSession } from "next-auth/react";
import {
  Sparkles,
  Link as LinkIcon,
  Package,
  Mail,
  Bot,
  DollarSign,
  X,
} from "lucide-react";
import Button from "../components/ui/button/Button";
import AICampaignPreview from "components/AICampaignPreview";
import CreatorMiniGallery from "components/CreatorMiniGallery";
import TopFunnelPricing from "components/TopFunnelPricing";

export default function AICampaignAssistantPage() {
  // const { data: session } = useSession();
  // const userEmail = session?.user?.email;

  // 🧩 3-Step Campaign Flow
  const steps = [
    {
      title: "Step 1: Tell Us About Your Product",
      fields: [
        { key: "productType", text: "Select your product or service type:", icon: Package },
        { key: "productDetails", text: "Add a short description or key details about your product:", icon: Package },
      ],
    },
    {
      title: "Step 2: Your Budget & Product Links",
      fields: [
        { key: "budget", text: "Enter your total campaign budget (USD):", icon: DollarSign },
        { key: "productWebsite", text: "Add your main product or company website link:", icon: LinkIcon },
        { key: "optionalLinks", text: "Add 1–2 extra links (e.g. shop, social media, or product pages):", icon: LinkIcon },
      ],
    },
    {
      title: "Step 3: Brand Info & Contact",
      fields: [
        { key: "brandName", text: "What’s your company or brand name?", icon: Sparkles },
        { key: "email", text: "Enter your business email to generate your campaign:", icon: Mail },
      ],
    },
  ];

  // ✅ Initialize state
  const [answers, setAnswers] = useState({
    productType: "",
    productDetails: "",
    budget: "",
    productWebsite: "",
    optionalLinks: "",
    brandName: "",
    email: "",
  });

  const [aiGenerated, setAiGenerated] = useState<any>(null);
  const [showAIModal, setShowAIModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const productOptions = [
    "Beauty & Skincare",
    "Health & Wellness",
    "Food & Beverage",
    "Fashion & Apparel",
    "Tech / App",
    "Home & Lifestyle",
    "Service-Based Business",
    "Other",
  ];

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  // 🧠 Generate with AI
  const handleGenerateAI = async () => {
    if (
      !answers.productType ||
      !answers.productDetails ||
      !answers.email ||
      !answers.brandName ||
      !answers.budget
    ) {
      alert("Please complete all required fields before generating your campaign plan.");
      return;
    }

    setAiLoading(true);

    try {
      const extraLinks = (answers.optionalLinks || "")
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 0);

      const res = await fetch("https://app.grandeapp.com/g/ai/aicampaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: answers.email ,
          brandName: answers.brandName,
          productType: answers.productType,
          productDetails: answers.productDetails,
          budget: answers.budget,
          productWebsite: answers.productWebsite || "",
          optionalProductDetails1: extraLinks[0] || "",
          optionalProductDetails2: extraLinks[1] || "",
          targetCountry: "United States",
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error("AI generation failed");

      setAiGenerated(data.data);
      setShowAIModal(true);
    } catch (err) {
      console.error("❌ AI generation error:", err);
      alert("AI generation failed. Try again later.");
    } finally {
      setAiLoading(false);
    }
  };

  // 🚀 Publish campaign → show pricing
  const handlePublish = async () => {
    const email = answers.email ;
    if (!email) return alert("Please provide your email before publishing");

    setLoading(true);
    try {
      const payload = {
        campaignName: `${answers.brandName || "Untitled Brand"} Campaign`,
        productType: answers.productType,
        productDetails: answers.productDetails,
        budget: answers.budget,
        productWebsite: answers.productWebsite,
        optionalLinks: answers.optionalLinks,
        email,
        readyToPost: "yes",
        startDate: new Date().toISOString().split("T")[0],
      };

    //   const res = await fetch(`/g/campaign/postcampaign/${email}`, {
          const res = await fetch(`https://app.grandeapp.com/g/api/campaign/postcampaign/${email}`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit campaign");

      // ✅ Instead of a separate thank-you screen, show pricing immediately
      setShowPricing(true);
      setShowAIModal(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ When user publishes → show pricing & thank you combo
  if (showPricing)
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center py-20 px-6">
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center w-full max-w-6xl">
          {/* 🎉 Left: Thank You Message */}
          <div className="flex-1 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-center shadow-md">
            <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">🎉 Campaign Published!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We’ll reach out at <strong>{answers.email}</strong> with updates and influencer matches.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Your campaign is live — now scale your growth by joining our partner plans below.
            </p>
                        <TopFunnelPricing />

          </div>
 s
        </div>
      </div>
    );

  const currentStep = steps[current];

  return (
    <div className="min-h-screen text-gray-900 dark:text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="py-16 text-center px-6">
          <h1  className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
  bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
  drop-shadow-xl animate-pulse"
>
          AI Campaign Assistant
        </h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
  Launch your next influencer, UGC, or affiliate campaign in 3 quick and easy steps.
</p>
      </section>

      {/* Form */}
      <main className="pb-20 px-6 w-full max-w-3xl mx-auto">
        <div className="p-10 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-center">
          <h2 className="text-2xl font-bold mb-6">{currentStep.title}</h2>

          {currentStep.fields.map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.key} className="mb-8 text-left">
                <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  <Icon className="inline w-5 h-5 mr-2 text-blue-500" />
                  {field.text}
                </label>

                {field.key === "productType" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {productOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleChange("productType", option)}
                        className={`p-2 rounded-lg border text-sm transition ${
                          answers.productType === option
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <textarea
                    rows={2}
                    value={answers[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder="Type your answer..."
                    className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 resize-none"
                  />
                )}
              </div>
            );
          })}

          {/* Navigation Buttons */}
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
                className="flex-1"
              >
                <Bot className="w-4 h-4 mr-2" />
                {aiLoading ? "Generating..." : "Generate Campaign ✨"}
              </Button>
            )}
          </div>
        </div>
      </main>

      {/* AI Preview Modal */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setShowAIModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-2" />
              <h2 className="text-2xl font-bold">✨ AI Generated Campaign Plan</h2>
            </div>

            <div className="text-left max-h-[60vh] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              {aiGenerated && <AICampaignPreview data={aiGenerated} />}
            </div>

            <CreatorMiniGallery />

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <Button onClick={() => setShowAIModal(false)} variant="outline" className="flex-1">
                Close
              </Button>
              <Button onClick={handlePublish} variant="primary" disabled={loading} className="flex-1">
                {loading ? "Publishing..." : "Publish This Campaign 🚀"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
