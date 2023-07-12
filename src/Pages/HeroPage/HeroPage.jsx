import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
// import ProductCard from '../../components/ProductCard/ProductCard'
// import {categories} from "../../backend/db/categories"
// import Demo from '../../Assets/demoImage.png'
import Category from '../../components/Category/index'


const HeroPage = () => {

  return (
    <div className='heropage-main-box'>
      <Navbar/>
      {/* <ProductCard db={categories} img={Demo}/> */}
      <Category/>
     
    </div>
  )
}

export default HeroPage