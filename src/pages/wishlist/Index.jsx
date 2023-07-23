import React, { useContext, useEffect } from 'react'
import Wishlist from '../../components/Wishlist/Wishlist'
import { CartAndWishlistContext } from "../../context/CartAndWishlist"
import { AuthContext } from '../../context/AuthContext'

const WishlisPage = () => {
  const { wishlist, setWishlist } = useContext(CartAndWishlistContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user.token) {
      const { token } = user
      fetch(`/api/user/cart`, {
        headers: { authorization: token }
      }).then((res) => res.json())
        .then((data) => {
          setWishlist(data.cart)
        })
        .catch((e) => console.log("Error is ", e))
    } else {
      const localWishlistData = JSON.parse(localStorage.getItem('wishlist'))
      localWishlistData && setWishlist(localWishlistData)
    }
  }, [])

  return (
    <div>
      <Wishlist wishlist={wishlist} />
    </div>
  )
}

export default WishlisPage
