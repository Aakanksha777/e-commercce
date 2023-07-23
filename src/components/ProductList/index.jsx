import React, { useContext } from "react";
import "./productList.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
import { addProductOnClick } from "../../utlis/apiFunc";

const ProductList = ({ filteredProduct }) => {
  // context
  const { user } = useContext(AuthContext);
  const { cart, wishlist, setCart, setWishlist } = useContext(CartAndWishlistContext);
  //func to set user product in the cart Array.

  const addToCart = async (item) => {
    if (user.token) {
      const response = await addProductOnClick(user.token, item, "/api/user/cart")
      setCart(response.cart)
    } else {
      setCart([...cart, item])
    }
  };

  const addToWishlist = async (item) => {
    if (user.token) {
      const response = await addProductOnClick(user.token, item, "/api/user/wishlist")
      setWishlist(response.wishlist)
    } else {
      setWishlist([...wishlist, item])
    }
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
