import React from "react";
import "./Offers.css";
import offers from "../Assets/Images/offers.png";

const Offers = () => {
  return (
    <div className="segment">
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers best for you</h1>
          <p>FIRST TIME USER DISCOUNT</p>
          <div className="button-container">
            <button className="shop-now-button">
              <span className="button-text">Shop Now</span>
              <i className="cart-icon fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div className="offers-right">
          <img src={offers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
