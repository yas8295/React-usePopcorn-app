import { useState, useEffect } from "react";
import Nav from "./nav";
import { Box, Movie } from "./moviesList";
import Loading from "./loading";
import ErrorMessage from "./errorMessage";
import ActiveMovie from "./activeMovie";
import Stats from "./stats";
import useFetchMovies from "./fetchMovies";
import useFetchDetails from "./fetchDetails";

export default function App() {
  let data = JSON.parse(localStorage.getItem("watchedList"));
  if (!data) {
    data = [];
  }

  const [activeMovie, setActiveMovie] = useState(false);
  const [watchedMovie, setWatchedMovie] = useState(data);
  const [searchMovie, setSearchMovie] = useState("");
  const { errorMessage, loading, movieList } = useFetchMovies(searchMovie);
  const { activeMovieDetails, loadingDetails } = useFetchDetails(activeMovie);

  function addMovie(movie) {
    setActiveMovie((m) => (m === movie ? false : movie));
  }

  useEffect(
    function () {
      document.addEventListener("keydown", function (e) {
        if (e.code === "Escape") setActiveMovie(false);
      });
    },
    [activeMovie]
  );

  https: localStorage.setItem("watchedList", JSON.stringify(watchedMovie));

  const movieRate = data.slice().find((m) => m.imdbID === activeMovie.imdbID);

  function addWatchedList(rate) {
    setWatchedMovie((l) => [...l, activeMovie]);
    setWatchedMovie((l) =>
      l.map((m) =>
        m === activeMovie
          ? {
              ...m,
              userRate: rate,
              watched: true,
              Runtime: activeMovieDetails.Runtime,
              imdbRating: activeMovieDetails.imdbRating,
            }
          : m
      )
    );
    setActiveMovie(false);
  }

  function remove(movie, e) {
    setWatchedMovie((l) => l.filter((m) => m !== movie));
    e.stopPropagation();
  }

  function back() {
    setActiveMovie(false);
  }

  return (
    <div className="overflow-hidden">
      <Nav
        found={movieList.length}
        setSearchMovie={setSearchMovie}
        searchMovie={searchMovie}
      ></Nav>
      <div className="content d-flex gap-5 px-md-5 p-md-0 justify-content-center flex-wrap">
        <Box dir={"right"}>
          {loading ? (
            <Loading></Loading>
          ) : errorMessage ? (
            <ErrorMessage errorMessage={errorMessage}></ErrorMessage>
          ) : (
            movieList.map((m, i) => (
              <Movie
                num={i + 1}
                movie={m}
                key={m.imdbID}
                addMovie={addMovie}
                setActiveMovie={setActiveMovie}
              >
                <img
                  className="text-center"
                  style={{
                    width: "68px",
                    Height: "100%",
                    fontSize: "13px",
                    borderRadius: "10px",
                    border: "1.5px solid #7d54dc",
                  }}
                  src={m.Poster}
                  alt="not Found ❌"
                />
                <div className="d-flex flex-column gap-3">
                  <h1 className="m-0" style={{ fontSize: "19px" }}>
                    {m.Title}
                  </h1>
                  <p className="m-0" style={{ fontSize: "17px" }}>
                    🎥 {m.Year}
                  </p>
                </div>
              </Movie>
            ))
          )}
        </Box>
        <Box dir={"left"}>
          {activeMovie ? null : <Stats watchedMovie={watchedMovie}></Stats>}
          {activeMovie
            ? null
            : watchedMovie.map((m, i) => (
                <Movie num={i + 1} movie={m} key={m.imdbID} addMovie={addMovie}>
                  <img
                    style={{
                      width: "68px",
                      Height: "100%",
                      fontSize: "13px",
                      borderRadius: "10px",
                      border: "1.5px solid #7d54dc",
                    }}
                    src={m.Poster}
                    alt=""
                  />
                  <div className="position-relative d-flex flex-column gap-3 flex-grow-1">
                    <h1 className="m-0" style={{ fontSize: "19px" }}>
                      {m.Title}
                    </h1>
                    <div className="d-flex gap-sm-5 gap-2 flex-wrap">
                      <p className="m-0" style={{ fontSize: "17px" }}>
                        ⭐️{m.imdbRating}
                      </p>
                      <p className="m-0" style={{ fontSize: "17px" }}>
                        🌟{m.userRate}
                      </p>
                      <p className="m-0" style={{ fontSize: "17px" }}>
                        ⏳ {m.Runtime}
                      </p>
                      <button
                        onClick={(e) => remove(m, e)}
                        className="position-absolute d-flex justify-content-center align-items-center"
                        style={{
                          top: "-10px",
                          right: "0px",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "transparent",
                          fontSize: "5px",
                          boxShadow: "0px 0px 13px 1px black",
                          border: "none",
                        }}
                      >
                        <h1
                          className="position-absolute"
                          style={{
                            translate: "-50% -100%",
                            fontWeight: "300",
                            top: "50%",
                            left: "50%",
                          }}
                        >
                          ❌
                        </h1>
                      </button>
                    </div>
                  </div>
                </Movie>
              ))}
          {activeMovie && !loadingDetails ? (
            <ActiveMovie
              activeMovieDetails={activeMovieDetails}
              watchedMovie={watchedMovie}
              activeMovie={activeMovie}
              movieRate={movieRate}
              addWatchedList={addWatchedList}
              back={back}
            ></ActiveMovie>
          ) : (
            loadingDetails && activeMovie && <Loading></Loading>
          )}
        </Box>
      </div>
    </div>
  );
}
