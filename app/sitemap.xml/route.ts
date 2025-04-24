// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

const BASE_URL = "https://www.bellete.com";

const staticPaths = [
  "Home",        
  "Contact",
  "Blog",
  "Login",
  "Signup"
];

async function getDynamicBlogPaths() {
  // Replace with actual blog slugs from your database or API
  const blogSlugs = ["bitcoin-loan",];

  return blogSlugs.map((slug) => `blog/${slug}`);
}

export async function GET() {
  const dynamicPaths = await getDynamicBlogPaths();

  const allPaths = [...staticPaths, ...dynamicPaths];

  const urls = allPaths.map((path) => {
    return `
  <url>
    <loc>${BASE_URL}/${path}</loc>
    <priority>0.7</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
