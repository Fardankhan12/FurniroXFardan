import Image from "next/image";
import React from "react";
import laptop from "../public/assests/laptop.jpeg";
import black from "../public/assests/blackbook.jpeg";
import book from "../public/assests/book.jpeg";

function Blog() {
  return (
    <div className="h-auto flex flex-col gap-8">
        {/* Div 1  */}
      <div className="flex flex-col gap-5">
        {/* image */}
        <Image src={laptop} alt="laptop" className="object-cover rounded-md " />

        {/* info */}
        <div className="flex gap-10">
          {/*Admin  */}
          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44m0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"
                />
              </svg>
            </p>
            <p className="text-[16px]">Admin</p>
          </div>

          {/* date */}

          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2zm5-1v1h4V4z"
                />
              </svg>
            </p>
            <p className="text-[16px]">14 Oct 2022</p>
          </div>

          {/* Wood */}

          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M21.52 11.615a3.3 3.3 0 0 0-.76-1l-7-7a4.56 4.56 0 0 0-3.25-1.35H5.59a3.31 3.31 0 0 0-3.32 3.31v4.92a4.58 4.58 0 0 0 1.35 3.26l7 7a3.3 3.3 0 0 0 1.08.72c.401.171.833.26 1.27.26a3.33 3.33 0 0 0 2.34-1l2.73-2.72l2.72-2.72a3.3 3.3 0 0 0 .72-1.08a3.35 3.35 0 0 0 0-2.54zm-12.37.28a2.87 2.87 0 1 1 2.87-2.87a2.88 2.88 0 0 1-2.87 2.9z"
                />
              </svg>
            </p>
            <p className="text-[16px]">Wood</p>
          </div>
        </div>

        {/* Heading */}

        <div className="text-[30px] font-poppins font-[500]">
          Going all-in with millennial design
        </div>
        {/* Description */}

        <p className="text-sm text-[9F9F9F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>

        {/* Read More */}

        <h2 className="text-[16px] font-poppins  text-left">Read more</h2>
        {/* Separator */}
        <div className=" border-b border-black w-[10%] "></div>
      </div>

        {/* Div 2  */}
      <div className="flex flex-col gap-5">
        {/* image */}
        <Image src={book} alt="laptop" className="object-cover rounded-md h-[400px] " />

        {/* info */}
        <div className="flex gap-10">
          {/*Admin  */}
          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44m0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"
                />
              </svg>
            </p>
            <p className="text-[16px]">Admin</p>
          </div>

          {/* date */}

          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2zm5-1v1h4V4z"
                />
              </svg>
            </p>
            <p className="text-[16px]">14 Oct 2022</p>
          </div>

          {/* Wood */}

          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M21.52 11.615a3.3 3.3 0 0 0-.76-1l-7-7a4.56 4.56 0 0 0-3.25-1.35H5.59a3.31 3.31 0 0 0-3.32 3.31v4.92a4.58 4.58 0 0 0 1.35 3.26l7 7a3.3 3.3 0 0 0 1.08.72c.401.171.833.26 1.27.26a3.33 3.33 0 0 0 2.34-1l2.73-2.72l2.72-2.72a3.3 3.3 0 0 0 .72-1.08a3.35 3.35 0 0 0 0-2.54zm-12.37.28a2.87 2.87 0 1 1 2.87-2.87a2.88 2.88 0 0 1-2.87 2.9z"
                />
              </svg>
            </p>
            <p className="text-[16px]">Wood</p>
          </div>
        </div>

        {/* Heading */}

        <div className="text-[30px] font-poppins font-[500]">
        Exploring new ways of decorating
        </div>
        {/* Description */}

        <p className="text-sm text-[9F9F9F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>

        {/* Read More */}

        <h2 className="text-[16px] font-poppins  text-left">Read more</h2>
        {/* Separator */}
        <div className=" border-b border-black w-[10%] "></div>
      </div>

        {/* Div 3  */}
      <div className="flex flex-col gap-5">
        {/* image */}
        <Image src={black} alt="laptop" className="object-cover rounded-md " />

        {/* info */}
        <div className="flex gap-10">
          {/*Admin  */}
          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44m0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"
                />
              </svg>
            </p>
            <p className="text-[16px]">Admin</p>
          </div>

          {/* date */}

          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2zm5-1v1h4V4z"
                />
              </svg>
            </p>
            <p className="text-[16px]">14 Oct 2022</p>
          </div>

          {/* Wood */}

          <div className="flex gap-3 text-[#9F9F9F] items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#9F9F9F"
                  d="M21.52 11.615a3.3 3.3 0 0 0-.76-1l-7-7a4.56 4.56 0 0 0-3.25-1.35H5.59a3.31 3.31 0 0 0-3.32 3.31v4.92a4.58 4.58 0 0 0 1.35 3.26l7 7a3.3 3.3 0 0 0 1.08.72c.401.171.833.26 1.27.26a3.33 3.33 0 0 0 2.34-1l2.73-2.72l2.72-2.72a3.3 3.3 0 0 0 .72-1.08a3.35 3.35 0 0 0 0-2.54zm-12.37.28a2.87 2.87 0 1 1 2.87-2.87a2.88 2.88 0 0 1-2.87 2.9z"
                />
              </svg>
            </p>
            <p className="text-[16px]">Wood</p>
          </div>
        </div>

        {/* Heading */}

        <div className="text-[30px] font-poppins font-[500]">
        Handmade pieces that took time to make
        </div>
        {/* Description */}

        <p className="text-sm text-[9F9F9F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>

        {/* Read More */}

        <h2 className="text-[16px] font-poppins  text-left">Read more</h2>
        {/* Separator */}
        <div className=" border-b border-black w-[10%] "></div>
      </div>
    </div>
  );
}

export default Blog;


