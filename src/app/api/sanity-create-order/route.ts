import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

interface Order {
  customerId: string;
  fullName: string;
  shipTo: {
    name: string;
    phone: string;
    email: string;
    addressLine1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  trackingNumber: string;
  shipmentCost: number;
  trackingUrl: string;
  createdAt: string;
  labelPrint: string;
  carrierCode: string;
  AdditionalInfo :string
}

export async function POST(req: Request) {
  try {
    const order: Order = await req.json();

    const result = await client.create({
      _type: 'order',
      ...order,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error saving order:', error);
    return NextResponse.json({ message: 'Failed to save order.' }, { status: 500 });
  }
}
