import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/Hooks/Context/CartContext";
import { urlFor } from "@/sanity/lib/image";

function CartSheet() {
  const { cartItems, removeFromCart, cartCount, getTotalPrice } = useCart();

  const handleRemoveCart = (id: string) => {
    removeFromCart(id);
    console.log("Product has been  removed form Cart");
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          {/* cart quantity */}
          <div className="absolute -top-[7px] -right-1 w-3 h-3 bg-black rounded-full text-white text-[10px] flex items-center justify-center">
            {cartCount}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#000"
              d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
            />
          </svg>
        </div>
      </SheetTrigger>
      <SheetContent>
        {/* Card Heading */}
        {/* <div className="flex flex-col gap-10 "></div> */}
        <div className="flex flex-col gap-10 h-auto  ">
          <div className="flex justify-between">
            <h2 className="text-xl font-poppins font-semibold text-left text-[24px] ">
              Shopping Cart
            </h2>
          </div>

          <div className="w-[80%] h-[1px] bg-[#D9D9D9]" />

          {/* Scrollable Cart Items */}
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[50vh] px-2">
            {cartCount > 0 ? (
              <>
                {cartItems.map((cartItem) => (
                  <div className="flex flex-wrap gap-4 sm:gap-8 items-center" key={cartItem.id}>
                    {/* Image */}
                    <Image
                      src={urlFor(cartItem.productImage).url()}
                      alt="grey sofa"
                      width={80}
                      height={40}
                      className="w-[80px] sm:w-[100px]"
                    />
                    {/* Details */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <h1 className="text-sm sm:text-base font-poppins">
                        {cartItem.title}
                      </h1>
                      <div className="flex gap-2 sm:gap-3 font-poppins items-center">
                        <p className="font-light text-xs sm:text-sm">
                          {cartItem.quantity}
                        </p>
                        <p className="font-light text-[10px] sm:text-[12px]">
                          X
                        </p>
                        <p className="font-medium text-[10px] sm:text-xs text-[#B88E2F]">
                          Rs {cartItem.price}
                        </p>
                      </div>
                    </div>
                    {/* Cross Sign */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="ml-auto "
                      onClick={() => {
                        handleRemoveCart(cartItem.id);
                      }}
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="#9F9F9F"
                        d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z"
                      />
                    </svg>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="p-5 text-gray-500 text-xl font-semibold text-center">
                  Your Cart is Empty
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {/* SubTotal */}
            <div className="flex flex-col sm:flex-row items-center justify-between font-poppins px-4 sm:px-7">
              <span className="text-sm sm:text-base">SubTotal</span>
              <span className="text-[#B88E2F] font-semibold text-sm sm:text-base">
                Rs {getTotalPrice()}
              </span>
            </div>

            {/* Card Links */}
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-between text-xs sm:text-sm border-t pt-5">
            <Link href="/cart">
              <button disabled={cartCount === 0} className="w-full sm:w-auto rounded-3xl py-2 px-4 ring-1 ring-gray-300 hover:bg-black hover:text-white">
                View Cart
              </button>
            </Link>

            <Link href="/checkout">
              <button disabled={cartCount === 0} className="w-full sm:w-auto rounded-3xl py-2 px-4 ring-1 ring-gray-300 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-75">
                Checkout
              </button>
            </Link>
            <Link href="/comparison">
              <button disabled={cartCount === 0} className="w-full sm:w-auto rounded-3xl py-2 px-4 ring-1 ring-gray-300 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-75">
                Compare
              </button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
