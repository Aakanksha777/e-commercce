import React from 'react'
import '../ProductPage/ProductPage.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductPage = () => {
  return (
    <div className='main-product-page'>

      <div className='filter-section'>filter-section</div>
      <div className='product-section'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

    </div>
  )
}

export default ProductPage
