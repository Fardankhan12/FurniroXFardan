"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import ProductCard from "./ProductCard";
import {ProductInterface} from '@/components/Types'


function OurProducts() {
  const [products, setProducts] = useState<ProductInterface[]>(); // State to store products
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator
 

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/products");// https://ui-ux-hachaton-git-main-kulsoomadnans-projects.vercel.app
        const data: {
          success: boolean;
          products: ProductInterface[];
          message?: string;
        } = await response.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    }

    getData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (isLoading) {
    return <Skeleton />;
  }

  const filterProducts = products?.slice(0 ,8)

  return (
    <div className="py-8 flex flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-20 items-center sm:py-24">
      {/* Heading */}
      <h1 className="font-poppins uppercase tracking-wide font-bold  text-center text-3xl sm:text-[28px] lg:text-4xl text-[#333333]">
        Our Products
      </h1>

      {/* Product Grid */}
      <ul className="grid grid-cols-2 gap-3  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
        {filterProducts &&
          filterProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </ul>

      {/* Shop Now Button */}
      <Link
        href="/shop"
        className="rounded-sm w-[200px] text-center border border-[#B88E2F] text-[#B88E2F] font-poppins font-bold text-[16px] py-4 hover:bg-[#B88E2F] hover:text-white"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default OurProducts;
