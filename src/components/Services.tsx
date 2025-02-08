
import Image from 'next/image';
import React from 'react';
import trophy from '../public/assests/trophy.png';
import garanty from '../public/assests/guarantee.png';
import customer from '../public/assests/custome.png';
import Ship from '../public/assests/shipping.png';

function Services() {
  return (
    <div className="h-auto bg-[#FAF3EA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[60px] px-6 md:px-12 lg:px-16 justify-center items-center">
      {/* High Quality */}
      <div className="flex gap-4 items-center">
        <Image src={trophy} width={60} height={50} alt="trophy" />
        <div className="flex flex-col gap-2 font-poppins">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#242424]">High Quality</h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#898989]">crafted from top materials</p>
        </div>
      </div>
      {/* Warranty Protection */}
      <div className="flex gap-4 items-center">
        <Image src={garanty} width={60} height={60} alt="guarantee" />
        <div className="flex flex-col gap-2 font-poppins">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#242424] whitespace-nowrap">Warranty Protection</h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#898989]">Over 2 years</p>
        </div>
      </div>
      {/* Free Shipping */}
      <div className="flex gap-4 items-center">
        <Image src={Ship} width={60} height={60} alt="shipping" />
        <div className="flex flex-col gap-2 font-poppins">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#242424]">Free Shipping</h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#898989]">Order over 150 $</p>
        </div>
      </div>
      {/* 24/7 Support */}
      <div className="flex gap-4 items-center">
        <Image src={customer} width={60} height={60} alt="customer support" />
        <div className="flex flex-col gap-2 font-poppins">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#242424]">24 / 7 Support</h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#898989]">Dedicated Support</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
