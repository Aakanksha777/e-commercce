import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./productList.css";

// context
import { AuthContext } from "../../context/AuthContext";
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
// utilis;

import { Ajax, updateQtyApi } from "../../utlis/apiFunc";
import { checkSameAlreadyExist, updateQtyLocal } from "../../utlis/ultis";

//main component
const ProductList = ({ filteredProduct, handleShowPopUp }) => {
  // context
  const { user } = useContext(AuthContext);
  const { cart, wishlist, setCart, setWishlist } = useContext(
    CartAndWishlistContext
  );

  // most difficult function
  const incrementProduct = async (product) => {
    if (user.token) {
      const response = await updateQtyApi(product.id, "increment", user.token);
      setCart(response.cart);
    } else {
      setCart(updateQtyLocal(product, "increment", cart));
    }
  };

  const handleAddToCart = async (product) => {
    // checking if the item is already present inside the array , if yes then we need to increase the qty instead adding.
    if (checkSameAlreadyExist(cart, product)) {
      await incrementProduct(product);
      handleShowPopUp("Product Quantity Increased in Cart");
      return;
    }
    if (user.token) {
      const response = await Ajax(
        `/api/user/cart`,
        user.token,
        JSON.stringify({ product: product }),
        "post"
      );
      setCart(response.cart);
    } else {
      setCart([...cart, product]);
    }
    handleShowPopUp("Product Added to Cart");
  };

  const handleAddToWishlist = async (product) => {
    if (checkSameAlreadyExist(wishlist, product)) return;
    if (user.token) {
      const response = await Ajax(
        `/api/user/wishlist`,
        user.token,
        JSON.stringify({ product: product }),
        "post"
      );
      setWishlist(response.wishlist);
    } else {
      setWishlist([...wishlist, product]);
    }
    handleShowPopUp("Product Added to Wishlist");
  };

  console.log("filteredProduct checking..", filteredProduct);
  return (
    <div className="main_div">
      {filteredProduct.length > 0 ? (
        filteredProduct.map((product) => {
          return (
            <div key={product.id} className="single_div">
              <img
                src={product.image}
                alt="categories"
                className="product_img"
              />
              <div>
                <p className="product_desc">{product.description}</p>
              </div>
              <div className="cart_and_wishlist_btn_container">
                <button
                  className="product_btn"
                  onClick={() => {
                    !product.qty && (product.qty = 1);
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="product_btn"
                  onClick={() => handleAddToWishlist(product)}
                >
                  Add to Wishlist
                </button>
              </div>
              <Link to={`/product/${product.id}`} className="product_viewMore">
                View More
              </Link>
            </div>
          );
        })
      ) : (
        <div>Loading for categories...</div>
      )}
    </div>
  );
};

export default ProductList;
