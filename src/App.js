import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Register from "./components/Register/index";
import ProductsPage from "./pages/products";
import WishListPage from "./pages/wishlist/Index";
import CartPage from "./pages/cart/index";
import RequiresAuth from "./components/RequiresAuth";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { CartAndWishlistProvider } from "./context/CartAndWishlist";
import Homepage from "./pages/home";

function App() {
  return (
    <CartAndWishlistProvider>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="category/:id" element={<ProductsPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="wishlist" element={<WishListPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="/" element={<RequiresAuth />}></Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </CartAndWishlistProvider>
  );
}

export default App;
