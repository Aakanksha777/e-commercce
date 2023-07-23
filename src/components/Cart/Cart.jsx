import React, { useContext, useState } from "react";
import "./Cart.css";
import { AuthContext } from "../../context/AuthContext";

const CartPage = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleRemoveCart = (id) => {
    const updatedCart = user.cart.filter((item) => {
      return item._id !== id;
    });
    setUser({ ...user, cart: updatedCart });
  };

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

  return (
    <>
      <h2 className="cart-header">My Cart</h2>
      <div className="main-cart-page">
        {/* first section  */}
        <div className="cart-product-page">
          {user?.cart.length > 0 ? (
            user?.cart.map(
              ({ _id, image, productname, price, discount, quantity }) => (
                <div key={_id} className="cart-product-description">
                  <img
                    className="cart-side-image"
                    src={image}
                    alt="product"
                  />
                  <h5>{productname}</h5>
                  <div className="cart-price-box">
                    <h3 className="cart-price">{price}</h3>
                    <h3 className="cart-price-lineThrough">INR 1000</h3>
                  </div>
                  <div className="cart-quantity-box">
                    <button>+</button>
                    <p className="cart-quantity">{quantity}</p>
                    <button>-</button>
                  </div>

                  <p className="cart-saving-text">{discount}</p>

                  <div className="btn-box">
                    <button
                      onClick={() => handleRemoveCart(_id)}
                      className="cart-btn1"
                    >
                      Remove From Cart{" "}
                    </button>
                    <button className="cart-btn1">Move To Wishlist </button>
                  </div>
                </div>
              )
            )
          ) : (
            <h2 style={{ textAlign: "center", color: "red" }}>
              No Item in the Cart
            </h2>
          )}
        </div>
        {/* second section  */}
        {/* <div className='cart-product-price'>
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

        </div> */}
      </div>
    </>
  );
};

export default CartPage;
