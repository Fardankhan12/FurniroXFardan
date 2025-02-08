"use client";

import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: { asset: { url: string } };
  tags: string[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="p-4 bg-white shadow rounded">
            <img src={product.productImage.asset.url} alt={product.title} className="h-48 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <div className="text-sm text-gray-500">{product.tags.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
