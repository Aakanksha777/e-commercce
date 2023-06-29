import React from 'react'
import './ProductPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product'
import Filter from '../../components/Filter/Filter'
// import DemoImage from '../../Assets/demoImage.png';

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='show-product-heading'>Showing All Products</h2>
        <div className="filter-product-page">
        <Filter/>
        <Product/>
        </div>
    </div>
  )
}

export default ProductPage
