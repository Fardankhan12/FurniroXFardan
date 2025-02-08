"use client";
import Filter from "@/components/Filter";
import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import PaginationUi from "@/components/Pagination";
import { ProductInterface } from "@/components/Types";
import Loader2 from "@/components/Loader2";


function Page() {
  const [products, setProducts] = useState<ProductInterface[]>([]); // State to store products
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator
  const [Error, setError] = useState(''); // State for loading indicator
  const [currentPage, setCurrentPage] = useState(1); // State for current Page
  const itemsPerPage = 8; // Number of products to display per Page

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch("/api/products");
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error("Failed to fetch products:", data.message);
          setError('Failed to fetch products. Please try again later.');
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError('Products not found. Please check your connection.')
      } finally {
        setIsLoading(false); // Stop loading
      }
    }

    getData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Pagination Logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <Loader2 />;
  }
  console.log(products);
  return (
    <div className="h-auto overflow-hidden">
      <RouteHero prop="Shop" />
      <Filter />

         {/* Error message */}
         {Error && (
        <div className="text-red-500 text-center p-4 bg-red-100 rounded mb-4">
          <p>{Error}</p>
        </div>
      )}

      {/* Product Grid */}
      <div className="w-full py-20 px-10">
        <ul className="grid grid-cols-2 gap-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {currentProducts &&
            currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </ul>
      </div>
      <div className="pb-10">
        <PaginationUi
          totalProducts={products?.length}
          productsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <Services />
    </div>
  );
}

export default Page;
