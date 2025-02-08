
import Image from "next/image";
import React from "react";


 interface SaniyyData{
  description : string
  image : string
 }

function Description({description , image} : SaniyyData) {
  return (
    <div className="min-h-[90vh] py-10 px-4 md:px-16 flex flex-col gap-6 border-y border-[#D9D9D9]">
      {/* Headings */}
      <div className="flex flex-wrap gap-3 justify-center text-center">
        <h1 className="text-black font-normal text-[20px] md:text-[24px]">
          Description
        </h1>
        <h1 className="text-[#9F9F9F] font-normal text-[20px] md:text-[24px]">
          Additional Information
        </h1>
        <h1 className="text-[#9F9F9F] font-normal text-[20px] md:text-[24px]">
          Reviews [5]
        </h1>
      </div>

      {/* Description */}
      <div className="px-2 md:px-5 text-[#9F9F9F] flex flex-col gap-4">
        <p className="text-sm md:text-base">
          {description}
        </p>
       
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Image
          src={image}
          alt="sofa images"
          width={500}
          height={300}
          className="h-auto rounded-md shadow-md"
        />
        <Image
          src={image}
          width={500}
          height={300}
          alt="sofa images"
          className=" h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
}

export default Description;



// import Image from "next/image";
// import React from "react";

// import sofas from "@/public/assests/beidge.png"

// function Description() {
//   return (
//     <div className="h-[100vh] py-10 px-16 flex flex-col gap-4 border-y border-[#D9D9D9]">
//       {/* headings */}
//       <div className="flex gap-5 text-center justify-center">
//         <h1 className="text-black font-normal text-[24px]">Description</h1>
//         <h1 className="text-[#9F9F9F] font-normal text-[24px]">
//           Additional Information
//         </h1>
//         <h1 className="text-[#9F9F9F] font-normal text-[24px]">Reviews [5]</h1>
//       </div>

//       {/* description  */}
//       <div className="px-5  text-[#9F9F9F] flex flex-col gap-3">
//         <p className="text-sm">
//           Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
//           portable active stereo speaker takes the unmistakable look and sound
//           of Marshall, unplugs the chords, and takes the show on the road.
//         </p>
//         <p className="text-sm">
//           Weighing in under 7 pounds, the Kilburn is a lightweight piece of
//           vintage styled engineering. Setting the bar as one of the loudest
//           speakers in its class, the Kilburn is a compact, stout-hearted hero
//           with a well-balanced audio which boasts a clear midrange and extended
//           highs for a sound that is both articulate and pronounced. The analogue
//           knobs allow you to fine tune the controls to your personal preferences
//           while the guitar-influenced leather strap enables easy and stylish
//           travel.
//         </p>
//       </div>

//       <div className="flex gap-4">
//         <Image src={sofas} alt="sofa images"   />
//         <Image src={sofas} alt="sofa images"   />
//       </div>
//     </div>
//   );
// }

// export default Description;