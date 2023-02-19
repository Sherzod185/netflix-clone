import React from "react";
import "./films.css";
import { useState, useEffect } from "react";
import axios from "../baza/axios";
import sorov from "../baza/sorov";
import YouTube from "react-youtube";
import { Tooltip } from "@mui/material";
const Films = ({ title, movie_request, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const fetchDatas = async () => {
      const respons = await axios.get(movie_request);
      setMovies(respons.data.results);
    };
    fetchDatas();
  }, [movie_request]);

  const fetchTrailer = async (movie) => {
    await axios
      .get("/movie/" + movie?.id.toString() + sorov.trailerQuery)
      .then((respons) => {
        setTrailerUrl(respons.data.results[0]?.key);
      })
      .catch((error) => console.log(error));
  };
const handelClick =(movie)=>{
  if(trailerUrl){
    setTrailerUrl("")
  }else{
    fetchTrailer(movie)
  }
}
const options={
playerVars:{
  autoplay:1,
},
}
  return (
    <div className="filmsCategory">
      <h3>{title}</h3>
      <div className="films">
        {movies?.map((movie) => (
          <Tooltip
            title={movie?.original_name || movie?.original_title}
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="img"
              onClick={() => handelClick(movie)}
              loading="lazy"
              className={`film ${isLargeRow && "filmPosterLarge"}`}
            />
          </Tooltip>
        ))}
      </div>
      {trailerUrl && (
        <YouTube className="ytPlayer" videoId={trailerUrl} options={options} />
      )}
    </div>
  );
};

export default Films;
