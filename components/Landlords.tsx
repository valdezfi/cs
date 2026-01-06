"use client";

import { Home, ShieldCheck, Activity, Headset } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Home,
    title: "Property Compliance Monitoring",
    description:
      "Track tenant operations and property use to ensure all cannabis-related activities comply with local and state regulations.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Mitigation",
    description:
      "Identify and manage potential risks from tenants’ cannabis operations, including insurance, licensing, and legal requirements.",
  },
  {
    icon: Activity,
    title: "Operational Oversight",
    description:
      "Monitor facility usage, maintenance schedules, and tenant reporting to maintain safe and compliant properties.",
  },
  {
    icon: Headset,
    title: "Tenant Support & Guidance",
    description:
      "Provide tenants with guidance on compliance best practices, audits, and regulatory requirements, while maintaining landlord oversight.",
  },
];

export default function LandlordsUseCOfuncion() {
  return (
    <section className="py-24 bg-green-50 dark:bg-green-900 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-100 mb-6">
          How Landlords & Property Managers Use COfuncion
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-green-800 dark:text-green-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          COfuncion helps property managers and landlords monitor tenant operations, maintain compliance, mitigate risks, 
          and ensure safe and legal property usage across cannabis facilities.
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
