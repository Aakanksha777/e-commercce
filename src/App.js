import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./myComponents/productDetails/";
import Login from "./components/login";
import Register from "./components/Register/index";
import HomePage from "./myPages/homePage/Index";
import ProductListingPage from "./myPages/productListingPage";
import WishListPage from "./myPages/wishlistPage/Index";
import CartPage from "./myPages/cartPage/index";
import { useEffect, useState } from "react";
import RequiresAuth from "./myComponents/RequiresAuth";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RequiresAuth />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductListingPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="wishlist" element={<WishListPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
