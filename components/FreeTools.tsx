"use client";
import Link from "next/link";

const freeTools = [
  {
    name: "AI Bio Maker",
    description: "Generate fun & personalized Instagram bios in seconds.",
    href: "/tools/ig-bio-maker",
  },
//   {
//     name: "Hashtag Finder",
//     description: "Discover trending hashtags for your posts.",
//     href: "/tools/hashtag-finder",
//   },
//   {
//     name: "Content Planner",
//     description: "Organize your content and post schedule easily.",
//     href: "/tools/content-planner",
//   },
//   {
//     name: "Analytics Dashboard",
//     description: "Track engagement, growth, and performance of your posts.",
//     href: "/tools/analytics-dashboard",
//   },
];

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-4xl font-extrabold text-center mb-10">Free Automated Social Media Tools</h1>
      <h2 className="text-4xl font-extrabold text-center mb-10">The best social media tools for marketing that are free to use!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {freeTools.map((tool) => (
          <Link key={tool.name} href={tool.href} className="group">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 cursor-pointer">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">
                {tool.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
