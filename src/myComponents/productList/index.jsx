import React, { useContext } from 'react'
import "./productList.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProductList = ({ filteredProduct }) => {
  const navigate = useNavigate();
  // context
  const { user, setUser } = useContext(AuthContext)

  //func to set user product in the cart Array.
  const handleCart = (item) => {
    setUser({ ...user, cart: [...user.cart, item] })
    navigate('/cart')
  }

  return (
    <div className='main_div'>
      {filteredProduct.map((product) => {
        const {id, price, type, image } = product

        return <div 
        key={id} 
        className='single_div'>
          <img src={image} alt="categories" className='product_img'/>
          <h2><i>{type}</i></h2>
          <h3>Price : {price}</h3>
          <button onClick={() => handleCart(product)}>Add to Cart</button>
          <br />
          <Link to={`/product/${id}`}>View More</Link>
          <hr />
        </div>
      })}
    </div>
  )
}

export default ProductList
