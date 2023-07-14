import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProductList = ({ filteredProduct }) => {
  const { user, setUser } = useContext(AuthContext)

  const handleCart = (item) => {

    setUser({ ...user, cart: [...user.cart, item] })
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
      {filteredProduct.map((product) => {
        const { _id, productname, price, type, image } = product
        return <div key={_id} style={{ border: "2px solid gray", padding: "15px", margin: "20px" }}>
          <img width="150" height="150" src={image} alt="categories" style={{ objectFit: "contain" }} />
          <h2><i>{type}</i></h2>
          <h3>Price : {price}</h3>
          <button onClick={() => handleCart(product)}>Add to Cart</button>
          <br />
          <Link to={`/product/${_id}`}>View More</Link>
          <hr />
        </div>
      })}
    </div>
  )
}

export default ProductList
