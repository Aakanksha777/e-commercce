import React from 'react'
import './ProductCard.css'

const ProductCard = ({PosterImage, category}) => {
  return (
    <div className='product-card-main'>
      <img src={PosterImage} alt='product' className='product-card-img'/>
      <h4 className='product-card-text'>{category}</h4>
      {/* <div className='product-image'>product-image</div>
      <div className='product-description'>product-description</div>
      <div className='product-price'>product-price</div> */}
    </div>
  )
}

export default ProductCard
