"use client";
import { useWishlist } from "@/Hooks/Context/useWishList";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";
import RouteHero from "@/components/RouteHero";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-poppins font-semibold ">
          Your wishlist is empty!
        </p>
        <Link href="/shop">
          <button className="mt-5 px-6 py-2 bg-[#B88E2F] text-white font-semibold rounded-lg">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 px-10">
      <RouteHero prop="wishlist" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="bg-[#F4F5F7] shadow-md rounded-lg relative group"
          >
            {/* Product Image */}
            <div className="h-[200px] rounded-t-lg overflow-hidden">
              <Image
                src={urlFor(product.productImage).url()}
                width={400}
                height={400}
                alt="Product Image"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-2 p-4">
              <h1 className="font-semibold text-[20px] text-[#3A3A3A]">
                {product.title}
              </h1>
              <p className="text-[#898989] text-[14px] font-medium line-clamp-2">
                {product.description}
              </p>
              <p className="text-[#3A3A3A] text-[18px] font-semibold">
                Rs {product.price}
              </p>
            </div>

            {/* Hover Actions with SVGs */}
            <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-lg space-y-4">
              <Link href={`/shop/${product.title}`}>
                <button
                  className="bg-white text-[#B88E2F] px-6 py-2 font-semibold  flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                </button>
              </Link>
              <div className="flex gap-3">
                <button
                  className=" text-white text-sm px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromWishlist(product.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
