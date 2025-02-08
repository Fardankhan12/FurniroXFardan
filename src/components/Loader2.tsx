import React from "react";

const Loader2 = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <div className="relative w-16 h-16 mx-auto my-4 animate-rotation">
        {/* Outer Circle */}
        {/* <div className="absolute inset-0 m-auto w-full h-full border-4 border-[#D8B67B] border-t-[#B88E2F] rounded-full animate-rotation"></div> */}

        {/* Inner Circle (Before) */}
        <div
          className="absolute top-1/2 left-1/2 w-6 h-6 bg-[#B88E2F] rounded-full transform -translate-x-12 -translate-y-12 animate-bounce"
          style={{
            animation: "animloader 1s infinite ease-in-out",
          }}
        ></div>

        {/* Inner Circle (After) */}
        <div
          className="absolute top-1/2 left-1/2 w-6 h-6 bg-[#D8B67B] rounded-full transform scale-50 animate-bounce"
          style={{
            animation: "animloader 1s infinite ease-in-out 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loader2;
