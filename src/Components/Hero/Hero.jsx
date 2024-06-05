import React from "react";
import "./Hero.css";
import baigan from "../Assets/Images/hi.png";
import fruits from "../Assets/Images/fruits.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="baigan-icon">
            <p>new</p>
            <img src={baigan} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="button-container">
          <button className="shop-now-button">
            <span className="button-text">Shop Now</span>
            <i className="cart-icon fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={fruits} alt="" />
      </div>
    </div>
  );
};

export default Hero;
