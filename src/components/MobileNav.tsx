"use client";

import React, { useState, useEffect } from "react";
import logo from "../public/assests/logo.png";
import Image from "next/image";
import { SheetDemo } from "./SheetDemo";
import Link from "next/link";
import CartSheet from "./CartSheet";
import { useRouter } from "next/navigation";
import { ProductInterface } from "./Types";
import { urlFor } from "@/sanity/lib/image";
import { useWishlist } from "@/Hooks/Context/useWishList";
import { UserButton, useUser } from "@clerk/nextjs";

function MobileNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductInterface[]>();
  const router = useRouter();
  const { wishlistItems } = useWishlist();
  const {  isSignedIn, user } = useUser();

  // Fetch search results from the server
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() !== "") {
        try {
          const response = await fetch(
            `/api/search?query=${searchQuery}`
          );
          const data = await response.json();
          if (data.success) {
            setSearchResults(data.products); // Set fetched products in the state
          } else {
            setSearchResults([]); // Handle no results or error
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(fetchSearchResults, 500); // Debounce fetch requests

    return () => clearTimeout(debounceTimer); // Cleanup the timeout when query changes
  }, [searchQuery]);

  // Handle redirection when a product is selected
  const handleProductClick = (productId: string) => {
    router.push(`/shop/${productId}`);
    setSearchQuery(""); // Clear search query
    setSearchResults([]); // Reset search results
  };

  return (
    <div className="flex flex-col lg:hidden">
      <nav className="h-[90px] w-full flex justify-between items-center px-10">
        <div className="flex">
          <Image src={logo} width={30} alt="logo" height={20} />
          <Link href="/">
            <h1 className="text-[18px] font-semibold font-montserrat">
              Furniro
            </h1>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden items-center md:flex w-2/4 border bg-none border-black rounded-2xl relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-2xl px-4 py-1 focus:outline-none bg-transparent transition w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="cursor-pointer">
            <svg
              className="pr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
              />
            </svg>
          </div>

          {/* Dropdown for search results */}
          {searchQuery && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-black rounded-xl shadow-lg w-full z-50">
              {searchResults?.length ? (
                <ul className="max-h-40 overflow-y-auto">
                  {searchResults.map((product) => (
                    <li
                      key={product._id}
                      className="py-2 px-4 flex items-center cursor-pointer hover:bg-gray-100"
                      onClick={() => handleProductClick(product.title)}
                    >
                      <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={40}
                        height={40}
                        className="rounded-lg mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-sm">
                          {product.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {product.description.slice(0, 50)}...
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-gray-500 text-sm">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          {/* User */}
          {isSignedIn ? (
            <>
            <p  className="text-[16px] font-poppins font-[500] hover:text-gray-600">{user.firstName}</p>
            <UserButton />
            </>
          ) : (
            <Link href="/sign-up">
              {/* user */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="#000"
                    d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"
                  />
                </svg>
              </div>
            </Link>
          )}

          {/* Wishlist */}
          <div className="relative">
            {/* wishList quantity */}
            <div className="absolute -top-[7px] -right-1 w-3 h-3 bg-black rounded-full text-white text-[10px] flex items-center justify-center">
              {wishlistItems.length || 0}
            </div>
            <Link href="/wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"
              />
            </svg>
            </Link>
          </div>

          {/* Cart */}
          <div>
            <CartSheet />
          </div>

          <div>
            <SheetDemo />
          </div>
        </div>
      </nav>

      {/* Search Bar for small screens */}
      <div className="px-10 pb-3">
        <div className="flex items-center md:hidden w-full border bg-none border-black rounded-2xl relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-2xl px-4 py-1 focus:outline-none bg-transparent transition w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="cursor-pointer">
            <svg
              className="pr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
              />
            </svg>
          </div>

          {/* Dropdown for search results */}
          {searchQuery && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-black rounded-xl shadow-lg w-full z-50">
              {searchResults?.length ? (
                <ul className="max-h-40 overflow-y-auto">
                  {searchResults.map((product) => (
                    <li
                      key={product._id}
                      className="py-2 px-4 flex items-center cursor-pointer hover:bg-gray-100"
                      onClick={() => handleProductClick(product.title)}
                    >
                      <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={30}
                        height={30}
                        className="rounded-lg mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-sm">
                          {product.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {product.description.slice(0, 50)}...
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-gray-500 text-sm">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;

// import React from "react";
// import logo from "../public/assests/logo.png";
// import Image from "next/image";
// import { SheetDemo } from "./SheetDemo";
// import Link from "next/link";
// import CartSheet from "./CartSheet";

// function MobileNav() {
//   return (
//     <div className="flex flex-col lg:hidden ">
//       <nav className=" h-[90px] w-full flex justify-between items-center px-10">
//         <div className="flex ">
//           <Image src={logo} width={30} alt="logo" height={20} />
//           <Link href="/">
//             <h1 className="text-[18px] font-semibold font-montserrat">
//               Furniro
//             </h1>
//           </Link>
//         </div>

//         {/* Search Bar */}
//         <div className="hidden items-center md:flex w-2/4 border bg-none border-black rounded-2xl ">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="  rounded-2xl px-4 py-1 focus:outline-none  bg-transparent  transition w-full "
//           />
//           <div className="cursor-pointer  ">
//             <svg
//               className="pr-2 cursor-pointer"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="none"
//                 stroke="#000"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="flex gap-4">
//           {/* user */}
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//             >
//               <rect width="24" height="24" fill="none" />
//               <path
//                 fill="#000"
//                 d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"
//               />
//             </svg>
//           </div>

//           {/* wish list */}
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//             >
//               <rect width="24" height="24" fill="none" />
//               <path
//                 fill="none"
//                 stroke="#000"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"
//               />
//             </svg>
//           </div>
//           {/* card */}
//           <div>
//             {/* <Link href="/cart"> */}
//             <CartSheet />
//             {/* </Link> */}
//           </div>
//           <div className="">
//             <SheetDemo />
//           </div>
//         </div>
//       </nav>

//       {/* Search Bar for small screen  */}
//       <div className="px-10 pb-3">
//         <div className="flex items-center md:hidden w-full  border bg-none border-black rounded-2xl ">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="  rounded-2xl px-4 py-1 focus:outline-none  bg-transparent  transition w-full "
//           />
//           <div className="cursor-pointer  ">
//             <svg
//               className="pr-2 cursor-pointer"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="none"
//                 stroke="#000"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
//               />
//             </svg>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default MobileNav;
