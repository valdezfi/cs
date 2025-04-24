import React from "react";
import Link from "next/link";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  snippet: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, snippet, href }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{snippet}</p>
        <Link
          href={href}
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
