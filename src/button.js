export default function Button({ showList, setShowList, children }) {
  return (
    <button
      onClick={() => setShowList(showList ? false : true)}
      className="position-absolute d-flex justify-content-center align-items-center"
      style={{
        top: "15px",
        right: "20px",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "#141313",
        fontSize: "12px",
        border: "1px solid #ad7eff",
        zIndex: 99,
      }}
    >
      <h1 style={{ translate: "0px -3px", fontWeight: "300" }}>
        {showList ? "-" : "+"}
      </h1>
      {children}
    </button>
  );
}
