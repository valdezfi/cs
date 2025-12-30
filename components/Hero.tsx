"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const phrases = [
    "OTT Advertisers",
        "Social Media Advertisers",

    "Brands",
    "Agencies",
    "Marketers",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1
        className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
        bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
        drop-shadow-xl"
      >
        AI Ad Engine for <br />
        <span
          className={`block transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </span>
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        COfuncion.com leverages AI to plan, optimize, and manage OTT ad campaigns —
        increasing reach, engagement, and conversions on OTT.
      </p>

      <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Start Your OTT Campaign
        </Link>
    
      </div>
    </section>
  );
}
