import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartAndWishlistContext = createContext() //create context

export function CartAndWishlistProvider({ children }) {
    const hasCartValue = JSON.parse(localStorage.getItem("cart"))
    const hasWishlistValue = JSON.parse(localStorage.getItem("wishlist"))
    const [cart, setCart] = useState(hasCartValue ? hasCartValue : [])
    const [wishlist, setWishlist] = useState(hasWishlistValue ? hasWishlistValue : [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    return (
        <CartAndWishlistContext.Provider value={{ cart, wishlist, setCart, setWishlist }}>
            {children}
        </CartAndWishlistContext.Provider>
    )
};

