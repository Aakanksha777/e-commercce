import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartAndWishlistContext = createContext() //create context

export function CartAndWishlistProvider({ children }) {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(cart)
    }, [cart])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        console.log(wishlist)
    }, [wishlist])

    return (
        <CartAndWishlistContext.Provider value={{ cart, wishlist, setCart, setWishlist }}>
            {children}
        </CartAndWishlistContext.Provider>
    )
};

