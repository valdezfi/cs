import Link from "next/link";

export default function AiHero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-8 md:px-16 lg:px-24 bg-white dark:bg-black">
      <h2
        className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10
        bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
        drop-shadow-xl animate-pulse"
      >
        AI Medical Recruiting Engine
      </h2>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
        Instantly generate job descriptions, pre-screen candidates, and match with qualified 
        medical professionals using advanced AI. Reduce time-to-hire and streamline your entire 
        healthcare recruiting workflow.
      </p>

      <div className="flex justify-center space-x-6">
        <Link
          href="/post-job"
          className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Post a Job with AI
        </Link>
      </div>
    </section>
  );
}
