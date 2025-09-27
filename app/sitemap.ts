import type { MetadataRoute } from "next";

const BASE_URL = "https://grandeapp.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths
  const staticPaths = [
     "",              // Home page

    "allblogs",    
    "terms",        // Terms of Use
    "privacy",      // Privacy Policy
    "ghana",
   
    "free-tools",





"blog/influencer-collaboration",

"republica-dominicana",
"argentina",
"colombia",
"chile",

"affiliate",


"brand",

"campaign",

"creator",
        
"creatorpricing",

"el-salvador",



"france",
"company",
"ghana",

"influencer",

"influencer-germany",
"influencer-india",
"influencer-kenya",
"influencer-platform",
"influencers-in-brazil",
"ig-bio-maker",


"lithuania",

"malaysia",

"mexico",

"paraguay",

"payments",

"philippines",

"podcast",

"pricing",

"puerto-rico",

"reporting",
"republica-dominicana",
"rwanda",
"singapore",
"south-africa",
"spain",
"ugc",

"united-kingdom",
"uruguay",
"venezuela",
"zimbabwe",

"blog/affiliate-marketing-vs-influencer"

  ];
// Replace with actual dynamic slugs from DB

  const allPaths = [...staticPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
