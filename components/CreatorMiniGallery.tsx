"use client";

import { useEffect, useState } from "react";

export default function CreatorMiniGallery() {
  const [creators, setCreators] = useState<any[]>([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const res = await fetch("/g/creator/random");
        const data = await res.json();
        if (data.success) setCreators(data.creators.slice(0, 12)); // smaller set
      } catch (error) {
        console.error("Failed to fetch creators:", error);
      }
    };
    fetchCreators();
  }, []);

  if (!creators.length) return null;

  return (
    <div className="w-full mt-12 mb-10">
      <h3 className="text-center text-gray-700 dark:text-gray-300 font-semibold mb-6 text-sm uppercase tracking-wide">
        Popular Creators Using GrandeApp
      </h3>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-16 sm:w-20"
          >
            <img
              src={creator.imageUrl}
              alt={creator.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300"
              loading="lazy"
            />
            <p className="text-[10px] sm:text-xs mt-2 text-gray-700 dark:text-gray-300 truncate w-16">
              {creator.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
