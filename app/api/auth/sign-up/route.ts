import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const hashedPasswords = await hash(password, 10);
    const response = await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPasswords})
    `;

    return NextResponse.json(response);
  } catch (error) {
    console.log("[SIGN-UP_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }

}
