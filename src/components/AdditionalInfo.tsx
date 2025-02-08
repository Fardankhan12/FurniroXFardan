"use client";
import React, { useState } from "react";

function AdditionalInfo() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-[110px]  items-center flex gap-4 rounded-md py-2 border px-4 border-[#9F9F9F]">
      <div
        onClick={() => {
          if (count > 0) {
            setCount(count - 1); // Decrement only if count is greater than 0
          }
        }}
        className="cursor-pointer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path fill="#000" d="M19 12.998H5v-2h14z" />
        </svg>
      </div>
      <div>{count}</div>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className="cursor-pointer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <rect width="18" height="18" fill="none" />
          <path fill="#000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
        </svg>
      </div>
    </div>
  );
}

export default AdditionalInfo;
