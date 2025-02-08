

import React from "react";

function Filter() {
  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-[100px] px-6 sm:px-16 py-4 sm:py-7 justify-between items-start sm:items-center bg-[#F9F1E7] w-full gap-4 sm:gap-0">
      {/* Filter Icons */}
      <div className="flex gap-4 sm:gap-6 items-center">
        <div className="flex gap-2 sm:gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
            />
          </svg>
          <p className="text-[14px] sm:text-[20px] font-poppins">Filter</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <rect width="40" height="40" fill="none" />
            <path
              fill="#000"
              d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m96 0a40 40 0 1 0 40 40a40 40 0 0 0-40-40"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#000"
              d="M4 18.77v-1h16v1zM4 6.23v-1h16v1zM5.616 15q-.691 0-1.153-.462T4 13.385v-2.77q0-.69.463-1.152T5.616 9h12.769q.69 0 1.153.463T20 10.616v2.769q0 .69-.462 1.153T18.384 15zm0-1h12.769q.23 0 .423-.192t.192-.423v-2.77q0-.23-.192-.423T18.384 10H5.616q-.231 0-.424.192T5 10.616v2.769q0 .23.192.423t.423.192M5 10v4z"
            />
          </svg>
        </div>
      </div>

      {/* Inputs and Dropdown */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
        <div className="flex gap-2 items-center">
          <label className="text-xs sm:text-sm">Show</label>
          <input
            type="text"
            name="min"
            placeholder="16"
            className="text-xs sm:text-sm rounded pl-2 w-16 sm:w-24 px-2 sm:px-4 py-1 sm:py-2 ring-1 ring-gray-400"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-xs sm:text-sm">Sorted by</label>
          <select
            name="sort"
            id=""
            className="py-1 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm font-medium bg-white ring-1 ring-gray-400 text-gray-400"
          >
            <option>Default</option>
            <option value="asc price">Price (low to high)</option>
            <option value="desc price">Price (high to low)</option>
            <option value="asc lastUpdated">Newest</option>
            <option value="desc lastUpdated">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;


// import React from "react";

// function Filter() {
//   return (
//     <div className="h-[100px] flex px-16  py-7 justify-between items-center bg-[#F9F1E7] w-full">
//       <div className="flex gap-6">
//         <div className="flex gap-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <rect width="24" height="24" fill="none" />
//             <path
//               fill="none"
//               stroke="#000"
//               stroke-linecap="round"
//               stroke-miterlimit="10"
//               stroke-width="1.5"
//               d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
//             />
//           </svg>
//           <p className="text-[20px] font-poppins ">Filter</p>
//         </div>
//         <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 256 256"
//           >
//             <rect width="40" height="40" fill="none" />
//             <path
//               fill="#000"
//               d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m96 0a40 40 0 1 0 40 40a40 40 0 0 0-40-40"
//             />
//           </svg>
//         </div>
//         <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <rect width="24" height="24" fill="none" />
//             <path
//               fill="#000"
//               d="M4 18.77v-1h16v1zM4 6.23v-1h16v1zM5.616 15q-.691 0-1.153-.462T4 13.385v-2.77q0-.69.463-1.152T5.616 9h12.769q.69 0 1.153.463T20 10.616v2.769q0 .69-.462 1.153T18.384 15zm0-1h12.769q.23 0 .423-.192t.192-.423v-2.77q0-.23-.192-.423T18.384 10H5.616q-.231 0-.424.192T5 10.616v2.769q0 .23.192.423t.423.192M5 10v4z"
//             />
//           </svg>
//         </div>
//       </div>

//       <div className="flex gap-5">
//         <div className="flex gap-2 items-center justify-center">
//           <label className="text-sm">Show</label>
//           <input
//             type="text"
//             name="min"
//             placeholder="16"
//             className="text-sm rounded pl-2 w-24 px-4 py-2 ring-1 ring-gray-400"
//           />
//         </div>

//         <div className="flex gap-2 items-center">
//           <label className="text-sm">Sorted by</label>
//           <select
//             name="sort"
//             id=""
//             className="py-2 px-4 rounded text-xs font-medium bg-white ring-1 ring-gray-400 text-gray-400"
//           >
//             <option>Default</option>
//             <option value="asc price">Price (low to high)</option>
//             <option value="desc price">Price (high to low)</option>
//             <option value="asc lastUpdated">Newest</option>
//             <option value="desc lastUpdated">Oldest</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Filter;
