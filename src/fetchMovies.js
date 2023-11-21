import { useEffect, useState } from "react";

const key = "764e426e";

export default function useFetchMovies(searchMovie) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setLoading(true);
          setErrorMessage("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${key}&s=${searchMovie}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("⛔ Somthing Wrong with Network...");
          else setErrorMessage(false);

          const data = await res.json();
          if (data.Response === "False") throw new Error("⛔ Movie not found");
          else setErrorMessage(false);

          setMovieList(data.Search);
        } catch (err) {
          setMovieList([]);
          if (err.name !== "AbortError") setErrorMessage(err.message);
        } finally {
          setLoading(false);
        }
      }
      if (searchMovie.length < 2) {
        setLoading(false);
        setErrorMessage("");
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [searchMovie]
  );

  return { errorMessage, loading, movieList };
}
