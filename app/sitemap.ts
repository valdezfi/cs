import type { MetadataRoute } from "next";

const BASE_URL = "https://www.grandeapp.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths
  const staticPaths = [
    "",
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
"company",
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
"ugc",

"united-kingdom",
"uruguay",
"venezuela",
"zimbabwe",



  ];

  // Simulated dynamic blog slugs (replace with DB/API fetch)
  const blogSlugs = ["affiliatemarketing", "marca", "b2b", "what-is-social-proof", "what-is-a-ugc-creator","what-is-a-digital-creator","digitalecommerce-marketing","famouscreator","find-influencers-for-free","ig","podcast-partnership","agencyinfleuncer","influencercollab", "influencerbrands","brand-deals-for-influencers-worldwide","lamejor",

"macrogrowth", "microvsmacro", "create-affiliate-program-small-business",

"nanoinfluencers",
"ugcplatforms",

"blog/influence-holiday-campaign",
"roblox-advertising",
"InfluencerEventsBlog", "christmas-affiliate-marketing",
"what-is-influencer-agency",
"affiliate-marketing-100-day"
  ]; // Replace with actual dynamic slugs from DB
  const dynamicPaths = blogSlugs.map((slug) => `blog/${slug}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
