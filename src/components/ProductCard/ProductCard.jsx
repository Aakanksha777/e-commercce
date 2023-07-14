import React, { useContext } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProductCard = ({ db, img }) => {
  const { user, setUser } = useContext(AuthContext)

  const handleCart = (product) => {
    setUser({ ...user, cart: [...user.cart, product] })
  }
  return (
    <div className='product-card-main'>
      {db.map((product) => {
        const { _id, categoryName, description } = product
        return <div
          key={_id}
          className='single-card'
        >
          <h2>{categoryName}</h2>
          <img src={img} alt="category" />
          <p>{description}</p>
          <button onClick={() => handleCart(product)}>Add to Cart</button>
          <Link to='/product'>View More</Link>
        </div>
      })}
    </div>
  )
}

export default ProductCard
