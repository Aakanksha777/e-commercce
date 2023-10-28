import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let specificProduct = data.product;
        console.log("specificProduct", specificProduct);
        setSingleProduct(specificProduct);
      });
  }, []);

  if (Object.keys(singleProduct).length) {
    const {
      title,
      category,
      categoryId,
      description,
      id,
      image,
      price,
      mrp,
      rating,
    } = singleProduct;
    const { rate, count } = rating;

    return (
      <>
        <h3 className="productDetail_header">{category}</h3>
        <div className="main-container">
          <div>
            <img src={image} alt="product" className="product-detail-image" />
          </div>
          <div className="details">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="rating">
              <p className="rating_star">{rate}&#x1F31F;</p>
              <span className="seprator">|</span>
              <p className="rating_count"> {count} Ratings &#8377;</p>
            </div>
            <div className="price">
              <div className="currentPrice">
                <span>&#8377; {price}</span>
              </div>
              <div className="mrp_text">
                MRP <span className="mrp">&#8377; {mrp}</span>
              </div>
              <div className="discount">(25% OFF)</div>
            </div>
            <div className="cart_and_wishlist_DetailBtn_container">
              <button className="productDetail_btn">Add to Cart</button>
              <button className="productDetail_btn">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return "Not Found";
};

export default ProductDetails;
