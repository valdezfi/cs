import React from "react";

const featuredCreators = [
  { name: "CharlieG", logo: "/creators/CharlieG.jpg", url: "https://c.grandeapp.com/c/Charlie%20G" }, 
  { name: "Isabella", logo: "/creators/Isabella.jpg", url: "https://c.grandeapp.com/c/Isabella%20T%20A%20D2012" },
  { name: "Delaurentisgeena", logo: "/creators/Delaurentisgeena.jpg", url: "https://c.grandeapp.com/c/Delaurentisgeena" },
  { name: "Alexandracallender", logo: "/creators/Alexandracallender.jpg", url: "https://c.grandeapp.com/c/Alexandracallender7" },
  { name: "CelenaMarie", logo: "/creators/CelenaMarie.jpg", url: "https://c.grandeapp.com/c/Celena%20Marie" },
];

const DestacadosCreadores = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-white dark:bg-black text-center">
      {/* Título con gradiente */}
      <h2
        className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
        bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
        drop-shadow-xl animate-pulse"
      >
        Creadores Destacados
      </h2>

      {/* Fila desplazable en línea */}
      <div className="flex justify-center items-center gap-6 overflow-x-auto max-w-7xl mx-auto scrollbar-hide py-4">
        {featuredCreators.map((creator, idx) => (
          <a
            key={idx}
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            title={creator.name}
            className="group flex flex-col items-center justify-center h-36 w-32
            bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10
            rounded-2xl shadow-lg p-3 transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <img
              src={creator.logo}
              alt={creator.name}
              className="h-20 w-20 rounded-full object-cover mb-2
              grayscale group-hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-500 truncate w-full text-center">
              {creator.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DestacadosCreadores;
