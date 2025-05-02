import type { MetadataRoute } from "next";

const BASE_URL = "https://www.bellete.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths
  const staticPaths = [
    "home",
    "contact",
    "blog",         // Base blog page
    "allblogs",     // Blog listing page          // P2P trading page
    "wallet",       // Wallet management
    "forgotpassword",
    "signup",
    "login",     // Security settings
    "profile",      // User profile page
    "terms",        // Terms of Use
    "privacy",      // Privacy Policy
    "terms", 
    "ghana",
    "usa",
    "forgotpassword",
    "cryptocalculator",
    "blog",
    "whalebot",

  ];

  // Simulated dynamic blog slugs (replace with DB/API fetch)
  const blogSlugs = ["Best-Stablecoins"]; // Replace with actual dynamic slugs from DB
  const dynamicPaths = blogSlugs.map((slug) => `blog/${slug}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
