import React from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom';

const ProductCard = ({db, img}) => {

  return (
    <div className='product-card-main'>
      {db.map(({_id, categoryName, description}) => (
        <div 
        key= {_id} 
        className='single-card'
        >
          <h2>{categoryName}</h2>
          <img src={img} alt="category"/>
          <p>{description}</p>

          <Link to='/product'>View More</Link>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
