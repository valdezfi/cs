import React from "react";

const featuredCreators = [
  { name: "CharlieG", logo: "/creators/CharlieG.jpg", url: "/creators/CharlieG" },
  { name: "Isabella", logo: "/creators/Isabella.jpg", url: "/creators/Isabella" },
  { name: "Delaurentisgeena", logo: "/creators/Delaurentisgeena.jpg", url: "/creators/Delaurentisgeena" },
  { name: "Alexandracallender", logo: "/creators/Alexandracallender.jpg", url: "/creators/Alexandracallender" },
  { name: "CelenaMarie", logo: "/creators/CelenaMarie.jpg", url: "/creators/CelenaMarie" },
];

const CreatorSpotlight = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-center">
      {/* Title with gradient */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        Creator Spotlight
      </h2>

      {/* Grid */}
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto">
        {featuredCreators.map((creator, idx) => (
          <a
            key={idx}
            href={creator.url}
            className="group flex flex-col items-center justify-center h-36 w-44 sm:h-40 sm:w-56 
            bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10
            rounded-2xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={creator.logo}
              alt={creator.name}
              className="h-20 w-20 rounded-full object-cover mb-3 grayscale group-hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-purple-500">
              {creator.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CreatorSpotlight;
