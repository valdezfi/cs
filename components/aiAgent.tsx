"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Sparkles,
  Mail,
  Bot,
  DollarSign,
  ClipboardList,
  MapPin,
  BedDouble,
  Bath,
  X,
} from "lucide-react";

import Button from "../components/ui/button/Button";
import AIRecruitingPreview from "components/AIRecruitingPreview"; // will render AI description
import TopFunnelPricing from "components/TopFunnelPricing";

export default function AIRealEstateListingAssistant() {
  // Rotating phrases for hero
  const phrases = [
    "Homes",
    "Apartments",
    "Investment Properties",
    "Condos",
    "Luxury Estates",
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

  // 3-step intake for seller/agent listing
  const steps = [
    {
      title: "Step 1: Property Information",
      fields: [
        {
          key: "propertyType",
          text: "What type of property are you listing? (House, apartment, condo, land, etc.)",
          icon: Home,
        },
        {
          key: "description",
          text: "Describe the property (condition, upgrades, special features):",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Step 2: Property Details",
      fields: [
        {
          key: "price",
          text: "What is the listing price?",
          icon: DollarSign,
        },
        {
          key: "location",
          text: "Where is the property located? (City, area, country)",
          icon: MapPin,
        },
        {
          key: "bedrooms",
          text: "Bedrooms:",
          icon: BedDouble,
        },
        {
          key: "bathrooms",
          text: "Bathrooms:",
          icon: Bath,
        },
        {
          key: "sqft",
          text: "Square footage (approx):",
          icon: Bath,
        },
      ],
    },
    {
      title: "Step 3: Seller / Agent Info",
      fields: [
        {
          key: "sellerName",
          text: "Your name or agency name:",
          icon: Home,
        },
        {
          key: "email",
          text: "Email to receive AI listing & leads:",
          icon: Mail,
        },
      ],
    },
  ];

  // State
  const [answers, setAnswers] = useState({
    propertyType: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    sellerName: "",
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

  // ➤ Generate Listing with AI
  const handleGenerateAI = async () => {
    if (!answers.propertyType || !answers.price || !answers.location || !answers.email) {
      alert("Please complete all required fields.");
      return;
    }

    setAiLoading(true);

    try {
      const res = await fetch("https://coagentes.com/api/ai/generateListing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      const data = await res.json();
      setAiGenerated(data);
      setShowAIModal(true);
    } catch (err) {
      console.error(err);
      alert("AI listing generation failed.");
    } finally {
      setAiLoading(false);
    }
  };

  // ➤ Publish Listing (send to backend)
  const handlePublish = async () => {
    if (!answers.email) return alert("Email required.");

    setLoading(true);

    try {
      const res = await fetch(
        `https://coagentes.com/api/listings/post/${answers.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answers),
        }
      );

      if (!res.ok) throw new Error("Failed publishing listing.");

      setShowPricing(true);
      setShowAIModal(false);
    } catch (err) {
      console.log(err);
      alert("Error publishing listing.");
    } finally {
      setLoading(false);
    }
  };

  // Pricing success screen
  if (showPricing)
    return (
      <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-6 py-20 text-center">
        <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Listing Published Successfully 🎉</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
          Your AI-generated listing & buyer leads will be sent to:{" "}
          <strong>{answers.email}</strong>
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
          AI Listing Engine for <br />
          <span
            className={`transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[index]}
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          COagentes helps sellers and agents create professional property listings
          in seconds using advanced AI — optimized for global buyers across LATAM,
          GCC, Africa, USA, and more.
        </p>
      </section>

      {/* 📝 FORM SECTION */}
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
                {aiLoading ? "Generating Listing..." : "Generate AI Listing ✨"}
              </Button>
            )}
          </div>
        </div>
      </main>

      {/* ✨ AI PREVIEW MODAL */}
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
              <h2 className="text-2xl font-bold">AI-Generated Property Listing</h2>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              {aiGenerated && <AIRecruitingPreview data={aiGenerated} />}
            </div>

            <div className="mt-6 flex gap-3">
              <Button onClick={() => setShowAIModal(false)} variant="outline">
                Close
              </Button>
              <Button onClick={handlePublish} variant="primary" disabled={loading}>
                {loading ? "Publishing..." : "Publish Listing 🚀"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
