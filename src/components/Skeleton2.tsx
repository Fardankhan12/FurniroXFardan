import React from "react";

function Skeleton2() {
  return (
    <div className=" w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 mt-10">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max animate-pulse bg-gray-200"></div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
        <div className="h-12 bg-gray-200 rounded w-3/4"></div>
        <div className="h-10 bg-gray-200 rounded w-1/2"></div>
        <div className="flex items-center gap-4">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="border-l text-[#9F9F9F] text-[14px] pl-4 py-3">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
        <div className="h-32 bg-gray-200 rounded w-full"></div>
        <div className="flex flex-col gap-4">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[110px] flex gap-6 h-10 bg-gray-200 rounded"></div>
          <div className="w-[190px] h-10 bg-gray-200 rounded"></div>
          <div className="w-[190px] h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-gray-200 h-[2px]"></div>
        <div className="flex flex-col text-[#9F9F9F] font-poppins items-start gap-4">
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="flex gap-5 items-center ">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="flex gap-4">
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton2;
