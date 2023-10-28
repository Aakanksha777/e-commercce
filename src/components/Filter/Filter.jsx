import { useEffect, useState } from "react";
import "./Filter.css";

const Filter = ({
  clearFilter,
  filterBy,
  handleInput,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((e) => console.log("Erros is ", e));
  }, []);

  return (
    <div className="filter-container">
      <div className="filter-headings-top">
        <h3>Filters</h3>
        <hr />
      </div>
      {/* <div className='filter-btn-box'>
        <button onClick={clearFilter} className='filter-btn' >Clear</button>
        <button onClick={filterItemsByCategory}className='filter-btn' > Apply</button>
      </div> */}
      <p className="filter-headings">Category</p>
      <div>
        <div className="filter-inputs">
          <input
            type="radio"
            name="category"
            id="All"
            onChange={handleInput}
            value="0"
            checked={filterBy.category === "0"}
          />
          <label htmlFor="All">All</label>
        </div>
        {categories.length > 0 &&
          categories.map(({ id, categoryName }) => (
            <div key={id} className="filter-inputs">
              <input
                type="radio"
                name="category"
                id={categoryName}
                onChange={handleInput}
                value={id}
                checked={filterBy.category === id}
              />
              <label htmlFor={categoryName}>{categoryName}</label>
            </div>
          ))}
      </div>
      <h3 className="filter-headings">Rating</h3>
      <div
        className="filter-inputs"
        style={{ flexDirection: "column", alignItems: "flex-start " }}
      >
        <input
          min={0}
          max={5}
          type="range"
          value={filterBy.rating}
          name="rating"
          onChange={handleInput}
        />
        <span>
          {filterBy.rating}{" "}
          {filterBy.rating >= 2 && filterBy.rating <= 4 && "& above"}
        </span>
      </div>
      <h3 className="filter-headings">Sort by</h3>
      <div className="filter-inputs">
        <input
          type="radio"
          name="sortByPrice"
          id="lowtohigh"
          onChange={handleInput}
          value={"0"}
          checked={filterBy.sortByPrice === "0"}
        />
        <label htmlFor="lowtohigh">Price-Low to high</label>
      </div>
      <div className="filter-inputs">
        <input
          type="radio"
          name="sortByPrice"
          id="hightolow"
          onChange={handleInput}
          value={"1"}
          checked={filterBy.sortByPrice === "1"}
        />
        <label htmlFor="hightolow">Price-High to low</label>
      </div>
    </div>
  );
};

export default Filter;
