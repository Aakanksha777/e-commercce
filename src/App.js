import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./myComponents/productDetails/";
import Login from "./myComponents/login";
import Register from "./myComponents/Register/index";
import ProductListingPage from "./myPages/productListingPage";
import WishListPage from "./myPages/wishlistPage/Index";
import CartPage from "./myPages/cartPage/index";
import RequiresAuth from "./myComponents/RequiresAuth";
import Navbar from "./myComponents/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./myPages/homePage";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RequiresAuth />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<ProductListingPage />} />
            <Route path="product/:itemid" element={<ProductDetails />} />
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
