import React, { useState } from "react";
import "./RentVehicle.css";
import Button from "../../components/Button/Button";
import Model from "../../components/Modal/Modal";

const RentVehicle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rentalType, setRentalType] = useState("");

  const openModal = (type) => {
    setRentalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="rent-card">
        <div className="details">
          <h2>Toyota Axio</h2>
          <p>
            The Toyota Axio is a compact sedan that blends reliability with
            comfort. Known for its smooth ride, efficient fuel consumption, and
            excellent safety features, the Toyota Axio is the ideal choice for
            both city driving and longer journeys. Its spacious interior and
            user-friendly features make it a great option for all your travel
            needs.
          </p>
          <p><strong>Without Driver Rental:</strong> LKR 8,000</p>
          <p><strong>With Driver Rental:</strong> LKR 11,000</p>

          <div className="date-inputs">
            <div>
              <label htmlFor="pickup-date">Pick Up Date</label>
              <input type="date" id="pickup-date" />
            </div>
            <div>
              <label htmlFor="end-date">End Date</label>
              <input type="date" id="end-date" />
            </div>
          </div>

          <div className="buttons">
            <Button value="Rent with driver" onClick={() => openModal("With Driver")} />
            <Button value="Rent without driver" onClick={() => openModal("Without Driver")} />
          </div>
        </div>

        <div className="image-container">
          {/* Use an image URL directly */}
          <img src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/IMG-20240118-WA0001.jpg" alt="Toyota Axio" />
        </div>
      </div>

      {/* Modal */}
      <Model open={isModalOpen} close={setIsModalOpen}>
        <h2><center>{rentalType} Rental</center></h2>
        <p> Duration: 3 days</p>
        <p> Total payment: LKR 24,000</p> {/* Adjust based on rental type */}
        <p>Confirm your rental details for the {rentalType} option.</p>
        <div className="modal-buttons">
          <Button value="Confirm" onClick={() => setIsModalOpen(false)} style={{ width: "100px" }} />
          <Button value="Cancel" onClick={() => setIsModalOpen(false)} red style={{ width: "100px" }} />
        </div>
      </Model>
    </div>
  );
};

export default RentVehicle;
