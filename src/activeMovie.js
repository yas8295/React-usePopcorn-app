import { useState, useEffect } from "react";
import Rating from "./rating";

export default function ActiveMovie({
  activeMovieDetails,
  watchedMovie,
  activeMovie,
  movieRate,
  addWatchedList,
  back,
}) {
  const [rate, setRate] = useState(0);
  const [tempRate, setTempRate] = useState(0);
  const [fillRate, setFillRate] = useState(0);

  useEffect(
    function () {
      if (!activeMovie) return;
      document.title = `Movie | ${activeMovie.Title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [activeMovie]
  );

  function animation(e) {
    e.style.opacity = "1";
    e.style.translate = "0";
  }

  useEffect(function () {
    setTimeout(function () {
      [...this.document.querySelectorAll(".active-movie")].forEach((e) =>
        animation(e)
      );
    }, 500);
  });

  return (
    <>
      <div
        className="active-movie d-flex gap-sm-5 flex-wrap"
        style={{
          backgroundColor: "rgb(77 57 131)",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          translate: "-100%",
          opacity: "0",
          transition: "1s",
        }}
      >
        <img
          style={{
            minWidth: "150px",
            maxHeight: "100%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
          className="col-4 flex-grow-1"
          src={activeMovieDetails.Poster}
          alt=""
        />
        <div className="d-flex flex-column col-7 p-4 gap-4 flex-grow-1 justify-content-between">
          <div>
            <h1 className="m-0" style={{ fontSize: "23px" }}>
              {activeMovieDetails.Title}
            </h1>
            <p className="mt-2 mb-3" style={{ fontSize: "17px" }}>
              {activeMovieDetails.Country}
            </p>
            {[...watchedMovie].find((m) => m.imdbID === activeMovie.imdbID) ? (
              <h1 className="mt-4" style={{ fontSize: "20px" }}>
                You rated this movie ⭐️
                {movieRate.userRate}.0
              </h1>
            ) : (
              <Rating
                rate={rate}
                setRate={setRate}
                setTempRate={setTempRate}
                tempRate={tempRate}
                setFillRate={setFillRate}
                fillRate={fillRate}
              ></Rating>
            )}
          </div>
          {rate ? (
            <button
              onClick={() => addWatchedList(rate)}
              className="addToList align-self-center col-7 text-center"
            >
              + Add To List
            </button>
          ) : null}
          <div className="d-flex flex-column gap-4 pb-4">
            <p className="m-0" style={{ fontSize: "17px" }}>
              Date Release : {activeMovieDetails.Released}
            </p>
            <p className="m-0" style={{ fontSize: "17px" }}>
              Length : {activeMovieDetails.Runtime}
            </p>
            <p className="m-0" style={{ fontSize: "17px" }}>
              Genre : {activeMovieDetails.Genre}
            </p>
            <p className="m-0" style={{ fontSize: "17px" }}>
              ⭐️ {activeMovieDetails.imdbRating} IMDb rating
            </p>
          </div>
        </div>
        <h1
          onClick={back}
          className="position-absolute m-0"
          style={{
            fontSize: "33px",
            left: "10px",
            top: "3px",
            cursor: "pointer",
          }}
        >
          <i
            className="fa-solid fa-circle-left"
            style={{ color: "#ffffff" }}
          ></i>
        </h1>
      </div>
      <div
        className="active-movie"
        style={{
          translate: "-100%",
          opacity: "0",
          transition: "1s",
        }}
      >
        <p
          className="px-5 mt-5 pt-5"
          style={{ fontSize: "18px", lineHeight: "1.6" }}
        >
          {activeMovieDetails.Plot}
        </p>
        <p className="px-5 m-0" style={{ fontSize: "18px", lineHeight: "1.6" }}>
          <b>Actors</b> : {activeMovieDetails.Actors}
        </p>
        <p className="px-5 m-0" style={{ fontSize: "18px", lineHeight: "1.6" }}>
          <b>Director</b> : {activeMovieDetails.Director}
        </p>
      </div>
    </>
  );
}
