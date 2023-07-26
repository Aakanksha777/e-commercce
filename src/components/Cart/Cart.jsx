import React, { useContext } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard"
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
import { Ajax, updateQtyApi } from "../../utlis/apiFunc"
import { AuthContext } from "../../context/AuthContext";
import { checkSameAlreadyExist, updateQtyLocal } from "../../utlis/ultis";

const CartPage = () => {
  const { cart, setCart, wishlist, setWishlist } = useContext(CartAndWishlistContext);
  const { user } = useContext(AuthContext)
  const cartProductDetail = {
    orderDetails: [
      {
        price: "INR 2,000",
        discount: "-INR 1,000",
        charges: "INR 499",
        totalAmount: "INR 2499",
        saving: "INR 1,000",
      },
    ],
  };

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
        <div className='cart-product-price'>
          <h3 className='cart-price-header'>Price Details </h3>
          <hr />
          {cartProductDetail.orderDetails.map(({ price, discount, charges, totalAmount, saving }) => (
            <>
              <div className="cart-all-details">
                <p>Price : {price}</p>
                <p>Discount : -{discount}</p>
                <p>Delivery Charges : {charges}</p>
                <h3 className='cart-total-amount'>TOTAL AMOUNT : {totalAmount}</h3>
              </div>
              <hr />
              <div className="cart-order-btn">
                <p className='cart-saving-text'>You will save Rs.{saving} by ordering online</p>
                <button className='cart-btn'>Place Order</button>
              </div>
            </>
          ))}

        </div>
      </div>
    </>
  );
};

export default CartPage;
