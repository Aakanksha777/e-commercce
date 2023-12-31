import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../Login/Login.css'

const Register = () => {
  const [registerData, setRegisterData] = useState({ username: "", firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })
  const navigate = useNavigate();

  const handleInputs = (e) => {
    e.preventDefault();
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/auth/signup", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(registerData)
    })
      .then((res) => res.json())
      .then((data) => {
        alert('User created successfully')
        navigate("/login")
      })
      .catch((e) => {
        alert("Found ERROR..", e)
      })

  }

  return (
    <div className="login">
      <form className="loginBox" onSubmit={handleSubmit} style={{ display: "flex" }}>
      <h1 className="login-header">Sign-up</h1>
        <input
          placeholder="Username"
          className="loginInput"
          name="username"
          value={registerData.username}
          onChange={handleInputs}
          required
        />

        <input
          placeholder="First Name"
          className="loginInput"
          name="firstname"
          value={registerData.firstname}
          onChange={handleInputs}
          required
        />
        <input
          placeholder="Last Name"
          className="loginInput"
          name="lastname"
          value={registerData.lastname}
          onChange={handleInputs}
          required
        />
        <input
          placeholder="Email"
          className="loginInput"
          name="email"
          type="email"
          value={registerData.email}
          onChange={handleInputs}
          required
        />

        <input
          placeholder="Password"
          className="loginInput"
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleInputs}
          required
        />

        <input
          placeholder="Confirm Password"
          className="loginInput"
          type="password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleInputs}
          required
        />
        <span className="passwordIcon">&#128065;</span>

        <button type="submit" className="loginButton">Signup</button>
        <a href="/" className="loginRegisterButton">
          Already have an Account
        </a>
      </form>
    </div>
  );
}

export default Register
