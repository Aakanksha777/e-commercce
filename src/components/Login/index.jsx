import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Ajax } from "../../utlis/apiFunc"
import { CartAndWishlistContext } from "../../context/CartAndWishlist";

import './Login.css'

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext)
  const { cart, wishlist } = useContext(CartAndWishlistContext)
  const [loginData, setLoginData] = useState({ email: "", password: "" })

  const handleLoginInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await Ajax("/api/auth/login", undefined, JSON.stringify(loginData), "post")
    if (response.foundUser) {
      const fullUser = { ...response.foundUser, token: response.encodedToken }
      localStorage.setItem('user', JSON.stringify(fullUser))
      setUser(fullUser)
      if (cart.length > 0) {
        const getresponse = cart.map(async (product) => {
          return await Ajax("/api/user/cart", response.encodedToken, JSON.stringify({ product: product }), "post")
        })
        await Promise.all(getresponse)
      }
      if (wishlist.length > 0) {
        const getresponse = wishlist.map(async (product) => {
          return await Ajax("/api/user/wishlist", response.encodedToken, JSON.stringify({ product: product }), "post")
        })
        await Promise.all(getresponse)
      }
      navigate("/")
    }
    else {
      alert(JSON.stringify(response))
    }
  }

  return (
    <>
      <div className="login">
        <form className="loginBox" onSubmit={handleLoginSubmit}>
        <h1 className="login-header">Sign in</h1>
          <input
            placeholder="Email"
            className="loginInput"
            required
            type="email"
            name="email"
            onChange={handleLoginInput}
            value={loginData.email}
          />
          <input
            placeholder="Password"
            className="loginInput"
            required
            type="password"
            name="password"
            onChange={handleLoginInput}
            value={loginData.password}
          />
          <button className="loginButton" type="submit">
            Log In
          </button>
          <span className="loginForgot">Forgot Password?</span>
          <a href="/register" className="loginRegisterButton">
            Create a New Account
          </a>
        </form>
      </div>
    </>
  );
}
