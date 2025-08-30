"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const words = ["Influencers", "UGC Creators", "Podcasters", "Brands"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // rotates every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 
        bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight">
        THE ONE PLACE TO BUILD: <br />
        Your campaign with{" "}
        <span className="transition-opacity duration-700 ease-in-out">
          {words[index]}
        </span>
        . <br />Your marketing strategy.
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Post campaigns for social media with your AI copilot.
      </p>

      <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Launch A Campaign
        </Link>
        <Link
          href="/creatorpricing"
          className="border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300"
        >
          Join as an Influencer or UGC Creator
        </Link>
      </div>
    </section>
  );
}
