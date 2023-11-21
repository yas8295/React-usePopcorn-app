import { useEffect, useState } from "react";

const key = "764e426e";

export default function useFetchDetails(activeMovie) {
  const [activeMovieDetails, setActiveMovieDeails] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(
    function () {
      async function movieDetails() {
        try {
          setLoadingDetails(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&i=${activeMovie.imdbID}`
          );
          const data = await res.json();
          setActiveMovieDeails(data);
          setLoadingDetails(false);
        } catch {}
      }
      movieDetails();
    },
    [activeMovie]
  );

  return { activeMovieDetails, loadingDetails };
}
