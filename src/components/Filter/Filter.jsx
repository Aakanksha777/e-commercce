import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filter-container'>
      <div className='filter-headings-top'>
        <h4>Filters</h4>
        <p>Clear</p>
      </div>

      <h3 className='filter-headings'>Price</h3>

      <div className="filter-inputs">
      <input type='range'/>
      </div>

      <h3 className='filter-headings'>Category</h3>

      <div className="filter-inputs">
      <input type='checkbox'/>
      <label>Men Clothing</label>
      </div>

      <div className="filter-inputs">
      <input type='checkbox'/>
      <label>Women Clothing</label>
      </div>

      <h3 className='filter-headings'>Rating</h3>

      <div className="filter-inputs">
      <input type='radio'/>
      <label>5 stars</label>
      </div>

      <div className="filter-inputs">
      <input type='radio'/>
      <label>4 stars & above</label>
      </div>

      <div className="filter-inputs">
      <input type='radio'/>
      <label>3 stars & above</label>
      </div>

    <h3 className='filter-headings'>Sort by</h3>
    
    <div className="filter-inputs">
    <input type='radio'/>
    <label>Price-Low to high</label>
    </div>

    <div className="filter-inputs">
    <input type='radio'/>
    <label>Price-High to low</label>
    </div>
    

    </div>
  )
}

export default Filter
