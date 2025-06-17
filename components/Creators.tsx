import React from "react";
import Section from "components/Section";

import Creator from "./ContentCreator"; // adjust the path based on your folder structure
const MyPage = () => {
  return (
    <Section
      leftHalf={<Creator />}
      rightHalf={
        <div className="flex flex-col justify-end">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            grande
          </h2>
          <p className="text-xl font-light text-gray-700 dark:text-gray-300">
            We help you connect and scale.
          </p>
        </div>
      }
    />
  );
};

export default MyPage;
