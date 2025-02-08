import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Create a new customer
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received data:', body);
    
    const { fullName, email, phone, streetAddress, city, zipCode, province } = body;

    const newCustomer = {
      _type: "customer",
      fullName,
      email,
      phone,
      address: {
        streetAddress,
        city,
        province,
        zipCode
      }
    };

    console.log('Creating customer:', newCustomer);

    const customer = await client.create(newCustomer);
    console.log('Created customer:', customer);

    return NextResponse.json({ success: true, customer }, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create customer." },
      { status: 500 }
    );
  }
}

// Fetch all customers
export async function GET() {
  try {
    const query = `*[_type == "customer"]{
      _id,
      fullName,
      email,
      phone,
      address
    }`;

    const customers = await client.fetch(query);

    return NextResponse.json({ success: true, customers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch customers." },
      { status: 500 }
    );
  }
}

// import { client } from "@/sanity/lib/client";
// import { NextRequest, NextResponse } from "next/server";

// // Create a new customer
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log('Data', body)
//     const { fullName, email, phone, streetAddress , city , zipCode , province } = body;

//     const newCustomer = {
//       _type: "customer",
//       fullName,
//       email,
//       streetAddress,
//       phone,
//       city,
//       zipCode,
//       province

//     };
//     console.log('creating Customer' , newCustomer)

//     const customer = await client.create(newCustomer);
//     console.log('created Customer ' , customer)

//     return NextResponse.json({ success: true, customer }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating customer:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create customer." },
//       { status: 500 }
//     );
//   }
// }

// // Fetch all customers
// export async function GET() {
//   try {
//     const query = `*[_type == "customer"]{
//       _id,
//       name,
//       email,
//       phone,
//       address
//     }`;

//     const customers = await client.fetch(query);

//     return NextResponse.json({ success: true, customers }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching customers:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to fetch customers." },
//       { status: 500 }
//     );
//   }
// }

