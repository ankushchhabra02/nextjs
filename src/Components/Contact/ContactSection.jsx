// components/Contact.js

import React from "react";
import "./Contact.css"; // Import the CSS for styling

const Contact = () => {
  return (
    <div className="all">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Feel free to reach out to us using the
          contact information below.
        </p>
        <div className="contact-info">
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Grocery Street, City, State, Zip</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
