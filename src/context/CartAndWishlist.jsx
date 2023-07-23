import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartAndWishlistContext = createContext() //create context

export function CartAndWishlistProvider({ children }) {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        cart.length && localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        wishlist.length && localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    return (
        <CartAndWishlistContext.Provider value={{ cart, wishlist, setCart, setWishlist }}>
            {children}
        </CartAndWishlistContext.Provider>
    )
};

