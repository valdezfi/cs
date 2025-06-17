


import Link from "next/link";

export default function PredictableHero() {
  return (
    <section className="text-center my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1 className="text-3xl font-boldext-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
        The Grande Difference
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Industry Leading Expertise Led By AI. Predictable Performance.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/brand"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          For Brands
        </Link>
        <Link
          href="/creator"
          className="border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300"
        >
          For Creators
        </Link>
      </div>
    </section>
  );
}
