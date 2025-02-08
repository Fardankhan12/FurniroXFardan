import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white opacity-70 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-[#f1e1a7] border-t-[#B88E2F] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
