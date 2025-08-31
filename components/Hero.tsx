"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const phrases = [
    "your Campaign",
    "with Influencers",
    "with UGC Creators",
    "with Podcasters",
    "your Marketing Strategy",
    "your ADs",
    "with Ai"

  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // fade in
      }, 500); // smoother fade duration
      return () => clearTimeout(timeout);
    }, 3000); // slightly longer rotation for readability

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1
      className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
  bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent tracking-tight"
>
  THE ONE PLACE TO BUILD: <br />
  <span

          className={`inline-block transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </span>
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Easily launch campaigns, collaborate with influencers, UGC creators, and podcasters, 
        and grow your brand with AI-powered guidance.
      </p>

      <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Launch a Campaign
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
