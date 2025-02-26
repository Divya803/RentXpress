import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import vehicles from "../../data/vehicles.json"; // Import the JSON file
import "./Vehicles.css";

const Vehicles = () => {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <NavigationBar />
      <header className="hero">
        <div className="hero-content">
          <h2>Find Your Perfect Ride</h2>
          <h1>Rent a Vehicle Hassle-Free</h1>
          <p>Discover the easiest way to rent a vehicle with our wide range of options, including compact cars, sedans, SUVs, and luxury models. Whether you're planning a road trip, need a reliable ride for business travel, or require a spacious vehicle for a family vacation, we have the perfect solution for you. Our hassle-free booking process ensures you can reserve your preferred vehicle in just a few clicks. Enjoy flexible rental plans, affordable pricing, and top-notch customer service. All our vehicles are regularly inspected and well-maintained to provide a smooth and safe driving experience. With comprehensive insurance options and 24/7 support, you can drive with peace of mind. Book your vehicle today and experience convenience, comfort, and reliability like never before.</p>
        </div>

      </header>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />

        <select
          className="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Car">Car</option>
          <option value="Van">Van</option>
          <option value="Bus">Bus</option>
          <option value="Motorbike">Motorbike</option>
          <option value="Threewheel">Threewheel</option>
          <option value="Lorry">Lorry</option>
        </select>
      </div>

      <div className="vehicle-list">
        {vehicles
          .filter((vehicle) => category === "All" || vehicle.category === category)
          .map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <img src={vehicle.image} alt={vehicle.name} className="vehicle-img" />
              <h3>{vehicle.name}</h3>
              <p>{vehicle.price}</p>
              <button className="rent-button">RENT</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Vehicles;
