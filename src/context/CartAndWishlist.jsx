import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const CartAndWishlistContext = createContext(); //create context

// This "CartAndWishlistProvider" manages cart and wishlist state -
export function CartAndWishlistProvider({ children }) {
  // fetching cart and wishlist data from local Storage
  const hasCartValue = JSON.parse(localStorage.getItem("cart") || []);
  const hasWishlistValue = JSON.parse(localStorage.getItem("wishlist") || []);

  // setting up the states :
  const [cart, setCart] = useState(hasCartValue ? hasCartValue : []);
  const [wishlist, setWishlist] = useState(
    hasWishlistValue ? hasWishlistValue : []
  );

  // Update local storage when the cart or wishlist state changes.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Provide cart and wishlist state and update functions to the children components.
  return (
    <CartAndWishlistContext.Provider
      value={{ cart, wishlist, setCart, setWishlist }}
    >
      {children}
    </CartAndWishlistContext.Provider>
  );
}
