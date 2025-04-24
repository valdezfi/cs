// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://www.bellete.com/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
