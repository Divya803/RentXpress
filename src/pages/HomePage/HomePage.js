// src/pages/HomePage/HomePage.js
import React from "react";
import HomeNavigationBar from "../../components/NavigationBar/HomeNavigationBar"; // Correct path
import "./HomePage.css"; // Import CSS for styling
import Car from "../../assets/Car.png";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <HomeNavigationBar />
      

      <div className="home-content">
        <div className="left-section">
        <div className="heading">ELEVATE YOUR RIDE</div>
        </div>
        <div className="right-section"></div>
        <img src={Car} className="car-img" alt="Car"/>
      </div>
    </div>
  );
};

export default HomePage;
