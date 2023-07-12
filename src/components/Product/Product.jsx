import React, { useState } from 'react'
import './Product.css'
import { products } from '../../backend/db/products'
import DemoImage from '../../Assets/demoImage.png'

const Product = () => {

  const [showData , setShowData] = useState(products)

  const handleShowProduct = () => {
    const filterProduct =  products.filter((e) => e.categoryName === "fiction")
    setShowData(filterProduct)
    console.log("filterProduct...", filterProduct)
  }
  return (
    <>
    <div className="main-product-page-box" onLoad={handleShowProduct}>
    <div className="all-product-page-box">
      {showData.map(({_id, title, author, price, categoryName}) => (
        <>
        <div className='product-main-container' key={_id}>
          <div className="product-image-box">
          <img className='product-image2' src={DemoImage} alt="pic2"/>
          </div>

         <div className='product-desc2'>
             <h3 className='product-desc-header'>{title}</h3>
             <p> author : {author}</p>
             <p> price : {price}</p>
             <p> categoryName : {categoryName}</p>

         </div>

         <div className='product-btn2'>
             <button className='product-btn-text'>Add to cart</button>
             <button className='product-btn-text'>Add to WishList</button>
         </div>
         </div>
        </>
      ))}
    </div>
    </div>
    </>
  )
}

export default Product