import React, { useEffect, useState } from "react";
import axios from "../baza/axios";
import sorov from "../baza/sorov";
import "./bonner.css"
const Bonner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const respons = await axios.get(sorov.fetchNetflixOriginals);
      setMovie(respons.data.results[
        Math.floor(Math.random()*respons.data.results.length)
      ]);
    };
    fetchMovie();
  },[]);
  return (
    <header style={{
        
      
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }
      }>
      
      <div className="mainBlock">
        <div className="bannerContent">
          <h2 className="bannertitle">{movie.original_name}</h2>
          <div className="buttons">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </div>
          <p className="moviedes">{movie.overview}</p>
        </div>
      </div>
    </header>
  );
};

export default Bonner;
