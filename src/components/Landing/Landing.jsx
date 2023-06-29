import React from 'react'
import '../Landing/Landing.css'
import ProductCard from '../ProductCard/ProductCard'
import demoImage from '../../Assets/demoImage.png'

const LandingPage = () => {
  return (
    <div className='main-landing-page'>
    {/* 1 div  */}
      <div className='filter-product'>
        <div className='product-list'>
        <ProductCard  category="Women" PosterImage={demoImage}/>
        <ProductCard category="Men" PosterImage={demoImage}/>
        <ProductCard  category="Heels" PosterImage={demoImage}/>
        <ProductCard  category="Sneakers" PosterImage={demoImage}/>
        </div>
      </div>

    {/* 2 div  */}
    <div>
        <img  className='hero-image' src="" alt='heroimage'/>
       
    </div>

    {/* 3 div  */}
    {/* <div className='sub-categories'>
        contains 2 div
    </div> */}

    </div>
  )
}

export default LandingPage
