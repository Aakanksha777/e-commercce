import React, { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList'
import { useParams } from 'react-router-dom';
import "./productPage.css"

const ratingCondition = (rating, ratingState) => {
  return ratingState ? rating >= ratingState : rating
}
const categoryCondition = (categoryId, categoryState) => {
  return categoryState ? categoryId === categoryState : categoryId
}
const ProductsPage = () => {
  const { id } = useParams();
  const [allproducts, setAllproducts] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [filterBy, setFilterBy] = useState({
    rating: 0,
    category: 0,
    sortByPrice: null
  })
  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data.products)
        let newArray = data.products
        if (id) {
          const categoryI = Number(id)
          newArray = newArray.filter(({ categoryId }) => categoryI ? categoryId === categoryI : categoryId)
          setFilterBy({ ...filterBy, category: categoryI })
        }
        setFilteredProduct(newArray)
      })
      .catch((e) => console.log("Error is ", e))
  }, [])

  const filterItemsByCategory = () => {
    const newArray = allproducts.filter((product) => categoryCondition(product.categoryId, filterBy.category) && ratingCondition(product.rating.rate, filterBy.rating))
    if (filterBy.sortByPrice) {
      newArray.sort((firstEle, secEle) => filterBy.sortByPrice ? secEle.price - firstEle.price : firstEle.price - secEle.price)
    }
    setFilteredProduct([...newArray])
  }

  const handleInput = (e) => {
    setFilterBy({ ...filterBy, [e.target.name]: Number(e.target.value) })
  }

  const clearFilter = () => {
    setFilterBy({
      rating: 0,
      category: 0,
      sortByPrice: null
    })
    filterItemsByCategory()
  }

  return (
    <div className="product-page" style={{ display: "flex" }}>
      <h2>{ }</h2>
      <Filter clearFilter={clearFilter} filterBy={filterBy} handleInput={handleInput} filterItemsByCategory={filterItemsByCategory} />
      <ProductList filteredProduct={filteredProduct} />
    </div>
  )
}

export default ProductsPage
