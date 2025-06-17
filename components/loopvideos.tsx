import React, { useState } from "react";

const videos = [
  {
    title: "Influencer Spotlight",
    description: "See how creators generate results for beauty, fashion, and tech brands.",
    videoSrc: "/videos/influencer1.mp4",
    thumbnail: "/videos/thumbnails/influencer1.jpg",
  },
  {
    title: "UGC That Converts",
    description: "Watch high-converting content built by micro creators and UGC pros.",
    videoSrc: "/videos/influencer2.mp4",
    thumbnail: "/videos/thumbnails/influencer2.jpg",
  },
  {
    title: "Podcast Partnerships",
    description: "See how podcast creators integrate brand promotions authentically.",
    videoSrc: "/videos/influencer3.mp4",
    thumbnail: "/videos/thumbnails/influencer3.jpg",
  },
];

const InfluencerShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="container mx-auto mt-12 px-4 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg transition-colors duration-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          See Creators in Action
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
          Real influencers. Real content. Real results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => setActiveVideo(video.videoSrc)}
            className="relative cursor-pointer bg-white dark:bg-black rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex-shrink-0 snap-center w-full max-w-sm"
          >
            {/* Thumbnail image */}
            <img
              src={video.thumbnail}
              alt={`${video.title} thumbnail`}
              className="w-full h-64 object-cover rounded-t-xl"
              loading="lazy"
            />

            {/* Play button overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-16 h-16 text-white opacity-90 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="42" cy="42" r="42" fill="black" opacity="0.5" />
                <polygon points="33,25 60,42 33,59" />
              </svg>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="max-w-4xl w-full rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              muted={false}
              className="w-full rounded-xl"
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default InfluencerShowcase;
