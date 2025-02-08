import Comparison from "@/components/Comparison";
import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import blue from "@/public/assests/blue.png";
import star from "@/public/assests/star.png";

// function page() {
//   const provinces = [
//     "Choose a Product",
//     "Sofa",
//     "Dining",
//     "Bedrooms",
//     "Chair",
//     "Lamp",
//   ];

//   return (
//     <div className="h-auto">
//       <RouteHero prop="Product Comparison" />
//       <div className="h-[60vh] py-10 px-16 flex gap-16 items-center justify-center">
//         {/* Product Page section */}
//         <div className="flex flex-col gap-4 items-start ">
//           <h1 className="text-[28px] font-poppins  font-[500] ">
//             Go to Product <br />
//             page for more <br />
//             Products
//           </h1>

//           <Link href={`/shop`}>
//             <h2 className="text-[16px] font-poppins border-b pb-1 px-2 hover:text-[#727272]  text-left hover:border-[#727272]">
//               View All
//             </h2>
//           </Link>
//         </div>

//         {/* product1 */}
//         <div className="flex flex-col gap-2">
//           <Image
//             src={blue}
//             width={100}
//             alt="product"
//             className="h-full w-full"
//           />
//           <div className="flex flex-col gap-1 font-poppins ">
//             <h1 className="font-[500] text-[24px] ">Asgaard Sofa</h1>
//             <h1 className="font-[500] text-[18px] ">Rs. 250,000.00</h1>
//             <div className="flex gap-1">
//               <p className="text-[18px]">4.7</p>
//               <div className="flex gap-1 items-center">
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//               </div>
//               <div className="border-l border-[#9F9F9F] text-[#9F9F9F] text-[16px] pl-2 py-1">
//                 204 Reviews
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* product2 */}
//         <div className="flex flex-col gap-2">
//           <Image
//             src={blue}
//             width={100}
//             alt="product"
//             className="h-full w-full"
//           />
//           <div className="flex flex-col gap-1 font-poppins ">
//             <h1 className="font-[500] text-[24px] ">Outdoor Sofa Set</h1>
//             <h1 className="font-[500] text-[18px] ">Rs. 224,000.00</h1>
//             <div className="flex gap-1">
//               <p className="text-[18px]">4.2</p>
//               <div className="flex gap-1 items-center">
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//                 <Image src={star} alt="star" width={20} height={20} />
//               </div>
//               <div className="border-l border-[#9F9F9F] text-[#9F9F9F] text-[16px] pl-2 py-1">
//                 145 Reviews
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*  Add A product */}

//         <div className="flex flex-col gap-2">
//           <h1 className="text-[24px] font-semibold "> Add A product</h1>
//           <div className="flex flex-col gap-2">
//             <select
//               value="Choose a Product" 
//               className="bg-[#B88E2F] border font-poppins font-semibold text-white rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full "
//             >
//               <option value="" disabled className="text-white font-poppins font-semibold">
//               Choose a Product
//               </option>
//               {provinces.map((prov, index) => (
//                 <option key={index} value={prov} className="font-poppins font-semibold text-white ">
//                   {prov}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//       <Comparison />
//       <Services />
//     </div>
//   );
// }

// export default page;

function Page() {
    const provinces = [
      "Choose a Product",
      "Sofa",
      "Dining",
      "Bedrooms",
      "Chair",
      "Lamp",
    ];
  
    return (
      <div className="h-auto">
        <RouteHero prop="Product Comparison" />
        <div className="h-auto py-10 px-4 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-16">
          {/* Product Page section */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h1 className="text-2xl font-poppins font-semibold text-center md:text-left">
              Go to Product <br />
              page for more <br />
              Products
            </h1>
  
            <Link href={`/shop`}>
              <h2 className="text-sm font-poppins border-b pb-1 px-2 hover:text-[#727272] text-center md:text-left hover:border-[#727272]">
                View All
              </h2>
            </Link>
          </div>
  
          {/* Product 1 */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src={blue}
              width={100}
              alt="product"
              className="h-full w-full"
            />
            <div className="flex flex-col gap-1 font-poppins text-center md:text-left">
              <h1 className="font-medium text-xl">Asgaard Sofa</h1>
              <h1 className="font-medium text-lg">Rs. 250,000.00</h1>
              <div className="flex gap-1 items-center justify-center md:justify-start">
                <p className="text-lg">4.7</p>
                <div className="flex gap-1 items-center">
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                </div>
                <div className="border-l border-[#9F9F9F] text-[#9F9F9F] text-sm pl-2 py-1">
                  204 Reviews
                </div>
              </div>
            </div>
          </div>
  
          {/* Product 2 */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src={blue}
              width={100}
              alt="product"
              className="h-full w-full"
            />
            <div className="flex flex-col gap-1 font-poppins text-center md:text-left">
              <h1 className="font-medium text-xl">Outdoor Sofa Set</h1>
              <h1 className="font-medium text-lg">Rs. 224,000.00</h1>
              <div className="flex gap-1 items-center justify-center md:justify-start">
                <p className="text-lg">4.2</p>
                <div className="flex gap-1 items-center">
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                </div>
                <div className="border-l border-[#9F9F9F] text-[#9F9F9F] text-sm pl-2 py-1">
                  145 Reviews
                </div>
              </div>
            </div>
          </div>
  
          {/* Add a product */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-xl font-semibold">Add A product</h1>
            <div className="flex flex-col gap-2 w-full">
              <select
                value="Choose a Product"
                className="bg-[#B88E2F] border font-poppins font-semibold text-white rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
              >
                <option value="" disabled className="text-white font-poppins font-semibold">
                  Choose a Product
                </option>
                {provinces.map((prov, index) => (
                  <option
                    key={index}
                    value={prov}
                    className="font-poppins font-semibold text-white"
                  >
                    {prov}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <Comparison />
        <Services />
      </div>
    );
  }
  
  export default Page;
  