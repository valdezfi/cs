// // app/api/indexnow-static/route.ts
// import { NextResponse } from "next/server";

// const HOST = "grandeapp.com"; // or "www.grandeapp.com"
// const INDEXNOW_KEY = process.env.NEXT_PUBLIC_INDEXNOW_KEY;
// const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// // const staticPaths = [
// //   "", "blog", "allblogs", "terms", "privacy", "ghana", "usa",
// //   "free-tools", "republica-dominicana", "bahrain", "argentina", "colombia",
// //   "chile", "affiliate", "brand", "campaign", "creator", "creatorpricing",
// //   "discover", "el-salvador", "france", "company", "ghana", "influencer",
// //   "influencer-germany", "influencer-india", "influencer-kenya",
// //   "influencer-platform", "influencers-in-brazil", "ig-bio-maker", "lithuania",
// //   "malaysia", "mexico", "paraguay", "payments", "philippines", "podcast",
// //   "pricing", "puerto-rico", "reporting", "rwanda", "singapore",
// //   "south-africa", "spain", "ugc", "united-kingdom", "uruguay", "venezuela",
// //   "zimbabwe",
// // ];

// const staticPaths = [
//   "chile", "affiliate",
 
// ];

// // Convert paths to full URLs
// const staticUrls = staticPaths.map(path => path === "" ? `https://${HOST}` : `https://${HOST}/${path}`);

// export async function GET() {
//   try {
//     const payload = {
//       host: HOST,
//       key: INDEXNOW_KEY,
//       keyLocation: KEY_LOCATION,
//        staticUrls,
//     };

//     const response = await fetch("https://api.indexnow.org/IndexNow", {
//       method: "POST",
//       headers: { "Content-Type": "application/json; charset=utf-8" },
//       body: JSON.stringify(payload),
//     });

//     return NextResponse.json({
//       success: response.ok,
//       status: response.status,
//       submitted: staticUrls,
//     });
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }


// app/api/indexnow-static/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const INDEXNOW_KEY = process.env.NEXT_PUBLIC_INDEXNOW_KEY;
    if (!INDEXNOW_KEY) {
      return NextResponse.json({ error: "IndexNow key not set in env" }, { status: 500 });
    }

    const HOST = "grandeapp.com"; // canonical domain
    const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

//  const staticPaths = [
//   "", "blog", "allblogs", "terms", "privacy", "ghana", "usa",
//   "free-tools", "republica-dominicana", "bahrain", "argentina", "colombia",
//   "chile", "affiliate", "brand", "campaign", "creator", "creatorpricing",
//   "discover", "el-salvador", "france", "company", "ghana", "influencer",
//   "influencer-germany", "influencer-india", "influencer-kenya",
//   "influencer-platform", "influencers-in-brazil", "ig-bio-maker", "lithuania",
//   "malaysia", "mexico", "paraguay", "payments", "philippines", "podcast",
//   "pricing", "puerto-rico", "reporting", "rwanda", "singapore",
//   "south-africa", "spain", "ugc", "united-kingdom", "uruguay", "venezuela",
//   "zimbabwe",
// ];

 const staticPaths = [
"blog/affiliate-marketing-100", 

];

    // Convert paths to full URLs
    const urlList = staticPaths.map(path => path === "" ? `https://${HOST}` : `https://${HOST}/${path}`);

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: urlList,
      data,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
