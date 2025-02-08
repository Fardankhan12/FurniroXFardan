import { client } from "@/sanity/lib/client";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { success: false, message: "Query parameter is required." },
        { status: 400 }
      );
    }

    // Search products based on the query
    const productsQuery = `*[_type == "product" && title match '*${query}*']`; // Match query in the product title
    const products = await client.fetch(productsQuery);

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch products." },
      { status: 500 }
    );
  }
}
