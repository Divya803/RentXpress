import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import person icon
import "./NavigationBar.css"; 

const HomeNavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          {/* <img src={logo} alt="App Logo" className="logo-img" /> */}
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/vehicles" className="nav-link">Vehicles</Link></li>
          <li><Link to="/verify-account" className="nav-link">Verify Account</Link></li>
        </ul>
      </div>

      {/* Person Icon (Login) */}
      <div className="nav-button">
        <Link to="/user-profile" className="nav-icon">
          <FaUser size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavigationBar;
