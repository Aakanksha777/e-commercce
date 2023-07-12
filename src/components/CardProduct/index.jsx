import React from 'react'
import {Link } from 'react-router-dom';

const index = ({_id, title, author, price, categoryName, noDetail}) => {
  return (
    <div>
      <li key={_id}>
        <h4>{title}</h4>
        <i>{author}</i>
        <h5>{price}</h5>
        <p>{categoryName}</p>

        {/* condition */}
        {noDetail && <Link to = {`/product/id`}>view Details</Link>}
        {!noDetail && <p>Details</p>}
      </li>
    </div>
  )
}

export default index
