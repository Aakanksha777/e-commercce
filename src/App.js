import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./myComponents/productDetails/";
import Login from "./components/login";
import Register from "./components/Register/index";
import HomePage from "./myPages/homePage/Index";
import ProductListingPage from "./myPages/productListingPage/index";
import WishListPage from "./myPages/wishlistPage/Index";
import CartPage from "./myPages/cartPage/index";
import { useState } from "react";
import RequiresAuth from "./myComponents/RequiresAuth";

function App() {
  // AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequiresAuth isLoggedIn={isLoggedIn} />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductListingPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="/login" element={<Login toggleLogin={toggleLogin} />} />
        <Route path="/register" element={<Register />} />

        {/* protecting productpage */}
      </Routes>
    </div>
  );
}

export default App;
