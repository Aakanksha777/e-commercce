import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { setUser } = useContext(AuthContext)
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
          const fullUser = { ...data.foundUser, token: data.encodedToken }
          localStorage.setItem('user', JSON.stringify(fullUser))
          setUser(fullUser)
          navigate("/")
          console.log(data.foundUser);
        }
        else {
          alert(JSON.stringify(data.error))
        }
      })
  }

  return (
    <>
      <div className="login">
        <h2 className="login-header">Sign In to your Account</h2>
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
