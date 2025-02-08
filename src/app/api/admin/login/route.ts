// app/api/admin/login/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Replace these with your own logic to check credentials (e.g., from a database)
    const adminEmail = "admin@example.com";
    const adminPassword = "Kulsoom";

    // Simple validation check
    if (email === adminEmail && password === adminPassword) {
      const cookieStore = cookies();
      cookieStore.set({
        name: "admin_session",
        value: "valid_session_token",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid email or password" , error},
      { status: 401 }
    );
  }
}
