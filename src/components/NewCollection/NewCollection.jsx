import React from 'react'
import './NewCollection.css'
import NewArrival from '../NewArrival/NewArrival'

const NewCollection = () => {
  return (
    <div className='NewCollection-card'>
      <NewArrival/>
      <NewArrival/>
    </div>
  )
}

export default NewCollection
