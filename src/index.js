import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./bootstrap.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="d-flex justify-content-center flex-column">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="d-flex align-items-center flex-column mb-5">
      <h1
        className="m-0 mb-5 text-center"
        style={{
          fontSize: "50px",
          letterSpacing: "4.5px",
          color: "#edc84b",
          fontWeight: "300",
        }}
      >
        -FAST REACT PIZZA CO.-
      </h1>
      <h1
        className="py-4"
        style={{
          border: "2px solid black",
          borderColor: "black transparent",
          width: "fit-content",
          fontSize: "25px",
        }}
      >
        OUR MENU
      </h1>
      <p
        style={{
          fontSize: "16px",
          textAlign: "center",
          letterSpacing: "2.5px",
          lineHeight: "1.5",
        }}
      >
        Authentic Italian cuisine. 6 creative dishes to choose from. All from{" "}
        <br />
        our stone oven, all organic, all delicious.
      </p>
    </div>
  );
}

function Menu() {
  return (
    <div
      className="d-flex m-auto gap-5 flex-wrap justify-content-center align-items-start"
      style={{ maxWidth: "800px" }}
    >
      {pizzaData.map((pizza) => (
        <div
          key={pizza.name}
          className="d-flex gap-5 col-12 col-md-5 flex-grow-1 align-items-center"
        >
          <img
            className={pizza.soldOut === true ? "sold-out" : null}
            style={{ width: "120px" }}
            src={pizza.photoName}
          ></img>
          <div
            className={("w-100", pizza.soldOut === true ? "sold-out" : null)}
          >
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "300",
                letterSpacing: "2.5px",
              }}
            >
              {pizza.name}
            </h1>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "2.5px",
                lineHeight: "1.5",
                fontStyle: "italic",
                color: "gray",
              }}
            >
              {pizza.ingredients}
            </p>
            <h2 style={{ fontWeight: "300" }}>
              {pizza.soldOut === true ? "SOLD OUT" : pizza.price}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  const time = new Date().getHours();
  const closedHours = 23;
  const openHours = 13;
  const open = time >= openHours && time <= closedHours;

  return open ? (
    <div className="d-flex flex-column align-items-center">
      <p
        className="mt-5"
        style={{
          fontSize: "14px",
          textAlign: "center",
          letterSpacing: "2.5px",
          lineHeight: "1.5",
        }}
      >
        We're open from 13:00 to 23:00. Come visit us or order online.
      </p>
      <button
        className="px-5 mt-3 py-4 border"
        style={{
          fontSize: "15px",
          fontWeight: "600",
          border: "none",
          backgroundColor: " #edc84b",
        }}
      >
        Oreder
      </button>
    </div>
  ) : null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
