import React, { useContext } from "react";
import "./productList.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
import { Ajax } from "../../utlis/apiFunc";

const checkSameAlreadyExist = (list, item) => list.find(ele => ele.id === item.id)

const ProductList = ({ filteredProduct }) => {
  // context
  const { user } = useContext(AuthContext);
  const { cart, wishlist, setCart, setWishlist } = useContext(CartAndWishlistContext);

  const addToCart = async (product) => {
    !product.qty && (product.qty = 1)
    if (checkSameAlreadyExist(cart, product)) return
    if (user.token) {
      const response = await Ajax("/api/user/cart", user.token, JSON.stringify({ product: product }), "post")
      setCart(response.cart)
    } else {
      setCart([...cart, product])
    }
  };

  const addToWishlist = async (product) => {
    if (checkSameAlreadyExist(wishlist, product)) return
    if (user.token) {
      const response = await Ajax("/api/user/wishlist", user.token, JSON.stringify({ product: product }), "post")
      setWishlist(response.wishlist)
    } else {
      setWishlist([...wishlist, product])
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
