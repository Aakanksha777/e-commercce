import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./homePage.css"

const Index = () => {

  const [category, setCategory ] = useState([])

  useEffect(() => {
    fetch("/api/categories")
    .then((res) => res.json())
    .then((data) => {
      console.log("categories..", data)
      setCategory(data.categories)
    })
    .catch((e) => console.log("Erros is ", e))
  }, [])

  const handleSingleCategory = (id) => {
    const stringId = String(id)
    console.log("stringId", stringId)
    fetch("/api/categories/:categoryId")
    .then((res) => res.json())
    .then((data) => {
      const test = Object.keys(data)
        console.log("test", test)
    })
    .catch((e) => console.log("Erros is ", e))
  }

  return (
    <>
      <div className="main-div-homePage">
        {category.map(({_id, img, categoryName}) => (
          <div key={_id} className='data-div' onClick={() => handleSingleCategory(_id)}>
            <img src={img} alt="categories" className='data-img'/>
            <h3><i>{categoryName}</i></h3>
          </div>
        ))}
      </div>
      <h2><Link to="/product" className='homepage-link'>Shop Now &hearts;</Link></h2>
      
      </>
  )
}

export default Index
