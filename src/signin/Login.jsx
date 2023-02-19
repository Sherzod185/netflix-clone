import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./login.css"
const Login = ({ handel }) => {
  useEffect(()=>{
    if (localStorage.length && window.location.path === undefined) {
      window.location.replace("./main");
    }
  },[])
  return (
    <div className="login">
      <img src={logo} alt="logo" loading="lazy" /> <br />
      <Link to="/main" onClick={() => handel()}>
        Sign in with Google
      </Link>
    </div>
  );
};

export default Login;
