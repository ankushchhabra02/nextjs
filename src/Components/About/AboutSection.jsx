import React from "react";
import "./About.css";
import aboutbg from "../Assets/Images/aboutbg.png";

const About = () => {
  return (
    <div className="main">
      <div className="about-container">
        <img src={aboutbg} alt="" />
        <h2>About Our Grocery Shop</h2>
        <p>
          Welcome to our grocery store! We are committed to providing fresh and
          high-quality products to our customers.
        </p>
        <p>
          Our mission is to make grocery shopping a hassle-free experience by
          offering a wide range of products at affordable prices.
        </p>
        <p>Thank you for choosing us for your grocery needs.</p>
      </div>
    </div>
  );
};

export default About;
