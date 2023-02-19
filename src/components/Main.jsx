import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Bonner from "./Bonner";
import Films from "./Films";
import sorov from "../baza/sorov";
const Main = ({ user }) => {
  let bgmain = React.useRef();
  const login = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (!localStorage.length) {
      bgmain.current.style.display = "none";
    }
  }, []);

  return (
    <div className="main" ref={bgmain}>
      <Navbar user={user} login={login} />
      <Bonner />
      <Films
        isLargeRow
        title={"NETFLIX ORIGINALS"}
        movie_request={sorov.fetchNetflixOriginals}
      />
      <Films
        isLargeRow
        title={"Trending now"}
        movie_request={sorov.fetchTrending}
      />
      <Films title={"Top Rated"} movie_request={sorov.fetchTopRated} />
      <Films title={"Action Movie"} movie_request={sorov.fetchActionMovies} />
      <Films title={"Comedy Movie"} movie_request={sorov.fetchComedyMovies} />
      <Films title={"Horror Movie"} movie_request={sorov.fetchHorrorMovies} />
      <Films title={"Roman Movie"} movie_request={sorov.fetchRomanceMovies} />
      <Films title={"Documentaries"} movie_request={sorov.fetchDocumentaries} />
    </div>
  );
};

export default Main;
