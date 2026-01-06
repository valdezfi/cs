"use client";

export default function ReportingInsights() {
  const insights = [
    {
      title: "Waste Pickup Performance",
      description:
        "Track which cannabis waste pickups are executed most efficiently. Identify bottlenecks and ensure timely, compliant disposals across all facilities."
    },
    {
      title: "Team & Operator Insights",
      description:
        "Analyze individual operator performance—completions, timeliness, and compliance adherence—to optimize workflows and reduce risk."
    },
    // {
    //   title: "Facility & Route Analytics",
    //   description:
    //     "Monitor facility operations and waste transport routes. Optimize schedules to improve efficiency, reduce costs, and maintain regulatory compliance."
    // },
    {
      title: "Compliance Dashboard",
      description:
        "See real-time manifests, destruction logs, and audit-ready documentation. Ensure every step of the cannabis waste process meets regulatory standards."
    },
    // {
    //   title: "AI-Driven Recommendations",
    //   description:
    //     "Receive actionable suggestions powered by AI to streamline waste operations, improve efficiency, and maintain full compliance across your cannabis facilities."
    // },
  ];

  return (
    <section className="py-20 px-6 bg-green-50 dark:bg-green-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-4">
          Cannabis Waste Reporting & Insights
        </h2>
        <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 font-light max-w-3xl mx-auto">
          Make data-driven decisions for your cannabis waste operations. Our platform provides clear, actionable intelligence on operators, facilities, routes, and compliance—ensuring smooth, audit-ready operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {insights.map((item, index) => (
          <div
            key={index}
            className="group w-full max-w-sm p-8 rounded-3xl bg-gradient-to-tr from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
          >
            <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100 group-hover:text-green-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-green-800 dark:text-green-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
