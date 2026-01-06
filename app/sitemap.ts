import type { MetadataRoute } from "next";

const BASE_URL = "https://cofuncion.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths
  const staticPaths = [
     "",              // Home page

    "allblogs",    
    "terms",        // Terms of Use
    "privacy",      // Privacy Policy
      "pricing",      // Privacy Policy
      "manage",      // Privacy Policy
      "faq",      // Privacy Policy
      "manufacturers",      // Privacy Policy
      "landlord",      // Privacy Policy
      "dispensaries",      // Privacy Policy
      "compliance",      // Privacy Policy
      "cultivators",      // Privacy Policy
      "reporting-insights",      // Privacy Policy
      "company",      // Privacy Policy



  ];

  const allPaths = [...staticPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
