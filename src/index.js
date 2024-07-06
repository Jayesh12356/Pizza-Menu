import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    soldOut: false,
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
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="header">J's PIZZA</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const NumPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {NumPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza PizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back Later :)</p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
        soldOut={false}
      /> */}
    </main>
  );
}

function Pizza({ PizzaObj }) {
  return (
    <li className={`pizza ${PizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={PizzaObj.photoName} alt={PizzaObj.name} />

      <div>
        <h3>{PizzaObj.name}</h3>
        <p>{PizzaObj.ingredients}</p>
        <span>{PizzaObj.soldOut ? "SOLD OUT" : PizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 0;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order close={close} open={open} />
      ) : (
        <p>
          We're happy to welcome you between {open}:00 and {close}:00
        </p>
      )}
    </footer>
  );
}

function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        We're open from {open}:00 to {close}:00. Come Visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
