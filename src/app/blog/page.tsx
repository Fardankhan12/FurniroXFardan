import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import pen from "../../../src/public/assests/silverpen.jpeg";
import readmore from "../../../src/public/assests/readmore.jpeg";
import blur from "../../../src/public/assests/blur.jpeg";
import green from "../../../src/public/assests/green.jpeg";
import tea from "../../../src/public/assests/tea.jpeg";
import React from "react";
import Blog from "@/components/Blog";
import Image from "next/image";

function page() {
  return (
    <div className="h-auto">
      <RouteHero prop="Blog" />
      <div className="h-auto p-10 lg:p-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[70%]">
          <Blog />
        </div>
        <div className="w-full lg:w-[30%] flex flex-col gap-12">
          
            {/* Search Box */}
          <div className="flex flex-col gap-5">
            <div className="flex rounded-[4px] bg-[#F5F5F5] justify-between">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-[#F5F5F5] w-full lg:w-[200px] h-[38px] py-[7px] text-sm pl-[20px] pr-[12px] focus:outline-none"
              />
              <svg
                className="mt-2 mr-2 p-1 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
                />
              </svg>
            </div>
          </div>
          {/* Category List */}
          <div className="flex flex-col p-10 gap-5">
            
            <h1 className="font-poppins text-[24px] font-[500]">Category</h1>
            {["Crafts", "Design", "HandMade", "Interior", "Wood"].map(
              (category, index) => (
                <div className="flex justify-between" key={index}>
                  <p className="font-poppins font-normal text-[#9F9F9F] text-[16px]">
                    {category}
                  </p>
                  <p className="font-poppins font-normal text-[#9F9F9F] text-[16px]">
                    {Math.floor(Math.random() * 10)} {/* Random numbers for demo */}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Recent Posts */}
          <div className="flex flex-col gap-7 p-10">
            <h1 className="font-poppins text-[24px] font-[500]">Recent Posts</h1>
            {[
              { src: pen, title: "Going all-in with millennial design", date: "03 Aug 2022" },
              { src: readmore, title: "Exploring new ways of decorating", date: "03 Aug 2022" },
              { src: blur, title: "Handmade pieces that took time to make", date: "03 Aug 2022" },
              { src: green, title: "Modern home in Milan", date: "03 Aug 2022" },
              { src: tea, title: "Colorful office redesign", date: "03 Aug 2022" },
            ].map((post, index) => (
              <div className="flex gap-4 items-center" key={index}>
                <div className="h-20 w-28">
                  <Image
                    src={post.src}
                    alt={post.title}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start font-poppins">
                  <p className="text-sm">{post.title}</p>
                  <p className="text-[12px] text-[#9F9F9F]">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default page;
