"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductInterface } from "@/components/Types";
import RouteHero from "@/components/RouteHero";
import Loader2 from "@/components/Loader2";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params; // Get the category from dynamic route parameters
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch(`/api/categories?category=${category}`);//
      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      } else {
        console.error(data.message); // Handle error if no products found
      }
      setLoading(false);
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  if (loading) return <Loader2 />;

  return (
    <div className="h-max">
      <RouteHero prop={category.charAt(0).toUpperCase() + category.slice(1)} />
      <h1 className="text-2xl font-bold font-poppins text-center my-5 text-gray-700 md:text-4xl">
        Category {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <ul className="grid grid-cols-2 gap-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 px-4 py-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;



// "use client";

// import {  useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import ProductCard from "@/components/ProductCard";
// import Skeleton from "@/components/Skeleton";
// import { ProductInterface } from "@/components/Types";
// import RouteHero from "@/components/RouteHero";

// const CategoryPage = () => {
//   const [isClient, setIsClient] = useState(false); 
//    // Flag to enable client-side code
//   // Flag to enable client-side code
//   useEffect(() => {
//     setIsClient(true); // Set to true only after the component mounts
//   }, []);

//   const searchParams = useSearchParams(); // To access query parameters
//   const tag = searchParams.get("category");
//   // const { tag } = useParams(); // Get the dynamic tag (category) from the URL
//   const [products, setProducts] = useState<ProductInterface[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       const response = await fetch(`http://localhost:3000/api/categories?category=${tag}`); // Call the API route
//       const data = await response.json();

//       if (response.ok) {
//         console.log('Category' , data);
        
//         setProducts(data);
//       } else {
//         console.error(data.message); // Handle error if no products found
//       }
//       setLoading(false);
//     };

//     if (tag) {
//       fetchProducts();
//     }
//   }, [tag]);

//   if (loading) return <Skeleton />;

//   return (
   
//     <div className="h-max">
//       <RouteHero prop={typeof tag === 'string' ? tag.charAt(0).toUpperCase() + tag.slice(1) : 'Unknown'}/>
//       <h1 className="text-2xl font-bold font-poppins text-center my-5 text-gray-700 md:text-4xl">
//       Category {typeof tag === 'string' ? tag.charAt(0).toUpperCase() + tag.slice(1) : 'Unknown'} 
//       </h1>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4  py-10">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </ul>
//     </div>
  
//   );
// };

// export default CategoryPage;

