import bitcoinLoan from "./blogs/bitcoin-loan";

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
