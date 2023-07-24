import React, { useContext, useEffect } from 'react'
import Wishlist from '../../components/Wishlist/Wishlist'
import { CartAndWishlistContext } from "../../context/CartAndWishlist"
import { AuthContext } from '../../context/AuthContext'

const WishlistPage = () => {
  const { user } = useContext(AuthContext)
  const { wishlist, setWishlist } = useContext(CartAndWishlistContext)

  useEffect(() => {
    if (user.token) {
      const { token } = user
      fetch(`/api/user/wishlist`, {
        headers: { authorization: token }
      }).then((res) => res.json())
        .then((data) => {
          console.log("get call wishlist", data.wishlist);
          setWishlist(data.wishlist)
        })
        .catch((e) => console.log("Error is ", e))
    } else {
      const localWishlistData = JSON.parse(localStorage.getItem('wishlist'))
      localWishlistData && setWishlist(localWishlistData)
    }
  }, [user])

  return (
    <div>
      <Wishlist wishlist={wishlist} />
    </div>
  )
}

export default WishlistPage
