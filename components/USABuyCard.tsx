import React from "react";

const USCardbuy = ({ icon: Icon, title, description, loanlink }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 group">
      <div className="mb-4 text-gray-500 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        <Icon size={40} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-6">
          {description}
        </p>
      )}
      <a
        href={loanlink}
        className="mt-auto px-6 py-2 rounded-md bg-white text-black text-sm font-medium
           hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
           transition-colors duration-300 inline-block"
        aria-label={`Try the AI tool for ${title}`}
      >
        Try The AI
      </a>
    </div>
  );
};

export default USCardbuy;
