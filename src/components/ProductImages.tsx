import React from "react";

import Image from "next/image";
interface ProductImagesProps {
  items: string; // `items` can be a string (URL of the image) or undefined
}
function ProductImages({ items }: ProductImagesProps) {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex md:flex-row justify-between gap-4 mt-8 ">
        <div
          className="w-1/4 h-32 relative mt-8 gap-4 cursor-pointer "
          // key={item}
        >
          <Image
            src={items}
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
        <div
          className="w-1/4 h-32 relative mt-8 gap-4 cursor-pointer "
          // key={item}
        >
          <Image
            src={items}
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
