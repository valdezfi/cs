import Link from "next/link";

export default function HeroPodcaster() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Grow & Monetize Your Podcast with AI
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
        Grande helps podcasters get discovered by brands, attract sponsors, and promote their episodes with AI tools — all in one place.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/creatorpricing"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          I'm a Podcaster
        </Link>
      </div>
    </section>
  );
}
