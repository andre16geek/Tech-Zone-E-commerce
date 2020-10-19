import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="loginLogo" src="./Tech Zone.png" alt="logo"></img>
      </Link>
      <div className="sign">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="loginSignIn">Sign In</button>
        </form>
        <button className="loginSignUp">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
