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

"influencer-events",

"blog/ugc-creator",

"blog/influencer-collaboration",
"ugc-platforms-list",
"blog/ott-ad-platforms",


"blog/free-tiktok-followers",
"blog/tiktok-emoji-captions",
"blog/ai-advertisers-profitability",

"blog/ai-powered-campaign-management-for-streaming-tv",



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
"blog/sexual-health-resources",

"blog/creative-influencer-marketing",
"blog/affiliate-marketing-vs-influencer",
"blog/ugc-creator",
"blog/timeline-for-influencer",
"blog/influencer-collaboration",
"blog/influencer-marketing-for-start-ups",
"blog/virtual-assistants",
"blog/influencer-specialist",
"blog/influencer-marketing-en-méxico",
"blog/ig-ads",
"blog/facebook-ads-agency",
"blog/influencer-campaigns-affiliates",
"blog/how-to-ig-story-ad",
"blog/brand-deal",
"blog/campanas-de-influencers",
"blog/influencer-marketing-saas-platform",
"blog/saas",
"blog/media-kit-for-influencers",
"blog/promo"
  ];

  const allPaths = [...staticPaths];

  return allPaths.map((path) => ({
    url: path === "" ? BASE_URL : `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
