import React, { useContext } from "react";
import "./productList.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
import { Ajax, updateQtyApi } from "../../utlis/apiFunc";
import { checkSameAlreadyExist, updateQtyLocal } from "../../utlis/ultis"

const ProductList = ({ filteredProduct }) => {
  // context
  const { user } = useContext(AuthContext);
  const { cart, wishlist, setCart, setWishlist } = useContext(CartAndWishlistContext);

  //most difficult function
  const incrementProduct = async (product) => {
    if (user.token) {
      const response = await updateQtyApi(product.id, "increment", user.token)
      setCart(response.cart)
    } else {
      setCart(updateQtyLocal(product, "increment", cart))
    }
  }

  const handleAddToCart = async (product) => {
    // checking if the item is already present inside the array , if yes then we need to increase the qty instead adding.
    if (checkSameAlreadyExist(cart, product)) {
      await incrementProduct(product)
      return
    }
    if (user.token) {
      const response = await Ajax(`/api/user/cart`, user.token, JSON.stringify({ product: product }), "post")
      setCart(response.cart)
    } else {
      setCart([...cart, product])
    }
  };

  const handleAddToWishlist = async (product) => {
    if (checkSameAlreadyExist(wishlist, product)) return
    if (user.token) {
      const response = await Ajax(`/api/user/wishlist`, user.token, JSON.stringify({ product: product }), "post")
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
              <button onClick={() => {
                !product.qty && (product.qty = 1)
                handleAddToCart(product)
              }}>
                Add to Cart
              </button>
              <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
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
