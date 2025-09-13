// "use client";
// import Link from "next/link";

// const freeTools = [
//   {
//     name: "AI Bio Maker",
//     description: "Generate fun & personalized Instagram bios in seconds.",
//     href: "/tools/ig-bio-maker",
//   },
// //   {
// //     name: "Hashtag Finder",
// //     description: "Discover trending hashtags for your posts.",
// //     href: "/tools/hashtag-finder",
// //   },
// //   {
// //     name: "Content Planner",
// //     description: "Organize your content and post schedule easily.",
// //     href: "/tools/content-planner",
// //   },
// //   {
// //     name: "Analytics Dashboard",
// //     description: "Track engagement, growth, and performance of your posts.",
// //     href: "/tools/analytics-dashboard",
// //   },
// ];

// export default function FreeToolsPage() {
//   return (
//     <div className="min-h-screen p-8 bg-white dark:bg-black text-gray-900 dark:text-white">
//       <h1 className="text-4xl font-extrabold text-center mb-10">Free Automated Social Media Tools</h1>
//       <h3 className="text-2xl font-extrabold text-center mb-10">The best social media tools for marketing that are free to use!</h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {freeTools.map((tool) => (
//           <Link key={tool.name} href={tool.href} className="group">
//             <div className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 cursor-pointer">
//               <h2 className="text-xl text-center font-bold mb-2 group-hover:text-blue-500 transition">
//                 {tool.name}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import { Sparkles, DollarSign, BarChart3, Hash } from "lucide-react";

const freeTools = [
  {
    name: "AI IG Bio Maker",
    description: "Generate fun & personalized Instagram bios in seconds.",
    href: "/ig-bio-maker",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-600",
  }
];

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-16 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">Free Social Media Tools</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          The best social media tools for marketing that are free to use!
        </p>
      </section>

      {/* Tools Grid */}
      <main className="pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {freeTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.name} href={tool.href} className="group">
                <div className="p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 transition text-center cursor-pointer">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${tool.color}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{tool.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
