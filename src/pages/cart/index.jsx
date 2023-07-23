import React, { useContext, useEffect, useState } from 'react'
import Cart from '../../components/Cart/Cart'
import { AuthContext } from '../../context/AuthContext'
import { CartAndWishlistContext } from '../../context/CartAndWishlist'

const CartPage = () => {
  const { cart, setCart } = useContext(CartAndWishlistContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user.encodedToken) {
      const { encodedToken } = user
      fetch(`/api/user/cart`, {
        headers: { authorization: encodedToken }
      }).then((res) => res.json())
        .then((data) => {
          setCart(data.cart)
        })
        .catch((e) => console.log("Error is ", e))
    } else {
      const localCartData = JSON.parse(localStorage.getItem('cart'))
      localCartData && setCart(localCartData)
    }
  }, [])

  return (
    <div>
      <Cart cart={cart} />
    </div>
  )
}

export default CartPage
