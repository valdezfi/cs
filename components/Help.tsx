"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const investmentFocus = [
  {
    title: "Creator Economy",
    description:
      "Investing in platforms, marketplaces, and infrastructure empowering creators to build communities, businesses, and new digital experiences.",
  },
  {
    title: "Crypto Consumer",
    description:
      "Backing consumer-first crypto applications bringing digital ownership, payments, communities, and decentralized experiences to mainstream users.",
  },
  {
    title: "IoT Consumer",
    description:
      "Supporting intelligent connected products combining hardware, software, and data to transform everyday consumer experiences.",
  },
  {
    title: "AI Consumer Infrastructure",
    description:
      "Investing in AI-powered technologies that personalize, automate, and redefine how consumers interact with products and services.",
  },
];

const fundStrategy = [
  { label: "Investment Focus", value: "Consumer Technology" },
  { label: "Capital Allocation", value: "$50k – $2M" },
  { label: "Investment Stage", value: "Seed, Growth & Emerging Leaders" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const BlackcomLanding: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 overflow-hidden">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute top-[-140px] left-[-140px] w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute bottom-[-160px] right-[-160px] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto text-center z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-28"
        >
          <h1 className="font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-gray-900 dark:text-white mb-6">
            Investing In The Future
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            A venture capital firm investing in the next generation of consumer technology across the creator economy, crypto consumer, and intelligent connected devices.
          </p>

          <a
            href="mailto:info@co-i.org"
            className="inline-flex items-center gap-3 px-16 py-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Partner With Us
          </a>
        </motion.div>


        {/* Investment Focus */}
        <div ref={ref} className="mb-32">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900 dark:text-white">
            Investment Focus
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >

            {investmentFocus.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="p-10 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-lg shadow-xl border border-gray-200/30 dark:border-white/10"
              >

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>


        {/* Fund Strategy */}
        <div className="mb-32">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
            Investment Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {fundStrategy.map((item, idx) => (
              <div
                key={idx}
                className="p-10 rounded-3xl bg-white/70 dark:bg-white/5 border border-gray-200/30 dark:border-white/10 backdrop-blur-lg"
              >

                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
                  {item.label}
                </p>

                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-16 rounded-3xl backdrop-blur-xl border border-white/10">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Building The Future Of Consumer Technology
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Blackcom partners with visionary founders creating transformative companies across creators, crypto-native consumer experiences, AI, and connected technology.
          </p>

          <a
            href="mailto:info@co-i.org"
            className="inline-flex items-center gap-3 px-16 py-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contact Blackcom
          </a>

        </div>

      </div>

    </section>
  );
};

export default BlackcomLanding;