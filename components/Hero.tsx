"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const phrases = [
    "Dispensaries",
    "Cultivators",
    "Processors",
    "Cannabis Brands",
    "Operators",
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
        bg-gradient-to-r from-green-800 via-green-500 to-green-300 bg-clip-text text-transparent tracking-tight
        drop-shadow-xl"
      >
        Intelligent Cannabis Compliance for <br />
        <span
          className={`block transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </span>
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        We coordinate licensed cannabis waste removal, provide audit-ready documentation, 
        and ensure full compliance — keeping your operations safe and efficient.
      </p>

      <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-green-900 text-white dark:bg-green-200 dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-green-800 dark:hover:bg-green-300 transition duration-300"
        >
          Get Compliant Today
        </Link>
      </div>
    </section>
  );
}
