import React from "react";

function Skeleton() {
  return (
    <div className="w-full animate-pulse">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 py-8  px-4 sm:px-6 md:px-10 lg:px-20 items-center sm:py-24">

        {/* <!-- Add as many skeleton cards as you want to display --> */}
        <li className="bg-gray-200 flex flex-col h-auto sm:h-96 gap-5 relative group cursor-pointer shadow-md">
          {/* <!-- Skeleton version of Product Image --> */}
          <div className="h-48 sm:h-64 bg-gray-300 rounded-t-lg"></div>

          {/* <!-- Skeleton version of Product Details --> */}
          <div className="flex flex-col gap-2 items-start px-4 pb-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="flex lg:gap-2 gap-8 items-center ">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </li>
        <li className="bg-gray-200 flex flex-col h-auto sm:h-96 gap-5 relative group cursor-pointer shadow-md">
          {/* <!-- Skeleton version of Product Image --> */}
          <div className="h-48 sm:h-64 bg-gray-300 rounded-t-lg"></div>

          {/* <!-- Skeleton version of Product Details --> */}
          <div className="flex flex-col gap-2 items-start px-4 pb-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="flex lg:gap-2 gap-8 items-center ">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </li>
        <li className="bg-gray-200 flex flex-col h-auto sm:h-96 gap-5 relative group cursor-pointer shadow-md">
          {/* <!-- Skeleton version of Product Image --> */}
          <div className="h-48 sm:h-64 bg-gray-300 rounded-t-lg"></div>

          {/* <!-- Skeleton version of Product Details --> */}
          <div className="flex flex-col gap-2 items-start px-4 pb-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="flex lg:gap-2 gap-8 items-center ">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </li>
        <li className="bg-gray-200 flex flex-col h-auto sm:h-96 gap-5 relative group cursor-pointer shadow-md">
          {/* <!-- Skeleton version of Product Image --> */}
          <div className="h-48 sm:h-64 bg-gray-300 rounded-t-lg"></div>

          {/* <!-- Skeleton version of Product Details --> */}
          <div className="flex flex-col gap-2 items-start px-4 pb-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="flex lg:gap-2 gap-8 items-center ">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skeleton;





