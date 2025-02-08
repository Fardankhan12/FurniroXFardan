import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import React from "react";

function page() {
  return (
    <>
      <RouteHero prop="contact" />
      <div className="py-10">
        {/* Intro */}
        <div className="flex justify-center items-center flex-col gap-4 mt-10 px-5">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-poppins text-center font-semibold">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] text-center text-[14px] sm:text-[16px]">
            For more information about our product & services, feel free to drop
            us <br/> an email. Our staff will always be there to help you out. Do not
            hesitate!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-10 lg:px-28 py-16">
          {/* Info Section */}
          <div className="flex flex-col gap-10">
            {/* Address */}
            <div className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="#000"
                    d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-poppins text-lg">Address</h1>
                <p className="text-sm text-[#000000]">
                  <p className="text-sm text-[#000000]">
                    236 5th SE Avenue, New <br /> York NY10000, <br /> United
                    States
                  </p>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="#000"
                    d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-poppins text-lg">Phone</h1>
                <p className="text-sm text-[#000000]">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="#000"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-poppins text-lg">Working Time</h1>
                <p className="text-sm text-[#000000]">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="col-span-1 flex justify-center md:items-center">
            <form className="flex flex-col gap-7 w-full max-w-[400px]">
              <div className="flex flex-col font-poppins items-start gap-2">
                <label className="text-[16px]">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-[#9F9F9F] border rounded-md px-9 py-3 text-[16px] w-full"
                />
              </div>

              <div className="flex flex-col font-poppins items-start gap-2">
                <label className="text-[16px]">Email Address</label>
                <input
                  type="email"
                  placeholder="jhon@gmail.com"
                  className="border-[#9F9F9F] border rounded-md px-9 py-3 text-[16px] w-full"
                />
              </div>

              <div className="flex flex-col font-poppins items-start gap-2">
                <label className="text-[16px]">Subject</label>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="border-[#9F9F9F] border rounded-md px-9 py-3 text-[16px] w-full"
                />
              </div>

              <div className="flex flex-col font-poppins items-start gap-2">
                <label className="text-[16px]">Message</label>
                <textarea
                  rows={4}
                  placeholder="Hi! I'd like to ask about"
                  className="border-[#9F9F9F] border rounded-md px-9 py-3 text-[16px] w-full"
                />
              </div>
              <button className="bg-[#B88E2F] w-full text-center text-white rounded font-poppins text-[14px] py-4 hover:bg-[#856620]">
                Submit
              </button>
            </form>
          </div>
          ;
        </div>
      </div>
      <Services />
    </>
  );
}

export default page;


