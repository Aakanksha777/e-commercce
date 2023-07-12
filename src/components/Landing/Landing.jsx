import React from 'react'
import '../Landing/Landing.css'
import ProductCard from '../ProductCard/ProductCard'
import demoImage from '../../Assets/demoImage.png'
// import NewCollection from '../NewCollection/NewCollection';

const LandingPage = () => {
  return (
    <div className='main-landing-page'>
      <div className='categorywise-product'>
        <div className='product-list'>
        <ProductCard  category="Women" PosterImage={demoImage}/>
        <ProductCard category="Men" PosterImage={demoImage}/>
        <ProductCard  category="Heels" PosterImage={demoImage}/>
        <ProductCard  category="Sneakers" PosterImage={demoImage}/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
