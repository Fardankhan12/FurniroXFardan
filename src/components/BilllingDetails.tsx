"use client";
import { useCart } from "@/Hooks/Context/CartContext";
import React, { useState } from "react";
import Loader from "./Loader";

interface customerDetailsProps {
  handleCustomers: (e: React.FormEvent) => void;
  isProcessing : boolean
}

function BillingDetails({ handleCustomers , isProcessing  }: customerDetailsProps) {
  const { cartItems, getTotalPrice } = useCart();
  const [loading, setIsLoading] = useState(false);

  const handlePlaceOrder = async () => {
    const syntheticEvent = {
      preventDefault: () => {},
      stopPropagation: () => {},
    } as React.FormEvent;
    handleCustomers(syntheticEvent);

    setIsLoading(true);
  };

  if(loading){
    console.log('getting Products from Cart')
  }

  return (
    <div className="flex flex-col p-6 md:p-10 lg:p-20 gap-8">
      {/* Product Details */}

      <div className="flex  flex-col  md:justify-between gap-8 font-poppins">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex justify-between w-full">
            <h1 className="text-lg md:text-xl font-bold">Product</h1>
            <h1 className="text-lg md:text-xl font-bold">Subtotal</h1>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 font-poppins ">
            {cartItems.map((item) => (
              <div className="flex  justify-between w-full" key={item.id}>
                <p className="text-black text-sm tracking-widest ">
                  <span className="text-gray-400">{item.title}</span> x{" "}
                  {item.quantity}
                </p>
                <p className="text-gray-400 text-sm md:text-md">
                  Rs {item.quantity * item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm text-gray-400  md:text-md">
              Rs {getTotalPrice()}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-sm">Total</p>
            <p className="text-lg md:text-xl text-[#B88E2F] font-semibold">
              Rs {getTotalPrice()}
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-gray-200 h-px" />

      {/* Payment Details */}
      <div className="flex flex-col gap-6">
        {/* Payment Method */}
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 bg-black rounded-full"></div>
          <h1 className="text-sm md:text-md font-poppins">
            Direct Bank Transfer
          </h1>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-3">
          <p className="text-sm md:text-md text-gray-500 font-light w-full md:w-[400px]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          {/* Payment Options */}
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 ring-1 ring-gray-400 rounded-full"></div>
            <h1 className="text-sm text-gray-500 font-light">
              Direct Bank Transfer
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-3 w-3 ring-1 ring-gray-400 rounded-full"></div>
            <h1 className="text-sm text-gray-500 font-light">
              Cash on Delivery
            </h1>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="text-sm md:text-md text-black font-light">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-bold">Privacy Policy</span>.
        </div>
      </div>

      {/* Place Order Button */}
      <div className="flex justify-center md:justify-start">
        {/* <Link href='/orderconfirmation'> */}
        { isProcessing ? <Loader/> : null}
        <button 
          onClick={handlePlaceOrder}
          disabled={isProcessing}
          className="w-full md:w-[200px] text-center text-black hover:bg-[#B88E2F] hover:text-white rounded-md font-poppins text-sm py-3 border hover:border-white border-black"
        >
          {isProcessing ? "Placing the Order..." : "Place the Order"}
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default BillingDetails;
