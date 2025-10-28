import React from "react";
import USCardbuy from "./USABuyCard";
import {
  Users,
  Briefcase,
  Camera,
 
} from "lucide-react"; // Lucide icons
// import Flag from "react-world-flags";

const USAb = () => {
  const features = [
  {
    icon: Briefcase,
    title: "Brands",
    description: "Generate campaign ideas and streamline creator outreach with AI.",
    loanlink: "https://app.grandeapp.com/",
  },
  {
    icon: Users,
    title: "Agencies",
    description: "Automate reporting, client briefs, and influencer scouting.",
    loanlink: "https://app.grandeapp.com/",
  },
  // {
  //   icon: Share2,
  //   title: "Social Media Managers",
  //   description: "Plan content, predict trends, and optimize posts with AI.",
  //   loanlink: "/signup",
  // },
  {
    icon: Camera,
    title: "Creators",
    description: "Boost engagement with AI-recommended hooks and captions.",
    loanlink: "https://c.grandeapp.com/",
  },
  // {
  //   icon: DollarSign,
  //   title: "UGC Creators",
  //   description: "Quickly script and edit product videos using AI templates.",
  //   loanlink: "/signup",
  // },
  // {
  //   icon: Mic,
  //   title: "Podcasters",
  //   description: "Auto-generate episode summaries, clips, and outreach emails.",
  //   loanlink: "/signup",
  // },
];


  return (
    <section className="container mx-auto mt-12 px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Experience AI-Powered Growth
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light">
            Unlock your full potential with our AI tools built for creators, marketers, and brands. Work smarter, reach further, and grow faster—with fewer errors.
          </p>
        </div>
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
