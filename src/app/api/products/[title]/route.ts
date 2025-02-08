// // app/api/products/route.ts
// import { NextResponse } from 'next/server';
// import { client } from '@/sanity/lib/client'; // Adjust the path as needed

// export async function GET( contextPromise: Promise<{ params: { title: string } }>
// )  {
//   const { params } = await contextPromise;
//   const { title } = params;

//   // Ensure title is present and valid
//   if (!title || typeof title !== 'string') {
//     return NextResponse.json({ message: 'Invalid product title' }, { status: 400 });
//   }

//   try {
//     // Sanity query to fetch product by title
//     const query = `*[_type == "product" && title == $title][0]`;
//     const product = await client.fetch(query, { title });

//     if (!product) {
//       return NextResponse.json({ message: 'Product not found' }, { status: 404 });
//     }

//     return NextResponse.json(product, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Adjust the path as needed
import type { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: { title: string } }
): Promise<NextResponse> {
  console.log(context)
  const { title } = context.params;

  // Ensure title is present and valid
  if (!title || typeof title !== 'string') {
    return NextResponse.json({ message: 'Invalid product title' }, { status: 400 });
  }

  try {
    // Sanity query to fetch product by title
    const query = `*[_type == "product" && title == $title][0]`;
    const product = await client.fetch(query, { title });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
