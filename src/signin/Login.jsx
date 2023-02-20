import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./login.css"
import { useState } from "react";
import axios from "../baza/axios";
import sorov from "../baza/sorov";
const Login = ({ handel }) => {
   const [movie, setMovie] = useState([]);
  useEffect(()=>{
    if (localStorage.length && window.location.path === undefined) {
      window.location.replace("./main");
    }
        const fetchMovie = async () => {
          const respons = await axios.get(sorov.fetchNetflixOriginals);
          setMovie(
            respons.data.results[
              Math.floor(Math.random() * respons.data.results.length)
            ]
          );
        };
        fetchMovie();
  },[])
     
   
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <img src={logo} alt="logo" loading="lazy" /> <br />
      <Link to="/main" onClick={() => handel()}>
        Sign in with Google
      </Link>
    </div>
  );
};

export default Login;
