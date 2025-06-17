"use client";

import Image from "next/image";
import creatorImage from "../public/creators/creators.png";

const Creator = () => {
  return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-7xl">
        <Image
          src={creatorImage}
          alt="Creator Economy"
          className="w-full h-auto object-cover rounded-2xl border-8 border-indigo-700"
          priority
          style={{ maxHeight: "850px" }}
        />
      </div>
  );
};

export default Creator;
