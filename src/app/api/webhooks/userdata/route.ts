


// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     // Call Clerk Admin API to get all users
//     const response = await fetch('https://api.clerk.dev/v1/users', {
//       headers: {
//         Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
//       },
//     });

//     if (!response.ok) {
//       return NextResponse.json(
//         { error: 'Failed to fetch users from Clerk' },
//         { status: response.status }
//       );
//     }

//     const users = await response.json();
//     return NextResponse.json(users, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Something went wrong', details: error },
//       { status: 500 }
//     );
//   }
// }

// // /app/api/postToSanity/route.ts

// app/api/postToSanity/route.ts
// import { NextResponse } from 'next/server';
// import { client } from '@/sanity/lib/client';  // Adjust the path to your sanity client

// export async function POST() {
//   try {
//     // Step 1: Fetch user data from Clerk
//     const clerkResponse = await fetch('https://api.clerk.dev/v1/users', {
//       headers: {
//         Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
//       },
//     });

//     if (!clerkResponse.ok) {
//       return NextResponse.json(
//         { error: 'Failed to fetch users from Clerk' },
//         { status: clerkResponse.status }
//       );
//     }

//     const clerkUsers = await clerkResponse.json();
//     console.log('Clerk Users:', clerkUsers);

//     // Step 2: Loop through Clerk users and send data to Sanity
//     for (const user of clerkUsers) {
//       const userData = {
//         _id: `clerk-${user.id}`, // Sanity document ID (Clerk ID)
//         _type: 'user',  // Matches your Sanity schema type
//         clerkId: user.id,
//         firstName: user.first_name,
//         lastName: user.last_name,
//         email: user.email_addresses[0]?.email_address || '',
//         profileImage: user.profile_image_url || '',
//       };

//       // Step 3: Create or Replace user data in Sanity
//       const sanityResponse = await client.create(userData);

//       console.log('Sanity Response:', sanityResponse);
//     }

//     return NextResponse.json({ message: 'Users synced successfully' }, { status: 200 });
//   } catch (error : any ) {
//     return NextResponse.json(
//       { error: 'Something went wrong', details: error.message },
//       { status: 500 }
//     );
//   }
// }


// import { client } from '@/sanity/lib/client';
// import { NextResponse } from 'next/server';

// export async function POST() {
//   try {
//     const clerkResponse = await fetch('https://api.clerk.dev/v1/users', {
//       headers: {
//         Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
//       },
//     });

//     if (!clerkResponse.ok) {
//       return NextResponse.json({ error: 'Failed to fetch users from Clerk' }, { status: clerkResponse.status });
//     }

//     const clerkUsers = await clerkResponse.json();
//     const user = clerkUsers[0]; // Take just the first user for testing

//     // Step 2: Loop through Clerk users and send data to Sanity
//     for (const user of clerkUsers) {
//       const userData = {
//         _id: `clerk-${user.id}`, // Sanity document ID (Clerk ID)
//         _type: 'user',  // Matches your Sanity schema type
//         clerkId: user.id,
//         firstName: user.first_name,
//         lastName: user.last_name,
//         email: user.email_addresses[0]?.email_address || '',
//         profileImage: user.profile_image_url || '',
//       };

//       // Step 3: Create or Replace user data in Sanity
//       const sanityResponse = await client.createOrReplace(userData);

//       console.log('Sanity Response:', sanityResponse);
//     }

//     return NextResponse.json({ message: 'User synced successfully' }, { status: 201 });
//   } catch (error : any ) {
//     console.error('Error:', error);
//     return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
//   }
// }

import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Step 1: Verify Webhook Signature (Optional, if Clerk provides one)
    const body = await req.json();
    console.log('Webhook Payload:', body);

    // Step 2: Handle Webhook Events (e.g., user.created)
    if (body.type === 'user.created') {
      const user = body.data;

      // Example: Sync the new user to Sanity
      const userData = {
        _id: `clerk-${user.id}`,
        _type: 'user',
        clerkId: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email_addresses[0]?.email_address || '',
        profileImage: user.profile_image_url || '',
      };

      // Sync user data with Sanity
      await client.createOrReplace(userData);

      console.log('User synced successfully:', userData);
    }

    // Step 3: Respond to Clerk
    return NextResponse.json({ message: 'Webhook handled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ error: 'Webhook handling failed', }, { status: 500 });
  }
}
