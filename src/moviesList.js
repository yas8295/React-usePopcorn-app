import { useState } from "react";
import Button from "./button";
import { motion } from "framer-motion";
export default "./moviesList.js";

export function Box({ children, dir }) {
  const [showList, setShowList] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, x: `${dir === "left" ? "200%" : "-200%"}` }}
      animate={{ opacity: 1, x: "0" }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`box d-flex pt-0 flex-column py-5 position-relative col-lg-5 flex-grow-1 col-12`}
      style={{
        backgroundColor: "#2b3035",
        borderRadius: "10px",
        borderLeft: "3px solid #512c99",
        borderRight: "3px solid #512c99",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Button showList={showList} setShowList={setShowList}></Button>
      {showList ? children : null}
    </motion.div>
  );
}

export function Movie({ num, children, movie, addMovie }) {
  function isOpen() {
    addMovie(movie);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: `-${Number(num) * 100}%` }}
      animate={{ opacity: 1, y: "0" }}
      transition={{
        type: "spring",
        bounce: 1,
        delay: `${num < 10 ? "0." : ""}${String(num).at(0)}`,
      }}
      onClick={() => isOpen()}
      className="movie px-sm-5 py-sm-4 p-4 d-flex gap-5 align-items-center"
      style={{
        minHeight: "140px",
        backgroundColor: `#2b3035`,
        zIndex: `-${num}`,
      }}
    >
      {children}
    </motion.div>
  );
}
