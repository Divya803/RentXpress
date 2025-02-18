import React from "react";
import "./RentVehicle.css";
import Image from "../../assets/yellow car.png";
import Button from "../../components/Button/Button";

const RentVehicle = () => {
  return (
    <div className="container">
      <div className="rent-card">
        <div className="details">
          <h2>NIO ET5</h2>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat.
          </p>
          <p><strong>Without Driver Rental:</strong> $70,000</p>
          <p><strong>With Driver Rental:</strong> $80,000</p>
          <div className="date-inputs">
            <input type="date" placeholder="Pick Up Date" />
            <input type="date" placeholder="End Date" />
          </div>
          <div className="buttons">
            <Button value="RENT WITH DRIVER"/>
            <Button value="RENT WITH DRIVER"/>
          </div>
        </div>
        <div className="image-container">
        <img src={Image} alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default RentVehicle;
