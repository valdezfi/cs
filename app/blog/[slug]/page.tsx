import { getBlogBySlug } from "lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Head from 'next/head';

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
    title: blog.meta?.title || blog.title,
    description: blog.meta?.description || blog.snippet,
    keywords: blog.meta?.keywords || [],
    alternates: {
      canonical: `https://www.numerobook.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.meta?.title || blog.title,
      description: blog.meta?.description || blog.snippet,
      url: `https://www.numerobook.com/blog/${blog.slug}`,
      images: [`https://www.numerobook.com${blog.meta?.ogImage || blog.imageUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta?.title || blog.title,
      description: blog.meta?.description || blog.snippet,
      images: [`https://www.numerobook.com${blog.meta?.ogImage || blog.imageUrl}`],
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

  // Generate breadcrumb structured data
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.numerobook.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "allblogs",
      item: "https://www.numerobook.com/allblogs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: blog.title,
      item: `https://www.numerobook.com/blog/${blog.slug}`,
    },
  ];

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Render breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex space-x-2 text-sm text-gray-600 dark:text-gray-300">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <a href={crumb.item} className="hover:text-blue-500">
                    {crumb.name}
                  </a>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span>{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.snippet,
            image: `https://www.numerobook.com${blog.imageUrl}`,
            url: `https://www.numerobook.com/blog/${blog.slug}`,
            datePublished: blog.date ? new Date(blog.date).toISOString() : new Date().toISOString(),
            author: {
              "@type": "Person",
              name: blog.author ?? "Bellete Editorial Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Bellete",
              logo: {
                "@type": "ImageObject",
                url: "https://www.numerobook.com/logo.png",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: crumb.item,
              })),
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
  const allSlugs = ["bitcoin-loan", "ethereum-loans", "stablecoin-loans"]; // Add all the blog slugs here

  return allSlugs.map((slug) => ({ slug }));
}
