"use client";
import RouteHero from "../../components/RouteHero";
import Services from "../../components/Services";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useCart } from "../../Hooks/Context/CartContext"
import { urlFor } from "../../sanity/lib/image";

function Cartpage() {
  const { cartItems, removeFromCart, cartCount, getTotalPrice } = useCart();
  const handleRemoveCart = (id: string) => {
    removeFromCart(id);
    console.log("Product has been  removed form Cart");
  };

  console.log("Card Items", cartItems);

  return (
    <div className="h-auto">
      {/* Hero Section */}
      <RouteHero prop="Cart" />

      {/* Main Cart Section */}

      <div className="flex flex-col lg:flex-row p-6 md:p-16 lg:py-28 gap-6 lg:gap-16">
        {/* Cart Items Section */}
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          {/* Card Headings */}
          <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center">
            <div className="flex flex-wrap  justify-between items-center px-4 lg:px-20 md:px-10 font-poppins font-medium w-full text-sm md:text-base">
              <div className="flex items-center  md:ml-8 md:flex-1 md:justify-around  justify-between w-full ">
                <p className="">Product</p>
                <p className="pl-10 ">Price</p>
              </div>
              <div className="md:flex items-center gap-4 justify-end md:gap-10 hidden ">
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>
          </div>

          {/* Cart Item */}
          {cartCount > 0 ? (
            <>
              {cartItems.map((items) => (
                <div
                  key={items.id}
                  className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-10 lg:gap-20 p-4 md:p-6 rounded-lg font-poppins bg-white"
                >
                  <Image
                    src={
                      items.productImage ? urlFor(items.productImage).url() : ""
                    }
                    width={60}
                    height={60}
                    alt="Product Image"
                    className="flex-shrink-0"
                  />
                  <p className="text-xs md:text-base text-[#9F9F9F] flex-grow">
                    {items.title}
                  </p>
                  <p className="text-xs md:text-base text-[#9F9F9F] ">
                    Rs.{items.price}
                  </p>
                  <div className="flex items-center gap-10 sm:gap-20 md:gap-4 lg:gap-10">
                    <p className="border border-gray-500 w-[50px] text-center rounded-md">
                      {items.quantity}
                    </p>

                    <p className="text-sm md:text-base text-black">
                      Rs.{items.quantity * items.price}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1024 1024"
                      className="cursor-pointer"
                      onClick={() => handleRemoveCart(items.id)}
                    >
                      <rect width="1024" height="1024" fill="none" />
                      <path
                        fill="#B88E2F"
                        d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32m-200 0H360v-72h304z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-xl text-[#9F9F9F] font-poppins text-center p-10 font-semibold">
              Your Cart is Empty
            </div>
          )}
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-full max-w-md p-6 md:p-8 bg-[#F9F1E7] rounded-lg">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-8">
              Cart Totals
            </h1>
            <div className="flex flex-col gap-6">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Subtotal</p>
                <p className="text-sm md:text-base text-[#9F9F9F]">
                  Rs.{getTotalPrice()}
                </p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Total</p>
                <p className="text-lg md:text-xl text-[#B88E2F]">
                  Rs. {getTotalPrice()}
                </p>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout">
              <button
                disabled={cartCount === 0}
                className="block mt-8 w-full py-3 text-center text-sm md:text-base border border-black rounded-md hover:text-white hover:bg-black transition"
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
}

export default Cartpage;

{
  /* <div className="flex flex-col gap-10 w-full lg:w-2/3"> */
}
{
  /* Card Headings */
}
{
  /* <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center ">
  <div className=" flex gap-16 items-center   px-8   font-poppins font-[500] w-full text-sm md:text-base">
    <div className="flex gap-16 pl-20  items-center w-full">
      <p>Product</p>
      <p className="pl-5">Price</p>
    </div>

    <div className="flex gap-10  items-center justify-center w-full">
      <p>Quantity</p>
      <p>Subtotal</p>
    </div>
  </div>
</div> */
}

{
  /* Cart Item */
}
{
  /* {cartCount > 0 ? <>
{cartItems.map((items) => (
  <>
    <div className="flex flex-nowrap items-center md:gap-10 lg:gap-20 p-4 md:p-6  rounded-lg font-poppins bg-white">
      <Image
        src={urlFor(items.image).url()}
        width={60}
        height={60}
        alt="Product Image"
      />
      <p className="text-xs md:text-base text-[#9F9F9F] ">
        {items.Title}
      </p>
      <p className="text-xs md:text-base text-[#9F9F9F]">
        Rs.{items.price}
      </p>
      <div className="flex gap-10">
        <p className="border border-gray-500 w-[50px] text-center rounded-md">
          {items.quantity}
        </p>
        <p className="text-sm md:text-base text-black">
          Rs.{getTotalPrice()}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          className="cursor-pointer"
          onClick={() => handleRemoveCart(items.id)}
        >
          <rect width="1024" height="1024" fill="none" />
          <path
            fill="#B88E2F"
            d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32m-200 0H360v-72h304z"
          />
        </svg>
      </div>
    </div>
  </>
))}
</>
: <div className="text-xl text-[#9F9F9F] font-poppins text-center p-10 font-semibold">
  {" "}
  Your Cart is Empty
</div>}
</div> */
}
