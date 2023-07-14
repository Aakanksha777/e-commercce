import React, { useContext } from 'react'
import './Wishlist.css'
import DemoImage from '../../Assets/demoImage.png'
// import { AuthContext } from '../../context/AuthContext' //step1

const wishlistCart = [
    {
        wishlistImg : DemoImage,
        desc : "Men Premium Jacket",
        price : "INR 2000", 
    },
    {
        wishlistImg : DemoImage,
        desc : "Women Premium Jacket",
        price : "INR 1800", 
    }
]

const Wishlist = () => {

  // const {user, setUser } = useContext(AuthContext) //step2
  return (
    <>
     <h2 className='wishlist-header'>My Wishlist</h2>
  
      <div className='wishlist-main-container'>
       
        {wishlistCart.map(({wishlistImg, desc, price}) => (
        <div className="wishlist-container">
            <img src={wishlistImg} alt="wishlist" className='wishlist-image'/>
            <p className='wishlist-desc'>{desc}</p>
            <h3 className='wishlist-price'>{price}</h3>
            <button className="wishlist-btn">Move to Cart</button>
      </div>
        ))}
    </div>
    </>
  )
}

export default Wishlist
