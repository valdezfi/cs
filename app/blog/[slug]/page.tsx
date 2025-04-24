import { getBlogBySlug } from "lib/blogs"; // Assume this is the function that fetches blog data based on the slug
import { notFound } from "next/navigation"; // This is for handling "Not Found" cases
import type { Metadata } from "next"; // Type for metadata

// Dynamic SEO meta function to generate dynamic metadata for the blog page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Get blog data based on the slug parameter
  const blog = await getBlogBySlug(params.slug);

  // If no blog is found, return default "not found" metadata
  if (!blog) {
    return {
      title: "Blog not found",
      description: "This blog post could not be found.",
    };
  }

  // If blog is found, return metadata for SEO optimization
  return {
    title: blog.title,
    description: blog.snippet,
    openGraph: {
      title: blog.title,
      description: blog.snippet,
      images: [blog.imageUrl], // OpenGraph image for sharing
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.snippet,
      images: [blog.imageUrl], // Twitter image for sharing
    },
  };
}

// Main component to render the blog page content
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Get the blog post by its slug from the function
  const blog = await getBlogBySlug(params.slug);

  // If no blog is found, show the "not found" page
  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Blog title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {blog.title}
      </h1>

      {/* Blog image */}
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full rounded-xl shadow mb-8"
      />

      {/* Blog snippet or introductory text */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        {blog.snippet}
      </p>

      {/* Render blog content (dangerously setting HTML here for rich content) */}
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: blog.content ?? "<p>No content available at the moment. Please check back later.</p>",
        }}
      />
    </article>
  );
}

// Static Params function to generate the available slugs for the blog page
export async function generateStaticParams() {
  // Assume these slugs come from your blog database or data source
  const allSlugs = ["bitcoin-loan", "ethereum-loans", "stablecoin-loans"];
  
  // Generate static params for each blog slug
  return allSlugs.map((slug) => ({ slug }));
}
