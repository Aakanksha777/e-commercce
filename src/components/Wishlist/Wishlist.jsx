import './Wishlist.css'
import ProductCard from '../ProductCard'
import { useContext, useEffect, useState } from 'react';
import { CartAndWishlistContext } from '../../context/CartAndWishlist';
import { AuthContext } from '../../context/AuthContext';
import { Ajax, updateQtyApi } from '../../utlis/apiFunc';
import { checkSameAlreadyExist, updateQtyLocal } from '../../utlis/ultis';
import Popup from '../Popup';

const Wishlist = () => {
  const { cart, setCart, setWishlist, wishlist } = useContext(CartAndWishlistContext);
  const { user } = useContext(AuthContext)
  const [showPopUp, setShowPopUp] = useState({
    status: false,
    message: ""
  })
  useEffect(() => {
    let timeOut
    if (showPopUp.status) {
      timeOut = setTimeout(() => {
        setShowPopUp({
          status: false,
          message: ""
        })
      }, 2000)
    }
    return () => {
      clearTimeout(timeOut)
    }
  }, [showPopUp])
  const handleShowPopUp = (mes) => {
    setShowPopUp({ status: true, message: mes })
  }
  const removeProductApi = async (product) => {
    const response = await Ajax(`/api/user/wishlist/${product.id}`, user.token, null, "DELETE");
    console.log(response)
    setWishlist(response.wishlist)
  }

  const removeProductLocal = (product) => {
    const qtyChangedProduct = wishlist.filter((ele) => ele.id !== product.id)
    setWishlist(qtyChangedProduct)
  }

  const moveProductApi = async (product) => {
    await removeProductApi(product)
    if (checkSameAlreadyExist(cart, product)) {
      const response = await updateQtyApi(product.id, "increment", user.token)
      setCart(response.cart)
      return
    }
    const response = await Ajax(`/api/user/cart`, user.token, JSON.stringify({ product: product }), "post")
    setCart(response.cart)
  }

  const moveProductLocal = (product) => {
    const removeProductFromCart = wishlist.filter((ele) => ele.id !== product.id)
    setWishlist(removeProductFromCart)
    if (checkSameAlreadyExist(cart, product)) {
      setCart(updateQtyLocal(product, "increment", cart))
      return
    }
    setCart([...wishlist, product])
  }

  return (
    <>
      <h2 className='wishlist-header'>My Wishlist</h2>
      <div className='wishlist-main-container'>
        {wishlist.length > 0 ? wishlist.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            removeProductApi={removeProductApi}
            removeProductLocal={removeProductLocal}
            moveProductApi={moveProductApi}
            moveProductLocal={moveProductLocal}
            isWishList={true}
            handleShowPopUp={handleShowPopUp}
          />
        )) :
          <div>No items in Wishlist</div>}
      </div>
      {showPopUp.status && <Popup>{showPopUp.message}</Popup>}
    </>
  )
}

export default Wishlist
