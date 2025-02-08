// src/app/api/create-shipping/route.ts
import { NextResponse } from 'next/server';

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    // (Make sure your client sends address_from, address_to, and parcels according to Shippo's API requirements)
    if (!body.address_from || !body.address_to || !body.parcels) {
      return NextResponse.json(
        { error: "Missing required fields. Ensure address_from, address_to, and parcels are provided." },
        { status: 400 }
      );
    }

    // Call Shippo's API to create a shipment
    // See Shippo's API documentation for the expected payload:
    // https://goshippo.com/docs/reference#create-a-shipment
    const shippoResponse = await fetch("https://api.goshippo.com/shipments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Use your Shippo API key as a Bearer token per Shippo's docs:
        "Authorization": `ShippoToken ${SHIPPO_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!shippoResponse.ok) {
      const errorData = await shippoResponse.json();
      console.error("Shippo API Error:", errorData);
      return NextResponse.json(
        { error: "Shippo Error", details: errorData },
        { status: shippoResponse.status }
      );
    }

    const data = await shippoResponse.json();
    // Return the shipment details, rates, or whatever data you need from Shippo
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("Internal API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Optional: Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405 }
  );
}
