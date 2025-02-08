import React from 'react'
import ImagesFile from './ImagesFile'



function Furniture() {
  return (
    
    <div className="h-auto py-14 flex flex-col  ">
  {/* Headings */}
  <div className="text-[#616161] text-center font-poppins font-semibold text-[16px] sm:text-[20px]">
    Share your setup with
  </div>
  <div className="text-[#3A3A3A] text-center font-poppins font-bold text-[24px] sm:text-[40px]">
    #FuniroFurniture
  </div>

  {/* Images Component */}
  <div className="overflow-x-scroll  mt-5  hide-scrollbar">
    <ImagesFile />
  </div>
</div>
  )
}

export default Furniture