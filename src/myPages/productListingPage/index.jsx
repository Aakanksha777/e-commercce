import React, {useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../myComponents/productList/index'
import { products } from '../../backend/db/products'

const Index = () => {

  const [filteredProduct, setFilteredProduct] =  useState(products);

  const filterItemsByCategory = (e) => {
    const targetValue = e.target.value
    const newArray = products.filter(({type}) => type ===  targetValue)
    console.log("filter inputs target value ..", e.target.value);
    console.log("newArray ..", newArray);
    setFilteredProduct(newArray)
  }

  const ratingItems = (e) => {
    console.log("radio ..", e.target.value)
  }

  return (
    <div>
      <Navbar/>
      <div className="filterAndProductList" style={{display:"flex"}}>
        <Filter filterItemsByCategory={filterItemsByCategory} ratingItems={ratingItems}/>
        <ProductList filteredProduct={filteredProduct}/>
      </div>
    </div>
  )
}

export default Index
