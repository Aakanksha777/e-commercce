import React, { useContext } from "react";
import "./productList.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartAndWishlistContext } from "../../context/CartAndWishlist";
import { Ajax, updateItemQuantity } from "../../utlis/apiFunc";

const checkSameAlreadyExist = (list, item) => list.find(ele => ele.id === item.id)

const ProductList = ({ filteredProduct }) => {
  // context
  const { user } = useContext(AuthContext);
  const { cart, wishlist, setCart, setWishlist } = useContext(CartAndWishlistContext);
  //most difficult function
  const incrementProduct = async (product) => {
    if (user.token) {
      const response = await updateItemQuantity(product.id, "increment", user.token)
      setCart(response.cart)
    } else {
      const incrementedProduct = cart.map((ele) => {
        if (ele.id === product.id) ele.qty += 1
        return ele
      })
      setCart(incrementedProduct)
    }
  }

  const handleAddProduct = async (product, toLocation) => {
    if (toLocation === "cart" && checkSameAlreadyExist(cart, product)) {
      toLocation === "cart" && await incrementProduct(product)
      return
    }
    if (toLocation === "wishlist" && checkSameAlreadyExist(wishlist, product)) return
    if (user.token) {
      const response = await Ajax(`/api/user/${toLocation}`, user.token, JSON.stringify({ product: product }), "post")
      toLocation === "cart" ? setCart(response[toLocation]) : setWishlist(response[toLocation])
    } else {
      toLocation === "cart" ? setCart([...cart, product]) : setWishlist([...wishlist, product])
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
                handleAddProduct(product, "cart")
              }}>
                Add to Cart
              </button>
              <button onClick={() => handleAddProduct(product, "wishlist")}>Add to Wishlist</button>
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
