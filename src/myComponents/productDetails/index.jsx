import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../backend/db/products";

const ProductDetails = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({});
  let productStruc = "";

  useEffect(() => {
    // Do API call
    const productFound = products.find((e) => e.id === id);
    setSingleProduct(productFound);
  }, []);

  if (Object.keys(singleProduct).length) {
    const { image, name, price, rating, type } = singleProduct;
    productStruc = (
      <div>
        <img src={image} alt="product" />
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>{rating}</p>
        <i>{type}</i>
      </div>
    );
  }

  return productStruc;
};

export default ProductDetails;
