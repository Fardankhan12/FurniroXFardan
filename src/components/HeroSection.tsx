import React from 'react';
import hero from '../public/assests/hero1.jpeg'; // Correct folder name: assets
import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="w-full h-[70vh] md:h-[90vh] lg:h-screen bg-[#eeeeee] flex justify-center items-center relative overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full lg:w-[90%] h-full">
        <Image
          src={hero}
          alt="hero pic"
          
          
          className="w-full h-full md:object-cover object-cover"
        />

        {/* Overlaid Div */}
        <div
          className="absolute top-[40px] sm:top-[90px] lg:top-[130px] 
          right-2 sm:right-2 lg:right-0 
          w-[95%] sm:w-[55%] md:w-[60%] lg:w-[580px] 
          h-auto bg-[#FFF3E3] z-10 shadow-lg rounded-md p-5 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-5">
            {/* Subtitle */}
            <p className="tracking-[2px] sm:tracking-[3px] font-semibold font-poppins text-[14px] sm:text-[16px]">
              New Arrival
            </p>

            {/* Title */}
            <div className="flex flex-col gap-2">
              <div className="text-[#B88E2F] font-poppins font-bold text-2xl sm:text-4xl sm:leading-[40px] lg:text-5xl lg:leading-[60px]">
                Discover Our <p> New Collection</p>
              </div>
              <p className="text-[14px] sm:text-[16px] font-poppins font-medium leading-[20px] mt-2 sm:leading-[20px]">
                Explore premium sofas designed to elevate your living space. Comfort, style, and quality all in one place.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/shop"
              className="bg-[#B88E2F] text-white py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 
              font-poppins font-bold text-[12px] sm:text-[14px] lg:text-[16px] 
              w-[150px] sm:w-[180px] lg:w-[200px] text-center rounded-md mt-4"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;




