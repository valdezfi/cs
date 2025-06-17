import React from "react";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "lib/blogs"; // adjust the path if needed

const BlogMultiCard = () => {
  const blogs = getAllBlogs();

  return (
    <section className="container mx-auto mt-24 mb-24 px-4 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 font-light">
           Creator Economy Intelligent Engine
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                snippet={blog.snippet}
                imageUrl={blog.imageUrl}
                href={`/blog/${blog.slug}`} // dynamically build href from slug
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMultiCard;
