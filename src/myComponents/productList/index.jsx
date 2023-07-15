import React, { useContext } from 'react'
import "./productList.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProductList = ({product}) => {
  // context
  const { user, setUser } = useContext(AuthContext)
  
  //func to set user product in the cart Array.
  const handleCart = (item) => {
    setUser({ ...user, cart: [...user.cart, item] })
    console.log("adding to the cart", item)
  }

  return (
    <div className='main_div'>
      {product.map((item) => {
        const {id, price, type, image } = item

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
