"use client";

import { useState } from "react";

export default function AudienceInsightsTool() {
  const [audienceInput, setAudienceInput] = useState("");
  const [insights, setInsights] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  // Mock AI call – replace with actual API call
  const generateInsights = async () => {
    if (!audienceInput.trim()) return;
    setLoading(true);
    setInsights(null);

    // Simulate API response
    setTimeout(() => {
      setInsights([
        "Target audience: 18–34-year-olds in the U.S. who watch OTT sci-fi content.",
        "Recommendation: Collaborate with micro-influencers popular in sci-fi fan communities.",
        "Recommendation: Schedule posts during peak evening hours for maximum engagement.",
        "Recommendation: Focus on OTT platforms with high sci-fi engagement for ad placements.",
        "Recommendation: Use short-form video previews to drive click-throughs to your campaign."
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Audience Insights Tool
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
          Enter your target audience or campaign details and get AI-powered insights
          to optimize your OTT campaigns. No charts, just clear, actionable recommendations.
        </p>
      </div>

      {/* Input Field */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Describe your target audience or campaign"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={audienceInput}
          onChange={(e) => setAudienceInput(e.target.value)}
        />
        <button
          onClick={generateInsights}
          className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate Insights"}
        </button>
      </div>

      {/* Insights Output */}
      {insights && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md text-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            AI Recommendations:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {insights.map((insight, idx) => (
              <li key={idx}>{insight}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
