import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../backend/db/products';
import Demo from '../../Assets/demoImage.png'

const Index = () => {
    const {id} = useParams();
    const filterArray = products.find((e) => e._id === id);
    console.log("filtered Array is :  ", filterArray);


  return (
  <div>
    <img src= {Demo} alt="product"/>
    <br/>
    {/* <i> {id} </i> */}
    <h1>{filterArray.productname}</h1>
    <h3>{filterArray.price}</h3>
    <p>{filterArray.rating}</p>
    <i>{filterArray.type}</i>
    <br/>
    <Link to="/product">See All</Link>
  </div>
  )
}

export default Index
