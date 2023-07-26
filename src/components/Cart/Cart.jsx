import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard"
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
import { Ajax, updateQtyApi } from "../../utlis/apiFunc"
import { AuthContext } from "../../context/AuthContext";
import { checkSameAlreadyExist, updateQtyLocal } from "../../utlis/ultis";
import Popup from "../Popup";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart, wishlist, setWishlist } = useContext(CartAndWishlistContext);
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [showPopUp, setShowPopUp] = useState({
    status: false,
    message: ""
  })
  const [totalCal, setTotalCal] = useState({
    price: 0,
    discount: 0,
    charges: 0,
    totalAmount: 0,
    saving: 0,
    deliveryCharges: 0
  },)
  useEffect(() => {
    calculatePrice()
  }, [cart])

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
  const calculatePrice = () => {
    const { totalPrice, totalMrp } = cart.reduce((acc, curr) => {
      acc.totalPrice = acc.totalPrice + curr.price
      acc.totalMrp = acc.totalMrp + curr.mrp
      return acc
    }, { totalPrice: 0, totalMrp: 0 })
    const discount = Math.floor(totalMrp - totalPrice)
    const charges = Math.floor((totalPrice * 18) / 100)
    const totalAmount = Math.floor(totalPrice + charges)
    setTotalCal({ price: Math.floor(totalPrice), discount: discount, totalAmount: totalAmount, charges: charges })
  }
  const incrmntDcrmntQtyApi = async (product, changeType) => {
    const response = await updateQtyApi(product.id, changeType, user.token)
    setCart(response.cart)
  }
  const incrmntDcrmntQtyLocal = (product, changeType) => {
    setCart(updateQtyLocal(product, changeType, cart))
  }
  const removeProductApi = async (product) => {
    const response = await Ajax(`/api/user/cart/${product.id}`, user.token, null, "DELETE");
    setCart(response.cart)
  }
  const removeProductLocal = (product) => {
    const qtyChangedProduct = cart.filter((ele) => ele.id !== product.id)
    setCart(qtyChangedProduct)
  }
  const moveProductApi = async (product) => {
    await removeProductApi(product)
    if (checkSameAlreadyExist(wishlist, product)) return
    const response = await Ajax(`/api/user/wishlist`, user.token, JSON.stringify({ product: product }), "post")
    setWishlist(response.wishlist)
  }
  const moveProductLocal = (product) => {
    const removeProductFromCart = cart.filter((ele) => ele.id !== product.id)
    setCart(removeProductFromCart)
    if (checkSameAlreadyExist(wishlist, product)) return
    setWishlist([...wishlist, product])
  }
  const handlePlaceOrder = () => {
    const randomId = Math.floor((Math.random() * 1123))
    setUser({ ...user, latestOrder: { products: cart, id: randomId, address: {}, deliveryStatus: {} } })
    navigate("/address")
  }
  return (
    <>
      <h2 className="cart-header">My Cart</h2>
      <div className="main-cart-page">
        {/* Cart Items */}
        <div className="cart-product-page">
          {cart.length > 0 ? (
            cart.map(
              (product) => (
                <ProductCard key={product.id}
                  product={product}
                  incrmntDcrmntQtyApi={incrmntDcrmntQtyApi}
                  incrmntDcrmntQtyLocal={incrmntDcrmntQtyLocal}
                  removeProductApi={removeProductApi}
                  removeProductLocal={removeProductLocal}
                  moveProductApi={moveProductApi}
                  moveProductLocal={moveProductLocal}
                  handleShowPopUp={handleShowPopUp}
                />
              )
            )
          ) : (
            <h2 style={{ textAlign: "center", color: "red" }}>
              No Item in the Cart
            </h2>
          )}
        </div>
        {/* Cart Items Total Price  */}
        {cart.length > 0 && <div className='cart-product-price'>
          <h3 className='cart-price-header'>Price Details </h3>
          <hr />
          <div className="cart-all-details">
            <p>Price : $ {totalCal.price ? totalCal.price : "0"}</p>
            <p>Discount : $ -{totalCal.discount ? totalCal.discount : "0"}</p>
            <p>GST Charges :$ {totalCal.charges ? totalCal.charges : "0"}</p>
            <p>Delivery Charges :$ {totalCal.deliveryCharges ? totalCal.deliveryCharges : "0"}</p>
            <h3 className='cart-total-amount'>TOTAL AMOUNT : ${totalCal.totalAmount ? totalCal.totalAmount : "0"}</h3>
          </div>
          <hr />
          <div className="cart-order-btn">
            <p className='cart-saving-text'>You will save $ {totalCal.discount} by ordering online</p>
            <button onClick={handlePlaceOrder} className='cart-btn'>Place Order</button>
          </div>
        </div>}
        {showPopUp.status && <Popup>{showPopUp.message}</Popup>}
      </div>
    </>
  );
};

export default CartPage;
