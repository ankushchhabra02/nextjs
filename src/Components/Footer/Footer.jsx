import React from "react";
import "./Footer.css";
import logo from "../Assets/Images/logo.png";

const Footer = () => (
  <footer className="footer">
    <div className="space"></div>
    <div className="subscription">
      <img src={logo} alt="" />
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>
    <div className="contact">
      <h2>ULTIMATE</h2>
      <p>Phone: +1 111 111 1111</p>
      <p>Email: hello@morbius.com</p>
      <p>Address: 1234 Street Name, CA 99999</p>
      <i class="fa-brands fa-twitter" />
      <i class="fa-brands fa-instagram" />
      <i class="fa-brands fa-facebook" />
    </div>
    <div className="links">
      <h2>RECENT NEWS</h2>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Get in Touch</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
