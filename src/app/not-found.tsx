import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col h-[90vh] justify-center relative p-4 md:p-8 lg:p-16 gap-y-10 md:gap-y-10">
      {/* Breadcrumb */}
      <Breadcrumb className="text-left">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>404 Error</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[48px] md:text-[64px] lg:text-[110px] font-poppins font-normal">
          404 Not Found
        </h2>
        <p className="text-[14px] md:text-[16px] font-poppins font-normal">
          Your visited page not found. You may go to the home page.
        </p>
        <Link
          href="/"
          className="px-6 md:px-10 lg:px-[48px] py-3 md:py-4 lg:py-[16px] bg-[#B88E2F] hover:bg-[#896d2d] text-white font-poppins font-medium mt-8 md:mt-12 lg:mt-16 rounded"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
