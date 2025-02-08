"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProductInterface } from "./Types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductInterface[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  // Toggle search input visibility
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Fetch search results
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() !== "") {
        setIsSearching(true);

        try {
          const response = await fetch(
            `/api/search?query=${searchQuery}`
          );
          const data = await response.json();

          if (data.success) {
            setSearchResults(data.products); // Set fetched products
            console.log(data.products); // Set fetched products
          } else {
            setSearchResults([]); // Handle no results
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]); // Clear results if input is empty
      }
    };

    const debounceTimer = setTimeout(fetchSearchResults, 300); // Debounce API calls

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  // Handle product click
  const handleProductClick = (productId: string) => {
    router.push(`/shop/${productId}`);
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Icon */}
      <div
        onClick={handleSearchClick}
        className="cursor-pointer rounded-full hover:bg-gray-200"
      >
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
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

      {/* Search Input Field */}
      {isSearchOpen && (
        <div className="absolute top-full right-0 mt-4 bg-white border border-black rounded-2xl shadow-lg w-72 z-50">
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="rounded-2xl px-4 py-2 focus:outline-none bg-transparent transition w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Dropdown Results */}
          {isSearching ? (
            <div className="p-4 text-gray-500 text-sm">Searching...</div>
          ) : searchResults.length > 0 ? (
            <ul className="max-h-60 overflow-y-auto mt-2">
              {searchResults.map((product) => (
                <li
                  key={product.title}
                  onClick={() => handleProductClick(product.title)}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {/* Product Image */}
                  <Image
                    width={12}
                    height={12}
                    src={urlFor(product.productImage).url()} // Replace with your placeholder if image is unavailable
                    alt={product.title}
                    className="w-12 h-12 rounded-md object-cover mr-3"
                  />
                  {/* Product Details */}
                  <div>
                    <h3 className="font-semibold text-sm">{product.title}</h3>
                    <p className="text-xs text-gray-500">
                      {product.description.slice(0, 50)}...
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            searchQuery && (
              <div className="p-4 text-gray-500 text-sm">
                No products found.
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
