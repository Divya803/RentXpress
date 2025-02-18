import React from "react";
import "./Signup.css";
// import logo from "../../assets/Rentxpress.png"; // Add your logo here
import CarImage from "../../assets/login car.png"; // Add your car image here

const Signup = () => {
  return (
    <div className="signup-container" >
      {/* Left Section */}
      <div className="signup-left">
        <h1>Welcome to RentXpress</h1>
        <p>Rent vehicle with safe</p>
        <img src={CarImage} alt="Car" className="car-image" />
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-box">
          {/* <img src={logo} alt="RentXpress Logo" className="signup-logo" /> */}
          <h2>Sign up now</h2>
          <form>
            <div className="name-fields">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="email" placeholder="Email address" required />
            <input type="tel" placeholder="Phone number" required />
            <input type="password" placeholder="Password" required />
            <p className="password-info">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
            <button type="submit" className="signup-btn">Sign up</button>
          </form>
          <p className="login-text">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
