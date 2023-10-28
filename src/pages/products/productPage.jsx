import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import ProductList from "../../components/ProductList/productList";
import { useParams } from "react-router-dom";
import "./productPage.css";

const ProductsPage = () => {
  const { id } = useParams();
  console.log("paramsId", id);

  const [allproducts, setAllproducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [filterBy, setFilterBy] = useState({
    rating: 0,
    category: "0",
    sortByPrice: null,
  });

  useEffect(() => {
    fetch(`/api/products/`)
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.products;
        setAllproducts(allProducts)
        const categorywiseArray = allProducts.filter(
          (ele) => ele.categoryId === id
        );
        setFilteredProduct(categorywiseArray);
        setFilterBy({ ...filterBy, category: id });
      })
      .catch((e) => console.log("Error is ", e));
  }, []);

  const filterItemsByCategory = () => {
    let { category, rating } = filterBy;
    category = category;
    rating = rating;

    const newArray = allproducts.filter((product) =>
      category && rating
        ? product.categoryId == category && product.rating.rate >= rating
        : category
          ? product.categoryId == category
          : rating
            ? product.rating.rate >= rating
            : product
    );

    if (filterBy.sortByPrice) {
      newArray.sort((firstEle, secEle) =>
        filterBy.sortByPrice
          ? secEle.price - firstEle.price
          : firstEle.price - secEle.price
      );
    }
    setFilteredProduct([...newArray]);
  };

  useEffect(() => {
    filterItemsByCategory()
  }, [filterBy.category, filterBy.rating, filterBy.sortByPrice])

  const handleInput = (e) => {
    setFilterBy({ ...filterBy, [e.target.name]: e.target.value });
  };

  const clearFilter = () => {
    setFilterBy({
      rating: 0,
      category: 0,
      sortByPrice: null,
    });
    filterItemsByCategory();
  };

  return (
    <div className="product-page">
      <Filter
        clearFilter={clearFilter}
        filterBy={filterBy}
        handleInput={handleInput}
        filterItemsByCategory={filterItemsByCategory}
      />
      <ProductList filteredProduct={filteredProduct} />
    </div>
  );
};

export default ProductsPage;
