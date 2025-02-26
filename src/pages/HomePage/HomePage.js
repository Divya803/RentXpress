// src/pages/HomePage/HomePage.js
import React from "react";
import HomeNavigationBar from "../../components/NavigationBar/HomeNavigationBar"; // Correct path
import "./HomePage.css"; // Import CSS for styling
import Car from "../../assets/Car.png";
import Button from "../../components/Button/Button";
import { Margin } from "@mui/icons-material";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <HomeNavigationBar />
      <div className="home-content">
        <div className="left-section">
        <div className="heading">ELEVATE YOUR RIDE</div>
        <div className="description">Welcome to RentXpress. Your trusted partner for convenient and hassle-free vehicle rentals.
           Explore our wide range of vehicles and enjoy a seamless booking experience, whether you're traveling for business or leisure!</div>
           <div className="btn"><Button value="Login" style={{ fontSize: "16px", width:"100px"}} /></div>
        </div>
        <div className="right-section"></div>
        <img src={Car} className="car-img" alt="Car"/>
      </div>
    </div>
  );
};

export default HomePage;
