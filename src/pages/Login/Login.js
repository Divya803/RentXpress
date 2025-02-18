import React, { useState } from "react";
import "./Login.css"; 
// import logo from "./logo.png"; 
import Image from "../../assets/login car.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <img src={Image} alt="Car" className="car-image" />
      <div className="login-box">
        {/* <img src={logo} alt="RentXpress Logo" className="login-logo" /> */}
        <h2>Log in</h2>
        <p className="signup-text">
          New to RentXpress? <a href="/signup">Sign up for free</a>
        </p>

        <form>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" required />
          </div>

          <div className="input-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "👁 Show"}
              </span>
            </div>
          </div>

          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="login-btn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
