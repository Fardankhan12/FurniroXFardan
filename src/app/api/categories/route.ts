import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  console.log('Category:', category); // Debugging log

  if (!category || typeof category !== 'string') {
    console.error('Invalid or missing category parameter');
    return NextResponse.json({ message: 'Invalid or missing category' }, { status: 400 });
  }

  try {
    const query = `
      *[_type == "product" && $category in tags] {
        _id,
        title,
        description,
        price,
        isNew,
        "productImage": productImage.asset->url,
        tags
      }
    `;

    // console.log('Sanity Query:', query); // Debugging log

    const products = await client.fetch(query, { category });

    // console.log('Fetched Products:', products); // Debugging log

    if (!products || products.length === 0) {
      return NextResponse.json({ message: 'No products found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
