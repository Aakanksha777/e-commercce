import React from "react";
import { useParams , Link} from "react-router-dom";
import { products } from "../../backend/db/products";

export default function Index() {
    
  const { productid } = useParams();
  const productData = products.find((e) => e.id === productid);
  console.log("productData", productData)

  return (
    <div>
      {/* <h2>{productData.title}</h2> */}
      <p>Storage : {productData.author}</p>
      <p>Price : {productData.price}</p>
      <h2>categoryName : {productData.categoryName}</h2>
      <p>Details : {productData.details}</p>
      <Link to={"/"}>Back</Link>
    </div>
  );
}