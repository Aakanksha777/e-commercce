import React, { useEffect, useState } from 'react'
import Filter from '../../myComponents/Filter/Filter'
import ProductList from '../../myComponents/productList'
import { products } from '../../backend/db/products'

const ProductListingPage = () => {

  const [filteredProduct, setFilteredProduct] = useState(products);

  useEffect(() => {
    fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      setFilteredProduct(data.products)
    })
    .catch((e) => console.log("Erros is :", e))
  }, [])

  const filterItemsByCategory = (e) => {
    const targetValue = e.target.value
    const newArray = products.filter(({ type }) => type === targetValue)
    console.log("filter inputs target value ..", e.target.value);
    console.log("newArray ..", newArray);
    setFilteredProduct(newArray)
  }

  const ratingItems = (e) => {
    console.log("radio ..", e.target.value)
  }

  return (
    <div>
      <div className="filterAndProductList" style={{ display: "flex" }}>
        <Filter filterItemsByCategory={filterItemsByCategory} ratingItems={ratingItems} />
        <ProductList product={filteredProduct} />
      </div>
    </div>
  )
}

export default ProductListingPage
