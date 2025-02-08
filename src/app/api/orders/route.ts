import { client } from '@/sanity/lib/client';
import type { NextRequest  } from 'next/server';
import { NextResponse } from "next/server";


export const runtime = 'edge';

// Create a new order
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerId, products, totalAmount } = body;

    const newOrder = {
      _type: 'order',
      customerId,
      products,
      totalAmount,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    const order = await client.create(newOrder);

    return NextResponse.json({ success: true, order }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ success: false, message: 'Failed to create order.' }, { status: 500 });
  }
}

// Fetch all orders
export async function GET() {
  try {
    const query = `*[_type == "order"]{
      _id,
      customerId,
      products,
      totalAmount,
      status,
      createdAt
    }`;

    const orders = await client.fetch(query);

    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch orders.' }, { status: 500 });
  }
}
