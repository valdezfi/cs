import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'exchange',
      password: '', // Add your DB password if you have one
    });

    await db.execute("INSERT INTO emails (email) VALUES (?)", [email]);
    await db.end();

    return NextResponse.json({ message: "Signup successful" }, { status: 200 });
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
