"use client";

import { Truck, MapPin, ShieldCheck, Headset } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Truck,
    title: "Efficient Pickup Scheduling",
    description:
      "Coordinate cannabis waste pickups for multiple dispensaries or facilities with precision, ensuring timely and compliant collection.",
  },
  {
    icon: MapPin,
    title: "Route Optimization",
    description:
      "Plan and manage the most efficient routes to reduce travel time, fuel costs, and ensure reliable service across all locations.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    description:
      "Track chain-of-custody, regulatory documentation, and safety protocols to maintain full compliance and minimize risk.",
  },
  {
    icon: Headset,
    title: "Support & Customer Service",
    description:
      "Dedicated support teams assist with scheduling, audits, regulatory questions, and workflow guidance for haulers and clients.",
  },
];

export default function WasteHaulersUseCOfuncion() {
  return (
    <section className="py-24 bg-green-50 dark:bg-green-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-6">
          How Cannabis Waste Haulers Use COfuncion
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion helps licensed cannabis waste haulers streamline pickups, maintain compliance, optimize routes, 
          and provide top-tier service to dispensaries and cultivators.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-gradient-to-tr from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white mb-6 text-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100 group-hover:text-green-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-green-800 dark:text-green-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/signup"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
