const standard = {
  fontSize: "16px",
  WebkitTextStroke: "0.7px rgb(252 213 63)",
  color: "transparent",
  cursor: "pointer",
  transition: "0.3s",
};

const fill = {
  fontSize: "16px",
  color: "rgb(252 213 63)",
  cursor: "pointer",
  transition: "0.3s",
};

export default function Rating({
  setRate,
  rate,
  tempRate,
  setTempRate,
  fillRate,
  setFillRate,
}) {
  function setRating(rate) {
    setRate(rate);
    setFillRate(rate);
  }

  function mouse(rate) {
    setTempRate(rate);
  }

  return (
    <div className="d-flex flex-wrap mt-4 gap-3 align-items-center">
      <div className="d-flex gap-2 flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <Div
            key={i}
            onClick={setRating}
            rate={i + 1}
            fillRate={tempRate ? tempRate >= i + 1 : fillRate >= i + 1}
            onMouseEnter={mouse}
            onMouseLeave={mouse}
          ></Div>
        ))}
      </div>
      <h2
        className="m-0"
        style={{ fontSize: "17px", color: "rgb(252 213 63)" }}
      >
        <span className="me-2"></span> {tempRate || rate || ""}
      </h2>
    </div>
  );
}

function Div({ rate, onClick, fillRate, onMouseEnter, onMouseLeave }) {
  return (
    <i
      className="fa-solid fa-star"
      style={fillRate ? fill : standard}
      onClick={() => onClick(rate)}
      onMouseEnter={() => onMouseEnter(rate)}
      onMouseLeave={() => onMouseLeave(0)}
    ></i>
  );
}
