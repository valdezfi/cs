"use client";

export default function ReportingInsights() {
  const insights = [
    {
      title: "Campaign Performance Overview",
      description:
        "See which campaigns are driving the highest engagement and conversions across all OTT platforms. Quickly identify winners and underperformers."
    },
    {
      title: "Audience Breakdown",
      description:
        "Understand your audience by age, gender, location, and content preferences. Tailor campaigns to reach the right viewers at the right time."
    },
    {
      title: "OTT Platform Insights",
      description:
        "Track which streaming platforms deliver the best reach and engagement. Optimize campaigns for maximum impact on each platform."
    },
    {
      title: "Influencer Effectiveness",
      description:
        "Measure individual influencer contributions—views, clicks, conversions—to ensure you invest in the most effective creators."
    },
    {
      title: "Actionable Recommendations",
      description:
        "Receive AI-driven suggestions on content type, posting schedule, and platform targeting to maximize ROI for every campaign."
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Reporting & Insights
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
          Make data-driven decisions for your OTT campaigns. Our Reporting & Insights tool provides clear, actionable intelligence across audiences, platforms, and influencers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {insights.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
