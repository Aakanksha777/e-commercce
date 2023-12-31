import React, { useContext, useEffect, useState } from 'react'
import Cart from '../../components/Cart/Cart'
import { AuthContext } from '../../context/AuthContext'
import { CartAndWishlistContext } from '../../context/CartAndWishlist'

const CartPage = () => {
  const { user } = useContext(AuthContext)
  const { setCart } = useContext(CartAndWishlistContext)

  useEffect(() => {
    if (user.token) {
      const { token } = user
      fetch(`/api/user/cart`, {
        headers: { authorization: token }
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
    <Cart />
  )
}

export default CartPage
