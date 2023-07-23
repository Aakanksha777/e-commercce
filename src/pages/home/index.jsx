import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./homePage.css";

const Homepage = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.categories))
      .catch((e) => console.log("Erros is ", e))
  }, [])

  return (
    <>
      <div className="main-div-homePage">
        {category.map(({ id, img, categoryName }) => (
          <Link key={id} to={`/category/${id}`}>
            <div className='data-div'>
              <img src={img} alt="categories" className='data-img' />
              <h3><i>{categoryName}</i></h3>
            </div>
          </Link>
        ))}
      </div>
      <h2><Link to="/category/0" className='homepage-link'>Shop Now &hearts;</Link></h2>
    </>
  )
}

export default Homepage
