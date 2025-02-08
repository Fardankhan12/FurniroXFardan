"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  productImage: string;
  rating?: number;
  description? : string
}

// Define the context type
interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (itemId: string) => void;
  isItemInWishlist: (itemId: string) => boolean;
}

// Create the Wishlist Context
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

// Wishlist Provider
export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlistItems.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  // Function to add an item to the wishlist
  const addToWishlist = (item: Product) => {
    const itemExists = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    if (!itemExists) {
      setWishlistItems((prevItems) => [...prevItems, item]);
    } else {
      alert("Item is already in the wishlist.");
    }
  };

  const isItemInWishlist = (itemId: string): boolean =>
    wishlistItems.some((item) => item.id === itemId);

  // Function to remove an item from the wishlist
  const removeFromWishlist = (itemId: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isItemInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use Wishlist context
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
