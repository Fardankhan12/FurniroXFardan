import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import { HiOutlineBars3 } from "react-icons/hi2";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <HiOutlineBars3 className="h-[24px] w-[24px] " />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-[40px] text-center">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col p-5 gap-10">
          <div className="flex gap-3  items-left">
            <SheetTitle>
              <Link href="/" className="hover:text-gray-500 text-[20px]">
                Home
              </Link>
            </SheetTitle>
          </div>
          <div className="flex gap-3  items-left">
            <SheetTitle>
              <Link href="/contact" className="hover:text-gray-500 text-[20px]">
                Contact
              </Link>
            </SheetTitle>
          </div>
          <div className="flex gap-3  items-left">
            <SheetTitle>
              <Link href="/blog" className="hover:text-gray-500 text-[20px]">
                Blog
              </Link>
            </SheetTitle>
          </div>
          <div className="flex gap-3  items-left">
            <SheetTitle>
              <Link href="/shop" className="hover:text-gray-500 text-[20px]">
                Shop
              </Link>
            </SheetTitle>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
