import { getBlogBySlug } from "lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.snippet,
    alternates: {
      canonical: `https://www.bellete.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.snippet,
      url: `https://www.bellete.com/blog/${blog.slug}`,
      images: [`https://www.bellete.com${blog.imageUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.snippet,
      images: [`https://www.bellete.com${blog.imageUrl}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.snippet,
            image: `https://www.bellete.com${blog.imageUrl}`,
            url: `https://www.bellete.com/blog/${blog.slug}`,
            datePublished: blog.date ?? new Date().toISOString(),
            author: {
              "@type": "Person",
              name: blog.author ?? "Bellete Editorial Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Bellete",
              logo: {
                "@type": "ImageObject",
                url: "https://www.bellete.com/logo.png",
              },
            },
          }),
        }}
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {blog.title}
      </h1>

      {/* Blog image */}
      <img
        src={blog.imageUrl}
        alt={blog.imageAlt || blog.title}
        className="w-full rounded-xl shadow mb-8"
      />

      {/* Intro */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        {blog.snippet}
      </p>

      {/* Main content */}
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html:
            blog.content ??
            "<p>No content available at the moment. Please check back later.</p>",
        }}
      />
    </article>
  );
}

// Generate static paths
export async function generateStaticParams() {
  const allSlugs = ["bitcoin-loan", "ethereum-loans", "stablecoin-loans"];

  return allSlugs.map((slug) => ({ slug }));
}
