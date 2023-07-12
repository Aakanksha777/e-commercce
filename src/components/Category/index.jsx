import {products} from '../../backend/db/products';
import CardProduct from '../CardProduct/index'
import React from 'react'

const index = () => {
  return (
    <div>
        <h1>Products</h1>
        {products.map((e) => (
            <CardProduct {...e} noDetail/>
        ))}
    </div>
  )
}

export default index
