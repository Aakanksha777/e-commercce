import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartAndWishlistContext = createContext() //create context

export function CartAndWishlistProvider({ children }) {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        const cartStored = JSON.parse(localStorage.getItem("cart"))
        const wishlistStored = JSON.parse(localStorage.getItem("wishlist"))
        cartStored && setCart(cartStored)
        wishlistStored && setWishlist(wishlistStored)
    }, [])

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

