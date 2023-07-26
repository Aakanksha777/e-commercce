import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ProductDetails.css'

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.product) {
          setSingleProduct(data.product);
        }
      });
  }, []);


  if (Object.keys(singleProduct).length) {
    const { title, category, categoryId, description, id, image, price, rating } = singleProduct
    const { rate, count } = rating

    return (
      <>
        <h1>{title} Details</h1>
      <div className="main-container">
        <div>
        <img src={image} alt="product" className="product-detail-image"/>
        </div>
        <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
        <h2>Price : &#128178; {price}</h2>
        <hr/>
        <h2>Rating : {rate} &#11088;</h2>
        </div>
      </div>
      </>
    );
  }

  return ("Not Found")
};

export default ProductDetails;
