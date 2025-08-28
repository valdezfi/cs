import bitcoinLoan from "./blogs/digitalecommerce-marketing";
import PodcastPartnershipBlog from "./blogs/how-to-get-sponsors-for-podcast";
import FreeInfluencerBlog from "./blogs/FreeInfluencers";
import BrandDealBlog from "./blogs/Influencerworldwide";
import agencylatamBlog from "./blogs/AgenciaInfluencers";
import InfluencerAgencyBlog from "./blogs/InfluencerAgency"
import UGCplatformsBlog from "./blogs/UGCplatforms"
import B2bBlog from "./blogs/B2b"
import FamousBlog from "./blogs/Famous"
import lamejorBlog from "./blogs/lamejor"
import NanoBlog from "./blogs/nanoInfluencers"
import MicroMacroBlog from "./blogs/MicroMacro"
import AffiliateMarketingBlog from "./blogs/AffiliateMarketing"
import InfluencerCollablog from "./blogs/InfluencerCollab"
import IgBlog from "./blogs/Ig"
import MacroBlog from "./blogs/Macro"
import BoostBlog from "./blogs/Boost"
import digitalcreatorBlog from "./blogs/DigitalC"
import popularBlog from "./blogs/Content"
import UGCCreatoreBlog from "./blogs/CompleteGuide"
import digitalecommerceBlog from "./blogs/digitalecommerce-marketing"
import influencerbrandsBlog from "./blogs/InfluencerGuide"
import InfluenceHolidayCampaignBlog from "./blogs/Holiday"





const blogs = [bitcoinLoan, PodcastPartnershipBlog, FreeInfluencerBlog,
   BrandDealBlog,agencylatamBlog, InfluencerAgencyBlog, 
  UGCplatformsBlog, B2bBlog, FamousBlog, NanoBlog, lamejorBlog,
MicroMacroBlog, AffiliateMarketingBlog, InfluencerCollablog,
IgBlog, MacroBlog, BoostBlog, digitalcreatorBlog, popularBlog, UGCCreatoreBlog, digitalecommerceBlog, influencerbrandsBlog, InfluenceHolidayCampaignBlog];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllBlogSlugs() {
  return blogs.map((blog) => blog.slug);
}

export function getAllBlogs() {
  return blogs;
}
