import React from "react";
import Link from "next/link";

const Whalebotc = ({ icon: Icon, title, loanlink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200 flex flex-col justify-center items-center space-y-4">
      <Icon size={34} />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>

      <div className="flex flex-col gap-4">
        <Link
          href={loanlink}
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 text-center"
        >
          Buy
        </Link>

       
      </div>
    </div>
  );
};

export default Whalebotc;
