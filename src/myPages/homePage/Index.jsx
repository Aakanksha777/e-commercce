import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
// import Product from '../../myComponents/product';

const Index = () => {
  return (
    <div>
      <Navbar/>
      <div className="homePage_intro" style={{marginTop:"100px", border: "2px solid gray",width:"80%", textAlign:"center", marginInline:"auto", height:"40vh", padding:"30px"}}>
        <h1>New Shopping App for your Ease</h1>
        <Link to="/product">Shop Now</Link>
      </div>
    </div>
  )
}

export default Index
