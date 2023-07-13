import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from '../Navbar/Navbar';


export default function Login({ toggleLogin }) {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" })

  const handleLoginInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.foundUser) {
          localStorage.setItem('token', data.encodedToken)
          toggleLogin();
          navigate("/")
        }
        else {
          alert(JSON.stringify(data.error))
        }
      })
  }

  //REGISTER
  return (
    <>
      <Navbar />
      <div className="login">
        <h2 className="login-header">Trendy App</h2>
        <form className="loginBox" onSubmit={handleLoginSubmit}>
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
