import type { Metadata } from "next";
import Image from "next/image";

// Your blog object
export const haffiliateBlog = {
  slug: "100-day-affiliate-marketing",
  title: "100 Day Affiliate Marketing Challenge",
  snippet: "Learn how to grow your affiliate marketing in 100 days.",
  imageUrl: "/images/blogs/affiliate-100.jpg",
  imageAlt: "Affiliate marketing image",
  content: (
    <>
      <p>
        Affiliate marketing is one of the fastest-growing opportunities for
        creators, influencers, and entrepreneurs in 2025.
      </p>
      <h2>Why $100 a Day Matters</h2>
      <p>
        Making $100 a day equals $3,000 a month—enough to pay rent, invest in
        growth, or replace a part-time job.
      </p>
      <h2>How Affiliate Marketing Works</h2>
      <p>
        Promote a product, someone buys through your link, and you earn a
        commission.
      </p>
    </>
  ),
  author: "GrandeApp Editorial Team",
  date: "2025-09-26",
  meta: {
    title: "100 Day Affiliate Marketing Challenge",
    description: "Learn how to grow your affiliate marketing in 100 days.",
    keywords: ["affiliate marketing", "100 day challenge", "GrandeApp"],
  },
  alternates: {
    canonical: "https://grandeapp.com/blog/100-day-affiliate-marketing",
  },
  openGraph: {
    title: "100 Day Affiliate Marketing Challenge",
    description: "Learn how to grow your affiliate marketing in 100 days.",
    url: "https://grandeapp.com/blog/100-day-affiliate-marketing",
    images: [
      {
        url: "https://grandeapp.com/images/blogs/affiliate-100.jpg",
        width: 1200,
        height: 630,
        alt: "Affiliate marketing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Day Affiliate Marketing Challenge",
    description: "Learn how to grow your affiliate marketing in 100 days.",
    images: ["https://grandeapp.com/images/blogs/affiliate-100.jpg"],
  },
  robots: { index: true, follow: true },
};

// Metadata for Next.js
// export const metadata: Metadata = {
//   title: haffiliateBlog.meta.title,
//   description: haffiliateBlog.meta.description,
//   keywords: haffiliateBlog.meta.keywords,
//   alternates: haffiliateBlog.alternates,
//   openGraph: haffiliateBlog.openGraph,
//   twitter: haffiliateBlog.twitter,
//   robots: haffiliateBlog.robots,
// };

// React component for the page
export default function AffiliateBlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 prose prose-lg">
      <h1 className="text-4xl font-bold mb-6">{haffiliateBlog.title}</h1>
      <p className="mb-6 text-lg">{haffiliateBlog.snippet}</p>

      <Image
        src={haffiliateBlog.imageUrl}
        alt={haffiliateBlog.imageAlt || haffiliateBlog.title}
        width={800}
        height={450}
        className="rounded-xl shadow mb-8"
      />

      <article className="space-y-6">{haffiliateBlog.content}</article>

      <footer className="mt-10 text-sm text-gray-500">
        <p>
          <em>
            By {haffiliateBlog.author} · Published on{" "}
            {new Date(haffiliateBlog.date).toDateString()}
          </em>
        </p>
      </footer>
    </main>
  );
}
