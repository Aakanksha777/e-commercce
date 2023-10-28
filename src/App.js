import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import RequiresAuth from "./components/RequiresAuth";
import Navbar from "./components/Navbar/Navbar";
// import { Toaster } from "react-hot-toast";

// pages 
import Homepage from "./pages/home/homePage";
import ProductsPage from "./pages/products/productPage";
import CartPage from "./pages/cart";
import WishListPage from "./pages/wishlist/wishlist";
import AddressManager from "./pages/addressManager";
import Checkout from "./pages/checkout";

//contexts
import { AuthProvider } from "./context/AuthContext";
import { CartAndWishlistProvider } from "./context/CartAndWishlist";


function App() {
  return (
    <AuthProvider>  {/* checking user exists or not */}
      <CartAndWishlistProvider> {/* checking if cart and wishlist has any item or not */}
        <div className="App">
          <Navbar />
          <div className="main-body">
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/category/:id" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/wishlist" element={<WishListPage />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/" element={<RequiresAuth />}>
                <Route path="address" element={<AddressManager />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>


            {/* <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:productId" element={<CurrentProduct />} />

        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes> */}
          </div>
        </div>
       </CartAndWishlistProvider>
      </AuthProvider>
  );
}

export default App;
