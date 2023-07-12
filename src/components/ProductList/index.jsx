import React from 'react'

const index = ({productList, img}) => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      {productList.map(({_id, title, author, price, categoryName}) => (
        <div style={{border:"3px solid orange", margin:"10px", padding:"10px"}}>
            <img src={img} alt="list"/>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{price}</p>
            <p>{categoryName}</p>
        </div>
      ))}
    </div>
  )
}

export default index
