import React, { useEffect, useState } from 'react'
import Filter from '../../myComponents/Filter/Filter'
import ProductList from '../../myComponents/productList'
import { useParams } from 'react-router-dom';
import "./productPage.css"
const ProductsPage = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredProduct(data.products)
      })
      .catch((e) => console.log("Error is ", e))
  }, [])
  useEffect(() => {
    if (typeof id === 'number') {

    }
  }, [id])
  const filterItemsByCategory = (e) => {
    const targetValue = e.target.value
    const newArray = filteredProduct.filter(({ type }) => type === targetValue)
    setFilteredProduct(newArray)
  }

  const ratingItems = (e) => {
  }

  return (
    <div className="product-page" style={{ display: "flex" }}>
      <Filter filterItemsByCategory={filterItemsByCategory} ratingItems={ratingItems} />
      <ProductList filteredProduct={filteredProduct} />
    </div>
  )
}

export default ProductsPage
