"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const phrases = [
    "Crypto Trading",
    "Blockchain Security",
    "DeFi Automation",
    "On-Chain Insights",
    "Smart Asset Management",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let fadeTimeout;

    const interval = setInterval(() => {
      setFade(false); // fade out

      fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // fade in next phrase
      }, 500);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1
        className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
        bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 bg-clip-text text-transparent tracking-tight
        drop-shadow-xl"
      >
        Building AI-Enabled <br />
        <span
          className={`block transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </span>
      </h1>

      <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Co‑Intelligence empowers teams to create AI-driven crypto and blockchain solutions, 
        automating trading, securing assets, and scaling smart financial products.
      </p>

      {/* Optional CTA */}
      {/* <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-orange-700 text-white dark:bg-orange-200 dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-orange-600 dark:hover:bg-orange-300 transition duration-300"
        >
          Get Started Today
        </Link>
      </div> */}
    </section>
  );
}
