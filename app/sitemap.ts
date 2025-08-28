import type { MetadataRoute } from "next";

const BASE_URL = "https://www.bellete.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths
  const staticPaths = [
    "home",
    "contact",
    "blog",         // Base blog page
    "allblogs",     // Blog listing page          // P2P trading page
    "forgotpassword",
    "profile",      // User profile page
    "terms",        // Terms of Use
    "privacy",      // Privacy Policy
    "terms", 
    "ghana",
    "usa",
    "forgotpassword",
   
    "blog/affiliatemarketing",
    "blog/marca",
    "blog/b2b",
    "blog/what-is-social-proof",
    "blog/what-is-a-ugc-creator",
    "blog/what-is-a-digital-creator",
    "blog/digitalecommerce-marketing",
    "blog/famouscreator",
    "blog/famouscreator",
    "blog/find-influencers-for-free",
        "blog/ig",
"blog/podcast-partnership",
"blog/agencyinfleuncer",
"blog/influencercollab",
"blog/influencerbrands",
"blog/brand-deals-for-influencers-worldwide",
"blog/lamejor",
"blog/macrogrowth",
"blog/microvsmacro",
"blog/nanoinfluencers",
"blog/ugcplatforms",

"blog/influence-holiday-campaign",



"republica-dominicana",
"bahrain",
"argentina",
"colombia",
"chile",

"affiliate",

"about",

"brand",

"campaign",

"creator",
        
"creatorpricing",
"discover",

"el-salvador",

"event",

"forgotpassword",

"france",

"ghana",

"influencer",

"influencer-germany",
"influencer-india",
"influencer-kenya",
"influencer-platform",
"influencers-in-brazil",

"kawait",

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
"suadi-arabia",
"ugc",

"united-kingdom",
"uruguay",
"venezuela",
"zimbabwe",



  ];

  // Simulated dynamic blog slugs (replace with DB/API fetch)
  const blogSlugs = ["best-stablecoins"]; // Replace with actual dynamic slugs from DB
  const dynamicPaths = blogSlugs.map((slug) => `blog/${slug}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
