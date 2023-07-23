import React, { useContext, useEffect } from "react";
import "./productList.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProductList = ({ filteredProduct }) => {
  // context
  const { user, setUser } = useContext(AuthContext);
  //func to set user product in the cart Array.

  const handleCart = (item) => {
    const encodedToken = localStorage.getItem("token");
    fetch("/api/user/cart", {
      method: "post",
      headers: {
        authorization: encodedToken,
        "content-type": "application/json"
      },
      body: JSON.stringify({ product: item }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUser({ ...user, cart: res.cart });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main_div">
      {filteredProduct.length > 0 ? filteredProduct.map((product) => {
        const { id, price, type, image, rating } = product;
        return (
          <div key={id} className="single_div">
            <img src={image} alt="categories" className="product_img" />
            <h2>
              <i>{type}</i>
            </h2>
            <h3>Price : {price}</h3>
            <span>{rating.rate} by {rating.count} users</span>
            <button onClick={() => handleCart(product)}>Add to Cart</button>
            <Link to={`/product/${id}`}>View More</Link>
          </div>
        );
      }) :
        <div>Loading...</div>}
    </div>
  );
};

export default ProductList;
