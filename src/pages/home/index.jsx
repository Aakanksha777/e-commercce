import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import Carousel from "../../components/Carousel/Carousel";

const Homepage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const dataArray = data.categories;
        setCategory(dataArray);
        console.log("dataArray", dataArray);
      })
      .catch((e) => console.log("Erros is ", e));
  }, []);

  return (
    <>
      <div className="main-div-homePage">
        <div className="data-container">
          {category.map(({ id, img, categoryName }) => (
            <Link key={id} to={`/category/${id}`}>
              <div className="data-div">
                <img src={img} alt="categories" className="data-img" />
                <i className="category-text">{categoryName}</i>
              </div>
            </Link>
          ))}
        </div>
        <Carousel />
        <div className="new-arrival-container">
          <h3 className="new-arrival-header">NEW ARRIVAL</h3>
        </div>
      </div>
    </>
  );
};

export default Homepage;
