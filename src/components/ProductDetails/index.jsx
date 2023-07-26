import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div>
        <img src={image} alt="product" />
        <h1>{title}</h1>
        <h3>{price}</h3>
        <p>{rate}</p>
        <i>{description}</i>
      </div>
    );
  }

  return ("Not Found")
};

export default ProductDetails;
