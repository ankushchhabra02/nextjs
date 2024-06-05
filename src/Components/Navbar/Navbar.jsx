import React, { useState } from "react";
import logo from "../Assets/Images/logo.png";
import cart from "../Assets/Images/cart.png";
import profile1 from "../Assets/Images/profile1.jpeg";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const [menu, setMenu] = useState("null");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {menu === "logo" ? <hr /> : <></>}
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("Everything");
            }}
          >
            <Link className="link" to="/Everything">
              Everything
            </Link>
            {menu === "Everything" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Groceries");
            }}
          >
            <Link className="link" to="/Groceries">
              Groceries
            </Link>
            {menu === "Groceries" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Juices");
            }}
          >
            <Link className="link" to="/Juices">
              Juice
            </Link>
            {menu === "Juices" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      <ul className="nav-login-cart">
        <li
          onClick={() => {
            setMenu("About");
          }}
        >
          <Link className="link" to="/About">
            About
          </Link>
          {menu === "About" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link className="link" to="/Contact">
            Contact
          </Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>
        <li className="cartPrice">
          <Link className="link" to="/Cart">
            <li
              style={{
                color: "#FF4141",
                marginTop: "5px",
                marginRight: "15px",
              }}
            >
              ₹0
            </li>

            <img src={cart} alt="" />
            <div className="nav-cart-count">0</div>
          </Link>
        </li>
        <Link className="link" to="/LoginSignup">
          <img className="profile" src={profile1} alt="" />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
