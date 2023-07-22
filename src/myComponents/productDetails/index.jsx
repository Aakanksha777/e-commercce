import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../../backend/db/products";

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
    const { image, name, price, rating, type } = singleProduct;

    return (
      <div>
        <img src={image} alt="product" />
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>{rating}</p>
        <i>{type}</i>
      </div>
    );
  }

  return ("Not Found")
};

export default ProductDetails;
