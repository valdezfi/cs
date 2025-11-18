import React from "react";
import USCardbuy from "./USABuyCard";
import {
  Users,
  Briefcase,
  Stethoscope,
} from "lucide-react";

const USAb = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Hospitals & Clinics",
      description:
        "Use AI to generate complete job descriptions, pre-screen candidates, and reduce your time-to-hire.",
      loanlink: "/post-job",
    },
    {
      icon: Users,
      title: "Recruiters & Medical Groups",
      description:
        "Automate sourcing, shortlist qualified professionals instantly, and streamline your entire hiring workflow.",
      loanlink: "/candidate-matching",
    },
    {
      icon: Stethoscope,
      title: "Medical Professionals",
      description:
        "Find the right opportunities faster with AI-recommended roles tailored to your specialty and experience.",
      loanlink: "/apply",
    },
  ];

  return (
    <section className="container mx-auto mt-12 px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Experience AI-Powered Medical Recruiting
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            AI-driven tools built for healthcare hiring. Streamline staffing, match with
            qualified professionals, and modernize your recruitment—faster and with less effort.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <USCardbuy key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USAb;
