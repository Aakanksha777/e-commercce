import React from "react";
import "./Cart.css";
import ProductCard from "../ProductCard"
const CartPage = ({ cart }) => {

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
          {cart.length > 0 ? (
            cart.map(
              (productData) => (
                <ProductCard key={productData.id} productData={productData} />
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
