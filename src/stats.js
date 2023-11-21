export default function Stats({ watchedMovie }) {
  return (
    <div
      className="stats p-5 d-flex flex-column gap-5"
      style={{
        backgroundColor: "rgb(92 65 165)",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        zIndex: "1",
        transition: "1s",
      }}
    >
      <h1 className="m-0" style={{ fontSize: "18px" }}>
        MOVIES YOU WATCHED
      </h1>
      <div className="d-flex gap-5 justify-content-between flex-wrap">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <p className="m-0" style={{ fontSize: "18px" }}>
            📺
          </p>
          <p className="m-0" style={{ fontSize: "18px" }}>
            {watchedMovie.length} movies
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <p className="m-0" style={{ fontSize: "18px" }}>
            ⭐️
          </p>
          <p className="m-0" style={{ fontSize: "18px" }}>
            {watchedMovie.slice().length > 0
              ? (
                  [...watchedMovie]
                    .slice()
                    .map((m) => Number(m.imdbRating))
                    .reduce((acc, cur) => Number(acc + cur)) /
                  watchedMovie.length
                ).toFixed(2)
              : 0}
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <p className="m-0" style={{ fontSize: "18px" }}>
            🌟
          </p>
          <p className="m-0" style={{ fontSize: "18px" }}>
            {watchedMovie.slice().length > 0
              ? (
                  [...watchedMovie]
                    .slice()
                    .map((m) => m.userRate)
                    .reduce((acc, cur) => acc + cur) / watchedMovie.length
                ).toFixed(2)
              : 0}
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <p className="m-0" style={{ fontSize: "18px" }}>
            ⏳
          </p>
          <p className="m-0" style={{ fontSize: "18px" }}>
            {watchedMovie.slice().length > 0
              ? Math.round(
                  [...watchedMovie]
                    .slice()
                    .map((m) => Number(m.Runtime.split(" ").at(0)))
                    .reduce((acc, cur) => Number(acc + cur)) /
                    watchedMovie.length
                )
              : 0}{" "}
            min
          </p>
        </div>
      </div>
    </div>
  );
}
