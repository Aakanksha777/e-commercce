import './Filter.css'

const Filter = ({ filterItemsByCategory, ratingItems }) => {
  return (
    <div className='filter-container'>
      <div className='filter-headings-top'>
        <h3>Filters</h3>
        <p>Clear</p>
      </div>

      <h3 className='filter-headings'>Price</h3>

      <div className="filter-inputs">
        <input type='range' />
      </div>

      <h3 className='filter-headings'>Category</h3>

      <div className="filter-inputs">
        <input type='checkbox' onChange={filterItemsByCategory} value={"men"} />
        <label htmlFor="men" >Men Clothing</label>
      </div>

      <div className="filter-inputs">
        <input type='checkbox' onChange={filterItemsByCategory} value={"women"} />
        <label htmlFor="women">Women Clothing</label>
      </div>

      <h3 className='filter-headings'>Rating</h3>

      <div className="filter-inputs">
        <input type='radio' onChange={ratingItems} value={5} />
        <label>5 stars</label>
      </div>

      <div className="filter-inputs">
        <input type='radio' onChange={ratingItems} />
        <label>4 stars & above</label>
      </div>

      <div className="filter-inputs">
        <input type='radio' onChange={ratingItems} />
        <label>3 stars & above</label>
      </div>

      <h3 className='filter-headings'>Sort by</h3>

      <div className="filter-inputs">
        <input type='radio' />
        <label>Price-Low to high</label>
      </div>

      <div className="filter-inputs">
        <input type='radio' />
        <label>Price-High to low</label>
      </div>


    </div>
  )
}

export default Filter
