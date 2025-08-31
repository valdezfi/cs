import Link from "next/link";

export default function AiHero() {
  return (
    <section className="text-center my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
     <h1   className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
  bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
  drop-shadow-xl animate-pulse"
>
  Ai Marketing CoPilot
</h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Move faster, create smarter. Instantly generate campaign ideas, influencer scripts, and ready-to-launch strategies.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/brand"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Start Using AI
        </Link>
      </div>
    </section>
  );
}

