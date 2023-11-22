import { useState, useEffect } from "react";
import Button from "./button";
export default "./moviesList.js";

export function Box({ children, dir }) {
  const [showList, setShowList] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      [...this.document.querySelectorAll(".movie")].forEach(
        (m) => (m.style.translate = "0")
      );
      [...this.document.querySelectorAll(".movie")].forEach(
        (m) => (m.style.opacity = "1")
      );
    }, 500);
  });

  return (
    <div
      className={`box ${dir} d-flex overflow-auto pt-0 flex-column py-5 position-relative col-lg-5 flex-grow-1 col-12`}
      style={{
        backgroundColor: "#2b3035",
        borderRadius: "10px",
        translate: `${window.innerWidth > 800 ? "" : "0"}`,
        borderLeft: "3px solid #512c99",
        borderRight: "3px solid #512c99",
      }}
    >
      <Button showList={showList} setShowList={setShowList}></Button>
      {showList ? children : null}
    </div>
  );
}

export function Movie({ num, children, movie, addMovie }) {
  function isOpen() {
    addMovie(movie);
  }

  const trans = {
    translate: `0 -${Number(num) * 100}%`,
    transitionDelay: `${num < 10 ? "0." : ""}${String(num).at(0)}s`,
    zIndex: `-${num}`,
    backgroundColor: `#2b3035`,
    minHeight: "140px",
  };

  return (
    <div
      onClick={() => isOpen()}
      className="movie px-sm-5 py-sm-4 p-4 d-flex gap-5 align-items-center"
      style={trans}
    >
      {children}
    </div>
  );
}
