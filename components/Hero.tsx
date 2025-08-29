// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
//       <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
//       Ads and Social Content—Boosted by UGC Creators, Influencers, and Podcasters.      </h1>
//       <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
//   We connect brands with creators to run high-performing ads or grow organically on social media—powered by AI. 
//   Our AI Head of Marketing delivers top-tier marketing performance—without the six-figure salary or hassle of unreliable freelancers.
// </p>

//       <div className="flex justify-center space-x-6">
//         <Link
//           href="/signup"
//           className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
//         >
//           Start Your Campaign
//         </Link>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 bg-white dark:bg-black">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
Collab With UGC Creators And Influencers — made easier with AI.     </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-4xl mx-auto">
We help Brands and Agencies grow by running high-impact campaigns with top creators—Influencers, UGC, and Podcast Creators—powered by AI.
Whether you're launching high-performing paid ads or scaling organically, fuel your growth with an AI partner that manages and scales your marketing and creator campaigns—without the overhead. It’s your marketing co-pilot.

      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/pricing"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Launch A Campaign
        </Link>
        <Link
          href="/creatorpricing"
          className="border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300"
        >
         Join as a Influencer and UGC Creator
        </Link>
      </div>
    </section>
  );
}
