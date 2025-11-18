import {
  Stethoscope,
  Bot,
  FileCheck,
  Users,
  Headset,
} from "lucide-react";

export default function ProductExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-black px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          How COhlth Works
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Cohlth uses advanced AI to simplify healthcare recruiting. From generating
          job descriptions to screening and matching talent, everything happens in
          seconds—not weeks.
        </p>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Bot className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. Generate With AI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instantly create complete job descriptions with responsibilities,
              qualifications, and compensation benchmarks.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <FileCheck className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. AI Pre-Screening
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Candidates are automatically evaluated based on specialty, credentials,
              experience, and organizational fit.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Users className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Match & Hire Faster
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get a shortlist of verified healthcare professionals—doctors, nurses,
              specialists—ready for interviews.
            </p>
          </div>

          {/* Step 4: Account Manager */}
          <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
            <Headset className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              4. Dedicated Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A dedicated account manager guides you through every step, ensuring
              smooth hiring, onboarding, and ongoing support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
