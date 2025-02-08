"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductImages from "@/components/ProductImages";
import star from "../../../public/assests/star.png";
import halfstar from "../../../public/assests/halfStart.png";

import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Description from "@/components/Description";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/Hooks/Context/CartContext";
import AdditionalInfo from "@/components/AdditionalInfo";

import { ProductInterface } from "@/components/Types";
import Loader2 from "@/components/Loader2";
import { Slide, toast } from "react-toastify";

function ProductPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [product, setProduct] = useState<ProductInterface>();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { title } = params;
  const notify = () => toast.success("Item Added to Cart!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    });

  const handleAddToCart = (product: ProductInterface) => {
    const productToAdd = {
      id: product._id,
      title: product.title,
      price: product.price,
      productImage: product.productImage,
      quantity: 1,
    };
    addToCart(productToAdd);
    console.log("cart items", productToAdd);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `/api/products/${params.title}`
        );
        const data = await res.json();
        if (res.ok) {
          // console.log(data);

          setProduct(data);
        } else {
          console.error(data.message);
        }

        const response = await fetch(`https://ui-ux-hachaton-git-main-kulsoomadnans-projects.vercel.app/api/products`);
        const ProductsData = await response.json();
        if (res.ok) {
          // console.log(ProductsData.products);

          setProducts(ProductsData.products);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.title]);

  if (typeof title !== "string") {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Invalid product title!</p>
      </div>
    );
  }

  if (!product) {
    return <Loader2 />;
  }
  if (isLoading) {
    return <Loader2 />;
  }

  const relatedProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col h-auto pb-10">
      {/* BreadCrums */}
      <div className="lg:h-[80px] sm:h-[70px] h-[50px] bg-[#F9F1E7] flex items-center px-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              {/* Dynamic Title from URL */}
              <BreadcrumbLink href={`/shop/${title}`}>
                {product.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* product Details */}

      <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 mt-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
          <ProductImages items={urlFor(product.productImage).url()} />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6  ">
          <h1 className="text-4xl font-medium ">{product.title}</h1>

          {
            product.price === product.discountedPrice ? (
              <h2 className="text-2xl font-medium">Rs {product.price}</h2>
            ) : (
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-medium">Rs {product.price}</h2>
                <h3 className="text-xl text-gray-500 line-through">
                  Rs {product.discountedPrice}
                </h3>
              </div>
            )
          }

          {/* Reviews */}

          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={halfstar} width={20} height={20} />
            </div>

            <div className="border-l border-[#9F9F9F] text-[#9F9F9F] text-[14px]  pl-4 py-3">
              {" "}
              5 Customer Review{" "}
            </div>
          </div>

          <p className="text-[13px] line-clamp-6">{product.description}</p>

          {/* Sizes */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[#9F9F9F] text-sm ">Size</h1>
            <div className="flex items-center gap-4">
              <div className=" rounded-lg  bg-[#F9F1E7] hover:bg-[#B88E2F] h-8 w-8  text-black flex justify-center items-center  hover:text-white ">
                L
              </div>
              <div className=" rounded-lg  bg-[#F9F1E7] hover:bg-[#B88E2F] h-8 w-8  text-black  flex justify-center items-center  hover:text-white ">
                XL
              </div>
              <div className=" rounded-lg  bg-[#F9F1E7] hover:bg-[#B88E2F] h-8 w-8  text-black  flex justify-center items-center  hover:text-white ">
                XS
              </div>
            </div>
          </div>

          {/* color */}

          <div className="flex flex-col gap-4">
            <h1 className="text-[#9F9F9F] text-sm ">Color</h1>
            <div className="flex items-center gap-4">
              <div className=" rounded-full   bg-black  h-8 w-8 text-center t"></div>
              <div className=" rounded-full  bg-[#B88E2F]  h-8 w-8 text-center "></div>
              <div className=" rounded-full  bg-[#816DFA]  h-8 w-8 text-center   "></div>
            </div>
          </div>

          <div className="flex gap-4 ">
            <AdditionalInfo />
            <div
              className="w-[190px] text-center border border-black py-2 rounded-md  hover:bg-black hover:text-white"
              onClick={() => {notify(); handleAddToCart(product)}}
            >
              Add to Cart
            </div>
            <Link
              href="/comparison"
              className="w-[190px] text-center border border-black py-2 rounded-md hover:bg-black hover:text-white"
            >
              <div className="">+ Compare</div>
            </Link>
          </div>

          <div className="bg-gray-200 h-[2px]" />

          <div className="flex flex-col text-[#9F9F9F] font-poppins items-start gap-4">
            <div className="flex flex-col items-center ">SKU : SS0001</div>
            <div className="flex flex-col items-center ">Category : Sofas</div>
            <div className="flex flex-col items-center ">
              Tags : Sofa , Chair , Home , Shop
            </div>
            <div className="flex  gap-5 items-center ">
              <p>Share</p>
              <div className="flex gap-4">
                <p>
                  <FaFacebook className="text-black" />
                </p>
                <p>
                  <FaLinkedin className="text-black" />
                </p>
                <p>
                  <FaTwitter className="text-black" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}

      <div className="py-8">
        <Description
          description={product.description}
          image={urlFor(product.productImage).url()}
        />
      </div>

      {/* Related Products */}
      {/* Heading */}
      <h1 className="font-poppins font-[500] text-center text-2xl sm:text-[28px] lg:text-4xl text-[#333333]">
        Related Products
      </h1>
      <div className="flex flex-col gap-4 w-full py-16 px-10">
        <ul className="grid grid-cols-2 gap-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {relatedProducts.length === 0 ? (
            <p className="text-center text-3xl p-5">No related products found.</p>
          ) : (
            relatedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </ul>
        {/* Shop Now Button */}
      </div>
      <Link
        href="/shop"
        className="mx-auto rounded-sm w-[200px] text-center border border-[#B88E2F] text-[#B88E2F] font-poppins font-bold text-[16px] py-4 hover:bg-[#B88E2F] hover:text-white"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default ProductPage;
