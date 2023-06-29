import React from 'react'
import './Product.css'
import DemoImage from '../../Assets/demoImage.png'

const allProducts = [
  {
    productImage : DemoImage,
    productName : "Men Premium Jacket",
    price : "INR 2000"
  },
  {
    productImage : DemoImage,
    productName : "Women Premium Jacket",
    price : "INR 1800"
  },
  {
    productImage : DemoImage,
    productName : "Men Premium Jacket",
    price : "INR 1650"
  },
  {
    productImage : DemoImage,
    productName : "Women Premium Jacket",
    price : "INR 3500"
  },
 
]


const Product = () => {
  return (
    <>
    <div className="main-product-page-box">
    <div className="all-product-page-box">
      {allProducts.map(({productImage, productName, price}) => (
        <>
        <div className='product-main-container'>
          <div className="product-image-box">
          <img className='product-image2' src={productImage} alt="pic2"/>
          </div>

         <div className='product-desc2'>
             <h3 className='product-desc-header'>{productName}</h3>
             <p>{price}</p>
         </div>

         <div className='product-btn2'>
             <button className='product-btn-text'>Add to cart</button>
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
