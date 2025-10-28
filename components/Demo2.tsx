"use client";

import React from "react";

type SupademoEmbedProps2 = {
  src?: string;
  title?: string;
  aspectRatio?: number;
  className?: string;
  heading?: string;
};

export default function SupademoEmbed({
  src = "https://app.supademo.com/embed/cmeytxutx9329v9kqsni4lwbq?embed_v=2&utm_source=embed",
  title = "",
  aspectRatio = 2.2117882117882117,
  className = "",
  heading = "",
}: SupademoEmbedProps2) {
  return (
    <section className="relative w-full text-center py-12 z-10">
       <h1
        className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12
        bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent tracking-tight
        drop-shadow-xl"
      >
        {heading}
      </h1>

      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 ${className}`}
        style={{
          boxSizing: "content-box",
          paddingTop: 40,
          paddingBottom: 40,
          aspectRatio,
        }}
      >
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="clipboard-write"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full z-10"
          style={{ border: 0 }}
        />
      </div>
    </section>
  );
}
