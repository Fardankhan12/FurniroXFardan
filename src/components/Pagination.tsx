import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
 
} from "@/components/ui/pagination";

interface PaginationUiProps {
  totalProducts: number;
  productsPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

function PaginationUi({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
}: PaginationUiProps) {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
    <PaginationContent>
      <div className="gap-4 flex">
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              
              onClick={() => paginate(number)}
              isActive={number === currentPage}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </div>
      <div>
        <PaginationItem>
          <PaginationNext href="#" onClick={() => paginate(currentPage + 1)} />
        </PaginationItem>
      </div>
    </PaginationContent>
  </Pagination>
    // <Pagination>
    //   <PaginationContent >
    //     <div className="gap-4 flex ">
    //       <PaginationItem>
    //         <PaginationLink href="/" isActive>
    //           1
    //         </PaginationLink>
    //       </PaginationItem>
    //       <PaginationItem>
    //         <PaginationLink href="#">2</PaginationLink>
    //       </PaginationItem>
    //       <PaginationItem>
    //         <PaginationLink href="#">3</PaginationLink>
    //       </PaginationItem>
    //     </div>
    //     <div>
    //       <PaginationItem>
    //         <PaginationNext href="#" />
    //       </PaginationItem>
    //     </div>
    //   </PaginationContent>
    // </Pagination>
  );
}

export default PaginationUi;
