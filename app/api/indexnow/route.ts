// app/api/indexnow/route.ts
import { NextResponse } from "next/server";
import { getAllBlogs } from "../../../lib/blogs"; // adjust path if needed

export async function GET() {
  try {
    const INDEXNOW_KEY = process.env.NEXT_INDEXNOW_KEY;
    if (!INDEXNOW_KEY) {
      return NextResponse.json({ error: "IndexNow key not set in env" }, { status: 500 });
    }

    const HOST = "grandeapp.com"; // use canonical URL (no www if your site is canonical without it)
    const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

    // Get all blog URLs
    const blogs = getAllBlogs();
    const urlList = blogs.map((blog) => `https://${HOST}/blog/${blog.slug}`);

    if (urlList.length === 0) {
      return NextResponse.json({ error: "No blogs found to submit" }, { status: 400 });
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
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
      submitted: urlList,
      data,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
