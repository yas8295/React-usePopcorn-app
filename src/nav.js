import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Nav({ found, setSearchMovie }) {
  const focus = useRef(null);

  useEffect(function () {
    focus.current.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-200%" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ type: "spring", duration: 3 }}
      className="nave m-md-5 px-5 d-flex flex-column flex-sm-row justify-content-md-between justify-content-center align-items-center py-4 flex-wrap gap-5"
      style={{
        backgroundColor: "#5a38c1",
        borderRadius: "10px",
      }}
    >
      <a
        href="index.html"
        className="m-0 text-center"
        style={{
          fontSize: "26px",
          fontWeight: "500",
          color: "white",
          textDecoration: "none",
        }}
      >
        <span style={{ fontSize: "35px" }}>🍿</span> usePopcorn
      </a>
      <div
        className="col-sm-4 col-12 flex-grow-1 flex-md-grow-0"
        style={{ position: "relative" }}
      >
        <input
          onChange={(e) => setSearchMovie(e.target.value)}
          className="search align-self-center p-4 py-3 w-100"
          style={{
            backgroundColor: "rgb(123 84 241)",
            border: "none",
            borderRadius: "7px",
            boxShadow: "0px 5px 10px 0px #00000047",
            fontSize: "18px",
            fontWeight: "500",
            color: "gainsboro",
          }}
          type="text"
          placeholder="Search Movies..."
          ref={focus}
        />
        <i
          className="fa-solid fa-magnifying-glass position-absolute"
          style={{
            right: "20px",
            top: "50%",
            translate: "0 -50%",
            fontSize: "17px",
            color: "gainsboro",
          }}
        ></i>
      </div>
      <h1
        className="m-0"
        style={{ fontSize: "19px", fontWeight: "400", color: "gainsboro" }}
      >
        Found <b>{found}</b> results
      </h1>
    </motion.div>
  );
}
