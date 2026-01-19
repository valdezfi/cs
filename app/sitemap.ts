import type { MetadataRoute } from "next";

const BASE_URL = "https://www.co-i.xyz/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths
  const staticPaths = [
     "",              // Home page

    "allblogs",    
    "terms",        // Terms of Use
    "privacy",      // Privacy Policy
     


  ];

  const allPaths = [...staticPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
