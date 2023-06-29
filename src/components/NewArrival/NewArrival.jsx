import React from 'react'
import './NewArrival.css'

const NewArrival = () => {
  return (
    <div className='newArrival-main-container'>

         <div className='newArrival-picture-container'>
            <div className='newArrival-picture'>
                Image
            </div>
         </div>

         <h3 className='newArrival-header'>New Arrival</h3>
         <div className='newArrival-Description'>
            <h4>Summer Collection</h4>
            <p>Check Out our Best Summer Collection to stay cool and fashionable.</p>
         </div>
    </div>
  )
}

export default NewArrival
