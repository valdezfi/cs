// app/api/indexnow/route.ts
import { NextResponse } from "next/server";
import { getAllBlogs } from "../../../lib/blogs"; // adjust import to your project


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urlList } = body;

    if (!urlList || !Array.isArray(urlList)) {
      return NextResponse.json({ error: "urlList is required" }, { status: 400 });
    }

    // Replace these values with your domain + IndexNow key
    const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
    const HOST = "grandeapp.com"; // or "www.grandeapp.com" depending on your canonical
    const KEY_LOCATION = `https://${HOST}/${NEXT_INDEXNOW_KEY}.txt`;

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      data,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
