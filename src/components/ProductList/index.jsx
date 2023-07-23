import React, { useContext, useEffect } from "react";
import "./productList.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartAndWishlistContext } from "../../context/CartAndWishlist";

const addProductOnClick = (token, item, url, setterFunc) => {
  if (token) {
    fetch(url, {
      method: "POST",
      headers: {
        authorization: token,
        "content-type": "application/json"
      },
      body: JSON.stringify({ product: item }),
    })
      .then((res) => res.json())
      .then((res) => {
      })
      .catch((err) => console.log(err));
  } else {
    setterFunc()
  }
};
const ProductList = ({ filteredProduct }) => {
  // context
  const { user } = useContext(AuthContext);
  const { cart, wishlist, setCart, setWishlist } = useContext(CartAndWishlistContext);
  //func to set user product in the cart Array.

  const addToCart = (item) => {
    const setterFunc = () => {
      setCart([...cart, item])
    }
    addProductOnClick(user.token, item, "/api/user/cart", setterFunc)
  };

  const addToWishlist = (item) => {
    const setterFunc = () => {
      setWishlist([...wishlist, item])
    }
    addProductOnClick(user.token, item, "/api/user/wishlist", setterFunc)
  };

  return (
    <div className="main_div">
      {filteredProduct.length > 0 ? filteredProduct.map((product) => {
        const { id, price, type, image, rating } = product;
        return (
          <div key={id} className="single_div">
            <img src={image} alt="categories" className="product_img" />
            <div>
              <h3>Price : {price}</h3>
              <span>{rating.rate} by {rating.count} users</span>
            </div>
            <div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            </div>
            <Link to={`/product/${id}`}>View More</Link>
          </div>
        );
      }) :
        <div>Loading...</div>}
    </div>
  );
};

export default ProductList;
