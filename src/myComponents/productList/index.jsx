import React from 'react'
import {Link} from 'react-router-dom';
import Demo from '../../Assets/demoImage.png';

const Index = ({filteredProduct}) => {
  return (
      <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap"}}>
        {filteredProduct.map(({_id, productname, price, type}) => (
            <div key={_id} style={{border : "2px solid gray", padding:"15px", margin:"20px"}}>
                <img src={Demo} alt= "categories"/>
                <h2><i>{type}</i></h2>
                <h3>Price : {price}</h3>
                {/* <i>Category : {type}</i> */}
                <br/>
                <Link to={`/product/${_id}`}>View More</Link>
                <hr/>
            </div>
        ))}
        </div>
  )
}

export default Index
