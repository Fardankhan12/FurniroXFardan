import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Query for fetching products
    const query = `*[_type == "product"]`;

    const products = await client.fetch(query);

    // Return the data as JSON
    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    
    return NextResponse.json(
      { success: false, message: "Failed to fetch products." },
      { status: 500 }
    );
  }
}
