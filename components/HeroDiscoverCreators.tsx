import Link from "next/link";

export default function HeroDiscoverCreators() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Discover Creators That Match Your Brand
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Search thousands of vetted UGC creators, podcasters, and influencers by audience, location, and niche. Grande uses AI to help brands find real voices that deliver real engagement.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Discover Creators
        </Link>
      </div>
    </section>
  );
}


