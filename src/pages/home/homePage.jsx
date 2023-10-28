import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./homePage.css";
import HeaderImage from "../../Assets/category_header.webp";

const Homepage = () => {
  const [category, setCategory] = useState([]);

  const { paramId } = useParams();
  console.log("paramId", paramId);
  console.log("type of paramId", typeof paramId);
  // done
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const dataArray = data.categories;
        setCategory(dataArray);
        console.log("dataArray-home-page", dataArray);
      })
      .catch((e) => console.log("Erros in home-page ", e));
  }, []);

  return (
    <>
      <div className="main-div-homePage">
        <div className="category-header">
          <img src={HeaderImage} alt="header" />
        </div>

        <div className="data-container">
          {category.map(({ id, img }) => (
            <Link key={id} to={`/category/${id}`}>
              <div className="data-div">
                <img
                  src={img}
                  alt="categories"
                  className="data-img"
                  onClick={() => console.log("Id :", id)}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
