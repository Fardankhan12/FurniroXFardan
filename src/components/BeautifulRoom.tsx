

import Image from "next/image";
import Link from "next/link";
import React from "react";
import abc from "../public/assests/abc.png";
import white from "@/public/assests/white.png";

function BeautifulRoom() {
  return (
    <div className="h-[140vh] sm:h-[130vh]  md:h-[140vh] lg:h-[90vh]  flex flex-col lg:flex-row gap-7 items-center bg-[#FCF8F3] py-10 px-6 lg:px-16">
      {/* Info Div */}
      <div className="text-center lg:text-left flex flex-col gap-6 items-center lg:items-start">
        <h1 className="font-poppins text-[#3A3A3A] text-[30px] md:text-[40px] leading-[40px] font-bold">
          50+ Beautiful rooms <br />
          inspiration
        </h1>
        <p className="text-[#616161] font-poppins font-[500] text-[14px] md:text-[16px]">
          Our designer already made a lot of beautiful{" "}
          <br className="hidden md:block" /> prototypes of rooms that inspire
          you
        </p>
        <Link
          href="/shop"
          className="bg-[#B88E2F] text-white py-2 px-6 sm:px-8 lg:py-3 lg:px-10 
              font-poppins font-bold text-[12px] sm:text-[14px] lg:text-[16px] 
              w-[150px] sm:w-[180px] lg:w-[200px] text-center rounded-sm mt-4"
        >
          Explore More
        </Link>
      </div>

      {/* Inner Peace */}
      <div className="relative">
        <Image
          src={abc}
          alt="pink image"
          width={300}
          height={300}
          className="relative"
        />
        <div className="absolute z-10 w-[190px] h-[120px] p-7 top-[65%] left-[5%] bg-[#FFFFFFB8] flex flex-col">
          <p className="text-[14px] md:text-[16px] font-poppins text-[#616161] flex gap-3 items-center font-[500]">
            01 <span className="h-[1px] w-[12px] bg-[#616161]"></span> Bed Room
          </p>
          <p className="text-center text-[20px] md:text-[24px] font-poppins font-semibold text-[#3A3A3A] whitespace-nowrap">
            Inner Peace
          </p>
        </div>
        <div className="bg-[#B88E2F] h-9 w-10 text-center absolute top-[83%] left-[69%] flex items-center justify-center font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* White Image */}
      <div className="flex flex-col gap-3 items-center">
        <Image
          src={white}
          alt="White Image"
          className="object-cover h-[250px] md:h-[350px] lg:h-[400px] w-[280px] md:w-[300px] lg:w-[350px]"
        />

        <div className="flex gap-2">
          <div className="w-3 h-3 ring-1 rounded-full ring-[#B88E2F]  flex items-center justify-center">
            <div className="bg-[#B88E2F] h-1 w-1  rounded-full"></div>
          </div>

          <div className="w-3 h-3 ring-1 rounded-full ring-[#D8D8D8]  flex items-center justify-center">
            <div className="bg-[#D8D8D8] h-1 w-1 rounded-full"></div>
          </div>

          <div className="w-3 h-3 ring-1 rounded-full ring-[#D8D8D8]  flex items-center justify-center">
            <div className="bg-[#D8D8D8] h-1 w-1 rounded-full"></div>
          </div>

          <div className="w-3 h-3 ring-1 rounded-full ring-[#D8D8D8]  flex items-center justify-center">
            <div className="bg-[#D8D8D8] h-1 w-1 rounded-full"></div>
          </div>

          <div className="w-3 h-3 ring-1 rounded-full ring-[#D8D8D8]  flex items-center justify-center">
            <div className="bg-[#D8D8D8] h-1 w-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeautifulRoom;
