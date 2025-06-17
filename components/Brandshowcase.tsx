import React from "react";

const featuredBrands = [
  { name: "Nike", logo: "/brands/linkedin.png" },
  { name: "L'Oréal", logo: "/brands/apple.png" },
  { name: "Temu", logo: "/brands/Temulogo.png" },
  { name: "Disney", logo: "/brands/disney.png" },
  { name: "Glossier", logo: "/brands/glossier.webp" },
];

const BrandShowcase = () => {
  return (
    <section className="py-20 my-20 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-boldext-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
        Creators Trusted By Brands You Know
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {featuredBrands.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-20 w-44 sm:h-24 sm:w-52 bg-white dark:bg-black p-2"
          >
           <img
  src={brand.logo}
  alt={`${brand.name} logo`}
  className="max-h-20 max-w-[180px] object-contain grayscale hover:grayscale-0 transition duration-300 rounded-xl"
  loading="lazy"
/>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandShowcase;
