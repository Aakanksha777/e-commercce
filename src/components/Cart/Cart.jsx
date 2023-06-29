import React from 'react'
import './Cart.css'
import DemoImage from '../../Assets/demoImage.png'

const CartPage = () => {

  const cartProductDetail = {
    cartDetails : [
      {
        cartProductImage : DemoImage,
        productName : "Men Premium Jacket",
        price: "INR 2000",
        discount : "50% Off",
        quantity : "1",
      }
    ],

    orderDetails : [
      {
        price : "INR 2,000",
        discount : "-INR 1,000",
        charges : "INR 499", 
        totalAmount : "INR 2499", 
        saving : "INR 1,000"
      }
    ]
    
  }

  return (
    <>
    <h2 className='cart-header'>My Cart</h2>
    <div className='main-cart-page'>
       
        {/* first section  */}
      <div className='cart-product-page'>
        {cartProductDetail.cartDetails.map(({cartProductImage, productName, price, discount, quantity}) => (
           <div className='cart-product-description'>
           <img className='cart-side-image' src={DemoImage} alt="product"/>
           <h5>{productName}</h5>
           <div className="cart-price-box">
           <h3 className='cart-price'>{price}</h3>
           <h3 className='cart-price-lineThrough'>INR 1000</h3>
           </div>

           <div className="cart-quantity-box">
           <button>+</button>
           <p className='cart-quantity'>{quantity}</p>
           <button>-</button>
           </div>

           <p className='cart-saving-text'>{discount}</p>

          <div className="btn-box">
           <button className='cart-btn1'>Remove From Cart </button>
           <button className='cart-btn1'>Move To Wishlist </button>
           </div>
       </div>
        ))}
      </div>

      {/* second section  */}
      <div className='cart-product-price'>
        <h3 className='cart-price-header'>Price Details </h3>
        <hr/>
        {cartProductDetail.orderDetails.map(({price, discount, charges, totalAmount, saving}) => (
          <>
          <div className="cart-all-details">
          <p>Price : {price}</p>
          <p>Discount : -{discount}</p>
          <p>Delivery Charges : {charges}</p>
          <h3 className='cart-total-amount'>TOTAL AMOUNT : {totalAmount}</h3>
          </div>
          <hr/>
          <div className="cart-order-btn">
          <p className='cart-saving-text'>You will save Rs.{saving} by ordering online</p>
          <button className='cart-btn'>Place Order</button>
          </div>
          </>
        ))}
      </div>

    </div>
    </>
  )
}

export default CartPage
