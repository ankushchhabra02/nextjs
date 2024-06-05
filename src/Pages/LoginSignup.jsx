import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {isLogin ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <div className="loginsignup-fields">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          {!isLogin && (
            <>
              <input type="text" placeholder="Your Name" />
              <input type="password" placeholder="Confirm Password" />
            </>
          )}
        </div>
        <button>{isLogin ? "Login" : "Sign Up"}</button>
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Sign Up here" : "Login here"}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
