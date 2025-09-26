// app/api/indexnow-static/route.ts
import { NextResponse } from "next/server";

const HOST = "grandeapp.com"; // or "www.grandeapp.com"
const INDEXNOW_KEY = process.env.NEXT_INDEXNOW_KEY;
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const staticPaths = [
  "", "blog", "allblogs", "terms", "privacy", "ghana", "usa",
  "free-tools", "republica-dominicana", "bahrain", "argentina", "colombia",
  "chile", "affiliate", "brand", "campaign", "creator", "creatorpricing",
  "discover", "el-salvador", "france", "company", "ghana", "influencer",
  "influencer-germany", "influencer-india", "influencer-kenya",
  "influencer-platform", "influencers-in-brazil", "ig-bio-maker", "lithuania",
  "malaysia", "mexico", "paraguay", "payments", "philippines", "podcast",
  "pricing", "puerto-rico", "reporting", "rwanda", "singapore",
  "south-africa", "spain", "ugc", "united-kingdom", "uruguay", "venezuela",
  "zimbabwe",
];

// Convert paths to full URLs
const staticUrls = staticPaths.map(path => path === "" ? `https://${HOST}` : `https://${HOST}/${path}`);

export async function GET() {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
       staticUrls,
    };

    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: staticUrls,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
