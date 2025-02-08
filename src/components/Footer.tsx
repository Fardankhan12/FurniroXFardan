import Link from "next/link";
import React from "react";
import logo from "../public/assests/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="h-[800px] sm:h-[700px] md:h-[990px] lg:h-[500px] flex flex-col justify-between py-10 lg:px-16 px-9 gap-7 border-t border-[#D9D9D9] overflow-hidden">
      {/* Footer Links Section */}
      <div className=" h-[300px] md:h-[500px] lg:grid lg:px-5  lg:grid-cols-6 gap-8 md:items-start flex flex-col ">
        {/* Brand Section */}
        <div className="lg:col-span-2 flex flex-col md:gap-14 gap-8 md:col-span-1">
        <div className="flex ">
        <Image src={logo} width={35} alt="logo" height={35} />
          <h1 className="font-poppins font-bold text-[24px]">Funiro.</h1>
        </div>
          <div className="flex flex-col font-poppins text-[16px] gap-1 text-[#9F9F9F] font-normal">
            <p>400 University Drive Suite 200 Coral</p>
            <p>Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="col-span-1 flex flex-col md:gap-8 gap-4 font-poppins ">
          <h1 className="text-[16px] text-[#9F9F9F] font-[500] self-start">
            Links
          </h1>
          <ul className="flex flex-col md:gap-8 gap-4">
            <li className="text-[16px] font-[500]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[16px] font-[500]">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="text-[16px] font-[500]">
              <Link href="/about">About</Link>
            </li>
            <li className="text-[16px] font-[500]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="col-span-1 flex flex-col md:gap-10 gap-6 font-poppins ">
          <h1 className="text-[16px] text-[#9F9F9F] font-[500] self-start">
            Help
          </h1>
          <ul className="flex flex-col gap-4 md:gap-8">
            <li className="text-[16px] font-[500]">
              <Link href="/">Payment Options</Link>
            </li>
            <li className="text-[16px] font-[500]">
              <Link href="/">Returns</Link>
            </li>
            <li className="text-[16px] font-[500]">
              <Link href="/">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        {/* Payment Section */}
        <div className="lg:col-span-2 flex flex-col md:gap-8 gap-4 font-poppins col-span-1">
          <h1 className="text-[16px] text-[#9F9F9F] font-[500] self-start">
            Newsletter
          </h1>
          <div className="flex  lg:gap-3">
            <input
              placeholder="Enter Your Email Address"
              className="text-[#9F9F9F] text-[14px] focus:outline-none focus:border-b border-black pl-1 pr-6"
              type="text"
            />
            <button className="hover:text-[#9F9F9F] text-[14px] hover:border-b border-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[95%] mx-auto h-[1px] bg-[#9F9F9F] my-8 hidden lg:flex"></div>

      {/* Footer Bottom Section */}
      <div className="lg:text-left text-black text-[16px] px-8 font-poppins font-normal text-center">
        <p>{new Date().getFullYear()} Funiro. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;

