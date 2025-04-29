import bitcoinLoan from "./blogs/Best-Stablecoins";

const blogs = [bitcoinLoan];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllBlogSlugs() {
  return blogs.map((blog) => blog.slug);
}

export function getAllBlogs() {
  return blogs;
}
